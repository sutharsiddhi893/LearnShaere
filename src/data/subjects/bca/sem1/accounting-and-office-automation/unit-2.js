/* =========================================================
   BCA • SEM 1 • Accounting and Office Automation
   UNIT 2 — Word Processing and Presentation Tool
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
   TOPIC 1 — Introduction to Word Processing
========================================================= */

const introductionToWordProcessing = createTopic(
    "introduction-to-word-processing",
    "Introduction to Word Processing",

    [
        definition(
            "Word Processor",
            "An application used to create, edit, format, store and print text documents."
        ),

        text(
            "Microsoft Word, Google Docs, LibreOffice Writer and WPS Writer are widely used word processors. They have replaced the typewriter because text can be corrected, rearranged and reprinted any number of times without retyping."
        ),

        heading("Features of a Word Processor"),

        list([
            "Text can be typed, edited, deleted and rearranged easily.",
            "Formatting options control the font, size, colour and alignment.",
            "Spelling and grammar are checked automatically.",
            "Find and replace locates and changes text throughout the document.",
            "Tables, images, charts and shapes can be inserted.",
            "Mail merge produces personalised letters for many recipients.",
            "Documents can be saved, reopened and printed at any time.",
        ]),

        heading("Parts of the Word Window"),

        table(
            ["Component", "Purpose"],
            [
                ["Title Bar", "Displays the name of the open document."],
                ["Quick Access Toolbar", "Holds frequently used commands such as Save and Undo."],
                ["Ribbon", "The main command area divided into tabs."],
                ["Tabs", "Groups of related commands such as Home and Insert."],
                ["Ruler", "Shows margins, indents and tab stops."],
                ["Document Area", "The white area where the text is typed."],
                ["Cursor", "The blinking line showing the typing position."],
                ["Scroll Bar", "Moves the view up and down or left and right."],
                ["Status Bar", "Shows the page number, word count and language."],
                ["View Buttons", "Switch between print layout, web layout and reading view."],
                ["Zoom Slider", "Increases or decreases the magnification."],
            ]
        ),

        heading("Main Tabs of the Ribbon"),

        table(
            ["Tab", "Contains"],
            [
                ["File", "New, Open, Save, Print and Export."],
                ["Home", "Font, paragraph, styles and clipboard commands."],
                ["Insert", "Tables, pictures, shapes, header, footer and symbols."],
                ["Design", "Document themes, colours and page borders."],
                ["Layout", "Margins, orientation, size, columns and spacing."],
                ["References", "Table of contents, footnotes, citations and index."],
                ["Mailings", "Mail merge, envelopes and labels."],
                ["Review", "Spelling, grammar, comments and track changes."],
                ["View", "Document views, rulers, gridlines and zoom."],
            ]
        ),

        heading("Creating and Saving a Document"),

        steps([
            "Open the word processor and choose a blank document",
            "Type the required text into the document area",
            "Apply the necessary formatting",
            "Open the File tab and choose Save As",
            "Select the folder and type a suitable file name",
            "Choose the file type and click Save",
        ]),

        heading("Common File Formats"),

        table(
            ["Extension", "Meaning"],
            [
                [".docx", "The standard Word document format."],
                [".doc", "The older Word 97 to 2003 format."],
                [".pdf", "Portable Document Format, fixed layout for sharing."],
                [".txt", "Plain text with no formatting."],
                [".rtf", "Rich Text Format readable by many programs."],
                [".odt", "Open Document Text used by LibreOffice."],
            ]
        ),

        heading("Editing Operations"),

        table(
            ["Operation", "Purpose", "Shortcut"],
            [
                ["Cut", "Removes the selection and places it on the clipboard", "Ctrl + X"],
                ["Copy", "Copies the selection to the clipboard", "Ctrl + C"],
                ["Paste", "Inserts the clipboard contents", "Ctrl + V"],
                ["Undo", "Reverses the last action", "Ctrl + Z"],
                ["Redo", "Repeats the reversed action", "Ctrl + Y"],
                ["Find", "Searches for text", "Ctrl + F"],
                ["Replace", "Searches and substitutes text", "Ctrl + H"],
                ["Select All", "Selects the whole document", "Ctrl + A"],
            ]
        ),

        note(
            "Cut removes the selected text from its original position whereas copy leaves the original untouched. Both place the content on the clipboard from where it can be pasted.",
            "exam",
            "Frequently Asked"
        ),

        heading("Views in a Word Processor"),

        table(
            ["View", "Purpose"],
            [
                ["Print Layout", "Shows the page exactly as it will be printed."],
                ["Web Layout", "Shows how the document would look as a web page."],
                ["Read Mode", "A distraction free view for reading."],
                ["Outline", "Displays the document structure by heading levels."],
                ["Draft", "A simplified view for fast typing and editing."],
            ]
        ),

        keyPoints([
            "A word processor creates, edits, formats, stores and prints text documents.",
            "The ribbon is organised into tabs, each containing groups of related commands.",
            "The standard Word file extension is docx.",
            "Cut removes the original text while copy retains it.",
            "Print layout view shows the document exactly as it will be printed.",
        ]),
    ],

    {
        summary:
            "Understand word processing software, the parts of its window, file formats and basic editing operations.",
        minutes: 9,
        tags: ["word", "office", "basics"],

        mcqs: [
            mcq(
                "The default file extension of a Word document is:",
                [".txt", ".docx", ".pdf", ".rtf"],
                1,
                "Modern Word documents are saved with the docx extension."
            ),
            mcq(
                "Which shortcut key is used to copy the selected text?",
                ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
                1,
                "Ctrl and C together copy the selection to the clipboard."
            ),
            mcq(
                "Which tab contains the mail merge feature?",
                ["Home", "Insert", "Mailings", "Review"],
                2,
                "Mail merge is located on the Mailings tab."
            ),
            mcq(
                "Which view shows the document exactly as it will be printed?",
                ["Web Layout", "Draft", "Print Layout", "Outline"],
                2,
                "Print layout displays the page as it will appear on paper."
            ),
            mcq(
                "Which bar displays the word count and page number?",
                ["Title bar", "Status bar", "Menu bar", "Scroll bar"],
                1,
                "The status bar at the bottom shows the page number and word count."
            ),
        ],

        questions: [
            qa(
                "What is a word processor? Explain its features.",
                "A word processor is an application used to create, edit, format, store and print text documents. Its features include easy typing and editing of text, a wide range of formatting options for font and paragraph, automatic spelling and grammar checking, find and replace for locating text, insertion of tables, images and charts, mail merge for producing personalised letters, and the ability to save and reprint documents at any time.",
                5
            ),
            qa(
                "Explain the main components of the Word window.",
                "The title bar shows the name of the open document. The quick access toolbar holds frequently used commands. The ribbon is the main command area divided into tabs such as Home and Insert. The ruler displays margins and indents. The document area is where text is typed and the cursor indicates the typing position. The status bar at the bottom shows the page number and word count, and the zoom slider changes the magnification.",
                5
            ),
            qa(
                "Differentiate between cut and copy.",
                "The cut operation removes the selected text from its original location and places it on the clipboard, so the text disappears from where it was. The copy operation places a duplicate of the selection on the clipboard while leaving the original text unchanged. In both cases the clipboard contents can then be inserted elsewhere using paste.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Formatting a Document
========================================================= */

const formattingDocuments = createTopic(
    "formatting-a-document",
    "Formatting a Document",

    [
        definition(
            "Formatting",
            "The process of changing the appearance of a document without altering its content."
        ),

        heading("Levels of Formatting"),

        table(
            ["Level", "Applies To", "Examples"],
            [
                ["Character", "Individual letters or words", "Font, size, bold, colour"],
                ["Paragraph", "A whole paragraph", "Alignment, indent, line spacing"],
                ["Page", "The entire page", "Margins, orientation, borders"],
                ["Document", "The complete file", "Theme, styles, watermark"],
            ]
        ),

        heading("Character Formatting"),

        table(
            ["Feature", "Purpose", "Shortcut"],
            [
                ["Font", "Changes the typeface such as Arial", "Ctrl + Shift + F"],
                ["Font size", "Changes the height of the text", "Ctrl + Shift + P"],
                ["Bold", "Makes the text thicker", "Ctrl + B"],
                ["Italic", "Slants the text", "Ctrl + I"],
                ["Underline", "Draws a line under the text", "Ctrl + U"],
                ["Subscript", "Lowers the text below the line", "Ctrl + ="],
                ["Superscript", "Raises the text above the line", "Ctrl + Shift + +"],
                ["Change case", "Switches between upper and lower case", "Shift + F3"],
                ["Font colour", "Changes the colour of the text", "—"],
                ["Highlight", "Adds a coloured background to the text", "—"],
            ]
        ),

        heading("Paragraph Formatting"),

        table(
            ["Feature", "Purpose", "Shortcut"],
            [
                ["Align left", "Straight left edge", "Ctrl + L"],
                ["Centre", "Centres the text", "Ctrl + E"],
                ["Align right", "Straight right edge", "Ctrl + R"],
                ["Justify", "Straight on both edges", "Ctrl + J"],
                ["Line spacing", "Space between lines", "Ctrl + 1, 2 or 5"],
                ["Indent", "Distance of text from the margin", "Tab"],
                ["Bullets", "Adds symbols before each item", "—"],
                ["Numbering", "Adds sequential numbers", "—"],
            ]
        ),

        heading("Types of Indentation"),

        table(
            ["Type", "Effect"],
            [
                ["Left indent", "Moves the whole paragraph away from the left margin."],
                ["Right indent", "Moves the whole paragraph away from the right margin."],
                ["First line indent", "Indents only the first line of the paragraph."],
                ["Hanging indent", "Indents every line except the first."],
            ]
        ),

        heading("Page Formatting"),

        table(
            ["Feature", "Purpose"],
            [
                ["Margins", "Blank space around the edges of the page."],
                ["Orientation", "Portrait for tall pages, landscape for wide pages."],
                ["Page size", "Common sizes are A4, Letter and Legal."],
                ["Columns", "Divides the page into newspaper style columns."],
                ["Page break", "Forces the following text onto a new page."],
                ["Page border", "Draws a decorative border around the page."],
                ["Watermark", "Faint text or image behind the content."],
                ["Page colour", "Sets a background colour for the page."],
            ]
        ),

        heading("Header, Footer and Page Numbers"),

        table(
            ["Element", "Location", "Typical Content"],
            [
                ["Header", "Top margin of every page", "Document title or company name"],
                ["Footer", "Bottom margin of every page", "Page number or date"],
                ["Page number", "Header or footer", "Automatically numbered"],
            ]
        ),

        heading("Styles"),

        definition(
            "Style",
            "A saved collection of formatting settings that can be applied to text with a single click."
        ),

        list([
            "Styles ensure that formatting remains consistent throughout the document.",
            "Changing a style updates every piece of text that uses it.",
            "Heading styles allow a table of contents to be generated automatically.",
            "Styles save considerable time in long documents.",
        ]),

        heading("Other Useful Features"),

        table(
            ["Feature", "Purpose"],
            [
                ["Format Painter", "Copies formatting from one place to another."],
                ["Find and Replace", "Locates text and substitutes it throughout the document."],
                ["Spelling and Grammar", "Checks the document for language errors."],
                ["Thesaurus", "Suggests synonyms for a selected word."],
                ["Word Count", "Counts words, characters, paragraphs and pages."],
                ["Track Changes", "Records every edit made by a reviewer."],
                ["Comments", "Adds notes without changing the text."],
                ["Bookmark", "Marks a location for quick navigation."],
                ["Hyperlink", "Links to a website, file or place in the document."],
            ]
        ),

        note(
            "To apply the same formatting to several separate pieces of text, double click the Format Painter button. It then stays active until you press Escape.",
            "tip",
            "Productivity"
        ),

        keyPoints([
            "Formatting changes the appearance of a document without changing its content.",
            "Character formatting affects letters while paragraph formatting affects whole paragraphs.",
            "Justified alignment produces straight edges on both the left and the right.",
            "A hanging indent indents every line except the first.",
            "Styles ensure consistency and allow an automatic table of contents.",
        ]),
    ],

    {
        summary:
            "Master character, paragraph and page formatting along with headers, footers, styles and review tools.",
        minutes: 11,
        tags: ["word", "formatting", "important"],

        mcqs: [
            mcq(
                "Which alignment gives straight edges on both sides?",
                ["Left", "Right", "Centre", "Justify"],
                3,
                "Justified text is aligned evenly on both the left and right margins."
            ),
            mcq(
                "Which shortcut applies bold formatting?",
                ["Ctrl + B", "Ctrl + I", "Ctrl + U", "Ctrl + D"],
                0,
                "Ctrl and B together make the selected text bold."
            ),
            mcq(
                "Text appearing at the top of every page is called the:",
                ["Footer", "Header", "Title", "Caption"],
                1,
                "The header appears in the top margin of every page."
            ),
            mcq(
                "Which indent leaves the first line at the margin and indents the rest?",
                ["First line indent", "Hanging indent", "Left indent", "Right indent"],
                1,
                "A hanging indent indents every line except the first."
            ),
            mcq(
                "Which tool copies formatting from one text to another?",
                ["Clipboard", "Format Painter", "Style", "Theme"],
                1,
                "The Format Painter copies formatting rather than content."
            ),
            mcq(
                "Which orientation makes the page wider than it is tall?",
                ["Portrait", "Landscape", "Vertical", "Normal"],
                1,
                "Landscape orientation makes the page wider than tall."
            ),
        ],

        questions: [
            qa(
                "What is formatting? Explain its levels.",
                "Formatting is the process of changing the appearance of a document without altering its content. Character formatting applies to individual letters or words and includes font, size, bold and colour. Paragraph formatting applies to whole paragraphs and includes alignment, indentation and line spacing. Page formatting applies to the entire page and includes margins, orientation and borders. Document formatting applies to the whole file and includes themes and styles.",
                5
            ),
            qa(
                "Explain the different types of alignment and indentation.",
                "There are four alignments. Left alignment gives a straight left edge, right alignment gives a straight right edge, centre alignment places text in the middle, and justified alignment produces straight edges on both sides. Indentation controls the distance of text from the margins. A left or right indent moves the whole paragraph inward, a first line indent indents only the opening line, and a hanging indent indents every line except the first.",
                5
            ),
            qa(
                "What are headers and footers? State their uses.",
                "A header is text that appears in the top margin of every page while a footer appears in the bottom margin. They are used to display information that should be repeated throughout the document, such as the title of the document, the name of the organisation, the chapter name, the date, and automatically generated page numbers. They are inserted from the Insert tab and are edited in a separate editing area.",
                3
            ),
            qa(
                "What are styles? State their advantages.",
                "A style is a saved collection of formatting settings such as font, size, colour and spacing that can be applied to text with a single click. The advantages are that formatting remains consistent throughout the document, modifying a style instantly updates every piece of text using it, heading styles allow a table of contents to be generated automatically, and a great deal of time is saved when working with long documents.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Tables, Mail Merge and Advanced Features
========================================================= */

const tablesAndMailMerge = createTopic(
    "tables-mail-merge-and-advanced-features",
    "Tables, Mail Merge and Advanced Features",

    [
        heading("Tables in a Word Processor"),

        definition(
            "Table",
            "A grid of rows and columns used to arrange information in an organised manner."
        ),

        heading("Creating a Table"),

        steps([
            "Place the cursor where the table should appear",
            "Open the Insert tab and click Table",
            "Drag over the grid to choose the number of rows and columns",
            "Alternatively choose Insert Table and type the exact numbers",
            "Type the data, pressing Tab to move to the next cell",
        ]),

        heading("Table Operations"),

        table(
            ["Operation", "Purpose"],
            [
                ["Insert row or column", "Adds a new row above or below, or a column left or right."],
                ["Delete row or column", "Removes the selected row or column."],
                ["Merge cells", "Combines two or more cells into one."],
                ["Split cells", "Divides one cell into several."],
                ["Split table", "Separates one table into two."],
                ["AutoFit", "Adjusts column widths to the contents."],
                ["Borders and shading", "Changes the lines and background colour."],
                ["Sort", "Arranges rows in ascending or descending order."],
                ["Formula", "Performs simple calculations such as SUM."],
                ["Repeat header row", "Repeats the heading on every page."],
            ]
        ),

        code(
            `=SUM(ABOVE)     adds all the numbers in the cells above
=SUM(LEFT)      adds all the numbers in the cells to the left
=AVERAGE(ABOVE) averages the cells above
=PRODUCT(LEFT)  multiplies the cells to the left`,
            "text",
            "Formulas available inside a Word table"
        ),

        note(
            "Pressing the Tab key in the last cell of a table automatically adds a new row. This is the quickest way to extend a table while typing.",
            "tip"
        ),

        heading("Mail Merge"),

        definition(
            "Mail Merge",
            "A feature that combines a standard letter with a list of names and addresses to produce personalised copies for many recipients."
        ),

        heading("Components of Mail Merge"),

        table(
            ["Component", "Description"],
            [
                ["Main document", "The letter containing the text common to everyone."],
                ["Data source", "The list of recipients with their details."],
                ["Merge fields", "Placeholders in the letter replaced by actual data."],
                ["Merged document", "The final set of personalised letters."],
            ]
        ),

        heading("Steps in Mail Merge"),

        steps([
            "Open the Mailings tab and click Start Mail Merge",
            "Choose the document type such as Letters or Labels",
            "Click Select Recipients and choose or create the data source",
            "Type the body of the letter in the main document",
            "Click Insert Merge Field and place the fields where required",
            "Use Preview Results to check a few letters",
            "Click Finish and Merge to print or save all the letters",
        ]),

        code(
            `Dear «Name»,

We are pleased to inform you that your application for the
«Course» programme has been accepted.

Please report to the college on «Date».

Regards
The Principal`,
            "text",
            "A main document containing merge fields"
        ),

        heading("Advantages of Mail Merge"),

        list([
            "Hundreds of personalised letters are produced in a few minutes.",
            "The same letter need not be typed repeatedly.",
            "Errors are reduced because the data comes from a single list.",
            "The data source can be reused for future mailings.",
            "It can also produce envelopes, labels and personalised emails.",
        ]),

        heading("References and Long Document Features"),

        table(
            ["Feature", "Purpose"],
            [
                ["Table of Contents", "Generated automatically from heading styles."],
                ["Footnote", "A note placed at the bottom of the same page."],
                ["Endnote", "A note placed at the end of the document."],
                ["Caption", "A numbered label attached to a figure or table."],
                ["Cross reference", "A link to another part of the same document."],
                ["Citation and Bibliography", "Manages references in a chosen style."],
                ["Index", "An alphabetical list of terms with page numbers."],
            ]
        ),

        heading("Review Features"),

        table(
            ["Feature", "Purpose"],
            [
                ["Spelling and Grammar", "Detects and corrects language errors."],
                ["Track Changes", "Records insertions and deletions made by a reviewer."],
                ["Comments", "Adds notes in the margin without altering the text."],
                ["Compare", "Shows the differences between two versions."],
                ["Restrict Editing", "Prevents unauthorised changes to the document."],
            ]
        ),

        heading("Printing a Document"),

        steps([
            "Open the File tab and choose Print",
            "Select the printer to be used",
            "Choose which pages should be printed",
            "Set the number of copies required",
            "Check the preview shown on the right",
            "Click the Print button",
        ]),

        keyPoints([
            "Tables organise information in rows and columns and support simple formulas.",
            "Mail merge combines a main document with a data source to create personalised letters.",
            "Merge fields are placeholders replaced by actual values during merging.",
            "A table of contents is generated automatically from heading styles.",
            "Track changes records every edit so that it can be accepted or rejected later.",
        ]),
    ],

    {
        summary:
            "Learn to work with tables, perform a mail merge and use reference, review and printing features.",
        minutes: 11,
        tags: ["word", "mail-merge", "tables", "important"],

        mcqs: [
            mcq(
                "Which key moves the cursor to the next cell in a table?",
                ["Enter", "Tab", "Space", "Arrow"],
                1,
                "The Tab key moves to the next cell and creates a new row at the end."
            ),
            mcq(
                "Mail merge requires which two main components?",
                [
                    "Header and footer",
                    "Main document and data source",
                    "Table and chart",
                    "Style and theme",
                ],
                1,
                "Mail merge combines a main document with a data source."
            ),
            mcq(
                "Which tab contains the mail merge commands?",
                ["Insert", "Layout", "Mailings", "References"],
                2,
                "All mail merge commands are located on the Mailings tab."
            ),
            mcq(
                "A note placed at the bottom of the same page is called a:",
                ["Endnote", "Footnote", "Caption", "Comment"],
                1,
                "A footnote appears at the bottom of the page on which it is referenced."
            ),
            mcq(
                "A table of contents is generated automatically from:",
                ["Bookmarks", "Heading styles", "Page numbers", "Captions"],
                1,
                "Word builds the table of contents from the applied heading styles."
            ),
            mcq(
                "Which feature records the edits made by a reviewer?",
                ["Comments", "Track Changes", "Compare", "Restrict Editing"],
                1,
                "Track changes records every insertion and deletion."
            ),
        ],

        questions: [
            qa(
                "What is mail merge? Explain its components and steps.",
                "Mail merge is a feature that combines a standard letter with a list of recipients to produce personalised copies for each person. Its components are the main document containing the common text, the data source holding the recipient details, the merge fields which act as placeholders, and the final merged document. The steps are to start mail merge from the Mailings tab, choose the document type, select the recipients, type the letter, insert the merge fields, preview the results, and finally merge to print or save.",
                5
            ),
            qa(
                "State the advantages of mail merge.",
                "Mail merge produces hundreds of personalised letters within minutes, which removes the need to type the same letter repeatedly. It reduces errors because all the recipient details come from a single verified list. The data source can be reused for future mailings. In addition to letters it can generate envelopes, mailing labels and personalised email messages, which makes it valuable for offices and colleges.",
                4
            ),
            qa(
                "Explain the operations that can be performed on a table.",
                "Rows and columns can be inserted or deleted as required. Two or more cells can be merged into one, and a single cell can be split into several. A table can be divided into two separate tables. AutoFit adjusts the column widths to the contents. Borders and shading change the appearance. Rows can be sorted in ascending or descending order, simple formulas such as sum and average can be applied, and the heading row can be repeated on every page.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Introduction to Presentation Software
========================================================= */

const introductionToPresentation = createTopic(
    "introduction-to-presentation-software",
    "Introduction to Presentation Software",

    [
        definition(
            "Presentation Software",
            "An application used to create a sequence of slides containing text, images, charts and multimedia for display to an audience."
        ),

        text(
            "Microsoft PowerPoint, Google Slides and LibreOffice Impress are the commonly used presentation programs. They are used for lectures, seminars, project defences, business proposals and training sessions."
        ),

        heading("Basic Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Presentation", "The complete file containing all the slides."],
                ["Slide", "A single page of the presentation."],
                ["Layout", "The arrangement of placeholders on a slide."],
                ["Placeholder", "A box that holds text, an image or a chart."],
                ["Slide Master", "Controls the design of every slide at once."],
                ["Theme", "A predefined combination of colours, fonts and effects."],
                ["Transition", "The visual effect when moving from one slide to the next."],
                ["Animation", "The visual effect applied to an object within a slide."],
                ["Handout", "A printed version showing several slides on one page."],
                ["Speaker Notes", "Private notes visible only to the presenter."],
            ]
        ),

        heading("Parts of the PowerPoint Window"),

        table(
            ["Component", "Purpose"],
            [
                ["Slide Pane", "The large area where the current slide is edited."],
                ["Thumbnail Pane", "Shows small previews of all slides on the left."],
                ["Notes Pane", "Area below the slide for speaker notes."],
                ["Ribbon", "Contains all commands grouped into tabs."],
                ["Status Bar", "Shows the slide number and current theme."],
                ["View Buttons", "Switch between normal, sorter and reading views."],
            ]
        ),

        heading("Views in PowerPoint"),

        table(
            ["View", "Purpose"],
            [
                ["Normal", "The default view used for creating and editing slides."],
                ["Slide Sorter", "Shows all slides as thumbnails for easy rearranging."],
                ["Notes Page", "Displays each slide with its speaker notes."],
                ["Reading View", "Plays the presentation inside a window."],
                ["Slide Show", "Displays the presentation full screen to the audience."],
                ["Outline View", "Shows only the text of all slides in outline form."],
            ]
        ),

        heading("Slide Layouts"),

        table(
            ["Layout", "Contains"],
            [
                ["Title Slide", "A main title and a subtitle."],
                ["Title and Content", "A heading with a content placeholder."],
                ["Two Content", "A heading with two side by side placeholders."],
                ["Comparison", "Two contents with individual headings."],
                ["Title Only", "Only a heading with a blank area below."],
                ["Blank", "No placeholders at all."],
                ["Picture with Caption", "An image with a title and description."],
            ]
        ),

        heading("Creating a Presentation"),

        steps([
            "Open the presentation software and choose a blank presentation",
            "Select a theme from the Design tab",
            "Type the title and subtitle on the first slide",
            "Click New Slide and choose a suitable layout",
            "Add text, images, charts or tables to each slide",
            "Apply transitions and animations where appropriate",
            "Save the file and run the slide show to review it",
        ]),

        heading("File Formats"),

        table(
            ["Extension", "Meaning"],
            [
                [".pptx", "The standard PowerPoint presentation format."],
                [".ppt", "The older PowerPoint 97 to 2003 format."],
                [".ppsx", "A show file that opens directly in slide show mode."],
                [".pdf", "A fixed layout format for sharing and printing."],
                [".odp", "Open Document Presentation used by Impress."],
            ]
        ),

        heading("Useful Shortcuts"),

        table(
            ["Shortcut", "Action"],
            [
                ["Ctrl + M", "Insert a new slide"],
                ["F5", "Start the show from the first slide"],
                ["Shift + F5", "Start the show from the current slide"],
                ["Esc", "End the slide show"],
                ["B", "Blank the screen to black during a show"],
                ["W", "Blank the screen to white during a show"],
                ["Ctrl + D", "Duplicate the selected slide"],
            ]
        ),

        keyPoints([
            "Presentation software creates a sequence of slides for display to an audience.",
            "A layout is the arrangement of placeholders while a theme is the overall design.",
            "The slide master controls the appearance of every slide at once.",
            "Slide sorter view is used to rearrange slides quickly.",
            "Pressing F5 starts the slide show from the first slide.",
        ]),
    ],

    {
        summary:
            "Learn the terminology, window components, views, layouts and file formats of presentation software.",
        minutes: 9,
        tags: ["powerpoint", "presentation", "office"],

        mcqs: [
            mcq(
                "A single page of a presentation is called a:",
                ["Sheet", "Slide", "Page", "Frame"],
                1,
                "Each page of a presentation is called a slide."
            ),
            mcq(
                "Which key starts the slide show from the first slide?",
                ["F1", "F5", "F9", "F12"],
                1,
                "Pressing F5 begins the presentation from the first slide."
            ),
            mcq(
                "Which view is best for rearranging slides?",
                ["Normal", "Slide Sorter", "Reading", "Notes Page"],
                1,
                "Slide sorter view shows all slides as thumbnails for easy rearranging."
            ),
            mcq(
                "Which feature controls the design of all slides at once?",
                ["Layout", "Theme", "Slide Master", "Template"],
                2,
                "The slide master governs the appearance of every slide."
            ),
            mcq(
                "The default extension of a PowerPoint file is:",
                [".ppt", ".pptx", ".ppsx", ".pdf"],
                1,
                "Modern PowerPoint files use the pptx extension."
            ),
            mcq(
                "Notes visible only to the presenter are called:",
                ["Comments", "Handouts", "Speaker notes", "Captions"],
                2,
                "Speaker notes are visible to the presenter but not to the audience."
            ),
        ],

        questions: [
            qa(
                "What is presentation software? State its uses.",
                "Presentation software is an application used to create a sequence of slides containing text, images, charts and multimedia which are displayed to an audience. It is used for classroom lectures, seminars, project defences, business proposals, product launches, training sessions and conference talks, because it allows information to be communicated visually and memorably.",
                4
            ),
            qa(
                "Explain the different views available in PowerPoint.",
                "Normal view is the default working view used for creating and editing slides. Slide sorter view displays all slides as thumbnails so that they can be rearranged, copied or deleted easily. Notes page view shows each slide together with its speaker notes. Reading view plays the presentation within a window. Slide show view displays the presentation full screen to the audience, and outline view shows only the text of all slides.",
                5
            ),
            qa(
                "Differentiate between a slide layout and a theme.",
                "A slide layout determines the arrangement of placeholders on an individual slide, for example a title slide layout with a title and subtitle, or a title and content layout. A theme is a predefined combination of colours, fonts, effects and background that determines the overall visual design of the entire presentation. A layout affects the structure of one slide while a theme affects the appearance of all slides.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Designing and Delivering a Presentation
========================================================= */

const designingPresentation = createTopic(
    "designing-and-delivering-a-presentation",
    "Designing and Delivering a Presentation",

    [
        heading("Inserting Objects into a Slide"),

        table(
            ["Object", "Purpose"],
            [
                ["Text Box", "Places text anywhere on the slide."],
                ["Picture", "Inserts an image from a file or online source."],
                ["Shape", "Adds arrows, rectangles, circles and callouts."],
                ["SmartArt", "Creates diagrams such as processes and hierarchies."],
                ["Chart", "Displays numeric data graphically."],
                ["Table", "Arranges information in rows and columns."],
                ["Audio and Video", "Embeds sound or film clips."],
                ["Hyperlink", "Jumps to a slide, file or website."],
                ["Header and Footer", "Adds the date, slide number or footer text."],
            ]
        ),

        heading("Transitions"),

        definition(
            "Transition",
            "A visual effect that plays when the presentation moves from one slide to the next."
        ),

        table(
            ["Setting", "Purpose"],
            [
                ["Effect", "The type of transition such as fade, push or wipe."],
                ["Duration", "How long the effect takes to complete."],
                ["Sound", "An optional sound played during the transition."],
                ["On Mouse Click", "Advances the slide only when clicked."],
                ["After", "Advances the slide automatically after a set time."],
                ["Apply to All", "Applies the same transition to every slide."],
            ]
        ),

        heading("Animations"),

        definition(
            "Animation",
            "A visual effect applied to an individual object on a slide, controlling how it appears, moves or disappears."
        ),

        table(
            ["Category", "Purpose", "Examples"],
            [
                ["Entrance", "How the object appears", "Fade, Fly In, Zoom"],
                ["Emphasis", "Draws attention to a visible object", "Pulse, Spin, Grow"],
                ["Exit", "How the object leaves", "Fade Out, Fly Out"],
                ["Motion Path", "Moves the object along a drawn path", "Line, Arc, Custom"],
            ]
        ),

        table(
            ["Timing Option", "Meaning"],
            [
                ["On Click", "Starts when the mouse is clicked."],
                ["With Previous", "Starts at the same time as the previous animation."],
                ["After Previous", "Starts as soon as the previous animation finishes."],
                ["Delay", "Waits for the specified time before starting."],
            ]
        ),

        note(
            "Transitions apply to whole slides whereas animations apply to individual objects on a slide. This distinction is frequently asked in examinations.",
            "exam",
            "Frequently Asked"
        ),

        heading("Slide Show Features"),

        table(
            ["Feature", "Purpose"],
            [
                ["Rehearse Timings", "Records how long each slide is displayed."],
                ["Record Slide Show", "Records narration along with the timings."],
                ["Hide Slide", "Skips a slide during the show without deleting it."],
                ["Custom Show", "Presents only a selected subset of slides."],
                ["Presenter View", "Shows notes and the next slide on the presenter screen."],
                ["Laser Pointer", "Turns the mouse pointer into a highlighting dot."],
            ]
        ),

        heading("Printing Options"),

        table(
            ["Option", "Output"],
            [
                ["Full Page Slides", "One slide printed on each page."],
                ["Notes Pages", "Each slide with its speaker notes below."],
                ["Outline", "Only the text of all slides."],
                ["Handouts", "Two, three, four, six or nine slides on one page."],
            ]
        ),

        heading("Principles of Good Slide Design"),

        list(
            [
                "Follow the six by six rule, using at most six bullet points with about six words each.",
                "Use a font size of at least twenty four points so the text is readable from a distance.",
                "Maintain strong contrast between the text and the background.",
                "Use one clear idea per slide rather than crowding several together.",
                "Prefer images, charts and diagrams over long paragraphs.",
                "Keep the design consistent by using a single theme throughout.",
                "Use animation sparingly so that it supports rather than distracts.",
                "Always proofread the slides for spelling and grammar errors.",
            ],
            true
        ),

        heading("Tips for Effective Delivery"),

        list([
            "Rehearse the presentation several times before the actual delivery.",
            "Face the audience rather than reading from the screen.",
            "Maintain eye contact and speak clearly at a moderate pace.",
            "Use the speaker notes as prompts rather than as a script.",
            "Keep within the allotted time by rehearsing with a clock.",
            "Prepare for likely questions from the audience.",
            "Arrive early and check the projector and audio beforehand.",
        ]),

        heading("Common Mistakes to Avoid"),

        table(
            ["Mistake", "Why It Is a Problem"],
            [
                ["Too much text on one slide", "The audience reads instead of listening."],
                ["Very small font", "The text cannot be read from the back of the room."],
                ["Excessive animation", "It distracts from the actual message."],
                ["Poor colour contrast", "The text becomes difficult to read."],
                ["Reading directly from slides", "The presentation becomes dull and impersonal."],
                ["Too many slides", "The allotted time is exceeded."],
            ]
        ),

        keyPoints([
            "Transitions apply to slides while animations apply to objects.",
            "Entrance, emphasis, exit and motion path are the four animation categories.",
            "Rehearse timings records how long each slide should be displayed.",
            "Presenter view shows the speaker notes and the next slide privately.",
            "Good slides follow the six by six rule and use large readable fonts.",
        ]),
    ],

    {
        summary:
            "Learn to insert objects, apply transitions and animations, run a slide show and design effective slides.",
        minutes: 10,
        tags: ["powerpoint", "presentation", "design", "important"],

        mcqs: [
            mcq(
                "A visual effect applied when moving from one slide to another is called a:",
                ["Animation", "Transition", "Motion path", "Trigger"],
                1,
                "Transitions apply between slides."
            ),
            mcq(
                "Which animation category controls how an object appears?",
                ["Exit", "Emphasis", "Entrance", "Motion Path"],
                2,
                "Entrance animations control how an object enters the slide."
            ),
            mcq(
                "According to the six by six rule, a slide should have at most:",
                [
                    "Six slides and six words",
                    "Six bullets with about six words each",
                    "Six images",
                    "Six colours",
                ],
                1,
                "The rule suggests no more than six bullet points of about six words each."
            ),
            mcq(
                "Which view shows the speaker notes and the next slide to the presenter only?",
                ["Reading view", "Slide sorter", "Presenter view", "Notes page"],
                2,
                "Presenter view displays notes privately on the presenter screen."
            ),
            mcq(
                "Which printing option places several slides on one page?",
                ["Full page slides", "Notes pages", "Outline", "Handouts"],
                3,
                "Handouts print two, three, four, six or nine slides on a single page."
            ),
            mcq(
                "The minimum recommended font size for slides is about:",
                ["12 points", "16 points", "24 points", "40 points"],
                2,
                "A size of at least twenty four points keeps text readable from a distance."
            ),
        ],

        questions: [
            qa(
                "Differentiate between transition and animation.",
                "A transition is a visual effect that plays when the presentation moves from one slide to the next, and it therefore applies to the slide as a whole. An animation is a visual effect applied to an individual object on a slide such as a heading, an image or a bullet point, and it controls how that object appears, is emphasised, moves or disappears. Transitions are set on the Transitions tab while animations are set on the Animations tab.",
                4
            ),
            qa(
                "Explain the different categories of animation.",
                "Entrance animations control how an object appears on the slide, with effects such as fade, fly in and zoom. Emphasis animations draw attention to an object that is already visible, using effects such as pulse, spin and grow. Exit animations control how an object leaves the slide. Motion path animations move an object along a defined path such as a line, an arc or a custom drawn route.",
                4
            ),
            qa(
                "State the principles of designing an effective presentation.",
                "Follow the six by six rule by using at most six bullet points with about six words each. Use a font size of at least twenty four points so that the text is readable from the back of the room. Maintain strong contrast between the text and the background. Present one clear idea per slide. Prefer images, charts and diagrams to long paragraphs. Keep the design consistent by using a single theme, use animation sparingly, and always proofread the slides.",
                5
            ),
            qa(
                "What are the common mistakes made while preparing a presentation?",
                "Placing too much text on one slide causes the audience to read instead of listening. Using a very small font makes the content unreadable from a distance. Excessive animation distracts from the message. Poor colour contrast makes text difficult to see. Reading directly from the slides makes the delivery dull and impersonal. Preparing too many slides results in exceeding the allotted time.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    introductionToWordProcessing,
    formattingDocuments,
    tablesAndMailMerge,
    introductionToPresentation,
    designingPresentation,
];