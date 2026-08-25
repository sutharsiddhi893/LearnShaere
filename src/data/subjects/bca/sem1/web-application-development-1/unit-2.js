/* =========================================================
   BCA • SEM 1 • Web Application Development - I
   UNIT 2 — Web Page Designing - II
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
   TOPIC 1 — Images and Multimedia
========================================================= */

const imagesAndMultimedia = createTopic(
    "images-and-multimedia",
    "Images and Multimedia",

    [
        text(
            "Images make a web page visually appealing and help communicate information quickly. HTML5 also allows audio and video to be embedded directly without any external plugin."
        ),

        heading("The Image Tag"),

        code(
            `<img src="logo.png" alt="Company Logo" width="200" height="100">`,
            "html",
            "Inserting an image"
        ),

        text(
            "The img tag is an empty tag, which means it has no closing tag. It is also an inline element, so it appears within the flow of text."
        ),

        heading("Attributes of the img Tag"),

        table(
            ["Attribute", "Purpose"],
            [
                ["src", "The path or URL of the image file. This is compulsory."],
                ["alt", "Alternative text shown when the image cannot load."],
                ["width", "Sets the display width in pixels."],
                ["height", "Sets the display height in pixels."],
                ["title", "Tooltip text shown when the mouse hovers over the image."],
                ["align", "Aligns the image; deprecated in HTML5."],
                ["border", "Draws a border around the image; deprecated in HTML5."],
            ]
        ),

        note(
            "The alt attribute is very important. It is read aloud by screen readers for visually impaired users, it is displayed if the image fails to load, and search engines use it to understand the content of the image.",
            "exam",
            "Frequently Asked"
        ),

        heading("Image File Formats"),

        table(
            ["Format", "Full Form", "Best Used For"],
            [
                ["JPEG or JPG", "Joint Photographic Experts Group", "Photographs with many colours."],
                ["PNG", "Portable Network Graphics", "Images needing transparency."],
                ["GIF", "Graphics Interchange Format", "Simple animations."],
                ["SVG", "Scalable Vector Graphics", "Logos and icons that must scale."],
                ["WEBP", "Web Picture Format", "Modern format with smaller file size."],
            ]
        ),

        heading("Image Paths"),

        table(
            ["Type", "Example", "Meaning"],
            [
                ["Same folder", 'src="photo.jpg"', "The image is beside the HTML file."],
                ["Sub folder", 'src="images/photo.jpg"', "Inside the images folder."],
                ["Parent folder", 'src="../photo.jpg"', "One level above the current folder."],
                ["Absolute URL", 'src="https://site.com/photo.jpg"', "An image hosted on another server."],
            ]
        ),

        heading("Audio in HTML5"),

        code(
            `<audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>`,
            "html",
            "Embedding audio"
        ),

        table(
            ["Attribute", "Purpose"],
            [
                ["controls", "Displays play, pause and volume controls."],
                ["autoplay", "Starts playing automatically when the page loads."],
                ["loop", "Repeats the audio continuously."],
                ["muted", "Starts with the sound turned off."],
            ]
        ),

        heading("Video in HTML5"),

        code(
            `<video width="480" height="320" controls poster="thumb.jpg">
    <source src="movie.mp4" type="video/mp4">
    <source src="movie.webm" type="video/webm">
    Your browser does not support the video element.
</video>`,
            "html",
            "Embedding video"
        ),

        table(
            ["Attribute", "Purpose"],
            [
                ["controls", "Shows the playback controls."],
                ["width and height", "Set the size of the video player."],
                ["poster", "An image shown before the video starts."],
                ["autoplay", "Starts the video automatically."],
                ["loop", "Repeats the video continuously."],
            ]
        ),

        heading("Why Multiple source Tags?"),

        text(
            "Different browsers support different media formats. By providing several source tags, the browser plays the first format it recognises. The text written after the source tags is displayed only when none of the formats is supported."
        ),

        keyPoints([
            "The img tag is an empty inline tag used to display images.",
            "The src attribute is compulsory and the alt attribute is strongly recommended.",
            "JPEG suits photographs, PNG supports transparency and SVG scales without loss of quality.",
            "HTML5 supports audio and video without any external plugin.",
            "Multiple source tags ensure compatibility across browsers.",
        ]),
    ],

    {
        summary:
            "Learn to insert images with all their attributes, understand image formats and paths, and embed audio and video.",
        minutes: 10,
        tags: ["html", "images", "multimedia"],

        mcqs: [
            mcq(
                "Which attribute of the img tag is compulsory?",
                ["alt", "src", "width", "title"],
                1,
                "The src attribute specifies the image location and is compulsory."
            ),
            mcq(
                "The alt attribute is used to:",
                [
                    "Align the image",
                    "Provide alternative text",
                    "Change the image size",
                    "Add a border",
                ],
                1,
                "The alt attribute provides alternative text when the image cannot be displayed."
            ),
            mcq(
                "Which image format supports transparency?",
                ["JPEG", "PNG", "BMP", "TIFF"],
                1,
                "PNG supports transparent backgrounds."
            ),
            mcq(
                "Which attribute displays playback controls for a video?",
                ["play", "controls", "show", "player"],
                1,
                "The controls attribute displays play, pause and volume controls."
            ),
            mcq(
                "The img tag is:",
                ["A container tag", "An empty tag", "A block level tag", "A deprecated tag"],
                1,
                "The img tag has no closing tag and is therefore an empty tag."
            ),
        ],

        questions: [
            qa(
                "Explain the img tag with its attributes.",
                "The img tag is an empty inline tag used to display an image on a web page. Its src attribute is compulsory and specifies the path or URL of the image file. The alt attribute provides alternative text that is displayed if the image cannot load and is read by screen readers. The width and height attributes set the display size in pixels, and the title attribute provides tooltip text shown when the mouse hovers over the image.",
                4
            ),
            qa(
                "Why is the alt attribute important in the img tag?",
                "The alt attribute is important for three reasons. First, it is read aloud by screen readers so that visually impaired users understand what the image shows. Second, its text is displayed in place of the image if the file is missing or fails to load. Third, search engines read it to understand the content of the image, which improves the search ranking of the page.",
                3
            ),
            qa(
                "Explain how audio and video are embedded in HTML5.",
                "HTML5 provides the audio and video tags which allow media to be played without any external plugin. Inside each tag one or more source tags specify the media files along with their type. The controls attribute displays playback controls, autoplay starts the media automatically, and loop repeats it. Multiple source tags are used because different browsers support different formats, and the browser plays the first one it recognises.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Hyperlinks
========================================================= */

const hyperlinks = createTopic(
    "hyperlinks-in-html",
    "Hyperlinks",

    [
        definition(
            "Hyperlink",
            "A clickable element that takes the user from one web page or location to another."
        ),

        text(
            "Hyperlinks are what make the Web a web. They are created using the anchor tag, written as the letter a."
        ),

        heading("Basic Syntax"),

        code(
            `<a href="page2.html">Go to Page 2</a>`,
            "html",
            "A simple hyperlink"
        ),

        heading("Attributes of the Anchor Tag"),

        table(
            ["Attribute", "Purpose"],
            [
                ["href", "The destination address of the link."],
                ["target", "Where the linked page should open."],
                ["title", "Tooltip text shown on hover."],
                ["download", "Downloads the file instead of opening it."],
            ]
        ),

        heading("Values of the target Attribute"),

        table(
            ["Value", "Meaning"],
            [
                ["_self", "Opens in the same tab. This is the default."],
                ["_blank", "Opens in a new tab or window."],
                ["_parent", "Opens in the parent frame."],
                ["_top", "Opens in the full body of the window."],
            ]
        ),

        heading("Types of Links"),

        code(
            `<!-- Link to another page in the same site -->
<a href="about.html">About Us</a>

<!-- Link to an external website -->
<a href="https://www.google.com" target="_blank">Google</a>

<!-- Link that sends an email -->
<a href="mailto:info@learnsphere.com">Email Us</a>

<!-- Link that dials a phone number -->
<a href="tel:+919876543210">Call Us</a>

<!-- Link that downloads a file -->
<a href="notes.pdf" download>Download Notes</a>

<!-- Image used as a link -->
<a href="home.html"><img src="logo.png" alt="Home"></a>`,
            "html",
            "Six different kinds of links"
        ),

        heading("Internal Links Using Bookmarks"),

        text(
            "A bookmark allows the user to jump directly to a specific section within the same page. The destination is given an id and the link refers to that id preceded by a hash symbol."
        ),

        code(
            `<!-- The links at the top of the page -->
<a href="#unit1">Go to Unit 1</a>
<a href="#unit2">Go to Unit 2</a>

<!-- The destinations further down the page -->
<h2 id="unit1">Unit 1 Content</h2>
<p>Details of unit one appear here.</p>

<h2 id="unit2">Unit 2 Content</h2>
<p>Details of unit two appear here.</p>`,
            "html",
            "Jumping within the same page"
        ),

        heading("Absolute versus Relative Paths"),

        table(
            ["Basis", "Absolute Path", "Relative Path"],
            [
                ["Definition", "The complete address including protocol", "The address relative to the current file"],
                ["Example", "https://site.com/about.html", "about.html"],
                ["Used for", "External websites", "Pages within the same site"],
                ["Length", "Long", "Short"],
                ["Portability", "Breaks if the domain changes", "Works when the site is moved"],
            ]
        ),

        heading("Link States"),

        table(
            ["State", "Default Colour", "Meaning"],
            [
                ["Unvisited", "Blue with underline", "The link has not been clicked yet."],
                ["Visited", "Purple with underline", "The link has already been visited."],
                ["Active", "Red", "The link is being clicked at this moment."],
                ["Hover", "No default change", "The mouse pointer is over the link."],
            ]
        ),

        note(
            "Always add the target underscore blank attribute when linking to an external website so that users do not leave your site completely.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Hyperlinks are created using the anchor tag with the href attribute.",
            "The target attribute controls where the linked page opens.",
            "Links can point to pages, email addresses, phone numbers or files.",
            "Bookmarks use an id and a hash symbol to jump within the same page.",
            "Relative paths are preferred for pages inside the same website.",
        ]),
    ],

    {
        summary:
            "Master hyperlinks including internal links, external links, email links, bookmarks and image links.",
        minutes: 10,
        tags: ["html", "links", "important"],

        mcqs: [
            mcq(
                "Which tag is used to create a hyperlink?",
                ["<link>", "<a>", "<href>", "<url>"],
                1,
                "The anchor tag written as a creates hyperlinks."
            ),
            mcq(
                "Which attribute specifies the destination of a link?",
                ["src", "href", "target", "link"],
                1,
                "The href attribute holds the destination address."
            ),
            mcq(
                "Which target value opens a link in a new tab?",
                ["_self", "_new", "_blank", "_top"],
                2,
                "The value underscore blank opens the link in a new tab or window."
            ),
            mcq(
                "Which symbol is used to link to a bookmark on the same page?",
                ["?", "#", "&", "@"],
                1,
                "The hash symbol followed by the id creates a bookmark link."
            ),
            mcq(
                "Which protocol is used in a link that opens the email client?",
                ["email:", "mail:", "mailto:", "sendto:"],
                2,
                "The mailto protocol opens the default email client."
            ),
        ],

        questions: [
            qa(
                "Explain the anchor tag with its attributes.",
                "The anchor tag written as a is used to create hyperlinks. Its href attribute specifies the destination which may be another page, an external website, an email address, a phone number or a file. The target attribute controls where the page opens, with underscore self opening in the same tab and underscore blank opening in a new tab. The title attribute provides tooltip text and the download attribute forces the file to be downloaded instead of opened.",
                4
            ),
            qa(
                "Differentiate between absolute and relative paths.",
                "An absolute path is the complete address of a resource including the protocol and domain name, and it is used when linking to external websites. A relative path specifies the location of a resource with respect to the current file and is shorter. Relative paths are preferred for pages within the same website because the links continue to work even if the site is moved to a different domain.",
                3
            ),
            qa(
                "What is a bookmark? How is it created in HTML?",
                "A bookmark is a link that jumps to a specific section within the same web page rather than loading a new page. It is created in two parts. First, the destination element is given an id attribute with a unique name. Second, an anchor tag is written whose href value is a hash symbol followed by that same id. Clicking the link scrolls the page directly to the marked section.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Tables
========================================================= */

const tables = createTopic(
    "tables-in-html",
    "Tables",

    [
        definition(
            "Table",
            "An arrangement of data in rows and columns created using the table tag."
        ),

        heading("Basic Table Tags"),

        table(
            ["Tag", "Purpose"],
            [
                ["<table>", "Defines the table itself."],
                ["<tr>", "Defines a table row."],
                ["<th>", "Defines a header cell; text is bold and centred."],
                ["<td>", "Defines a normal data cell."],
                ["<caption>", "Adds a title above the table."],
                ["<thead>", "Groups the header rows."],
                ["<tbody>", "Groups the body rows."],
                ["<tfoot>", "Groups the footer rows."],
            ]
        ),

        heading("A Simple Table"),

        code(
            `<table border="1">
    <caption>Student Marks</caption>

    <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>Marks</th>
    </tr>

    <tr>
        <td>101</td>
        <td>Amit</td>
        <td>85</td>
    </tr>

    <tr>
        <td>102</td>
        <td>Riya</td>
        <td>92</td>
    </tr>
</table>`,
            "html",
            "A three column table"
        ),

        heading("Table Attributes"),

        table(
            ["Attribute", "Purpose", "Status"],
            [
                ["border", "Draws a border around cells", "Deprecated in HTML5"],
                ["cellpadding", "Space between cell content and its border", "Deprecated"],
                ["cellspacing", "Space between adjacent cells", "Deprecated"],
                ["width", "Sets the width of the table", "Deprecated"],
                ["align", "Aligns the table on the page", "Deprecated"],
                ["bgcolor", "Sets the background colour", "Deprecated"],
            ]
        ),

        note(
            "All presentational table attributes are deprecated in HTML5 and should be replaced with CSS. They are covered here because they still appear in the syllabus and in older examination papers.",
            "warning",
            "Deprecated"
        ),

        heading("Merging Cells"),

        table(
            ["Attribute", "Purpose"],
            [
                ["colspan", "Merges a cell across two or more columns."],
                ["rowspan", "Merges a cell across two or more rows."],
            ]
        ),

        code(
            `<table border="1">
    <tr>
        <th colspan="3">Semester Result</th>
    </tr>

    <tr>
        <th>Subject</th>
        <th>Theory</th>
        <th>Practical</th>
    </tr>

    <tr>
        <td>Programming in C</td>
        <td>70</td>
        <td>28</td>
    </tr>
</table>`,
            "html",
            "Using colspan"
        ),

        code(
            `<table border="1">
    <tr>
        <th rowspan="3">Semester 1</th>
        <td>Programming in C</td>
    </tr>

    <tr>
        <td>Web Development</td>
    </tr>

    <tr>
        <td>Computer Organization</td>
    </tr>
</table>`,
            "html",
            "Using rowspan"
        ),

        heading("A Structured Table"),

        code(
            `<table border="1">
    <caption>Fee Structure</caption>

    <thead>
        <tr>
            <th>Semester</th>
            <th>Amount</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Semester 1</td>
            <td>25000</td>
        </tr>
        <tr>
            <td>Semester 2</td>
            <td>25000</td>
        </tr>
    </tbody>

    <tfoot>
        <tr>
            <th>Total</th>
            <th>50000</th>
        </tr>
    </tfoot>
</table>`,
            "html",
            "Using thead, tbody and tfoot"
        ),

        heading("Nested Tables"),

        text(
            "A complete table may be placed inside a table cell. This was widely used for page layout in the past, but CSS should be used for layout in modern web design."
        ),

        heading("Uses of Tables"),

        list([
            "Displaying tabular data such as results, price lists and timetables.",
            "Presenting comparisons between two or more items.",
            "Organising numeric data in rows and columns.",
            "Formerly used for page layout, which is now discouraged.",
        ]),

        keyPoints([
            "A table is built from the table, tr, th and td tags.",
            "The th tag creates header cells which appear bold and centred.",
            "The colspan attribute merges columns and rowspan merges rows.",
            "The thead, tbody and tfoot tags group rows meaningfully.",
            "Presentational attributes are deprecated and CSS should be used instead.",
        ]),
    ],

    {
        summary:
            "Learn to build HTML tables including headers, captions, merged cells and structured sections.",
        minutes: 11,
        tags: ["html", "tables", "important"],

        mcqs: [
            mcq(
                "Which tag defines a row in a table?",
                ["<td>", "<tr>", "<th>", "<table>"],
                1,
                "The tr tag defines a table row."
            ),
            mcq(
                "Which attribute merges cells horizontally?",
                ["rowspan", "colspan", "merge", "span"],
                1,
                "The colspan attribute merges a cell across several columns."
            ),
            mcq(
                "Text inside a th tag appears:",
                ["Normal and left aligned", "Bold and centred", "Italic and right aligned", "Underlined"],
                1,
                "Header cells are displayed in bold and centred by default."
            ),
            mcq(
                "Which tag adds a title to a table?",
                ["<title>", "<caption>", "<header>", "<head>"],
                1,
                "The caption tag displays a title above the table."
            ),
            mcq(
                "Which of the following is deprecated in HTML5?",
                ["<td>", "<tr>", "border attribute", "<caption>"],
                2,
                "Presentational attributes such as border are deprecated in HTML5."
            ),
        ],

        questions: [
            qa(
                "Explain the tags used to create a table in HTML.",
                "A table is created using the table tag which acts as the container. Each row is defined using the tr tag. Header cells are created with the th tag and appear bold and centred, while ordinary data cells use the td tag. The caption tag adds a title above the table. The thead, tbody and tfoot tags group the header, body and footer rows respectively.",
                5
            ),
            qa(
                "Differentiate between colspan and rowspan with examples.",
                "The colspan attribute merges a cell across two or more columns horizontally, so writing colspan equals three makes a single cell occupy the width of three columns, which is useful for a heading that spans the whole table. The rowspan attribute merges a cell across two or more rows vertically, so writing rowspan equals three makes one cell occupy the height of three rows, which is useful when one label applies to several rows.",
                4
            ),
            qa(
                "Write HTML code to create a table showing student marks.",
                "Begin with the table tag and add a caption reading Student Marks. Create the first row using tr and place three th cells for Roll No, Name and Marks. Then create additional tr rows, each containing three td cells holding the roll number, the student name and the marks obtained. Finally close the table tag.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Forms
========================================================= */

const forms = createTopic(
    "forms-in-html",
    "Forms",

    [
        definition(
            "Form",
            "A section of a web page that collects input from the user and sends it to a server for processing."
        ),

        text(
            "Forms are used for registration pages, login screens, feedback forms, surveys and online orders. They are the primary way users send information to a website."
        ),

        heading("The form Tag"),

        code(
            `<form action="submit.php" method="post">
    <!-- form controls are placed here -->
</form>`,
            "html",
            "The form container"
        ),

        table(
            ["Attribute", "Purpose"],
            [
                ["action", "The URL of the page that will process the submitted data."],
                ["method", "How the data is sent, either get or post."],
                ["name", "The name of the form."],
                ["target", "Where the response should be displayed."],
                ["enctype", "How the data is encoded, needed for file uploads."],
            ]
        ),

        heading("GET versus POST"),

        table(
            ["Basis", "GET", "POST"],
            [
                ["Data location", "Appended to the URL", "Sent in the request body"],
                ["Visibility", "Visible in the address bar", "Not visible"],
                ["Data limit", "About 2048 characters", "No practical limit"],
                ["Security", "Less secure", "More secure"],
                ["Bookmarking", "Possible", "Not possible"],
                ["Used for", "Search queries", "Login and registration"],
                ["Default", "Yes", "No"],
            ]
        ),

        note(
            "Never use the get method for passwords or any sensitive information because the data becomes visible in the browser address bar and is stored in the browsing history.",
            "warning",
            "Security"
        ),

        heading("The input Tag"),

        text(
            "The input tag is an empty tag whose behaviour changes completely depending on the value of its type attribute."
        ),

        table(
            ["Type", "Creates"],
            [
                ["text", "A single line text box"],
                ["password", "A text box that hides the characters"],
                ["radio", "A round button allowing only one choice"],
                ["checkbox", "A square box allowing several choices"],
                ["submit", "A button that submits the form"],
                ["reset", "A button that clears the form"],
                ["button", "A general purpose button"],
                ["file", "A file selection control"],
                ["hidden", "An invisible field carrying data"],
                ["email", "A text box that validates an email address"],
                ["number", "A box that accepts only numbers"],
                ["date", "A date picker"],
                ["color", "A colour picker"],
                ["range", "A slider control"],
            ]
        ),

        heading("A Complete Registration Form"),

        code(
            `<form action="register.php" method="post">

    <label for="name">Full Name</label>
    <input type="text" id="name" name="name"
           placeholder="Enter your name" required>
    <br><br>

    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="pass">Password</label>
    <input type="password" id="pass" name="pass"
           minlength="8" required>
    <br><br>

    <label>Gender</label>
    <input type="radio" name="gender" value="male" checked> Male
    <input type="radio" name="gender" value="female"> Female
    <br><br>

    <label>Hobbies</label>
    <input type="checkbox" name="hobby" value="reading"> Reading
    <input type="checkbox" name="hobby" value="music"> Music
    <input type="checkbox" name="hobby" value="sports"> Sports
    <br><br>

    <label for="course">Course</label>
    <select id="course" name="course">
        <option value="">Select a course</option>
        <option value="bca">BCA</option>
        <option value="bscit">B.Sc IT</option>
        <option value="mca">MCA</option>
    </select>
    <br><br>

    <label for="dob">Date of Birth</label>
    <input type="date" id="dob" name="dob">
    <br><br>

    <label for="photo">Upload Photo</label>
    <input type="file" id="photo" name="photo">
    <br><br>

    <label for="address">Address</label><br>
    <textarea id="address" name="address"
              rows="4" cols="40"></textarea>
    <br><br>

    <input type="submit" value="Register">
    <input type="reset" value="Clear">

</form>`,
            "html",
            "A form using every major control"
        ),

        heading("Important Input Attributes"),

        table(
            ["Attribute", "Purpose"],
            [
                ["name", "The identifier sent to the server with the value."],
                ["value", "The default or preset value of the control."],
                ["placeholder", "Hint text shown inside an empty text box."],
                ["required", "Makes the field compulsory before submission."],
                ["readonly", "The value can be seen but not changed."],
                ["disabled", "The control is inactive and is not submitted."],
                ["maxlength", "The maximum number of characters allowed."],
                ["checked", "Preselects a radio button or checkbox."],
                ["size", "The visible width of the control."],
            ]
        ),

        heading("Radio Buttons versus Checkboxes"),

        table(
            ["Basis", "Radio Button", "Checkbox"],
            [
                ["Shape", "Round", "Square"],
                ["Selection", "Only one from a group", "Any number of options"],
                ["Same name attribute", "Required to group them", "Optional"],
                ["Used for", "Gender or a single choice", "Hobbies or multiple choices"],
            ]
        ),

        heading("The select and textarea Tags"),

        code(
            `<select name="city" multiple size="3">
    <optgroup label="Gujarat">
        <option value="surat">Surat</option>
        <option value="ahmedabad" selected>Ahmedabad</option>
    </optgroup>

    <optgroup label="Maharashtra">
        <option value="mumbai">Mumbai</option>
        <option value="pune">Pune</option>
    </optgroup>
</select>

<textarea name="comment" rows="5" cols="40"
          placeholder="Write your feedback"></textarea>`,
            "html",
            "Dropdown with groups and a multi line text area"
        ),

        heading("The label Tag"),

        text(
            "The label tag associates a caption with a form control. Clicking the label activates the control, which improves usability and accessibility. The for attribute of the label must match the id of the control."
        ),

        keyPoints([
            "Forms collect user input and send it to a server for processing.",
            "The get method shows data in the URL while post hides it in the request body.",
            "The input tag creates many different controls depending on its type attribute.",
            "Radio buttons allow one choice while checkboxes allow several.",
            "The label tag improves accessibility and must match the id of its control.",
        ]),
    ],

    {
        summary:
            "Master HTML forms including all input types, dropdowns, text areas, labels and the difference between get and post.",
        minutes: 14,
        tags: ["html", "forms", "important"],

        mcqs: [
            mcq(
                "Which attribute of the form tag specifies where the data is sent?",
                ["method", "action", "target", "name"],
                1,
                "The action attribute holds the URL of the processing page."
            ),
            mcq(
                "Which input type hides the characters typed by the user?",
                ["text", "hidden", "password", "secret"],
                2,
                "The password type masks the characters as they are typed."
            ),
            mcq(
                "Which control allows the user to select only one option from a group?",
                ["checkbox", "radio", "select multiple", "textarea"],
                1,
                "Radio buttons with the same name allow only one selection."
            ),
            mcq(
                "Which method sends form data visibly in the URL?",
                ["POST", "GET", "PUT", "SEND"],
                1,
                "The get method appends data to the URL where it is visible."
            ),
            mcq(
                "Which tag creates a multi line text input?",
                ["<input type='text'>", "<textarea>", "<multiline>", "<textbox>"],
                1,
                "The textarea tag creates a multi line text input area."
            ),
            mcq(
                "Which attribute makes a form field compulsory?",
                ["mandatory", "required", "must", "validate"],
                1,
                "The required attribute prevents submission when the field is empty."
            ),
            mcq(
                "For radio buttons to work as a group, they must share the same:",
                ["id", "value", "name", "class"],
                2,
                "Radio buttons are grouped by giving them the same name attribute."
            ),
        ],

        questions: [
            qa(
                "What is a form? Explain the attributes of the form tag.",
                "A form is a section of a web page that collects input from the user and sends it to a server for processing. The action attribute specifies the URL of the page that will handle the submitted data. The method attribute specifies how the data is sent, either get or post. The name attribute identifies the form, the target attribute decides where the response is displayed, and the enctype attribute specifies how the data is encoded, which is necessary when uploading files.",
                4
            ),
            qa(
                "Differentiate between the GET and POST methods.",
                "The get method appends the form data to the URL where it is visible in the address bar, has a limit of roughly two thousand characters, can be bookmarked and is less secure. The post method sends the data in the body of the request so it is not visible, has no practical size limit, cannot be bookmarked and is more secure. The get method suits search queries while post is used for login and registration.",
                4
            ),
            qa(
                "Explain any six input types used in HTML forms.",
                "The text type creates a single line text box. The password type creates a box that hides the characters typed. The radio type creates a round button that allows only one selection from a group. The checkbox type creates a square box allowing multiple selections. The submit type creates a button that sends the form data, and the file type creates a control for uploading a file.",
                5
            ),
            qa(
                "Differentiate between radio buttons and checkboxes.",
                "Radio buttons are round and allow the user to select only one option from a group, and all buttons in the group must share the same name attribute. Checkboxes are square and allow the user to select any number of options including none. Radio buttons are used for mutually exclusive choices such as gender, while checkboxes are used for multiple selections such as hobbies.",
                3
            ),
            qa(
                "Design an HTML form for student registration.",
                "Create a form with the action set to a processing page and the method set to post. Add a text input for the full name, an email input for the email address and a password input for the password, each marked required. Add radio buttons sharing the name gender for male and female. Add checkboxes for hobbies. Add a select dropdown listing the available courses. Add a date input for the date of birth, a file input for the photograph and a textarea for the address. Finally add submit and reset buttons.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Frames and Semantic Tags
========================================================= */

const framesAndSemantics = createTopic(
    "frames-and-semantic-tags",
    "Frames and Semantic Tags",

    [
        heading("Frames"),

        definition(
            "Frame",
            "A division of the browser window that displays a separate HTML document."
        ),

        text(
            "Frames were used in older websites to divide a page into sections such as a fixed navigation bar and a scrollable content area. They have been removed in HTML5 and should not be used in new websites."
        ),

        code(
            `<frameset cols="25%,75%">
    <frame src="menu.html" name="menu">
    <frame src="content.html" name="content">
</frameset>`,
            "html",
            "The old frameset approach, now obsolete"
        ),

        table(
            ["Tag or Attribute", "Purpose"],
            [
                ["<frameset>", "Divides the window; replaces the body tag."],
                ["<frame>", "Defines one section of the frameset."],
                ["rows", "Splits the window horizontally."],
                ["cols", "Splits the window vertically."],
                ["noresize", "Prevents the user from resizing the frame."],
                ["scrolling", "Controls whether scrollbars appear."],
            ]
        ),

        note(
            "Frames are obsolete in HTML5 because they break bookmarking, harm search engine indexing and are difficult for screen readers. They are included here only because they still appear in the syllabus.",
            "warning",
            "Obsolete"
        ),

        heading("The iframe Tag"),

        text(
            "The iframe or inline frame is the only frame related tag still supported. It embeds another web page inside the current page and is commonly used for maps and videos."
        ),

        code(
            `<iframe src="https://www.example.com"
        width="600" height="400"
        title="Example site">
</iframe>

<!-- Embedding a YouTube video -->
<iframe width="560" height="315"
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Video player"
        allowfullscreen>
</iframe>`,
            "html",
            "Embedding external content"
        ),

        heading("Semantic Tags in HTML5"),

        definition(
            "Semantic tag",
            "A tag whose name clearly describes the meaning of the content it contains."
        ),

        text(
            "Before HTML5 developers used div tags with class names for every section. HTML5 introduced semantic tags that describe the purpose of each part of the page, which helps search engines and assistive technologies understand the structure."
        ),

        table(
            ["Tag", "Represents"],
            [
                ["<header>", "The top section containing the logo and title."],
                ["<nav>", "A block of navigation links."],
                ["<main>", "The main content of the page."],
                ["<section>", "A thematic grouping of related content."],
                ["<article>", "Independent, self contained content."],
                ["<aside>", "Content indirectly related to the main content."],
                ["<footer>", "The bottom section with copyright and links."],
                ["<figure>", "An image or diagram with its caption."],
                ["<figcaption>", "The caption belonging to a figure."],
            ]
        ),

        heading("A Complete Semantic Page"),

        code(
            `<!DOCTYPE html>
<html>

<head>
    <title>LearnSphere</title>
</head>

<body>

    <header>
        <h1>LearnSphere</h1>
        <p>Learn. Practice. Succeed.</p>
    </header>

    <nav>
        <a href="index.html">Home</a>
        <a href="courses.html">Courses</a>
        <a href="about.html">About</a>
    </nav>

    <main>
        <section>
            <h2>Featured Course</h2>

            <article>
                <h3>Programming in C</h3>
                <p>Learn the fundamentals of C programming.</p>
            </article>
        </section>

        <aside>
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#">Syllabus</a></li>
                <li><a href="#">Question Bank</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 LearnSphere. All rights reserved.</p>
    </footer>

</body>

</html>`,
            "html",
            "A page built entirely with semantic tags"
        ),

        heading("Semantic versus Non Semantic Tags"),

        table(
            ["Basis", "Semantic", "Non Semantic"],
            [
                ["Meaning", "The name describes the content", "The name conveys nothing"],
                ["Examples", "header, nav, article, footer", "div and span"],
                ["SEO", "Helps search engines", "No benefit"],
                ["Accessibility", "Understood by screen readers", "Not understood"],
                ["Readability", "Code is self explanatory", "Class names must be read"],
            ]
        ),

        heading("Block versus Inline Elements"),

        table(
            ["Basis", "Block Level", "Inline"],
            [
                ["Line break", "Starts on a new line", "Stays in the same line"],
                ["Width", "Takes the full available width", "Takes only the needed width"],
                ["Can contain", "Block and inline elements", "Only inline elements"],
                ["Examples", "div, p, h1, table, form", "span, a, img, b, i"],
            ]
        ),

        keyPoints([
            "Frames are obsolete in HTML5 but the iframe tag is still supported.",
            "Semantic tags describe the meaning of content rather than its appearance.",
            "Using header, nav, main and footer improves search ranking and accessibility.",
            "The div and span tags are non semantic and carry no meaning.",
            "Block elements start on a new line while inline elements do not.",
        ]),
    ],

    {
        summary:
            "Understand frames and the iframe tag, and learn the HTML5 semantic tags that give structure and meaning to a page.",
        minutes: 10,
        tags: ["html", "html5", "semantic"],

        mcqs: [
            mcq(
                "Which tag is still supported in HTML5?",
                ["<frameset>", "<frame>", "<iframe>", "<noframes>"],
                2,
                "Only the inline frame tag remains supported in HTML5."
            ),
            mcq(
                "Which of the following is a semantic tag?",
                ["<div>", "<span>", "<article>", "<b>"],
                2,
                "The article tag clearly describes the content it contains."
            ),
            mcq(
                "Which tag represents navigation links?",
                ["<header>", "<nav>", "<menu>", "<links>"],
                1,
                "The nav tag is used for a block of navigation links."
            ),
            mcq(
                "Which of the following is an inline element?",
                ["<div>", "<p>", "<span>", "<h1>"],
                2,
                "The span tag is an inline element."
            ),
            mcq(
                "Which tag holds the caption of an image inside a figure?",
                ["<caption>", "<figcaption>", "<label>", "<alt>"],
                1,
                "The figcaption tag provides the caption for a figure."
            ),
        ],

        questions: [
            qa(
                "What are frames? Why are they obsolete in HTML5?",
                "Frames divide the browser window into sections, each displaying a separate HTML document, and were created using the frameset and frame tags. They are obsolete in HTML5 because they break bookmarking since the URL does not change, they harm search engine indexing as each frame is a separate document, they are difficult for screen readers to interpret, and they do not work well on mobile devices. Only the inline frame tag remains supported.",
                4
            ),
            qa(
                "What are semantic tags? Explain any five.",
                "Semantic tags are HTML5 elements whose names clearly describe the meaning of the content they contain. The header tag represents the top section of a page containing the logo and title. The nav tag holds navigation links. The main tag contains the primary content. The article tag holds independent self contained content such as a blog post. The footer tag represents the bottom section containing copyright information and secondary links.",
                5
            ),
            qa(
                "Differentiate between block level and inline elements.",
                "A block level element always begins on a new line and occupies the full available width of its container, and it may contain both block and inline elements. Examples are div, paragraph, heading and table. An inline element stays within the current line, occupies only as much width as its content needs, and may contain only other inline elements. Examples are span, anchor, image and bold.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    imagesAndMultimedia,
    hyperlinks,
    tables,
    forms,
    framesAndSemantics,
];