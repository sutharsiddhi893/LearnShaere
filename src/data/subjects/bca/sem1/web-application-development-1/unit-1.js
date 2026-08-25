/* =========================================================
   BCA • SEM 1 • Web Application Development - I
   UNIT 1 — Web Page Designing - I
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
   TOPIC 1 — Introduction to the Internet and the Web
========================================================= */

const introductionToWeb = createTopic(
    "introduction-to-internet-and-web",
    "Introduction to the Internet and the Web",

    [
        definition(
            "Internet",
            "A global network of interconnected computers that communicate with each other using a common set of protocols."
        ),

        definition(
            "World Wide Web",
            "A collection of linked documents and resources that are accessed over the Internet using web browsers."
        ),

        text(
            "The Internet and the World Wide Web are often used interchangeably, but they are not the same. The Internet is the physical network of computers, while the Web is one of the many services that run on top of that network."
        ),

        heading("Internet versus World Wide Web"),

        table(
            ["Basis", "Internet", "World Wide Web"],
            [
                ["Meaning", "Network of networks", "Collection of web pages"],
                ["Nature", "Hardware infrastructure", "Software service"],
                ["Invented by", "Vint Cerf and Bob Kahn", "Tim Berners-Lee"],
                ["Year", "1969 as ARPANET", "1989"],
                ["Uses", "Email, FTP, Web, chat", "Only web pages"],
                ["Dependency", "Can exist without the Web", "Cannot exist without the Internet"],
            ]
        ),

        heading("Key Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Web Page", "A single document written in HTML."],
                ["Website", "A collection of related web pages under one domain."],
                ["Web Server", "A computer that stores websites and serves them on request."],
                ["Web Browser", "Software used to view web pages, such as Chrome or Firefox."],
                ["Home Page", "The first or main page of a website."],
                ["Hyperlink", "A clickable link that connects one page to another."],
                ["Web Hosting", "A service that stores a website on a server so it is available online."],
            ]
        ),

        heading("Understanding a URL"),

        definition(
            "URL",
            "Uniform Resource Locator, the complete address used to locate a resource on the Internet."
        ),

        code(
            `https://www.learnsphere.com:443/courses/bca/index.html?id=5#unit1

https        →  Protocol
www          →  Sub domain
learnsphere  →  Domain name
.com         →  Top level domain
:443         →  Port number
/courses/bca →  Path
index.html   →  File name
?id=5        →  Query string
#unit1       →  Fragment or anchor`,
            "text",
            "Parts of a URL"
        ),

        heading("Common Protocols"),

        table(
            ["Protocol", "Full Form", "Purpose"],
            [
                ["HTTP", "HyperText Transfer Protocol", "Transfers web pages between server and browser."],
                ["HTTPS", "HTTP Secure", "Same as HTTP but encrypted for security."],
                ["FTP", "File Transfer Protocol", "Transfers files between computers."],
                ["SMTP", "Simple Mail Transfer Protocol", "Sends outgoing email."],
                ["POP3", "Post Office Protocol version 3", "Receives incoming email."],
                ["TCP/IP", "Transmission Control Protocol / Internet Protocol", "Basic communication protocol of the Internet."],
            ]
        ),

        heading("How a Web Page Reaches Your Browser"),

        steps([
            "The user types a URL into the browser address bar.",
            "The browser contacts a DNS server to convert the domain name into an IP address.",
            "The browser sends an HTTP request to the web server at that IP address.",
            "The web server locates the requested file and prepares a response.",
            "The server sends the HTML file back as an HTTP response.",
            "The browser parses the HTML and renders the page on the screen.",
        ]),

        definition(
            "DNS",
            "Domain Name System, a service that translates human readable domain names into numeric IP addresses."
        ),

        heading("Types of Websites"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Static", "Content does not change unless edited manually.", "A portfolio site"],
                ["Dynamic", "Content changes based on user or database input.", "A social network"],
                ["E-commerce", "Used for buying and selling products online.", "An online store"],
                ["Portal", "Provides access to many services in one place.", "A university portal"],
            ]
        ),

        note(
            "Static websites are built using only HTML and CSS, while dynamic websites additionally require a server side language such as PHP and a database such as MySQL.",
            "tip"
        ),

        keyPoints([
            "The Internet is the network while the Web is a service running on it.",
            "A URL is the complete address of a resource on the Internet.",
            "DNS translates domain names into IP addresses.",
            "HTTP transfers web pages while HTTPS does the same securely.",
            "Static websites show fixed content while dynamic websites generate content on request.",
        ]),
    ],

    {
        summary:
            "Understand the difference between the Internet and the Web, learn key terminology, URLs, protocols and how a page loads.",
        minutes: 10,
        tags: ["web", "basics", "theory"],

        mcqs: [
            mcq(
                "The World Wide Web was invented by:",
                ["Vint Cerf", "Tim Berners-Lee", "Bob Kahn", "Charles Babbage"],
                1,
                "Tim Berners-Lee invented the World Wide Web in 1989."
            ),
            mcq(
                "Which service translates a domain name into an IP address?",
                ["HTTP", "FTP", "DNS", "SMTP"],
                2,
                "The Domain Name System converts domain names into IP addresses."
            ),
            mcq(
                "URL stands for:",
                [
                    "Universal Resource Link",
                    "Uniform Resource Locator",
                    "Unified Reference Locator",
                    "Uniform Reference Link",
                ],
                1,
                "URL means Uniform Resource Locator."
            ),
            mcq(
                "Which protocol is used to send outgoing email?",
                ["POP3", "SMTP", "FTP", "HTTP"],
                1,
                "SMTP is the Simple Mail Transfer Protocol used for sending email."
            ),
            mcq(
                "A collection of related web pages under one domain is called a:",
                ["Web page", "Website", "Web server", "Web browser"],
                1,
                "A website is a collection of related web pages."
            ),
        ],

        questions: [
            qa(
                "Differentiate between the Internet and the World Wide Web.",
                "The Internet is a global network of interconnected computers and is essentially hardware infrastructure created in 1969 as ARPANET. The World Wide Web is a collection of linked documents accessed over the Internet and is a software service invented by Tim Berners-Lee in 1989. The Internet supports many services such as email and file transfer, whereas the Web deals only with web pages. The Internet can exist without the Web but the Web cannot exist without the Internet.",
                4
            ),
            qa(
                "Explain the different parts of a URL with an example.",
                "A URL consists of several parts. The protocol such as https specifies how the resource is accessed. The domain name identifies the website. The top level domain such as dot com indicates the category. The port number specifies the communication endpoint. The path indicates the folder structure. The file name identifies the specific document. The query string passes data using a question mark, and the fragment beginning with a hash points to a section within the page.",
                5
            ),
            qa(
                "Explain how a web page is displayed in a browser.",
                "The user types a URL in the browser. The browser contacts a DNS server which converts the domain name into an IP address. The browser then sends an HTTP request to the web server at that address. The server locates the requested file and sends it back as an HTTP response. Finally the browser parses the received HTML and renders the page on the screen.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Introduction to HTML
========================================================= */

const introductionToHtml = createTopic(
    "introduction-to-html",
    "Introduction to HTML",

    [
        definition(
            "HTML",
            "HyperText Markup Language, the standard language used to create the structure and content of web pages."
        ),

        text(
            "HTML is not a programming language. It is a markup language, which means it uses tags to describe the structure and meaning of content rather than performing calculations or logic."
        ),

        heading("Features of HTML"),

        list([
            "It is easy to learn and simple to write.",
            "It is platform independent and runs in every browser.",
            "It supports text, images, audio, video and links.",
            "It is not case sensitive, although lowercase is recommended.",
            "It requires no special software; a simple text editor is enough.",
            "It can be combined with CSS and JavaScript for styling and interactivity.",
        ]),

        heading("Understanding Tags, Elements and Attributes"),

        definition(
            "Tag",
            "A keyword enclosed in angle brackets that tells the browser how to display content, for example a paragraph tag."
        ),

        definition(
            "Element",
            "The complete unit consisting of an opening tag, the content and a closing tag."
        ),

        definition(
            "Attribute",
            "Additional information written inside the opening tag that modifies the behaviour of an element."
        ),

        code(
            `<p align="center">Welcome to LearnSphere</p>

 │  │        │              │           │
 │  │        │              │           └─ Closing tag
 │  │        │              └───────────── Content
 │  │        └──────────────────────────── Attribute value
 │  └───────────────────────────────────── Attribute name
 └──────────────────────────────────────── Opening tag`,
            "html",
            "Anatomy of an HTML element"
        ),

        heading("Types of Tags"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Paired or Container", "Has both an opening and a closing tag.", "<p> ... </p>"],
                ["Unpaired or Empty", "Has no closing tag.", "<br>, <hr>, <img>"],
            ]
        ),

        heading("Basic Structure of an HTML Document"),

        code(
            `<!DOCTYPE html>
<html>

<head>
    <title>My First Page</title>
</head>

<body>
    <h1>Welcome</h1>
    <p>This is my first web page.</p>
</body>

</html>`,
            "html",
            "The skeleton of every HTML page"
        ),

        heading("Purpose of Each Section"),

        table(
            ["Tag", "Purpose"],
            [
                ["<!DOCTYPE html>", "Declares that the document is written in HTML5."],
                ["<html>", "The root element that contains the entire document."],
                ["<head>", "Contains information about the page that is not displayed."],
                ["<title>", "Sets the text shown on the browser tab."],
                ["<body>", "Contains all the visible content of the page."],
            ]
        ),

        heading("Creating Your First Web Page"),

        steps([
            "Open a plain text editor such as Notepad or VS Code.",
            "Type the HTML code shown above.",
            "Save the file with the extension .html, for example index.html.",
            "Select All Files as the file type so it is not saved as a text file.",
            "Double click the saved file to open it in a web browser.",
        ]),

        heading("Comments in HTML"),

        code(
            `<!-- This is a single line comment -->

<!-- 
    This is a
    multi line comment 
-->

<p>Visible text</p>`,
            "html",
            "Writing comments"
        ),

        text(
            "Comments are ignored by the browser and are never displayed on the page. They are written to explain the code to other developers."
        ),

        heading("HTML Versions"),

        table(
            ["Version", "Year", "Highlight"],
            [
                ["HTML 1.0", "1991", "The first basic version."],
                ["HTML 2.0", "1995", "Added form support."],
                ["HTML 3.2", "1997", "Added tables and applets."],
                ["HTML 4.01", "1999", "Introduced style sheets."],
                ["XHTML", "2000", "A stricter XML based version."],
                ["HTML5", "2014", "Added audio, video and semantic tags."],
            ]
        ),

        note(
            "HTML is not case sensitive, so the paragraph tag written in uppercase or lowercase works the same way. However, writing all tags in lowercase is the accepted standard and improves readability.",
            "tip"
        ),

        keyPoints([
            "HTML is a markup language, not a programming language.",
            "An element consists of an opening tag, content and a closing tag.",
            "Attributes provide extra information and are written in the opening tag.",
            "Every HTML page has a head section for information and a body section for content.",
            "Files must be saved with the extension dot html.",
        ]),
    ],

    {
        summary:
            "Learn what HTML is, understand tags, elements and attributes, and create your first web page.",
        minutes: 11,
        tags: ["html", "basics", "important"],

        mcqs: [
            mcq(
                "HTML stands for:",
                [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "HyperTool Multi Language",
                    "Home Tool Markup Language",
                ],
                0,
                "HTML means HyperText Markup Language."
            ),
            mcq(
                "Which tag contains the visible content of a web page?",
                ["<head>", "<title>", "<body>", "<html>"],
                2,
                "All visible content is placed inside the body tag."
            ),
            mcq(
                "Which of the following is an empty tag?",
                ["<p>", "<br>", "<div>", "<h1>"],
                1,
                "The line break tag has no closing tag."
            ),
            mcq(
                "Where does the text inside the title tag appear?",
                ["On the page", "On the browser tab", "In the footer", "Nowhere"],
                1,
                "The title text is shown on the browser tab."
            ),
            mcq(
                "Which extension is used to save an HTML file?",
                [".htm or .html", ".txt", ".web", ".doc"],
                0,
                "HTML files are saved with the extension htm or html."
            ),
            mcq(
                "HTML comments are written using:",
                ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
                2,
                "HTML comments begin with an exclamation and two hyphens inside angle brackets."
            ),
        ],

        questions: [
            qa(
                "What is HTML? Explain its features.",
                "HTML stands for HyperText Markup Language and is the standard language used to create the structure and content of web pages. Its features are that it is easy to learn, platform independent, supports text, images, audio and video, is not case sensitive, requires no special software beyond a text editor, and can be combined with CSS and JavaScript for styling and interactivity.",
                4
            ),
            qa(
                "Explain the basic structure of an HTML document.",
                "Every HTML document begins with the DOCTYPE declaration which specifies the HTML version. The html tag is the root element containing the whole document. Inside it, the head section holds information about the page such as the title which appears on the browser tab. The body section contains all the visible content such as headings, paragraphs and images. The document ends by closing the html tag.",
                5
            ),
            qa(
                "Differentiate between a tag, an element and an attribute.",
                "A tag is a keyword enclosed in angle brackets that instructs the browser how to display content. An element is the complete unit consisting of the opening tag, the content and the closing tag. An attribute is additional information written inside the opening tag that modifies the behaviour or appearance of the element, and it is always written as a name and value pair.",
                3
            ),
            qa(
                "Differentiate between paired and unpaired tags with examples.",
                "Paired tags, also called container tags, have both an opening and a closing tag and the content is placed between them, for example the paragraph tag and the heading tag. Unpaired tags, also called empty tags, do not have a closing tag because they contain no content, for example the line break tag, the horizontal rule tag and the image tag.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Text Formatting Tags
========================================================= */

const textFormattingTags = createTopic(
    "text-formatting-tags",
    "Text Formatting Tags",

    [
        text(
            "HTML provides a wide range of tags for structuring and formatting text on a web page, from headings and paragraphs to bold, italic and superscript."
        ),

        heading("Heading Tags"),

        text(
            "HTML provides six levels of headings. The h1 tag produces the largest heading and h6 the smallest."
        ),

        code(
            `<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>`,
            "html",
            "The six heading levels"
        ),

        note(
            "A page should normally contain only one h1 tag which describes the main topic. Using headings in the correct order also helps search engines understand the structure of the page.",
            "tip"
        ),

        heading("Paragraph and Line Break"),

        code(
            `<p>This is the first paragraph of text.</p>

<p>This is the second paragraph.</p>

<p>Line one<br>Line two<br>Line three</p>

<hr>

<p>Content after a horizontal rule.</p>`,
            "html",
            "Paragraphs, breaks and rules"
        ),

        table(
            ["Tag", "Purpose", "Type"],
            [
                ["<p>", "Defines a paragraph", "Paired"],
                ["<br>", "Inserts a single line break", "Empty"],
                ["<hr>", "Draws a horizontal line", "Empty"],
                ["<pre>", "Preserves spaces and line breaks exactly", "Paired"],
            ]
        ),

        heading("Physical Formatting Tags"),

        text(
            "Physical tags change the visual appearance of text directly without indicating any meaning."
        ),

        table(
            ["Tag", "Effect", "Example"],
            [
                ["<b>", "Bold text", "<b>Bold</b>"],
                ["<i>", "Italic text", "<i>Italic</i>"],
                ["<u>", "Underlined text", "<u>Underline</u>"],
                ["<s>", "Strikethrough text", "<s>Removed</s>"],
                ["<sub>", "Subscript", "H<sub>2</sub>O"],
                ["<sup>", "Superscript", "x<sup>2</sup>"],
                ["<big>", "Larger text", "<big>Big</big>"],
                ["<small>", "Smaller text", "<small>Small</small>"],
            ]
        ),

        code(
            `<p>This word is <b>bold</b> and this one is <i>italic</i>.</p>
<p>Water is written as H<sub>2</sub>O.</p>
<p>The formula is x<sup>2</sup> + y<sup>2</sup>.</p>
<p>The price was <s>500</s> now 350.</p>`,
            "html",
            "Physical formatting in use"
        ),

        heading("Logical Formatting Tags"),

        text(
            "Logical tags describe the meaning of the text rather than its appearance. Search engines and screen readers understand them better."
        ),

        table(
            ["Tag", "Meaning", "Displayed As"],
            [
                ["<strong>", "Strongly important text", "Bold"],
                ["<em>", "Emphasised text", "Italic"],
                ["<mark>", "Highlighted text", "Yellow background"],
                ["<code>", "A piece of computer code", "Monospace font"],
                ["<abbr>", "An abbreviation", "Dotted underline"],
                ["<blockquote>", "A long quotation", "Indented block"],
                ["<q>", "A short inline quotation", "Wrapped in quotes"],
            ]
        ),

        code(
            `<p><strong>Warning:</strong> Do not close the window.</p>
<p>This is <em>very</em> important.</p>
<p>Use the <code>printf()</code> function.</p>
<p>Search for <mark>HTML tags</mark> in the notes.</p>

<blockquote>
    Learning never exhausts the mind.
</blockquote>`,
            "html",
            "Logical formatting in use"
        ),

        heading("Physical versus Logical Tags"),

        table(
            ["Basis", "Physical Tags", "Logical Tags"],
            [
                ["Purpose", "Change appearance only", "Convey meaning"],
                ["Example", "<b> and <i>", "<strong> and <em>"],
                ["Screen readers", "No special treatment", "Read with emphasis"],
                ["SEO value", "None", "Helps search engines"],
                ["Recommended", "For visual styling only", "For meaningful content"],
            ]
        ),

        heading("The font Tag and Its Attributes"),

        code(
            `<font face="Arial" size="5" color="blue">
    Styled text using the font tag
</font>`,
            "html",
            "The deprecated font tag"
        ),

        note(
            "The font tag is deprecated in HTML5 and should no longer be used. Text styling must now be done using CSS. It is included here only because it still appears in the syllabus and in older examination papers.",
            "warning",
            "Deprecated"
        ),

        heading("Character Entities"),

        text(
            "Some characters have a special meaning in HTML and cannot be typed directly. They must be written using character entities."
        ),

        table(
            ["Entity", "Displays", "Meaning"],
            [
                ["&lt;", "<", "Less than"],
                ["&gt;", ">", "Greater than"],
                ["&amp;", "&", "Ampersand"],
                ["&quot;", '"', "Double quote"],
                ["&nbsp;", "space", "Non breaking space"],
                ["&copy;", "©", "Copyright symbol"],
                ["&reg;", "®", "Registered symbol"],
            ]
        ),

        code(
            `<p>Use &lt;p&gt; to create a paragraph.</p>
<p>Tea &amp; Coffee</p>
<p>&copy; 2025 LearnSphere</p>`,
            "html",
            "Using character entities"
        ),

        keyPoints([
            "HTML provides six heading levels from h1 to h6.",
            "The br tag inserts a line break and hr draws a horizontal line.",
            "Physical tags change appearance while logical tags convey meaning.",
            "The strong and em tags are preferred over b and i.",
            "The font tag is deprecated in HTML5 and CSS should be used instead.",
        ]),
    ],

    {
        summary:
            "Master heading, paragraph and formatting tags, and learn the difference between physical and logical formatting.",
        minutes: 12,
        tags: ["html", "formatting", "important"],

        mcqs: [
            mcq(
                "How many heading levels are available in HTML?",
                ["Four", "Five", "Six", "Seven"],
                2,
                "HTML provides six heading levels from h1 to h6."
            ),
            mcq(
                "Which tag inserts a single line break?",
                ["<hr>", "<br>", "<p>", "<lb>"],
                1,
                "The br tag inserts a line break."
            ),
            mcq(
                "Which tag is used to display H2O correctly?",
                ["<sup>", "<sub>", "<small>", "<em>"],
                1,
                "The sub tag creates subscript text."
            ),
            mcq(
                "Which of the following is a logical formatting tag?",
                ["<b>", "<i>", "<strong>", "<u>"],
                2,
                "The strong tag conveys meaning and is therefore a logical tag."
            ),
            mcq(
                "Which character entity displays the less than symbol?",
                ["&gt;", "&lt;", "&amp;", "&quot;"],
                1,
                "The entity written as ampersand l t semicolon displays the less than symbol."
            ),
            mcq(
                "The font tag in HTML5 is:",
                ["Recommended", "Deprecated", "Required", "Newly added"],
                1,
                "The font tag is deprecated and CSS should be used instead."
            ),
        ],

        questions: [
            qa(
                "Explain the heading tags in HTML.",
                "HTML provides six levels of heading tags from h1 to h6. The h1 tag produces the largest and most important heading while h6 produces the smallest. Headings are block level elements that automatically add space above and below the text. A page should normally have only one h1 tag describing the main topic, and the remaining levels should be used in order to create a logical structure that helps both readers and search engines.",
                4
            ),
            qa(
                "Differentiate between physical and logical formatting tags.",
                "Physical tags such as b for bold and i for italic change only the visual appearance of text without indicating any meaning. Logical tags such as strong and em convey the importance or emphasis of the text in addition to changing its appearance. Logical tags are preferred because screen readers announce them with appropriate emphasis and search engines use them to understand the significance of content.",
                4
            ),
            qa(
                "What are character entities? Explain any four with examples.",
                "Character entities are special codes used to display characters that have a reserved meaning in HTML or cannot be typed directly. The entity for less than displays the opening angle bracket, the entity for greater than displays the closing angle bracket, the entity for ampersand displays the and symbol, and the non breaking space entity inserts a space that the browser will not collapse. Each entity begins with an ampersand and ends with a semicolon.",
                4
            ),
            qa(
                "Explain any five text formatting tags with examples.",
                "The b tag makes text bold and the i tag makes it italic. The u tag underlines text while the s tag draws a line through it. The sub tag creates subscript which is useful for chemical formulas such as water, and the sup tag creates superscript which is useful for mathematical powers. The mark tag highlights text with a yellow background.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Lists in HTML
========================================================= */

const listsInHtml = createTopic(
    "lists-in-html",
    "Lists in HTML",

    [
        text(
            "Lists are used to present related items in an organised manner. HTML provides three types of lists: ordered, unordered and definition lists."
        ),

        heading("Types of Lists"),

        table(
            ["Type", "Tag", "Description"],
            [
                ["Unordered list", "<ul>", "Items are marked with bullets."],
                ["Ordered list", "<ol>", "Items are numbered in sequence."],
                ["Definition list", "<dl>", "Terms paired with their descriptions."],
            ]
        ),

        heading("1. Unordered List"),

        code(
            `<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`,
            "html",
            "A simple bulleted list"
        ),

        heading("Bullet Styles"),

        table(
            ["Value of type", "Bullet Shape"],
            [
                ["disc", "Filled circle, the default"],
                ["circle", "Hollow circle"],
                ["square", "Filled square"],
            ]
        ),

        code(
            `<ul type="disc">
    <li>First item</li>
</ul>

<ul type="circle">
    <li>Second item</li>
</ul>

<ul type="square">
    <li>Third item</li>
</ul>`,
            "html",
            "Changing the bullet style"
        ),

        heading("2. Ordered List"),

        code(
            `<ol>
    <li>Open the editor</li>
    <li>Write the code</li>
    <li>Save the file</li>
    <li>Open it in a browser</li>
</ol>`,
            "html",
            "A numbered list"
        ),

        heading("Numbering Styles"),

        table(
            ["Value of type", "Numbering", "Example"],
            [
                ["1", "Arabic numerals, the default", "1, 2, 3"],
                ["A", "Uppercase letters", "A, B, C"],
                ["a", "Lowercase letters", "a, b, c"],
                ["I", "Uppercase Roman numerals", "I, II, III"],
                ["i", "Lowercase Roman numerals", "i, ii, iii"],
            ]
        ),

        code(
            `<ol type="I">
    <li>Introduction</li>
    <li>Main Content</li>
    <li>Conclusion</li>
</ol>

<ol type="a" start="3">
    <li>Third item shown as c</li>
    <li>Fourth item shown as d</li>
</ol>`,
            "html",
            "Roman numerals and a custom start value"
        ),

        heading("Attributes of Ordered Lists"),

        table(
            ["Attribute", "Purpose"],
            [
                ["type", "Sets the numbering style."],
                ["start", "Specifies the number to begin counting from."],
                ["reversed", "Displays the list in descending order."],
            ]
        ),

        heading("3. Definition List"),

        code(
            `<dl>
    <dt>HTML</dt>
    <dd>The language used to structure web pages.</dd>

    <dt>CSS</dt>
    <dd>The language used to style web pages.</dd>

    <dt>JavaScript</dt>
    <dd>The language used to add interactivity.</dd>
</dl>`,
            "html",
            "Terms and their definitions"
        ),

        table(
            ["Tag", "Meaning"],
            [
                ["<dl>", "Definition list, the container."],
                ["<dt>", "Definition term, the word being defined."],
                ["<dd>", "Definition description, the explanation."],
            ]
        ),

        heading("Nested Lists"),

        text(
            "A list can be placed inside another list to create a hierarchy of items."
        ),

        code(
            `<ol>
    <li>Frontend
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>
    </li>

    <li>Backend
        <ul>
            <li>PHP</li>
            <li>Node.js</li>
        </ul>
    </li>
</ol>`,
            "html",
            "A list inside another list"
        ),

        note(
            "When nesting lists, the inner list must be placed inside the li element of the outer list, not between two li elements. Placing it incorrectly produces invalid HTML.",
            "warning",
            "Common Mistake"
        ),

        keyPoints([
            "HTML provides unordered, ordered and definition lists.",
            "The ul tag creates bullets while the ol tag creates numbers.",
            "Every list item is written inside an li tag.",
            "The type attribute changes the bullet or numbering style.",
            "Lists can be nested inside one another to show hierarchy.",
        ]),
    ],

    {
        summary:
            "Learn to create unordered, ordered, definition and nested lists with all their styling attributes.",
        minutes: 9,
        tags: ["html", "lists"],

        mcqs: [
            mcq(
                "Which tag creates a bulleted list?",
                ["<ol>", "<ul>", "<dl>", "<li>"],
                1,
                "The ul tag creates an unordered or bulleted list."
            ),
            mcq(
                "Which tag defines an item inside a list?",
                ["<item>", "<li>", "<dt>", "<dd>"],
                1,
                "Each item of an ordered or unordered list uses the li tag."
            ),
            mcq(
                "Which attribute of the ol tag sets the starting number?",
                ["type", "begin", "start", "value"],
                2,
                "The start attribute specifies the first number of the list."
            ),
            mcq(
                "In a definition list, which tag holds the description?",
                ["<dl>", "<dt>", "<dd>", "<li>"],
                2,
                "The dd tag holds the definition description."
            ),
            mcq(
                "Which value of the type attribute produces hollow bullets?",
                ["disc", "circle", "square", "round"],
                1,
                "The value circle produces hollow circular bullets."
            ),
        ],

        questions: [
            qa(
                "Explain the different types of lists in HTML with examples.",
                "HTML provides three types of lists. An unordered list created with the ul tag displays items with bullets and each item is placed in an li tag. An ordered list created with the ol tag numbers the items in sequence and also uses li tags. A definition list created with the dl tag pairs a term written in a dt tag with its description written in a dd tag, and it is commonly used for glossaries.",
                5
            ),
            qa(
                "Explain the attributes of the ordered list tag.",
                "The type attribute sets the numbering style and may be the digit one for numbers, uppercase A or lowercase a for letters, or uppercase I or lowercase i for Roman numerals. The start attribute specifies the number from which counting should begin. The reversed attribute displays the list in descending order instead of ascending.",
                4
            ),
            qa(
                "What is a nested list? Write an example.",
                "A nested list is a list placed inside another list to represent a hierarchy of information. The inner list must be written inside an li element of the outer list. For example an ordered list of categories such as Frontend and Backend can each contain an inner unordered list of technologies such as HTML, CSS and JavaScript under Frontend, and PHP and Node under Backend.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToWeb,
    introductionToHtml,
    textFormattingTags,
    listsInHtml,
];