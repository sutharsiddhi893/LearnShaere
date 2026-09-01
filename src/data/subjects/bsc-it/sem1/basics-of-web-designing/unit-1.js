/* =========================================================
   B.Sc IT • SEM 1 • Basics of Web Designing
   UNIT 1 — Web Page Designing - I (Internet & HTML Basics)
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
   TOPIC 1 — Introduction to Internet and WWW
========================================================= */

const internetAndWWW = createTopic(
    "internet-and-www",
    "Introduction to Internet and WWW",

    [
        definition(
            "Internet",
            "The Internet is a global network of interconnected computers that communicate using standardized protocols, allowing users to share information and resources worldwide."
        ),

        heading("Services Provided by the Internet"),

        table(
            ["Service", "Full Form", "Purpose"],
            [
                ["Email", "Electronic Mail", "Sending and receiving digital messages"],
                ["HTTP", "HyperText Transfer Protocol", "Transferring web pages on the WWW"],
                ["FTP", "File Transfer Protocol", "Uploading and downloading files"],
                ["Telnet", "Teletype Network", "Remote login to another computer"],
                ["WWW", "World Wide Web", "System of interlinked hypertext documents"],
            ]
        ),

        heading("Basic Terminology"),

        table(
            ["Term", "Description"],
            [
                ["URL", "Uniform Resource Locator; the address of a web resource"],
                ["Webpage", "A single document written in HTML displayed in a browser"],
                ["Website", "A collection of related webpages under a single domain"],
                ["Web Server", "A computer that stores and delivers web content"],
                ["Web Browser", "Software used to access and view websites (e.g., Chrome)"],
                ["Search Engine", "A tool to find information on the web (e.g., Google)"],
            ]
        ),

        note(
            "The Internet is the physical network infrastructure, while the World Wide Web (WWW) is a service that runs on top of the Internet using HTTP.",
            "tip",
            "Key Difference"
        ),

        keyPoints([
            "Internet connects millions of devices globally.",
            "WWW uses HTTP to transfer HTML documents.",
            "URL is the unique address of every web resource.",
            "Browsers render HTML code into visual webpages.",
        ]),
    ],

    {
        summary: "Understand the basics of the Internet, WWW, and essential web terminology.",
        minutes: 10,
        tags: ["internet", "www", "html", "basics"],

        mcqs: [
            mcq(
                "What does WWW stand for?",
                ["World Wide Web", "Web World Wide", "World Web Wide", "Wide World Web"],
                0,
                "WWW stands for World Wide Web."
            ),
            mcq(
                "Which protocol is used to transfer web pages?",
                ["FTP", "SMTP", "HTTP", "Telnet"],
                2,
                "HTTP (HyperText Transfer Protocol) is used for web pages."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Internet and World Wide Web.",
                "The Internet is a global network of interconnected computers and devices that communicate using standard protocols. The World Wide Web (WWW) is a service that runs on the Internet, allowing users to access interlinked documents (webpages) via browsers using HTTP. In short, the Internet is the infrastructure, and the Web is a service built on it.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Introduction to HTML and Document Structure
========================================================= */

const htmlBasics = createTopic(
    "html-basics-and-structure",
    "Introduction to HTML and Document Structure",

    [
        definition(
            "HTML",
            "HTML (HyperText Markup Language) is the standard markup language used to create and structure content on the World Wide Web."
        ),

        heading("Basic Structure of an HTML Document"),

        code(
            `<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is my first paragraph.</p>
</body>
</html>`,
            "html",
            "Basic HTML5 Document"
        ),

        heading("Important HTML Tags"),

        table(
            ["Tag", "Purpose"],
            [
                ["<!DOCTYPE html>", "Declares the document type as HTML5"],
                ["<html>", "Root element of the HTML page"],
                ["<head>", "Contains meta-information and title"],
                ["<title>", "Sets the title shown in the browser tab"],
                ["<body>", "Contains the visible page content"],
            ]
        ),

        note(
            "HTML is not a programming language; it is a markup language. It tells the browser how to structure and display content, but it cannot perform logic or calculations.",
            "warning",
            "Concept Check"
        ),

        keyPoints([
            "Every HTML document starts with <!DOCTYPE html>.",
            "The <head> section contains metadata, while <body> contains visible content.",
            "HTML elements are usually written in pairs (opening and closing tags).",
        ]),
    ],

    {
        summary: "Learn the basic structure of an HTML5 document and essential tags.",
        minutes: 10,
        tags: ["html", "tags", "structure", "basics"],

        mcqs: [
            mcq(
                "Which tag is used to define the title of a webpage?",
                ["<head>", "<title>", "<meta>", "<h1>"],
                1,
                "The <title> tag sets the title in the browser tab."
            ),
            mcq(
                "Where does the visible content of a webpage go?",
                ["<head>", "<html>", "<body>", "<title>"],
                2,
                "The <body> tag contains all visible content."
            ),
        ],

        questions: [
            qa(
                "Explain the basic structure of an HTML document.",
                "An HTML document starts with <!DOCTYPE html> to declare it as HTML5. The root element is <html>. Inside it, the <head> section contains meta-information like the <title>, which appears on the browser tab. The <body> section contains all the visible content of the webpage, such as headings, paragraphs, images, and links.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Text Formatting and Lists
========================================================= */

const textAndLists = createTopic(
    "text-formatting-and-lists",
    "Text Formatting and Lists",

    [
        heading("Text Formatting Tags"),

        table(
            ["Tag", "Output / Purpose"],
            [
                ["<b> or <strong>", "Bold text"],
                ["<i> or <em>", "Italic text"],
                ["<u>", "Underlined text"],
                ["<br>", "Line break (empty tag)"],
                ["<hr>", "Horizontal rule / line"],
                ["<p>", "Paragraph"],
                ["<h1> to <h6>", "Headings (h1 is largest, h6 is smallest)"],
            ]
        ),

        heading("Ordered and Unordered Lists"),

        code(
            `<!-- Unordered List -->
<ul>
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>First Step</li>
  <li>Second Step</li>
  <li>Third Step</li>
</ol>`,
            "html",
            "Lists in HTML"
        ),

        keyPoints([
            "Use <strong> and <em> instead of <b> and <i> for semantic meaning.",
            "<ul> creates bullet points, while <ol> creates numbered lists.",
            "<li> is used to define each item inside a list.",
        ]),
    ],

    {
        summary: "Master text formatting tags and how to create ordered and unordered lists.",
        minutes: 8,
        tags: ["html", "formatting", "lists", "tags"],

        mcqs: [
            mcq(
                "Which tag is used for the largest heading?",
                ["<h6>", "<head>", "<h1>", "<heading>"],
                2,
                "<h1> is the largest heading tag."
            ),
            mcq(
                "Which tag creates a bulleted list?",
                ["<ol>", "<ul>", "<li>", "<list>"],
                1,
                "<ul> stands for Unordered List and creates bullets."
            ),
        ],

        questions: [
            qa(
                "What is the difference between <ol> and <ul>?",
                "<ol> (Ordered List) displays items with numbers or letters in a specific sequence. <ul> (Unordered List) displays items with bullet points where the order does not matter. Both use the <li> tag to define individual list items.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Hyperlinks and Images
========================================================= */

const linksAndImages = createTopic(
    "hyperlinks-and-images",
    "Hyperlinks and Images",

    [
        heading("Hyperlinks"),

        definition(
            "Hyperlink",
            "A hyperlink is a reference to data that the user can follow by clicking or tapping. It connects one webpage to another."
        ),

        code(
            `<a href="https://www.google.com" target="_blank">Visit Google</a>
<a href="page2.html">Go to Page 2</a>
<a href="#section1">Jump to Section 1</a>`,
            "html",
            "Hyperlink examples"
        ),

        table(
            ["Attribute", "Purpose"],
            [
                ["href", "Specifies the URL or destination of the link"],
                ["target", "Specifies where to open the link (_blank opens in new tab)"],
                ["title", "Shows tooltip text on hover"],
            ]
        ),

        heading("Images in HTML"),

        code(
            `<img src="logo.png" alt="Company Logo" width="200" height="100">`,
            "html",
            "Image tag example"
        ),

        table(
            ["Attribute", "Purpose"],
            [
                ["src", "Source URL or path of the image file"],
                ["alt", "Alternative text displayed if the image fails to load"],
                ["width", "Width of the image in pixels or percentage"],
                ["height", "Height of the image in pixels or percentage"],
            ]
        ),

        note(
            "Always use the 'alt' attribute for images. It improves accessibility for visually impaired users using screen readers and helps with SEO.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "The <a> tag is used to create hyperlinks.",
            "The <img> tag is an empty tag (no closing tag) used to embed images.",
            "The 'alt' attribute provides alternative text for images.",
        ]),
    ],

    {
        summary: "Learn how to create hyperlinks and embed images using HTML tags.",
        minutes: 10,
        tags: ["html", "links", "images", "tags"],

        mcqs: [
            mcq(
                "Which attribute specifies the URL in an anchor tag?",
                ["src", "link", "href", "url"],
                2,
                "The 'href' attribute specifies the destination URL."
            ),
            mcq(
                "Which attribute provides alternative text for an image?",
                ["title", "src", "alt", "text"],
                2,
                "The 'alt' attribute provides alternative text."
            ),
        ],

        questions: [
            qa(
                "Explain the use of the <a> and <img> tags in HTML.",
                "The <a> (anchor) tag is used to create hyperlinks that navigate users to other webpages or sections. It uses the 'href' attribute to define the destination. The <img> tag is used to embed images in a webpage. It is an empty tag and uses the 'src' attribute for the image path and the 'alt' attribute for alternative text.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    internetAndWWW,
    htmlBasics,
    textAndLists,
    linksAndImages,
];