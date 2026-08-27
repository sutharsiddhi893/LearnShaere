/* =========================================================
   MSc-IT • SEM 2 • Web Technology
   UNIT 1 — Fundamentals of Web Technology
            and Front-End Structure
========================================================= */

import {
  createTopic,
  heading,
  text,
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
   TOPIC 1 — Introduction to Web Technology
========================================================= */

const introToWebTechnology = createTopic(
    "introduction-to-web-technology",
    "Introduction to Web Technology",

    [
        definition(
            "Web Technology",
            "The collection of protocols, languages, tools and standards used to create, deliver and interact with content on the World Wide Web. It encompasses both the client side (what runs in the browser) and the server side (what runs on the web server)."
        ),

        text(
            "The World Wide Web (WWW) was invented by Tim Berners-Lee at CERN in 1989. He created the three foundational technologies that still power the web today: HTML (for structuring documents), HTTP (for transferring documents) and URLs (for addressing documents). The first website went live in 1991."
        ),

        heading("Internet versus World Wide Web"),

        table(
            ["Aspect", "Internet", "World Wide Web (WWW)"],
            [
                ["Definition", "A global network of interconnected computers", "A service that runs on the Internet for accessing hyperlinked documents"],
                ["Scope", "The infrastructure (hardware + protocols)", "One application of the Internet"],
                ["Protocol", "TCP/IP", "HTTP/HTTPS"],
                ["Invented", "1960s (ARPANET)", "1989 (Tim Berners-Lee)"],
                ["Other services", "Email (SMTP), FTP, Telnet, DNS, VoIP", "Web pages, web applications"],
                ["Analogy", "The road network", "The cars that travel on the roads"],
            ]
        ),

        heading("How the Web Works"),

        steps([
            "The user types a URL (e.g., https://www.example.com) in the browser.",
            "The browser sends a DNS query to resolve the domain name to an IP address.",
            "The browser establishes a TCP connection to the server (port 80 for HTTP, 443 for HTTPS).",
            "If HTTPS, a TLS handshake encrypts the connection.",
            "The browser sends an HTTP GET request for the requested resource.",
            "The web server processes the request and sends an HTTP response with the HTML content.",
            "The browser parses the HTML, requests additional resources (CSS, JS, images) and renders the page.",
        ]),

        code(
            `Client-Server Web Architecture:

  Browser (Client)                    Web Server
       │                                   │
       │── DNS Query ──→ DNS Server        │
       │←─ IP Address ─────────────────────│
       │                                   │
       │── TCP Handshake ─────────────────→│
       │── TLS Handshake (HTTPS) ─────────→│
       │── HTTP GET /index.html ──────────→│
       │←─ HTTP 200 OK + HTML ─────────────│
       │── HTTP GET /style.css ───────────→│
       │←─ CSS file ───────────────────────│
       │── HTTP GET /script.js ───────────→│
       │←─ JavaScript file ────────────────│
       │                                   │
       │  [Browser renders the page]       │`,
            "text",
            "How a web page is loaded"
        ),

        heading("Client-Side versus Server-Side"),

        table(
            ["Aspect", "Client-Side (Front-End)", "Server-Side (Back-End)"],
            [
                ["Runs on", "User's browser", "Web server"],
                ["Languages", "HTML, CSS, JavaScript", "Python, PHP, Java, Node.js, C#"],
                ["Purpose", "Presentation, interactivity, user experience", "Business logic, database access, authentication"],
                ["Visible to user?", "Yes (can view source)", "No (code stays on server)"],
                ["Examples", "React, Vue, Angular, vanilla JS", "Django, Express, Spring, Laravel"],
            ]
        ),

        heading("Key Web Protocols and Standards"),

        table(
            ["Technology", "Full Form", "Purpose"],
            [
                ["HTTP", "HyperText Transfer Protocol", "Transfers web pages between server and browser"],
                ["HTTPS", "HTTP Secure", "Encrypted HTTP using TLS/SSL"],
                ["HTML", "HyperText Markup Language", "Structures the content of web pages"],
                ["CSS", "Cascading Style Sheets", "Styles the appearance of web pages"],
                ["URL", "Uniform Resource Locator", "Address of a resource on the web"],
                ["URI", "Uniform Resource Identifier", "Generic identifier (URL is a type of URI)"],
                ["DNS", "Domain Name System", "Translates domain names to IP addresses"],
                ["W3C", "World Wide Web Consortium", "International body that develops web standards"],
            ]
        ),

        heading("URL Structure"),

        code(
            `https://www.example.com:443/path/page.html?id=5&sort=asc#section2
  │       │               │    │              │              │
  │       │               │    │              │              └── Fragment (anchor)
  │       │               │    │              └── Query string (parameters)
  │       │               │    └── Path (resource location)
  │       │               └── Port (443 is default for HTTPS)
  │       └── Domain name (host)
  └── Scheme / Protocol`,
            "text",
            "URL anatomy"
        ),

        heading("HTTP Methods"),

        table(
            ["Method", "Purpose", "Idempotent?", "Has Body?"],
            [
                ["GET", "Retrieve a resource", "Yes", "No"],
                ["POST", "Submit data to create a resource", "No", "Yes"],
                ["PUT", "Replace an entire resource", "Yes", "Yes"],
                ["PATCH", "Partially update a resource", "No", "Yes"],
                ["DELETE", "Remove a resource", "Yes", "No"],
                ["HEAD", "Same as GET but returns headers only", "Yes", "No"],
                ["OPTIONS", "Returns allowed methods for a resource", "Yes", "No"],
            ]
        ),

        heading("HTTP Status Codes"),

        table(
            ["Range", "Category", "Examples"],
            [
                ["1xx", "Informational", "100 Continue"],
                ["2xx", "Success", "200 OK, 201 Created, 204 No Content"],
                ["3xx", "Redirection", "301 Moved Permanently, 302 Found, 304 Not Modified"],
                ["4xx", "Client Error", "400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found"],
                ["5xx", "Server Error", "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable"],
            ]
        ),

        note(
            "Idempotent means that making the same request multiple times produces the same result. GET, PUT and DELETE are idempotent. POST is not — submitting a form twice could create two records. This is why browsers warn you when you refresh a POST request.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "The WWW was invented by Tim Berners-Lee in 1989 using HTML, HTTP and URLs.",
            "The Internet is the infrastructure; the Web is a service that runs on it.",
            "Client-side code (HTML, CSS, JS) runs in the browser; server-side code runs on the server.",
            "A URL has scheme, domain, port, path, query string and fragment.",
            "HTTP methods include GET (retrieve), POST (create), PUT (replace), PATCH (update) and DELETE.",
        ]),
    ],

    {
        summary:
            "Understand the WWW vs Internet, how the web works, client-side vs server-side, URL structure, HTTP methods and status codes.",
        minutes: 12,
        tags: ["web", "http", "url", "www", "client-server", "important"],

        mcqs: [
            mcq(
                "The World Wide Web was invented by:",
                ["Vint Cerf", "Tim Berners-Lee", "Bill Gates", "Marc Andreessen"],
                1,
                "Tim Berners-Lee invented the WWW at CERN in 1989."
            ),
            mcq(
                "The Internet is to the WWW as:",
                ["A car is to a road", "A road is to a car", "A browser is to HTML", "A server is to a client"],
                1,
                "The Internet is the infrastructure (road); the WWW is a service that uses it (cars on the road)."
            ),
            mcq(
                "Which HTTP method is used to retrieve a resource?",
                ["POST", "PUT", "GET", "DELETE"],
                2,
                "GET retrieves a resource without modifying it."
            ),
            mcq(
                "HTTP status code 404 means:",
                ["OK", "Created", "Not Found", "Internal Server Error"],
                2,
                "404 Not Found means the requested resource does not exist on the server."
            ),
            mcq(
                "HTTPS uses which default port?",
                ["80", "443", "21", "25"],
                1,
                "HTTPS uses port 443; HTTP uses port 80."
            ),
            mcq(
                "Which HTTP method is NOT idempotent?",
                ["GET", "PUT", "POST", "DELETE"],
                2,
                "POST is not idempotent — sending the same POST request twice may create two resources."
            ),
        ],

        questions: [
            qa(
                "Differentiate between the Internet and the World Wide Web.",
                "The Internet is a global network of interconnected computers that communicate using the TCP/IP protocol suite. It is the physical and logical infrastructure that includes cables, routers, servers and protocols. It was developed in the 1960s starting with ARPANET. The World Wide Web is a service that runs on top of the Internet, invented by Tim Berners-Lee in 1989. It consists of hyperlinked documents accessed via browsers using HTTP/HTTPS, HTML and URLs. The Internet also supports other services besides the Web, such as email (SMTP), file transfer (FTP) and voice communication (VoIP). An analogy: the Internet is the road network, and the Web is the cars that travel on those roads.",
                5
            ),
            qa(
                "Explain the steps involved when a browser loads a web page.",
                "When a user types a URL, the browser first sends a DNS query to resolve the domain name to an IP address. It then establishes a TCP connection to the server on port 80 (HTTP) or 443 (HTTPS). If HTTPS, a TLS handshake encrypts the connection. The browser sends an HTTP GET request for the resource. The server processes the request and returns an HTTP response containing the HTML. The browser parses the HTML, discovers additional resources (CSS files, JavaScript files, images) referenced in the page, and sends further HTTP GET requests for each. Once all resources are received, the browser constructs the DOM (Document Object Model), applies CSS styles (CSSOM), executes JavaScript and paints the rendered page on the screen.",
                5
            ),
            qa(
                "Explain HTTP methods GET, POST, PUT, PATCH and DELETE.",
                "GET retrieves a resource from the server without modifying it. It is idempotent, has no request body and can be cached. POST submits data to the server to create a new resource. It is not idempotent — sending the same POST twice may create two records. PUT replaces an entire existing resource with new data. It is idempotent because repeating the same PUT produces the same result. PATCH partially updates a resource, modifying only specified fields. It is not necessarily idempotent. DELETE removes a resource from the server and is idempotent — deleting an already-deleted resource has no additional effect. These five methods form the basis of RESTful API design, mapping to the CRUD operations: Create (POST), Read (GET), Update (PUT/PATCH) and Delete (DELETE).",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — HTML Fundamentals
========================================================= */

const htmlFundamentals = createTopic(
    "html-fundamentals",
    "HTML Fundamentals",

    [
        definition(
            "HTML (HyperText Markup Language)",
            "The standard markup language used to create and structure content on the World Wide Web. HTML uses tags to define elements such as headings, paragraphs, links, images, lists, tables and forms. HTML5 is the current version."
        ),

        text(
            "HTML is not a programming language — it is a markup language. It describes the structure and meaning of content, not its appearance (that's CSS) or behaviour (that's JavaScript). HTML5, finalised in 2014, added semantic elements, native audio/video, canvas, local storage and form enhancements."
        ),

        heading("Basic HTML Document Structure"),

        code(
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>`,
            "html",
            "Basic HTML5 document"
        ),

        heading("Document Structure Explained"),

        table(
            ["Element", "Purpose"],
            [
                ["<!DOCTYPE html>", "Declares the document as HTML5"],
                ["<html>", "The root element; lang attribute specifies the language"],
                ["<head>", "Contains metadata not displayed on the page (title, charset, CSS links, scripts)"],
                ["<meta charset=\"UTF-8\">", "Specifies the character encoding"],
                ["<meta name=\"viewport\">", "Makes the page responsive on mobile devices"],
                ["<title>", "Sets the browser tab title and search engine result title"],
                ["<body>", "Contains all visible page content"],
            ]
        ),

        heading("HTML Tags, Elements and Attributes"),

        definition(
            "Tag",
            "A keyword enclosed in angle brackets that marks the beginning or end of an element. Example: <p> is an opening tag, </p> is a closing tag."
        ),

        definition(
            "Element",
            "The complete unit consisting of an opening tag, content and a closing tag. Example: <p>Hello</p> is a paragraph element."
        ),

        definition(
            "Attribute",
            "Additional information about an element, specified in the opening tag as name=\"value\" pairs. Example: <img src=\"photo.jpg\" alt=\"A photo\">."
        ),

        heading("Heading and Text Elements"),

        code(
            `<h1>Main Heading (largest)</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h4>Minor Heading</h4>
<h5>Small Heading</h5>
<h6>Smallest Heading</h6>

<p>This is a paragraph. It can contain
<strong>bold text</strong>, <em>italic text</em>,
<mark>highlighted text</mark>, <small>small text</small>,
<del>deleted text</del> and <ins>inserted text</ins>.</p>

<br>     <!-- Line break (empty element) -->
<hr>     <!-- Horizontal rule (empty element) -->
<pre>    <!-- Preformatted text (preserves spaces and line breaks) -->
  function hello() {
      console.log("Hello");
  }
</pre>`,
            "html",
            "Heading and text elements"
        ),

        heading("Links and Images"),

        code(
            `<!-- Hyperlink -->
<a href="https://www.example.com">Visit Example</a>
<a href="https://www.example.com" target="_blank">Open in new tab</a>
<a href="page.html">Relative link</a>
<a href="#section2">Jump to section</a>
<a href="mailto:hello@example.com">Send email</a>
<a href="tel:+919876543210">Call us</a>

<!-- Image -->
<img src="photo.jpg" alt="A beautiful landscape" width="400" height="300">

<!-- Image with link -->
<a href="https://www.example.com">
    <img src="logo.png" alt="Company Logo">
</a>`,
            "html",
            "Links and images"
        ),

        heading("Lists"),

        code(
            `<!-- Unordered list (bullets) -->
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<!-- Ordered list (numbers) -->
<ol>
    <li>Learn HTML</li>
    <li>Learn CSS</li>
    <li>Learn JavaScript</li>
</ol>

<!-- Nested list -->
<ul>
    <li>Front-End
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </li>
    <li>Back-End
        <ul>
            <li>Node.js</li>
            <li>Python</li>
        </ul>
    </li>
</ul>

<!-- Description list -->
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
</dl>`,
            "html",
            "HTML lists"
        ),

        heading("Tables"),

        code(
            `<table>
    <caption>Student Marks</caption>
    <thead>
        <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Rahul</td>
            <td>MSc IT</td>
            <td>85</td>
        </tr>
        <tr>
            <td>Priya</td>
            <td>MSc IT</td>
            <td>92</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2">Average</td>
            <td>88.5</td>
        </tr>
    </tfoot>
</table>`,
            "html",
            "HTML table"
        ),

        heading("Empty (Void) Elements"),

        table(
            ["Element", "Purpose"],
            [
                ["<img>", "Embeds an image"],
                ["<br>", "Inserts a line break"],
                ["<hr>", "Inserts a horizontal rule (thematic break)"],
                ["<input>", "Creates a form input field"],
                ["<meta>", "Provides metadata about the document"],
                ["<link>", "Links external resources (CSS, icons)"],
                ["<source>", "Specifies media sources for <audio> and <video>"],
            ]
        ),

        note(
            "Empty elements (also called void or self-closing elements) have no content and no closing tag. In HTML5, you write <br> or <br /> — both are valid. In XHTML, the trailing slash is required: <br />.",
            "tip",
            "Empty Elements"
        ),

        keyPoints([
            "HTML is a markup language that structures web content using tags, elements and attributes.",
            "Every HTML5 document starts with <!DOCTYPE html> and has html, head and body sections.",
            "Headings range from <h1> (most important) to <h6> (least important).",
            "Links use <a href=\"...\">, images use <img src=\"...\" alt=\"...\">.",
            "Lists: <ul> (unordered), <ol> (ordered), <dl> (description); tables use <table>, <tr>, <th>, <td>.",
        ]),
    ],

    {
        summary:
            "Master HTML document structure, tags, elements, attributes, headings, text, links, images, lists and tables.",
        minutes: 13,
        tags: ["web", "html", "tags", "elements", "links", "tables", "important"],

        mcqs: [
            mcq(
                "The correct HTML5 doctype declaration is:",
                ["<!DOCTYPE HTML PUBLIC>", "<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<doctype html>"],
                1,
                "HTML5 uses the simple declaration <!DOCTYPE html>."
            ),
            mcq(
                "Which tag is used to create a hyperlink?",
                ["<link>", "<href>", "<a>", "<url>"],
                2,
                "The <a> (anchor) tag with the href attribute creates a hyperlink."
            ),
            mcq(
                "The alt attribute of an <img> tag is used for:",
                ["Setting image size", "Providing alternative text if the image cannot be displayed", "Linking the image", "Setting image quality"],
                1,
                "The alt attribute provides alternative text for accessibility and when the image fails to load."
            ),
            mcq(
                "Which is an empty (void) HTML element?",
                ["<p>", "<div>", "<br>", "<span>"],
                2,
                "<br> is an empty element — it has no content and no closing tag."
            ),
            mcq(
                "The largest heading tag is:",
                ["<h6>", "<h1>", "<heading>", "<head>"],
                1,
                "<h1> is the largest and most important heading; <h6> is the smallest."
            ),
            mcq(
                "An unordered list uses which tag?",
                ["<ol>", "<ul>", "<dl>", "<list>"],
                1,
                "<ul> creates an unordered (bulleted) list; <ol> creates an ordered (numbered) list."
            ),
        ],

        questions: [
            qa(
                "Explain the basic structure of an HTML5 document.",
                "An HTML5 document begins with <!DOCTYPE html>, which declares the document type as HTML5. The <html> element is the root and typically includes a lang attribute (e.g., lang=\"en\"). Inside it, the <head> section contains metadata not displayed on the page: <meta charset=\"UTF-8\"> for character encoding, <meta name=\"viewport\"> for mobile responsiveness, <title> for the browser tab title, and <link> tags for CSS files. The <body> section contains all visible content such as headings, paragraphs, images, links and other elements. This structure separates document information (head) from document content (body), which is essential for browsers, search engines and accessibility tools to process the page correctly.",
                5
            ),
            qa(
                "Differentiate between HTML tags, elements and attributes with examples.",
                "A tag is a keyword enclosed in angle brackets that marks the start or end of an element. For example, <p> is an opening tag and </p> is a closing tag. An element is the complete unit consisting of the opening tag, the content and the closing tag. For example, <p>Hello, World!</p> is a paragraph element. An attribute provides additional information about an element and is specified in the opening tag as a name=\"value\" pair. For example, in <a href=\"https://example.com\" target=\"_blank\">Click here</a>, href and target are attributes of the anchor element. href specifies the destination URL and target=\"_blank\" tells the browser to open the link in a new tab. Some elements like <img> and <br> are empty (void) and have no closing tag or content, only attributes.",
                5
            ),
            qa(
                "Explain HTML lists and tables with examples.",
                "HTML provides three types of lists. An unordered list (<ul>) displays items with bullets; each item is wrapped in <li>. An ordered list (<ol>) displays items with numbers; it also uses <li> for items. A description list (<dl>) uses <dt> for terms and <dd> for descriptions. Lists can be nested inside other lists. Tables are created with <table>. A <caption> provides a title. <thead>, <tbody> and <tfoot> group header, body and footer rows. Each row is a <tr>, header cells are <th> and data cells are <td>. The colspan attribute makes a cell span multiple columns, and rowspan spans multiple rows. Tables should be used for tabular data, not for page layout (CSS is used for layout).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — HTML5 Semantic Elements and Forms
========================================================= */

const html5SemanticAndForms = createTopic(
    "html5-semantic-elements-and-forms",
    "HTML5 Semantic Elements and Forms",

    [
        heading("Semantic HTML"),

        definition(
            "Semantic HTML",
            "The use of HTML elements that clearly describe their meaning to both the browser and the developer. Semantic elements like <header>, <nav>, <article> and <footer> convey the purpose of the content, unlike generic elements like <div> and <span>."
        ),

        text(
            "Before HTML5, developers used <div> elements with class names like 'header', 'nav' and 'footer' to structure pages. HTML5 introduced semantic elements that make the structure self-describing. This improves accessibility (screen readers can navigate by landmarks), SEO (search engines understand content better) and code readability."
        ),

        heading("HTML5 Semantic Elements"),

        table(
            ["Element", "Purpose"],
            [
                ["<header>", "Introductory content or a set of navigational links; typically contains logo, title and nav"],
                ["<nav>", "A section of navigation links"],
                ["<main>", "The dominant content of the document; should be unique per page"],
                ["<article>", "A self-contained composition (blog post, news article, comment) that could stand alone"],
                ["<section>", "A thematic grouping of content, typically with a heading"],
                ["<aside>", "Content tangentially related to the main content (sidebar, pull quotes)"],
                ["<footer>", "Footer of a section or page; typically contains copyright, links and contact info"],
                ["<figure>", "Self-contained content like an image, diagram or code snippet"],
                ["<figcaption>", "A caption for a <figure> element"],
                ["<time>", "Represents a specific date or time"],
                ["<mark>", "Highlighted or marked text"],
            ]
        ),

        code(
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>My Blog</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </nav>
    </header>

    <main>
        <article>
            <h2>Understanding HTML5</h2>
            <p>Published on <time datetime="2025-01-15">January 15, 2025</time></p>
            <section>
                <h3>What is Semantic HTML?</h3>
                <p>Semantic HTML uses elements that describe their meaning...</p>
            </section>
            <figure>
                <img src="diagram.png" alt="HTML5 semantic structure">
                <figcaption>HTML5 page structure diagram</figcaption>
            </figure>
        </article>

        <aside>
            <h3>Related Posts</h3>
            <ul>
                <li><a href="/css-basics">CSS Basics</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 My Blog. All rights reserved.</p>
    </footer>
</body>
</html>`,
            "html",
            "Semantic HTML5 page structure"
        ),

        heading("Block versus Inline Elements"),

        table(
            ["Aspect", "Block Elements", "Inline Elements"],
            [
                ["Layout", "Start on a new line; take full available width", "Flow within a line; take only as much width as needed"],
                ["Examples", "<div>, <p>, <h1>–<h6>, <ul>, <section>, <article>", "<span>, <a>, <strong>, <em>, <img>, <input>"],
                ["Can contain", "Block and inline elements", "Only inline elements (generally)"],
                ["Width/Height", "Can set width and height", "Width and height are ignored (except replaced elements like img)"],
            ]
        ),

        heading("HTML Forms"),

        definition(
            "HTML Form",
            "A section of a web page that collects user input and submits it to a server for processing. Forms use the <form> element containing various input controls like text fields, checkboxes, radio buttons, dropdowns and buttons."
        ),

        code(
            `<form action="/register" method="POST">
    <!-- Text input -->
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required placeholder="Enter your name">

    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>

    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8" required>

    <!-- Number input -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="60">

    <!-- Radio buttons -->
    <fieldset>
        <legend>Gender</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
    </fieldset>

    <!-- Checkbox -->
    <input type="checkbox" id="agree" name="agree" required>
    <label for="agree">I agree to the terms</label>

    <!-- Dropdown -->
    <label for="course">Course:</label>
    <select id="course" name="course">
        <option value="">-- Select --</option>
        <option value="mscit">MSc IT</option>
        <option value="msccs">MSc CS</option>
        <option value="mca">MCA</option>
    </select>

    <!-- Textarea -->
    <label for="bio">Bio:</label>
    <textarea id="bio" name="bio" rows="4" cols="40" placeholder="Tell us about yourself"></textarea>

    <!-- File upload -->
    <label for="photo">Photo:</label>
    <input type="file" id="photo" name="photo" accept="image/*">

    <!-- Buttons -->
    <button type="submit">Register</button>
    <button type="reset">Clear</button>
</form>`,
            "html",
            "Complete HTML form"
        ),

        heading("Form Attributes"),

        table(
            ["Attribute", "Element", "Purpose"],
            [
                ["action", "<form>", "URL where form data is submitted"],
                ["method", "<form>", "HTTP method: GET (data in URL) or POST (data in body)"],
                ["name", "<input>", "The key used when submitting data to the server"],
                ["id", "<input>", "Unique identifier; linked to <label for=\"id\">"],
                ["type", "<input>", "The input type (text, email, password, number, etc.)"],
                ["placeholder", "<input>", "Hint text shown when the field is empty"],
                ["required", "<input>", "Makes the field mandatory"],
                ["disabled", "<input>", "Makes the field uneditable and unsubmittable"],
                ["readonly", "<input>", "Makes the field uneditable but still submitted"],
                ["min / max", "<input>", "Minimum and maximum values (number, date)"],
                ["minlength / maxlength", "<input>", "Minimum and maximum character length"],
                ["pattern", "<input>", "Regular expression for validation"],
                ["accept", "<input type=\"file\">", "Allowed file types"],
            ]
        ),

        heading("HTML5 Input Types"),

        table(
            ["Type", "Purpose", "Example"],
            [
                ["text", "Single-line text", "<input type=\"text\">"],
                ["email", "Email address (validates format)", "<input type=\"email\">"],
                ["password", "Masked text input", "<input type=\"password\">"],
                ["number", "Numeric input with stepper", "<input type=\"number\" min=\"0\" max=\"100\">"],
                ["date", "Date picker", "<input type=\"date\">"],
                ["time", "Time picker", "<input type=\"time\">"],
                ["url", "URL input (validates format)", "<input type=\"url\">"],
                ["tel", "Telephone number", "<input type=\"tel\">"],
                ["color", "Colour picker", "<input type=\"color\">"],
                ["range", "Slider", "<input type=\"range\" min=\"0\" max=\"100\">"],
                ["file", "File upload", "<input type=\"file\">"],
                ["hidden", "Hidden field (not displayed)", "<input type=\"hidden\" name=\"token\">"],
                ["submit", "Submit button", "<input type=\"submit\" value=\"Send\">"],
                ["reset", "Reset button", "<input type=\"reset\">"],
            ]
        ),

        heading("GET versus POST in Forms"),

        table(
            ["Aspect", "GET", "POST"],
            [
                ["Data location", "Appended to URL as query string", "Sent in the HTTP request body"],
                ["Visibility", "Visible in the URL, browser history and logs", "Not visible in the URL"],
                ["Data size", "Limited (URL length limit ~2000 characters)", "No practical limit"],
                ["Bookmarkable?", "Yes (URL contains the data)", "No"],
                ["Idempotent?", "Yes", "No"],
                ["Use case", "Search forms, filters, retrieving data", "Login, registration, file upload, creating data"],
            ]
        ),

        note(
            "Always use POST for forms that modify data (login, registration, payment) because GET appends data to the URL, which is visible, logged and cached. Use GET for search and filter forms where the user might want to bookmark or share the URL.",
            "warning",
            "Security"
        ),

        keyPoints([
            "Semantic HTML elements like <header>, <nav>, <main>, <article>, <section> and <footer> describe content meaning.",
            "Semantic HTML improves accessibility, SEO and code readability.",
            "Block elements take full width and start on a new line; inline elements flow within a line.",
            "HTML forms collect user input using <form>, <input>, <select>, <textarea> and <button>.",
            "Use POST for data-modifying forms and GET for search/filter forms.",
        ]),
    ],

    {
        summary:
            "Master HTML5 semantic elements, block vs inline, HTML forms, input types, form attributes and GET vs POST.",
        minutes: 13,
        tags: ["web", "html5", "semantic", "forms", "input", "important"],

        mcqs: [
            mcq(
                "Which HTML5 element represents the main content of a document?",
                ["<content>", "<main>", "<body>", "<section>"],
                1,
                "<main> represents the dominant, unique content of the document."
            ),
            mcq(
                "The <nav> element is used for:",
                ["Page footer", "Navigation links", "Sidebars", "Articles"],
                1,
                "<nav> represents a section of navigation links."
            ),
            mcq(
                "Which input type hides the entered characters?",
                ["text", "hidden", "password", "secret"],
                2,
                "<input type=\"password\"> masks the entered characters."
            ),
            mcq(
                "The method attribute of a form specifies:",
                ["The CSS file", "The HTTP method (GET or POST)", "The JavaScript file", "The form name"],
                1,
                "The method attribute specifies whether form data is sent via GET or POST."
            ),
            mcq(
                "Which is an inline element?",
                ["<div>", "<p>", "<span>", "<section>"],
                2,
                "<span> is an inline element; <div>, <p> and <section> are block elements."
            ),
            mcq(
                "The for attribute of a <label> should match:",
                ["The name of the input", "The id of the input", "The type of the input", "The class of the input"],
                1,
                "The for attribute of <label> must match the id of the associated input element."
            ),
        ],

        questions: [
            qa(
                "What is semantic HTML? Explain five semantic elements with their purposes.",
                "Semantic HTML uses elements that clearly describe their meaning to browsers, developers and assistive technologies, rather than generic containers like <div>. Five important semantic elements are: <header> which contains introductory content such as a logo, title and navigation. <nav> which contains a section of navigation links. <main> which contains the dominant, unique content of the page (there should be only one per page). <article> which represents a self-contained composition like a blog post or news article that could stand independently. <footer> which contains footer information such as copyright, contact details and related links. Using these elements improves accessibility because screen readers can navigate by landmarks, improves SEO because search engines understand the content structure, and makes the code more readable and maintainable.",
                5
            ),
            qa(
                "Explain HTML forms. Describe the difference between GET and POST methods.",
                "An HTML form collects user input and submits it to a server. It uses the <form> element with action (the URL to submit to) and method (GET or POST) attributes. Inside the form, various input controls collect data: text fields, email fields, passwords, radio buttons, checkboxes, dropdowns, textareas and file uploads. Each input has a name attribute that becomes the key when data is submitted. With GET, form data is appended to the URL as a query string (e.g., /search?q=java). GET data is visible in the URL, bookmarkable and limited in size. With POST, form data is sent in the HTTP request body, making it invisible in the URL and unrestricted in size. Use GET for search and filter forms; use POST for login, registration, file uploads and any operation that modifies data on the server.",
                5
            ),
            qa(
                "Explain block versus inline elements with examples.",
                "Block elements start on a new line and take up the full available width of their parent container. You can set their width, height, margin and padding. Examples include <div>, <p>, <h1> through <h6>, <ul>, <ol>, <section>, <article>, <header> and <footer>. Block elements can contain both block and inline elements. Inline elements flow within a line of text and take only as much width as their content requires. They do not start on a new line, and setting width or height has no effect (except for replaced elements like <img>). Examples include <span>, <a>, <strong>, <em>, <img> and <input>. Inline elements can generally only contain other inline elements. CSS can change this behaviour using the display property (display: block, display: inline, display: inline-block).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — CSS Fundamentals
========================================================= */

const cssFundamentals = createTopic(
    "css-fundamentals",
    "CSS Fundamentals",

    [
        definition(
            "CSS (Cascading Style Sheets)",
            "A stylesheet language used to describe the presentation (colours, fonts, layout, spacing) of HTML documents. CSS separates content (HTML) from presentation, making websites easier to maintain and enabling responsive design."
        ),

        text(
            "CSS was proposed by Håkon Wium Lie in 1994 and became a W3C standard in 1996. The 'cascading' in CSS refers to the way styles from multiple sources (browser defaults, user styles, author styles) are combined, with more specific rules overriding less specific ones."
        ),

        heading("Ways to Apply CSS"),

        table(
            ["Method", "Syntax", "Scope", "Recommended?"],
            [
                ["Inline", "style=\"color: red;\" on an HTML element", "That element only", "Avoid (except dynamic JS styles)"],
                ["Internal", "<style> block in the <head>", "That page only", "For single-page or unique styles"],
                ["External", "<link rel=\"stylesheet\" href=\"style.css\">", "All pages that link the file", "Yes — best practice"],
            ]
        ),

        code(
            `<!-- Inline CSS -->
<p style="color: red; font-size: 18px;">Red text</p>

<!-- Internal CSS -->
<head>
    <style>
        p { color: blue; }
    </style>
</head>

<!-- External CSS (best practice) -->
<head>
    <link rel="stylesheet" href="style.css">
</head>`,
            "html",
            "Three ways to apply CSS"
        ),

        heading("CSS Syntax"),

        code(
            `selector {
    property: value;
    property: value;
}

/* Example */
h1 {
    color: navy;
    font-size: 32px;
    text-align: center;
}

/* Multiple selectors */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}`,
            "css",
            "CSS rule syntax"
        ),

        heading("CSS Selectors"),

        table(
            ["Selector", "Syntax", "Selects", "Example"],
            [
                ["Element (Type)", "p", "All <p> elements", "p { color: red; }"],
                ["Class", ".classname", "All elements with that class", ".highlight { background: yellow; }"],
                ["ID", "#idname", "The element with that ID (unique)", "#header { font-size: 24px; }"],
                ["Universal", "*", "All elements", "* { margin: 0; }"],
                ["Descendant", "div p", "All <p> inside <div> (any level)", "div p { color: blue; }"],
                ["Child", "div > p", "Direct <p> children of <div>", "div > p { font-weight: bold; }"],
                ["Adjacent sibling", "h1 + p", "The <p> immediately after <h1>", "h1 + p { margin-top: 0; }"],
                ["Attribute", "[type=\"text\"]", "Elements with that attribute value", "input[type=\"text\"] { border: 1px solid #ccc; }"],
                ["Pseudo-class", "a:hover", "Elements in a specific state", "a:hover { color: orange; }"],
                ["Pseudo-element", "p::first-line", "A specific part of an element", "p::first-letter { font-size: 2em; }"],
            ]
        ),

        heading("Common Pseudo-classes"),

        table(
            ["Pseudo-class", "Selects"],
            [
                [":hover", "Element when the mouse is over it"],
                [":focus", "Element that has keyboard focus"],
                [":active", "Element being clicked"],
                [":visited", "Link that has been visited"],
                [":first-child", "First child of its parent"],
                [":last-child", "Last child of its parent"],
                [":nth-child(n)", "Nth child (e.g., :nth-child(2n) for even)"],
                [":not(selector)", "Elements that do not match the selector"],
                [":checked", "Checked checkbox or radio button"],
                [":disabled", "Disabled form element"],
            ]
        ),

        heading("CSS Specificity"),

        definition(
            "Specificity",
            "The algorithm CSS uses to determine which rule applies when multiple rules target the same element. Higher specificity wins. If specificity is equal, the last rule in the source order wins."
        ),

        table(
            ["Selector Type", "Specificity Value", "Example"],
            [
                ["Inline style", "1,0,0,0", "style=\"color: red;\""],
                ["ID", "0,1,0,0", "#header"],
                ["Class, pseudo-class, attribute", "0,0,1,0", ".highlight, :hover, [type=\"text\"]"],
                ["Element, pseudo-element", "0,0,0,1", "p, ::before"],
                ["Universal, combinators", "0,0,0,0", "*, >, +"],
            ]
        ),

        code(
            `/* Specificity examples (higher wins) */
p { color: black; }              /* 0,0,0,1 */
.highlight { color: blue; }      /* 0,0,1,0  ← wins over p */
#title { color: red; }           /* 0,1,0,0  ← wins over .highlight */
p.highlight { color: green; }    /* 0,0,1,1  ← wins over .highlight but not #title */

/* !important overrides specificity (use sparingly!) */
p { color: black !important; }`,
            "css",
            "CSS specificity examples"
        ),

        heading("The Cascade"),

        text(
            "CSS stands for Cascading Style Sheets because styles cascade from multiple sources. When two rules have equal specificity, the cascade determines the winner based on origin and source order."
        ),

        steps([
            "Browser default styles (user-agent stylesheet) — lowest priority",
            "User styles (set by the user in browser settings)",
            "Author styles (your CSS) — normal declarations",
            "Author styles — !important declarations",
            "User styles — !important declarations — highest priority",
        ]),

        heading("CSS Colors"),

        code(
            `/* Named colours */
color: red;
color: navy;

/* Hexadecimal */
color: #ff0000;        /* red */
color: #00ff00;        /* green */
color: #0000ff;        /* blue */
color: #333;           /* shorthand for #333333 */

/* RGB / RGBA */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);  /* 50% transparent */

/* HSL / HSLA */
color: hsl(0, 100%, 50%);      /* red */
color: hsla(0, 100%, 50%, 0.5);`,
            "css",
            "CSS colour formats"
        ),

        heading("CSS Units"),

        table(
            ["Unit", "Type", "Relative To", "Example"],
            [
                ["px", "Absolute", "Screen pixels", "font-size: 16px;"],
                ["em", "Relative", "Parent element's font size", "padding: 1.5em;"],
                ["rem", "Relative", "Root element's font size", "font-size: 1.25rem;"],
                ["%", "Relative", "Parent element's corresponding property", "width: 50%;"],
                ["vw", "Relative", "1% of viewport width", "width: 100vw;"],
                ["vh", "Relative", "1% of viewport height", "height: 100vh;"],
                ["ch", "Relative", "Width of the '0' character", "width: 60ch;"],
            ]
        ),

        note(
            "Prefer rem for font sizes because it is relative to the root font size and is not compounded like em. Prefer % or vw/vh for layouts that need to be responsive. Avoid px for fonts if you want users to be able to scale text in their browser settings.",
            "tip",
            "Unit Best Practices"
        ),

        keyPoints([
            "CSS separates presentation from content; external stylesheets are the best practice.",
            "Selectors target HTML elements: type, class, ID, descendant, child, pseudo-class and more.",
            "Specificity determines which rule wins: inline > ID > class > element.",
            "The cascade combines styles from browser defaults, user styles and author styles.",
            "CSS units: px (absolute), em/rem (font-relative), % (parent-relative), vw/vh (viewport-relative).",
        ]),
    ],

    {
        summary:
            "Master CSS syntax, ways to apply CSS, selectors, specificity, the cascade, colours and units.",
        minutes: 13,
        tags: ["web", "css", "selectors", "specificity", "cascade", "important"],

        mcqs: [
            mcq(
                "The best practice for applying CSS is:",
                ["Inline styles", "Internal <style> block", "External stylesheet", "JavaScript"],
                2,
                "External stylesheets are the best practice because they are reusable, cacheable and separate content from presentation."
            ),
            mcq(
                "The CSS selector .highlight targets:",
                ["The element with id=\"highlight\"", "All elements with class=\"highlight\"", "All <highlight> elements", "The first element"],
                1,
                "A class selector (.classname) targets all elements with that class."
            ),
            mcq(
                "Which selector has the highest specificity?",
                ["p", ".highlight", "#header", "div p"],
                2,
                "An ID selector (#header) has higher specificity than class, element or descendant selectors."
            ),
            mcq(
                "The rem unit is relative to:",
                ["The parent element's font size", "The root element's font size", "The viewport width", "Screen pixels"],
                1,
                "rem (root em) is relative to the font size of the root element (html)."
            ),
            mcq(
                "The :hover pseudo-class applies when:",
                ["The element is clicked", "The mouse is over the element", "The element has focus", "The element is the first child"],
                1,
                ":hover applies when the user hovers the mouse pointer over the element."
            ),
            mcq(
                "If two CSS rules have equal specificity, the winner is:",
                ["The first rule", "The last rule in source order", "The browser default", "A random rule"],
                1,
                "When specificity is equal, the last rule in the source order wins (cascade)."
            ),
        ],

        questions: [
            qa(
                "Explain the three ways to apply CSS and which is preferred.",
                "Inline CSS applies styles directly on an HTML element using the style attribute, for example <p style=\"color: red;\">. It has the highest specificity but mixes presentation with content, cannot be reused and is hard to maintain. Internal CSS uses a <style> block in the document's <head>, applying to that page only. It is useful for unique, page-specific styles but cannot be shared across pages. External CSS uses a separate .css file linked with <link rel=\"stylesheet\" href=\"style.css\">. This is the preferred method because the same stylesheet can be used across all pages, it is cached by the browser (faster subsequent loads), it completely separates content from presentation, and it is much easier to maintain. A change in the CSS file updates every page that links it.",
                5
            ),
            qa(
                "Explain CSS selectors with at least six types and examples.",
                "An element (type) selector targets all instances of an HTML tag: p { color: red; } styles all paragraphs. A class selector targets elements with a specific class: .highlight { background: yellow; }. An ID selector targets a unique element: #header { font-size: 24px; }. A descendant selector targets elements nested at any level: div p { color: blue; } styles all paragraphs inside divs. A child selector targets only direct children: div > p { font-weight: bold; }. A pseudo-class selector targets elements in a specific state: a:hover { color: orange; } styles links when hovered. An attribute selector targets elements with a specific attribute: input[type=\"text\"] { border: 1px solid #ccc; }. A pseudo-element selector targets a specific part of an element: p::first-letter { font-size: 2em; }.",
                5
            ),
            qa(
                "What is CSS specificity and how does the cascade work?",
                "Specificity is the algorithm CSS uses to decide which rule applies when multiple rules target the same element. It is calculated as a four-part score: inline styles (1,0,0,0), IDs (0,1,0,0), classes/pseudo-classes/attributes (0,0,1,0) and elements/pseudo-elements (0,0,0,1). Higher scores win. For example, #header (0,1,0,0) beats .highlight (0,0,1,0) which beats p (0,0,0,1). The cascade determines the winner when specificity is equal, based on origin and source order. Browser default styles have the lowest priority, followed by user styles, then author (developer) styles. Within author styles, !important declarations beat normal ones. If everything else is equal, the last rule in the source order wins. !important should be used sparingly because it makes debugging difficult.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — CSS Box Model and Layout
========================================================= */

const cssBoxModelAndLayout = createTopic(
    "css-box-model-and-layout",
    "CSS Box Model and Layout",

    [
        definition(
            "CSS Box Model",
            "The model that describes how every HTML element is represented as a rectangular box with four layers: content, padding, border and margin. Understanding the box model is fundamental to controlling layout and spacing in CSS."
        ),

        code(
            `CSS Box Model:

  ┌─────────── Margin ────────────┐
  │  ┌──────── Border ─────────┐  │
  │  │  ┌──── Padding ──────┐  │  │
  │  │  │                   │  │  │
  │  │  │     Content       │  │  │
  │  │  │   (width × height)│  │  │
  │  │  │                   │  │  │
  │  │  └───────────────────┘  │  │
  │  └─────────────────────────┘  │
  └────────────────────────────────┘

  Total width = width + padding-left + padding-right
                + border-left + border-right
                + margin-left + margin-right`,
            "text",
            "CSS box model diagram"
        ),

        heading("Box Model Properties"),

        table(
            ["Layer", "Property", "Description"],
            [
                ["Content", "width, height", "The actual content area (text, images)"],
                ["Padding", "padding", "Transparent space between content and border"],
                ["Border", "border", "A line surrounding the padding"],
                ["Margin", "margin", "Transparent space outside the border, separating from other elements"],
            ]
        ),

        code(
            `.box {
    width: 300px;
    height: 200px;
    padding: 20px;                  /* all four sides */
    padding: 10px 20px;             /* top/bottom | left/right */
    padding: 10px 15px 20px 25px;   /* top | right | bottom | left */

    border: 2px solid #333;         /* width style colour */
    border-radius: 8px;             /* rounded corners */

    margin: 0 auto;                 /* top/bottom 0, left/right auto (centres block) */
    margin-top: 20px;
}`,
            "css",
            "Box model properties"
        ),

        heading("box-sizing"),

        definition(
            "box-sizing",
            "A CSS property that controls how width and height are calculated. The default content-box means width applies only to the content area. border-box means width includes content, padding and border, which is more intuitive for layouts."
        ),

        code(
            `/* Default: content-box
   width: 300px + padding 40px + border 4px = 344px total */
.box {
    box-sizing: content-box;
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}

/* Recommended: border-box
   width: 300px includes padding and border
   content area = 300 - 40 - 4 = 256px */
.box {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid black;
}

/* Apply to all elements (common reset) */
*, *::before, *::after {
    box-sizing: border-box;
}`,
            "css",
            "box-sizing property"
        ),

        heading("Display Property"),

        table(
            ["Value", "Behaviour"],
            [
                ["block", "Takes full width, starts on a new line (div, p, h1)"],
                ["inline", "Flows in a line, width/height ignored (span, a)"],
                ["inline-block", "Flows in a line but width/height can be set"],
                ["none", "Completely removed from the layout (not visible, no space)"],
                ["flex", "Enables Flexbox layout on children"],
                ["grid", "Enables CSS Grid layout on children"],
            ]
        ),

        heading("Flexbox"),

        definition(
            "Flexbox (Flexible Box Layout)",
            "A CSS layout model designed for arranging items in a single dimension (row or column) with powerful alignment, distribution and wrapping capabilities. It is the modern standard for component-level layout."
        ),

        code(
            `.container {
    display: flex;
    flex-direction: row;        /* row | row-reverse | column | column-reverse */
    justify-content: center;    /* main axis: flex-start | center | flex-end | space-between | space-around | space-evenly */
    align-items: center;        /* cross axis: flex-start | center | flex-end | stretch | baseline */
    flex-wrap: wrap;            /* nowrap | wrap | wrap-reverse */
    gap: 16px;                  /* space between items */
}

.item {
    flex: 1;                    /* grow to fill available space */
    flex-grow: 1;               /* grow factor */
    flex-shrink: 1;             /* shrink factor */
    flex-basis: 200px;          /* initial size */
    align-self: flex-end;       /* override align-items for this item */
}`,
            "css",
            "Flexbox properties"
        ),

        heading("Flexbox Visual Guide"),

        code(
            `flex-direction: row (default):

  Main axis →
  ┌──────┐ ┌──────┐ ┌──────┐
  │Item 1│ │Item 2│ │Item 3│
  └──────┘ └──────┘ └──────┘
  Cross axis ↓

justify-content (main axis):
  flex-start:     [1][2][3]
  center:             [1][2][3]
  flex-end:                 [1][2][3]
  space-between:  [1]    [2]    [3]
  space-around:    [1]  [2]  [3]
  space-evenly:    [1]   [2]   [3]`,
            "text",
            "Flexbox axes and justify-content"
        ),

        heading("CSS Grid (Brief)"],

    definition(
        "CSS Grid",
        "A two-dimensional layout system for arranging items in rows and columns simultaneously. It is the modern standard for page-level layout, complementing Flexbox which is better for one-dimensional (component-level) layout."
    ),

    code(
        `.container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;  /* 3 columns: 1/4, 1/2, 1/4 */
    grid-template-rows: auto 1fr auto;    /* header, content, footer */
    gap: 20px;
}

.header  { grid-column: 1 / -1; }        /* span all columns */
.sidebar { grid-column: 1 / 2; }
.content { grid-column: 2 / 4; }
.footer  { grid-column: 1 / -1; }`,
        "css",
        "CSS Grid example"
    ),

    heading("Responsive Design and Media Queries"),

    definition(
        "Responsive Design",
        "An approach to web design that makes pages render well on a variety of devices and window sizes. It uses fluid layouts, flexible images and CSS media queries to adapt the design to the screen."
    ),

    code(
        `/* Mobile first: base styles for small screens */
.container {
    width: 100%;
    padding: 10px;
}

nav {
    display: none;  /* Hidden on mobile */
}

/* Tablet and up */
@media (min-width: 768px) {
    .container {
        width: 750px;
        margin: 0 auto;
    }
    nav {
        display: flex;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        width: 960px;
    }
}`,
        "css",
        "Media queries for responsive design"
    ),

    heading("Common Breakpoints"),

    table(
        ["Device", "Breakpoint", "Media Query"],
        [
            ["Mobile", "< 768px", "Base styles (mobile first)"],
            ["Tablet", "≥ 768px", "@media (min-width: 768px)"],
            ["Desktop", "≥ 1024px", "@media (min-width: 1024px)"],
            ["Large desktop", "≥ 1200px", "@media (min-width: 1200px)"],
        ]
    ),

    heading("The display: none versus visibility: hidden"),

    table(
        ["Property", "Visible?", "Occupies Space?", "Use Case"],
        [
            ["display: none", "No", "No (removed from layout)", "Hiding elements completely"],
            ["visibility: hidden", "No", "Yes (empty space remains)", "Hiding but preserving layout"],
            ["opacity: 0", "No (transparent)", "Yes", "Fade animations"],
        ]
    ),

    note(
        "A widely used CSS reset or starting point is: *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }. This makes all elements use border-box sizing and removes default browser margins, giving you a clean slate for layout.",
        "tip",
        "CSS Reset"
    ),

    keyPoints([
        "Every HTML element is a box with content, padding, border and margin layers.",
        "box-sizing: border-box includes padding and border in the specified width — use it globally.",
        "Flexbox is for one-dimensional layout (rows or columns); CSS Grid is for two-dimensional layout.",
        "justify-content aligns on the main axis; align-items aligns on the cross axis.",
        "Responsive design uses fluid layouts and media queries to adapt to different screen sizes.",
    ]),
  ],

{
    summary:
    "Master the CSS box model, box-sizing, display, Flexbox, CSS Grid basics, responsive design and media queries.",
        minutes: 14,
            tags: ["web", "css", "box-model", "flexbox", "grid", "responsive", "important"],

                mcqs: [
                    mcq(
                        "The CSS box model layers from inside to outside are:",
                        ["margin, border, padding, content", "content, padding, border, margin", "content, border, padding, margin", "padding, content, border, margin"],
                        1,
                        "The box model from inside to outside is: content, padding, border, margin."
                    ),
                    mcq(
                        "box-sizing: border-box means the specified width includes:",
                        ["Only content", "Content + padding + border", "Content + margin", "Only padding"],
                        1,
                        "With border-box, the width includes content, padding and border (but not margin)."
                    ),
                    mcq(
                        "Flexbox is designed for:",
                        ["Two-dimensional layout (rows and columns)", "One-dimensional layout (row or column)", "Absolute positioning", "Print stylesheets"],
                        1,
                        "Flexbox is a one-dimensional layout model for arranging items in a row or a column."
                    ),
                    mcq(
                        "justify-content in Flexbox controls alignment on the:",
                        ["Cross axis", "Main axis", "Z-axis", "Both axes"],
                        1,
                        "justify-content aligns flex items along the main axis (horizontal for row, vertical for column)."
                    ),
                    mcq(
                        "display: none differs from visibility: hidden because:",
                        ["display: none keeps the space", "display: none removes the element from the layout entirely", "They are identical", "visibility: hidden removes the element from the layout"],
                        1,
                        "display: none removes the element from the document flow; visibility: hidden hides it but preserves its space."
                    ),
                    mcq(
                        "A mobile-first media query for tablets would be:",
                        ["@media (max-width: 768px)", "@media (min-width: 768px)", "@media (width: 768px)", "@media tablet"],
                        1,
                        "Mobile-first uses min-width queries: base styles for mobile, then @media (min-width: 768px) for tablets and up."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the CSS box model and the box-sizing property.",
                            "The CSS box model describes every HTML element as a rectangular box with four layers. The innermost layer is the content area, whose size is set by width and height. Around the content is padding, which is transparent space between the content and the border. The border is a line surrounding the padding. The outermost layer is margin, which is transparent space outside the border that separates the element from others. By default (box-sizing: content-box), the specified width applies only to the content, so padding and border add extra width. With box-sizing: border-box, the specified width includes content, padding and border, making layout calculations much more intuitive. A common CSS reset applies box-sizing: border-box to all elements so that width: 100% truly means the element fills its parent without overflowing due to padding.",
                            5
                        ),
                        qa(
                            "Explain Flexbox and its key properties.",
                            "Flexbox (Flexible Box Layout) is a CSS layout model for arranging items in a single dimension — either a row or a column. The parent element becomes a flex container by setting display: flex. Key container properties include flex-direction (row, column, or their reverses) which sets the main axis, justify-content which aligns items along the main axis (flex-start, center, flex-end, space-between, space-around, space-evenly), align-items which aligns items along the cross axis (flex-start, center, flex-end, stretch), flex-wrap which allows items to wrap onto multiple lines, and gap which sets spacing between items. Key item properties include flex-grow (how much an item grows to fill space), flex-shrink (how much it shrinks), flex-basis (its initial size) and align-self (overrides align-items for one item). Flexbox is ideal for navigation bars, card layouts, centering content and distributing space among items.",
                            5
                        ),
                        qa(
                            "What is responsive design? Explain media queries with an example.",
                            "Responsive design is an approach that makes web pages render well on a variety of devices and screen sizes using fluid layouts, flexible images and CSS media queries. The mobile-first strategy defines base styles for small screens and then uses min-width media queries to add or override styles for larger screens. A media query applies CSS only when a condition is true, typically based on viewport width. For example, the base style might set .container { width: 100%; padding: 10px; } and hide the navigation. Then @media (min-width: 768px) { .container { width: 750px; margin: 0 auto; } nav { display: flex; } } applies a fixed-width centred container and shows the navigation on tablets and larger. A further query at min-width: 1024px can adjust for desktop screens. Common breakpoints are 768px (tablet), 1024px (desktop) and 1200px (large desktop).",
                            5
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToWebTechnology,
    htmlFundamentals,
    html5SemanticAndForms,
    cssFundamentals,
    cssBoxModelAndLayout,
];