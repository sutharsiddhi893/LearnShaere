/* =========================================================
   B.Sc IT • SEM 1 • Basics of Web Designing
   UNIT 2 — Web Page Designing - II (Deep Dive)
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
   TOPIC 1 — Semantic HTML5 Tables
========================================================= */

const tablesAndFrames = createTopic(
    "semantic-html5-tables",
    "Semantic HTML5 Tables",

    [
        definition(
            "HTML Table",
            "An HTML table is used to display tabular data (data in rows and columns). In HTML5, tables should only be used for data, not for page layout."
        ),

        heading("Semantic Table Structure"),

        text(
            "To make tables accessible and easier to style, HTML5 introduces semantic tags to divide the table into logical sections."
        ),

        code(
            `<table border="1">
  <caption>Student Marks Sheet</caption>
  
  <thead>
    <tr>
      <th scope="col">Roll No</th>
      <th scope="col">Name</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td>101</td>
      <td>Amit Patel</td>
      <td>85</td>
    </tr>
    <tr>
      <td>102</td>
      <td>Riya Shah</td>
      <td>92</td>
    </tr>
  </tbody>
  
  <tfoot>
    <tr>
      <td colspan="2">Total Average</td>
      <td>88.5</td>
    </tr>
  </tfoot>
</table>`,
            "html",
            "Fully Semantic HTML5 Table"
        ),

        table(
            ["Tag", "Purpose"],
            [
                ["<caption>", "Provides a title for the table. Must be the first child of <table>."],
                ["<thead>", "Groups the header content (column titles)."],
                ["<tbody>", "Groups the main body content of the table."],
                ["<tfoot>", "Groups the footer content (e.g., sums, averages)."],
                ["<th> scope", "Specifies if the header is for a 'col' (column) or 'row'."],
            ]
        ),

        heading("Merging Cells: Colspan and Rowspan"),

        text(
            "Sometimes, data spans multiple columns or rows. We use the 'colspan' and 'rowspan' attributes to merge cells."
        ),

        code(
            `<table border="1">
  <tr>
    <th>Name</th>
    <th colspan="2">Contact Details</th> <!-- Merges 2 columns -->
  </tr>
  <tr>
    <td>Amit</td>
    <td>amit@test.com</td>
    <td>9876543210</td>
  </tr>
  <tr>
    <td rowspan="2">Group A</td> <!-- Merges 2 rows -->
    <td>Riya</td>
    <td>riya@test.com</td>
  </tr>
  <tr>
    <!-- First cell is skipped because of rowspan above -->
    <td>John</td>
    <td>john@test.com</td>
  </tr>
</table>`,
            "html",
            "Colspan and Rowspan Example"
        ),

        note(
            "Never use HTML tables for webpage layout (like creating sidebars or headers). Use CSS Flexbox or Grid for layout. Tables are strictly for tabular data.",
            "warning",
            "HTML5 Rule"
        ),

        keyPoints([
            "Use <thead>, <tbody>, and <tfoot> for semantic structure.",
            "The <caption> tag provides an accessible title for the table.",
            "colspan merges columns horizontally; rowspan merges rows vertically.",
            "Tables are for data, not for CSS layout.",
        ]),
    ],

    {
        summary: "Build accessible, semantic tables using thead, tbody, tfoot, caption, and cell merging attributes.",
        minutes: 12,
        tags: ["html", "tables", "semantic", "colspan", "rowspan", "accessibility"],

        mcqs: [
            mcq(
                "Which tag is used to provide a title for an HTML table?",
                ["<title>", "<head>", "<caption>", "<summary>"],
                2,
                "<caption> is the correct tag for a table title."
            ),
            mcq(
                "If you want a cell to span across 3 columns, which attribute do you use?",
                ["rowspan='3'", "colspan='3'", "span='3'", "columns='3'"],
                1,
                "colspan='3' merges 3 columns horizontally."
            ),
        ],

        questions: [
            qa(
                "Explain the purpose of <thead>, <tbody>, and <tfoot> in an HTML table.",
                "These tags divide an HTML table into logical, semantic sections. <thead> contains the header rows (usually <th> elements) defining the columns. <tbody> contains the main data rows of the table. <tfoot> contains the footer rows, often used for summaries, totals, or averages. Using these tags improves accessibility for screen readers, allows browsers to render the table body before the footer loads, and makes it easier to apply CSS styling or print specific sections.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Advanced HTML Forms and Validation
========================================================= */

const htmlForms = createTopic(
    "advanced-html-forms",
    "Advanced HTML Forms and Validation",

    [
        definition(
            "HTML Form",
            "A form is a container for interactive controls (inputs, buttons, selects) that allows users to submit data to a web server for processing."
        ),

        heading("Form Attributes Deep Dive"),

        table(
            ["Attribute", "Purpose"],
            [
                ["action", "The URL where the form data is sent."],
                ["method", "HTTP method: 'GET' (data in URL) or 'POST' (data in body)."],
                ["enctype", "Specifies how data is encoded. Use 'multipart/form-data' for file uploads."],
                ["target", "Where to display the response (_self, _blank)."],
                ["autocomplete", "'on' or 'off'. Helps browsers predict user input."],
                ["novalidate", "If present, the form skips browser validation on submit."],
            ]
        ),

        heading("Grouping Form Elements"),

        text(
            "For complex forms, we use <fieldset> to group related elements and <legend> to provide a caption for that group."
        ),

        code(
            `<form action="/register" method="POST" enctype="multipart/form-data">
  
  <fieldset>
    <legend>Personal Information</legend>
    
    <label for="fname">First Name:</label>
    <input type="text" id="fname" name="fname" required minlength="3">
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </fieldset>

  <fieldset>
    <legend>Account Details</legend>
    
    <label for="pwd">Password:</label>
    <input type="password" id="pwd" name="pwd" pattern="(?=.*\d)(?=.*[a-z]).{8,}" title="Must contain at least one number and one lowercase letter, and at least 8 characters">
    
    <label for="avatar">Profile Picture:</label>
    <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg">
  </fieldset>

  <button type="submit">Register</button>
  <button type="reset">Clear</button>
</form>`,
            "html",
            "Advanced Form with Fieldsets and Validation"
        ),

        heading("HTML5 Input Types and Attributes"),

        table(
            ["Type/Attribute", "Purpose / Behavior"],
            [
                ["type='email'", "Validates for a proper email format automatically."],
                ["type='url'", "Validates for a proper URL format."],
                ["type='number'", "Accepts only numbers. Use 'min', 'max', 'step' attributes."],
                ["type='date' / 'time'", "Provides native browser date/time pickers."],
                ["type='range'", "Creates a slider control. Use 'min', 'max', 'value'."],
                ["type='color'", "Opens a native color picker."],
                ["type='search'", "A text field designed for search queries (often clears easily)."],
                ["placeholder", "Shows hint text inside the input before the user types."],
                ["pattern", "Uses Regular Expressions (Regex) for custom validation."],
            ]
        ),

        note(
            "While HTML5 client-side validation (like 'required', 'pattern', 'type=\"email\"') improves user experience, it can be easily bypassed. Always validate data on the server-side (using Node.js, PHP, Python, etc.) for security.",
            "warning",
            "Security Rule"
        ),

        keyPoints([
            "Use <fieldset> and <legend> to group related form controls.",
            "Always use <label> linked to inputs via the 'for' and 'id' attributes.",
            "Use 'enctype=\"multipart/form-data\"' when uploading files.",
            "HTML5 input types provide built-in validation and native UI pickers.",
        ]),
    ],

    {
        summary: "Build complex, accessible forms using fieldsets, advanced input types, and HTML5 validation attributes.",
        minutes: 15,
        tags: ["html", "forms", "validation", "fieldset", "input-types", "security"],

        mcqs: [
            mcq(
                "Which attribute is mandatory in a form if you want to upload a file?",
                ["method='POST'", "enctype='multipart/form-data'", "action='/upload'", "accept='file'"],
                1,
                "Without enctype='multipart/form-data', file data will not be sent correctly."
            ),
            mcq(
                "Which HTML5 input type provides a slider control?",
                ["type='slider'", "type='scroll'", "type='range'", "type='number'"],
                2,
                "type='range' creates a slider."
            ),
            mcq(
                "What is the purpose of the <legend> tag?",
                ["To create a list", "To provide a caption for a <fieldset>", "To validate the form", "To submit the form"],
                1,
                "<legend> defines the caption for its parent <fieldset>."
            ),
        ],

        questions: [
            qa(
                "Explain the importance of the <label> tag in HTML forms.",
                "The <label> tag defines a label for an input element. It is crucial for accessibility. When a <label> is correctly associated with an input (using the 'for' attribute matching the input's 'id'), clicking the label text will automatically focus or activate the input. This is especially helpful for users with motor disabilities who might have trouble clicking small checkboxes or radio buttons. Screen readers also read the label text when the input is focused.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — HTML5 Semantic Elements and Advanced Tags
========================================================= */

const html5Advanced = createTopic(
    "html5-semantic-and-advanced",
    "HTML5 Semantic Elements and Advanced Tags",

    [
        heading("The Power of Semantic HTML5"),

        text(
            "Semantic elements clearly describe their meaning to both the browser and the developer. Before HTML5, developers used generic <div> tags with IDs or classes (like <div id='header'>). HTML5 introduced specific tags for these roles."
        ),

        code(
            `<body>
  <header>
    <h1>My Website</h1>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="about">
      <h2>About Us</h2>
      <article>
        <h3>Our Story</h3>
        <p>We started in 2020...</p>
      </article>
    </section>
    
    <aside>
      <h3>Related Links</h3>
      <p>Check out our blog.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2023 My Website. All rights reserved.</p>
  </footer>
</body>`,
            "html",
            "Semantic HTML5 Page Layout"
        ),

        table(
            ["Tag", "Semantic Meaning"],
            [
                ["<header>", "Introductory content, usually contains logos and navigation."],
                ["<nav>", "Major navigation links. Not all links need to be in a <nav>."],
                ["<main>", "The dominant content of the <body>. Only one per page."],
                ["<section>", "A thematic grouping of content, typically with a heading."],
                ["<article>", "Self-contained content that could be distributed independently (e.g., a blog post)."],
                ["<aside>", "Content tangentially related to the main content (e.g., sidebars, ads)."],
                ["<footer>", "Footer for a section or page (copyright, contact info)."],
            ]
        ),

        heading("Advanced HTML5 Elements"),

        table(
            ["Tag", "Purpose"],
            [
                ["<details> & <summary>", "Creates a native accordion/disclosure widget. <summary> is the clickable heading."],
                ["<progress>", "Displays the progress of a task (e.g., file upload). Use 'value' and 'max'."],
                ["<meter>", "Represents a scalar measurement within a known range (e.g., disk usage, relevance)."],
                ["<mark>", "Highlights text for reference purposes (like a yellow highlighter)."],
                ["<time>", "Represents a specific time or date. Uses the 'datetime' attribute for machine readability."],
            ]
        ),

        code(
            `<!-- Accordion -->
<details>
  <summary>Click to see more details</summary>
  <p>This content is hidden by default and expands when clicked.</p>
</details>

<!-- Progress Bar -->
<progress value="70" max="100">70%</progress>

<!-- Meter (e.g., Disk Space) -->
<meter value="0.6">60%</meter>

<!-- Time -->
<p>The meeting is on <time datetime="2023-10-25T14:00">Wednesday at 2 PM</time>.</p>`,
            "html",
            "Advanced HTML5 Tags"
        ),

        keyPoints([
            "Semantic tags improve SEO, accessibility, and code readability.",
            "A page should have only one <main> element.",
            "<article> is for independent content; <section> is for thematic grouping.",
            "Tags like <details> and <progress> provide native UI without needing JavaScript.",
        ]),
    ],

    {
        summary: "Master HTML5 semantic layout tags and advanced native elements like details, progress, and meter.",
        minutes: 12,
        tags: ["html5", "semantic", "layout", "accessibility", "seo"],

        mcqs: [
            mcq(
                "Which tag represents the dominant content of the <body>?",
                ["<content>", "<main>", "<section>", "<body-content>"],
                1,
                "<main> specifies the main content of the document."
            ),
            mcq(
                "Which pair of tags creates a native expandable/collapsible widget?",
                ["<expand> and <collapse>", "<details> and <summary>", "<accordion> and <item>", "<open> and <close>"],
                1,
                "<details> and <summary> create a native disclosure widget."
            ),
            mcq(
                "What is the difference between <article> and <section>?",
                ["There is no difference", "<article> is for independent content; <section> is for thematic grouping", "<section> is for independent content", "<article> is only for blogs"],
                1,
                "<article> is self-contained; <section> is a thematic grouping."
            ),
        ],

        questions: [
            qa(
                "Why is semantic HTML important for SEO and Accessibility?",
                "Semantic HTML uses tags that clearly describe their meaning (like <header>, <nav>, <article>). For SEO, search engine crawlers use these tags to understand the structure and importance of content, which can improve rankings. For Accessibility, screen readers rely on semantic tags to help visually impaired users navigate the page (e.g., jumping directly to the <main> content or <nav> links). It also makes the code much easier for developers to read and maintain.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — HTML5 Multimedia and Embedded Content
========================================================= */

const multimediaTags = createTopic(
    "html5-multimedia-embedded",
    "HTML5 Multimedia and Embedded Content",

    [
        heading("Native Audio and Video"),

        text(
            "Before HTML5, playing media required third-party plugins like Adobe Flash. HTML5 introduced the <audio> and <video> tags, allowing native playback directly in the browser."
        ),

        code(
            `<video width="640" height="360" controls poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.webm" type="video/webm">
  
  <!-- Subtitles / Captions -->
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  
  Your browser does not support the video tag.
</video>`,
            "html",
            "HTML5 Video with Subtitles"
        ),

        table(
            ["Attribute", "Applies To", "Purpose"],
            [
                ["controls", "Audio/Video", "Displays default play, pause, volume, and seek controls."],
                ["autoplay", "Audio/Video", "Starts playing as soon as it's ready. (Often blocked by browsers unless 'muted' is also used)."],
                ["muted", "Audio/Video", "Mutes the audio output by default."],
                ["loop", "Audio/Video", "Restarts the media from the beginning when it finishes."],
                ["poster", "Video", "Specifies an image to show while the video is downloading or until the user hits play."],
                ["preload", "Audio/Video", "Hints to the browser how much data to load ('none', 'metadata', 'auto')."],
            ]
        ),

        heading("The <track> Element for Accessibility"),

        text(
            "The <track> element is used to specify timed text tracks (subtitles, captions, descriptions) for <video> and <audio> elements. This is crucial for accessibility and SEO."
        ),

        heading("Embedding External Content: <iframe>, <embed>, and <object>"),

        table(
            ["Tag", "Primary Use Case"],
            [
                ["<iframe>", "Embedding another complete HTML webpage (e.g., Google Maps, YouTube videos)."],
                ["<embed>", "Embedding external, non-HTML content like plugins or SVGs. (Self-closing tag)."],
                ["<object>", "Embedding external resources like PDFs, Flash (legacy), or applets. Can contain fallback content."],
            ]
        ),

        code(
            `<!-- Embedding a YouTube Video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>

<!-- Embedding a PDF -->
<object data="document.pdf" type="application/pdf" width="100%" height="600px">
  <p>Your browser does not support PDFs. <a href="document.pdf">Download the PDF</a>.</p>
</object>`,
            "html",
            "Iframe and Object Examples"
        ),

        note(
            "When embedding third-party content via <iframe> (like YouTube), always add a 'title' attribute for screen readers, and use the 'loading=\"lazy\"' attribute to improve page load performance.",
            "tip",
            "Performance & Accessibility"
        ),

        keyPoints([
            "<audio> and <video> provide native media playback without plugins.",
            "Always provide multiple <source> formats (MP4, WebM) for cross-browser compatibility.",
            "Use the <track> tag to add subtitles for accessibility.",
            "<iframe> is for webpages; <object> and <embed> are for external files like PDFs or SVGs.",
        ]),
    ],

    {
        summary: "Embed native audio/video with subtitles, and use iframes, objects, and embeds for external content.",
        minutes: 12,
        tags: ["html5", "multimedia", "video", "audio", "iframe", "accessibility"],

        mcqs: [
            mcq(
                "Which attribute is used to show a preview image before a video plays?",
                ["preview", "thumbnail", "poster", "cover"],
                2,
                "The 'poster' attribute specifies the preview image."
            ),
            mcq(
                "Which tag is used to add subtitles to a video?",
                ["<subtitle>", "<caption>", "<track>", "<text>"],
                2,
                "The <track> tag is used for timed text tracks like subtitles."
            ),
            mcq(
                "Which tag is best suited for embedding a Google Map?",
                ["<embed>", "<object>", "<iframe>", "<map>"],
                2,
                "<iframe> is used to embed another complete webpage like Google Maps."
            ),
        ],

        questions: [
            qa(
                "Explain the use of the <track> element in HTML5 multimedia.",
                "The <track> element is used to specify timed text tracks for <video> and <audio> elements. These tracks are usually used for subtitles, captions, descriptions, or chapters. It uses a WebVTT (.vtt) file format. Using <track> is highly important for accessibility, as it allows deaf or hard-of-hearing users to read captions, and it also helps search engines index the spoken content of the video.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    tablesAndFrames,
    htmlForms,
    html5Advanced,
    multimediaTags,
];