/* =========================================================
   BCA • SEM 5 • Visual Programming
   UNIT 2 — Advanced Controls, Menus, Dialogs, MDI & ADO.NET
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
   TOPIC 1 — Advanced Controls & DataGridView
========================================================= */

const advancedControls = createTopic(
    "advanced-controls-and-datagridview",
    "Advanced Controls & DataGridView",

    [
        definition(
            "DataGridView Control",
            "The DataGridView control provides a powerful, flexible, and customizable tabular grid for displaying, editing, and formatting data from various data sources (such as DataTables, Lists, and databases)."
        ),

        heading("Container and Advanced UI Controls"),

        table(
            ["Control", "Class Name", "Key Properties & Features"],
            [
                ["Panel", "System.Windows.Forms.Panel", "BorderStyle, AutoScroll; lightweight container for grouping controls"],
                ["GroupBox", "System.Windows.Forms.GroupBox", "Text; displays a visible frame border with a title caption to group controls"],
                ["TabControl", "System.Windows.Forms.TabControl", "TabPages, SelectedIndex; multi-page dialog layout saving screen real estate"],
                ["TreeView", "System.Windows.Forms.TreeView", "Nodes, SelectedNode, ImageList; displays hierarchical data in parent-child tree nodes"],
                ["ListView", "System.Windows.Forms.ListView", "Items, View (Details, LargeIcon), Columns; displays items with icons or columns"],
                ["Timer", "System.Windows.Forms.Timer", "Interval (ms), Enabled; fires the Tick event at periodic intervals"],
                ["ProgressBar", "System.Windows.Forms.ProgressBar", "Minimum, Maximum, Value, Step; visually indicates progress of a long-running task"],
                ["PictureBox", "System.Windows.Forms.PictureBox", "Image, SizeMode (StretchImage, Zoom, CenterImage); displays raster/vector images"],
            ]
        ),

        heading("Populating and Managing TreeView and ListView"),

        code(
            `// Populating a TreeView with Parent and Child Nodes
TreeNode rootNode = new TreeNode("BCA Curriculum");
TreeNode sem5Node = new TreeNode("Semester 5");
sem5Node.Nodes.Add("Visual Programming");
sem5Node.Nodes.Add("Python Programming");
sem5Node.Nodes.Add("Artificial Intelligence");

rootNode.Nodes.Add(sem5Node);
treeViewCourses.Nodes.Add(rootNode);
treeViewCourses.ExpandAll();`,
            "csharp",
            "TreeView Node Population"
        ),

        heading("Working with DataGridView"),

        code(
            `// Programmatically configuring a DataGridView
dataGridViewStudents.ColumnCount = 3;
dataGridViewStudents.Columns[0].Name = "Student ID";
dataGridViewStudents.Columns[1].Name = "Name";
dataGridViewStudents.Columns[2].Name = "Course";

// Adding rows manually
dataGridViewStudents.Rows.Add(101, "Rahul Sharma", "BCA");
dataGridViewStudents.Rows.Add(102, "Pooja Patel", "BCA");
dataGridViewStudents.Rows.Add(103, "Aakash Dave", "BCA");

// Formatting DataGridView appearance
dataGridViewStudents.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
dataGridViewStudents.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
dataGridViewStudents.ReadOnly = true;`,
            "csharp",
            "DataGridView Configuration"
        ),

        keyPoints([
            "Panel and GroupBox group related controls logically and visually.",
            "TabControl organizes complex forms into multiple tabbed pages.",
            "TreeView displays hierarchical data; ListView displays columnar or tiled records.",
            "The Timer control executes code periodically on the UI thread via the Tick event.",
            "DataGridView is the primary WinForms grid for displaying tabular data.",
        ]),
    ],

    {
        summary:
            "Explore container controls (Panel, GroupBox, TabControl), hierarchical controls (TreeView, ListView), Timer, ProgressBar, and the DataGridView component.",
        minutes: 13,
        tags: ["advanced-controls", "datagridview", "treeview", "listview", "timer", "important"],

        mcqs: [
            mcq(
                "Which control displays hierarchical parent-child data structures using expandable nodes?",
                ["ListView", "DataGridView", "TreeView", "ListBox"],
                2,
                "TreeView represents hierarchical data structures using parent and child TreeNodes."
            ),
            mcq(
                "Which property of the PictureBox control scales an image to fit the control dimensions?",
                ["ImageLocation", "SizeMode = PictureBoxSizeMode.StretchImage", "ScaleMode", "AutoSizeColumnsMode"],
                1,
                "StretchImage resizes the image so it fits the PictureBox control boundaries."
            ),
            mcq(
                "The Timer control measures time intervals in:",
                ["Seconds", "Milliseconds", "Microseconds", "Minutes"],
                1,
                "The Timer.Interval property is configured in milliseconds (1000 ms = 1 second)."
            ),
            mcq(
                "Which property makes a DataGridView select the entire row when any cell is clicked?",
                ["MultiSelect", "SelectionMode = FullRowSelect", "ReadOnly", "AutoSize"],
                1,
                "FullRowSelect ensures that clicking any cell highlights the entire row."
            ),
        ],

        questions: [
            qa(
                "Compare Panel and GroupBox container controls in Windows Forms.",
                "Panel and GroupBox are both container controls used to group collections of child controls (such as RadioButtons). Key differences: (1) Border & Caption: GroupBox displays a border around its perimeter and has a Text property to show a title caption; Panel has no title caption and can have flat, single, or 3D borders. (2) Scrolling: Panel supports automatic scrollbars via the AutoScroll property when child controls exceed its bounds; GroupBox does not support scrolling. (3) Use Case: GroupBox is best for visual labeling; Panel is best for dynamic layouts and scrolling regions.",
                4
            ),
            qa(
                "What is the DataGridView control? Explain how data can be bound to it.",
                "The DataGridView control is a grid component in Windows Forms used to display and edit tabular data. It supports sorting, pagination, in-cell editing, formatting, and data validation. Data can be bound to it by setting its 'DataSource' property to any collection implementing IList or IListSource (e.g., dataGridView.DataSource = dataTable; or dataGridView.DataSource = studentList;). It can also be populated unbound by programmatically configuring columns and invoking dataGridView.Rows.Add().",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Menus, Toolbars, StatusBars & Common Dialogs
========================================================= */

const menusDialogs = createTopic(
    "menus-toolbars-statusbars-and-dialogs",
    "Menus, Toolbars, StatusBars & Common Dialogs",

    [
        definition(
            "Menu & Navigation Controls",
            "Modern strip controls (MenuStrip, ToolStrip, StatusStrip, ContextMenuStrip) that provide standard desktop application navigation, shortcuts, toolbars, and contextual popups."
        ),

        heading("Menu and Navigation Controls"),

        table(
            ["Control", "Class Name", "Primary Purpose"],
            [
                ["MenuStrip", "System.Windows.Forms.MenuStrip", "Top-level menu bar containing drop-down menus (File, Edit, View, Help)"],
                ["ContextMenuStrip", "System.Windows.Forms.ContextMenuStrip", "Popup context menu displayed on right-clicking a control"],
                ["ToolStrip", "System.Windows.Forms.ToolStrip", "Toolbar containing graphical shortcut icon buttons"],
                ["StatusStrip", "System.Windows.Forms.StatusStrip", "Bottom status bar displaying application state, user info, or progress"],
            ]
        ),

        heading("Common Standard Dialog Boxes"),

        table(
            ["Common Dialog", "Class Name", "Key Properties", "Return / Output"],
            [
                ["OpenFileDialog", "System.Windows.Forms.OpenFileDialog", "Filter, InitialDirectory, Multiselect", "FileName (Selected file path)"],
                ["SaveFileDialog", "System.Windows.Forms.SaveFileDialog", "Filter, DefaultExt, OverwritePrompt", "FileName (Target save path)"],
                ["ColorDialog", "System.Windows.Forms.ColorDialog", "Color, AllowFullOpen, CustomColors", "Color (Selected System.Drawing.Color)"],
                ["FontDialog", "System.Windows.Forms.FontDialog", "Font, ShowColor, MinSize, MaxSize", "Font and Color"],
                ["FolderBrowserDialog", "System.Windows.Forms.FolderBrowserDialog", "SelectedPath, Description", "SelectedPath (Directory path string)"],
            ]
        ),

        heading("Implementing OpenFileDialog and SaveFileDialog"),

        code(
            `// 1. Open File Dialog Example
OpenFileDialog openDialog = new OpenFileDialog
{
    Title = "Select a Text File",
    Filter = "Text Files (*.txt)|*.txt|All Files (*.*)|*.*",
    InitialDirectory = @"C:\\"
};

if (openDialog.ShowDialog() == DialogResult.OK)
{
    string filePath = openDialog.FileName;
    txtEditor.Text = System.IO.File.ReadAllText(filePath);
}

// 2. Save File Dialog Example
SaveFileDialog saveDialog = new SaveFileDialog
{
    Title = "Save Document",
    Filter = "Text Files (*.txt)|*.txt",
    DefaultExt = "txt"
};

if (saveDialog.ShowDialog() == DialogResult.OK)
{
    System.IO.File.WriteAllText(saveDialog.FileName, txtEditor.Text);
    MessageBox.Show("File saved successfully!");
}`,
            "csharp",
            "Common Dialog Box Integration"
        ),

        heading("ColorDialog & FontDialog Example"),

        code(
            `// Changing TextBox Appearance with Color and Font Dialogs
ColorDialog colorDlg = new ColorDialog();
if (colorDlg.ShowDialog() == DialogResult.OK)
{
    txtEditor.ForeColor = colorDlg.Color;
}

FontDialog fontDlg = new FontDialog();
if (fontDlg.ShowDialog() == DialogResult.OK)
{
    txtEditor.Font = fontDlg.Font;
}`,
            "csharp",
            "Color and Font Dialogs"
        ),

        keyPoints([
            "MenuStrip provides standard top-level application menu hierarchies.",
            "ContextMenuStrip associates right-click menus with specific controls.",
            "OpenFileDialog and SaveFileDialog use the Filter property to restrict file types.",
            "Common dialogs return DialogResult.OK when the user confirms their selection.",
            "StatusStrip displays contextual application state at the bottom of the form.",
        ]),
    ],

    {
        summary:
            "Learn MenuStrip, ToolStrip, StatusStrip, ContextMenuStrip, and standard dialogs: OpenFileDialog, SaveFileDialog, ColorDialog, and FontDialog.",
        minutes: 12,
        tags: ["menustrip", "toolstrip", "dialogs", "openfiledialog", "savefiledialog", "important"],

        mcqs: [
            mcq(
                "Which control provides a right-click popup menu attached to a specific control?",
                ["MenuStrip", "ContextMenuStrip", "ToolStrip", "StatusStrip"],
                1,
                "ContextMenuStrip is designed specifically for right-click context menus."
            ),
            mcq(
                "What does the 'Filter' property of an OpenFileDialog do?",
                ["Encrypts files", "Restricts the visible file extensions shown in the browser dialog", "Deletes temporary files", "Compiles code"],
                1,
                "The Filter property formats which file types (e.g., *.txt, *.csv) are displayed to the user."
            ),
            mcq(
                "Which common dialog allows users to pick an operating system font and size?",
                ["ColorDialog", "FontDialog", "StyleDialog", "TextDialog"],
                1,
                "FontDialog allows users to select font family, style, and point size."
            ),
            mcq(
                "What is the standard location for a StatusStrip control on a Form?",
                ["Top edge", "Bottom edge", "Left sidebar", "Center"],
                1,
                "StatusStrip docks to the bottom edge of a Form to display status and progress info."
            ),
        ],

        questions: [
            qa(
                "Explain OpenFileDialog and SaveFileDialog with their essential properties.",
                "OpenFileDialog allows users to browse and select files to open. Essential properties include: (1) Filter: Sets allowed file extensions (e.g., 'Image Files|*.jpg;*.png'). (2) InitialDirectory: Sets the opening folder path. (3) Multiselect: Boolean allowing multiple file selections. (4) FileName: Holds the selected file path. SaveFileDialog allows users to specify file destination and name for saving. Essential properties include: (1) DefaultExt: Default extension appended if omitted. (2) OverwritePrompt: Warns if the chosen file already exists. (3) FileName: Target file path to write data.",
                4
            ),
            qa(
                "What is MenuStrip and ContextMenuStrip? How do they differ?",
                "A MenuStrip is a main menu bar docked at the top of a Windows Form, organizing application-wide commands into hierarchical drop-down lists (e.g., File, Edit, Tools, Help) accessible via accelerator keys and keyboard shortcuts. A ContextMenuStrip is a contextual popup menu that appears when a user right-clicks on a specific control with which the ContextMenuStrip has been linked (via the control's ContextMenuStrip property). It provides localized commands relevant only to the clicked control.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — MDI Applications & User-Defined Controls
========================================================= */

const mdiAndUserControls = createTopic(
    "mdi-applications-and-user-controls",
    "MDI Applications & User-Defined Controls",

    [
        definition(
            "Multiple Document Interface (MDI)",
            "An application architecture where a single parent window (MDI Parent) contains and manages multiple child windows (MDI Children) within its client area."
        ),

        heading("Configuring an MDI Application"),

        steps([
            "Set the main parent form's property 'IsMdiContainer = true'.",
            "Instantiate the child form object in code.",
            "Assign the child form's 'MdiParent' property to the parent form ('this').",
            "Display the child window using the 'childForm.Show()' method.",
        ]),

        code(
            `// Creating an MDI Child Form from a Menu Click
private void newDocumentToolStripMenuItem_Click(object sender, EventArgs e)
{
    ChildEditorForm child = new ChildEditorForm();
    child.MdiParent = this; // Set parent
    child.Text = $"Document {this.MdiChildren.Length}";
    child.Show();
}

// Arranging Child Windows inside MDI Container
private void cascadeToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.Cascade);
}

private void tileHorizontalToolStripMenuItem_Click(object sender, EventArgs e)
{
    this.LayoutMdi(MdiLayout.TileHorizontal);
}`,
            "csharp",
            "MDI Implementation and Layouts"
        ),

        heading("MDI Layout Types (MdiLayout Enum)"),

        table(
            ["Layout Value", "Visual Arrangement"],
            [
                ["MdiLayout.Cascade", "Overlaps child windows diagonally with visible title bars"],
                ["MdiLayout.TileHorizontal", "Arranges child windows in horizontal non-overlapping rows"],
                ["MdiLayout.TileVertical", "Arranges child windows in vertical non-overlapping columns"],
                ["MdiLayout.ArrangeIcons", "Arranges minimized child window icons along the bottom"],
            ]
        ),

        heading("User-Defined Controls (UserControl)"),

        definition(
            "UserControl",
            "A reusable custom composite control created by combining multiple existing standard controls onto a design canvas with custom properties, methods, and events."
        ),

        code(
            `// Custom AddressEntryControl inheriting UserControl
public partial class AddressControl : UserControl
{
    public AddressControl()
    {
        InitializeComponent();
    }

    // Custom Exposed Properties
    public string City
    {
        get => txtCity.Text;
        set => txtCity.Text = value;
    }

    public string Pincode
    {
        get => txtPincode.Text;
        set => txtPincode.Text = value;
    }

    public void ClearFields()
    {
        txtCity.Clear();
        txtPincode.Clear();
    }
}`,
            "csharp",
            "Custom UserControl Definition"
        ),

        keyPoints([
            "An MDI Parent form has IsMdiContainer set to True.",
            "Child forms must have their MdiParent property set prior to calling Show().",
            "LayoutMdi arranges children via Cascade, TileHorizontal, or TileVertical.",
            "UserControls provide reusable composite UI modules with custom properties.",
            "MDI applications streamline multi-document desktop software like IDEs and photo editors.",
        ]),
    ],

    {
        summary:
            "Understand MDI architecture (IsMdiContainer, MdiChildren, LayoutMdi) and creating reusable custom composite UserControls.",
        minutes: 12,
        tags: ["mdi", "mdi-parent", "mdi-child", "usercontrol", "layoutmdi", "important"],

        mcqs: [
            mcq(
                "Which Form property must be set to 'true' to turn a Form into an MDI Parent container?",
                ["IsContainer", "IsMdiContainer", "AllowMdi", "MdiParent"],
                1,
                "Setting IsMdiContainer = true turns a standard form into an MDI parent window."
            ),
            mcq(
                "How is a child window assigned to an MDI parent in C# code?",
                ["parent.Add(child);", "child.MdiParent = parent;", "child.SetParent(parent);", "parent.MdiChildren.Add(child);"],
                1,
                "Assigning childForm.MdiParent = parentForm establishes the MDI child relationship."
            ),
            mcq(
                "Which MdiLayout option arranges open child windows in overlapping diagonal layers?",
                ["TileVertical", "Cascade", "TileHorizontal", "ArrangeIcons"],
                1,
                "MdiLayout.Cascade arranges child windows in an overlapping cascading stack."
            ),
            mcq(
                "Custom composite controls in Windows Forms inherit from which base class?",
                ["System.Windows.Forms.Control", "System.Windows.Forms.UserControl", "System.Windows.Forms.Form", "System.ComponentModel.Component"],
                1,
                "Custom composite controls inherit from the System.Windows.Forms.UserControl class."
            ),
        ],

        questions: [
            qa(
                "What is an MDI Application? Explain how to create an MDI Parent and Child form in Windows Forms.",
                "A Multiple Document Interface (MDI) application allows a master parent window to contain multiple child windows within its client space. Steps to create an MDI application: (1) Create a Windows Form and set its property 'IsMdiContainer = true'. (2) Add a MenuStrip with items like 'New Window', 'Cascade', 'Tile'. (3) In the 'New Window' click handler, create an instance of the child form: ChildForm child = new ChildForm(); (4) Assign child.MdiParent = this; (5) Call child.Show();. (6) Use this.LayoutMdi(MdiLayout.Cascade) to arrange active child windows.",
                4
            ),
            qa(
                "What is a UserControl in Windows Forms? Explain its advantages and creation process.",
                "A UserControl is a composite custom control that groups multiple standard controls (e.g., Labels, TextBoxes, Buttons) into a single reusable UI component. Advantages: (1) Reusability across multiple forms and projects. (2) Modular design and easier maintenance. (3) Custom encapsulation of specialized properties and events. Creation Process: Add a 'User Control' item to the project, drag standard controls onto the designer, expose custom public properties/methods in code-behind, build the solution, and drag the compiled control from the Visual Studio Toolbox directly onto any Form.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — ADO.NET Architecture & Connected Data Access
========================================================= */

const adoNetConnected = createTopic(
    "adonet-architecture-and-connected-data-access",
    "ADO.NET Architecture & Connected Data Access",

    [
        definition(
            "ADO.NET",
            "ADO.NET (ActiveX Data Objects for .NET) is the core data access technology of the .NET Framework that provides communication between .NET applications and relational databases (SQL Server, Oracle, MySQL, OLE DB)."
        ),

        heading("Core Architecture of ADO.NET"),

        text(
            "ADO.NET divides data access into two fundamental models: the Connected Architecture and the Disconnected Architecture."
        ),

        table(
            ["Connected Object", "Class (SQL Server)", "Primary Role"],
            [
                ["Connection", "SqlConnection", "Establishes physical communication session with database via a connection string"],
                ["Command", "SqlCommand", "Stores and executes SQL statements (INSERT, UPDATE, DELETE, SELECT) or Stored Procedures"],
                ["DataReader", "SqlDataReader", "Stream-based, forward-only, read-only, fast data reader from open connection"],
                ["Transaction", "SqlTransaction", "Controls atomic database transactions with Commit() and Rollback()"],
            ]
        ),

        heading("Connection String"),

        code(
            `// Standard SQL Server Connection String
string connString = @"Server=localhost\\SQLEXPRESS;Database=CollegeDB;Trusted_Connection=True;TrustServerCertificate=True;";`,
            "csharp",
            "SQL Connection String"
        ),

        heading("SqlCommand Execution Methods"),

        table(
            ["Method", "Return Value", "Typical Usage"],
            [
                ["ExecuteNonQuery()", "int (Number of affected rows)", "INSERT, UPDATE, DELETE, DDL operations"],
                ["ExecuteScalar()", "object (First column of the first row)", "Aggregate queries (COUNT, SUM, MAX) or single value lookups"],
                ["ExecuteReader()", "SqlDataReader object", "SELECT queries retrieving multi-row record sets"],
            ]
        ),

        heading("Complete Connected CRUD Operations Example"),

        code(
            `using System;
using System.Data;
using Microsoft.Data.SqlClient;

public class StudentDataAccess
{
    private string connString = @"Server=.\\SQLEXPRESS;Database=BcaDB;Integrated Security=True;";

    // 1. INSERT Record using Parameterized Query (Prevents SQL Injection)
    public int InsertStudent(int rollNo, string name, double marks)
    {
        using (SqlConnection conn = new SqlConnection(connString),
        {
            string sql = "INSERT INTO Students (RollNo, Name, Marks) VALUES (@Roll, @Name, @Marks)";
            using (SqlCommand cmd = new SqlCommand(sql, conn),
            {
                cmd.Parameters.AddWithValue("@Roll", rollNo);
                cmd.Parameters.AddWithValue("@Name", name);
                cmd.Parameters.AddWithValue("@Marks", marks);

                conn.Open();
                return cmd.ExecuteNonQuery(); // Returns affected rows count
            }
        }
    }

    // 2. READ Records using SqlDataReader (Connected Mode)
    public void DisplayAllStudents()
    {
        using (SqlConnection conn = new SqlConnection(connString),
        {
            string sql = "SELECT RollNo, Name, Marks FROM Students";
            using (SqlCommand cmd = new SqlCommand(sql, conn),
            {
                conn.Open();
                using (SqlDataReader reader = cmd.ExecuteReader(),
                {
                    while (reader.Read(),
                    {
                        Console.WriteLine($"Roll: {reader["RollNo"]} | Name: {reader["Name"]} | Marks: {reader["Marks"]}");
                    }
                }
            }
        }
    }

    // 3. Aggregate Query using ExecuteScalar
    public int GetTotalStudentCount()
    {
        using (SqlConnection conn = new SqlConnection(connString),
        {
            string sql = "SELECT COUNT(*) FROM Students";
            using (SqlCommand cmd = new SqlCommand(sql, conn),
            {
                conn.Open();
                return (int)cmd.ExecuteScalar();
            }
        }
    }
}`,
            "csharp",
            "Connected ADO.NET CRUD Implementation"
        ),

        note(
            "SqlDataReader requires an active, open connection during the entire read operation. Always wrap connections and commands in C# 'using' blocks to guarantee proper disposal.",
            "warning",
            "Connection Management"
        ),

        keyPoints([
            "ADO.NET provides data access via Connected and Disconnected architectures.",
            "SqlConnection establishes physical database connections via connection strings.",
            "SqlCommand executes queries via ExecuteNonQuery(), ExecuteScalar(), and ExecuteReader().",
            "SqlDataReader provides fast, forward-only, read-only data streaming.",
            "Always use parameterized SQL queries (@param) to eliminate SQL Injection vulnerabilities.",
        ]),
    ],

    {
        summary:
            "Master ADO.NET connected data access: SqlConnection, SqlCommand, SqlDataReader, ExecuteNonQuery, ExecuteScalar, and parameterized queries.",
        minutes: 13,
        tags: ["adonet", "sqlconnection", "sqlcommand", "sqldatareader", "sql-injection", "important"],

        mcqs: [
            mcq(
                "Which SqlCommand method is used to execute an UPDATE or DELETE SQL query?",
                ["ExecuteReader()", "ExecuteScalar()", "ExecuteNonQuery()", "ExecuteUpdate()"],
                2,
                "ExecuteNonQuery() is used for DML operations (INSERT, UPDATE, DELETE) and returns affected row count."
            ),
            mcq(
                "Which of the following describes the SqlDataReader?",
                ["Disconnected and bidirectional", "Forward-only, read-only stream requiring an open connection", "Editable cached in-memory dataset", "Two-way data grid binding"],
                1,
                "SqlDataReader is a high-performance, forward-only, read-only stream tied to an open connection."
            ),
            mcq(
                "Which method is optimal for retrieving a single aggregate value like COUNT(*) from a database?",
                ["ExecuteNonQuery()", "ExecuteReader()", "ExecuteScalar()", "ExecuteXmlReader()"],
                2,
                "ExecuteScalar() returns the first column of the first row as an object, ideal for aggregates."
            ),
            mcq(
                "Why must developers use SqlParameter collections instead of string concatenation in SQL queries?",
                ["To speed up network traffic", "To prevent SQL Injection attacks", "To auto-format dates", "To bypass table locks"],
                1,
                "Parameters treat input strictly as data values, neutralizing SQL Injection attacks."
            ),
        ],

        questions: [
            qa(
                "Explain the Connected Architecture of ADO.NET and its core components.",
                "The Connected Architecture of ADO.NET requires a continuous, active connection to the database while operations are performed. Core components: (1) SqlConnection: Manages physical connection to the database engine using connection string parameters. (2) SqlCommand: Encapsulates SQL queries or stored procedures to be executed against the connection. (3) SqlDataReader: Provides a fast, forward-only, read-only stream of rows directly from the database; the connection remains open until reader.Close() is invoked. (4) SqlTransaction: Manages atomic commit and rollback transaction boundaries. This model is ideal for high-throughput, low-latency data reads.",
                4
            ),
            qa(
                "Differentiate between ExecuteNonQuery(), ExecuteScalar(), and ExecuteReader() in ADO.NET.",
                "(1) ExecuteNonQuery(): Executes SQL statements that do not return record rows (such as INSERT, UPDATE, DELETE, and DDL). It returns an integer representing the number of rows affected by the command. (2) ExecuteScalar(): Executes a query and returns only the first column of the first row of the result set as an object (extra columns/rows are ignored). It is optimal for aggregate functions like SELECT COUNT(*) or MAX(). (3) ExecuteReader(): Executes a SELECT query and returns a SqlDataReader object for sequential, forward-only iteration through multi-row result sets.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — ADO.NET Disconnected Architecture & LINQ
========================================================= */

const adoNetDisconnected = createTopic(
    "adonet-disconnected-architecture-and-linq",
    "ADO.NET Disconnected Architecture & LINQ",

    [
        definition(
            "Disconnected Architecture",
            "A data access model in ADO.NET where data is fetched from the database, cached in an in-memory structure (DataSet / DataTable), and the database connection is immediately closed. Changes are synced back later in batches."
        ),

        heading("Disconnected Objects in ADO.NET"),

        table(
            ["Object", "Namespace / Class", "Description"],
            [
                ["SqlDataAdapter", "Microsoft.Data.SqlClient.SqlDataAdapter", "Bridge between database and DataSet; handles Fill() and Update() operations"],
                ["DataSet", "System.Data.DataSet", "In-memory database representation containing a collection of DataTables and Relations"],
                ["DataTable", "System.Data.DataTable", "In-memory tabular representation containing DataColumns, DataRows, and Constraints"],
                ["SqlCommandBuilder", "Microsoft.Data.SqlClient.SqlCommandBuilder", "Automatically generates INSERT, UPDATE, DELETE commands for the DataAdapter"],
            ]
        ),

        heading("Connected vs Disconnected Architecture"),

        table(
            ["Criteria", "Connected Architecture", "Disconnected Architecture"],
            [
                ["Connection Status", "Connection remains OPEN throughout data processing", "Connection opens only during Fill() and Update(), closed otherwise"],
                ["Core Objects", "SqlConnection, SqlCommand, SqlDataReader", "SqlDataAdapter, DataSet, DataTable, SqlCommandBuilder"],
                ["Data Access", "Forward-only, Read-only (SqlDataReader)", "Bidirectional navigation, In-memory sorting, filtering, editing"],
                ["Memory Overhead", "Very low memory footprint", "Higher memory usage (stores complete tables in RAM)"],
                ["Scalability", "Lower scalability if connections held open", "High scalability (conserves database connection pool)"],
            ]
        ),

        heading("Complete Disconnected Mode Code Example"),

        code(
            `using System;
using System.Data;
using Microsoft.Data.SqlClient;

public class DisconnectedDataService
{
    private string connString = @"Server=.\\SQLEXPRESS;Database=BcaDB;Integrated Security=True;";

    public DataSet GetStudentDataSet()
    {
        DataSet ds = new DataSet();
        using (SqlConnection conn = new SqlConnection(connString),
        {
            string sql = "SELECT RollNo, Name, Marks FROM Students";
            SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);

            // Fill opens connection, populates DataSet, and closes connection automatically
            adapter.Fill(ds, "StudentsTable");
        }
        return ds;
    }

    public void UpdateDatabaseFromDataSet(DataSet ds)
    {
        using (SqlConnection conn = new SqlConnection(connString),
        {
            string sql = "SELECT RollNo, Name, Marks FROM Students";
            SqlDataAdapter adapter = new SqlDataAdapter(sql, conn);

            // Auto-generate INSERT, UPDATE, and DELETE SQL commands
            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);

            // Commit in-memory DataSet modifications back to physical database
            adapter.Update(ds, "StudentsTable");
        }
    }
}`,
            "csharp",
            "Disconnected ADO.NET Operations"
        ),

        heading("Introduction to LINQ (Language Integrated Query)"),

        definition(
            "LINQ",
            "Language Integrated Query (LINQ) is a uniform query syntax in C# that allows querying diverse data sources (in-memory collections, XML, DataSets, SQL databases) directly within language syntax."
        ),

        code(
            `using System;
using System.Collections.Generic;
using System.Linq;

public class Student
{
    public string Name { get; set; }
    public double Marks { get; set; }
}

class Program
{
    static void Main()
    {
        List<Student> students = new List<Student>
        {
            new Student { Name = "Aakash", Marks = 88 },
            new Student { Name = "Bhavna", Marks = 94 },
            new Student { Name = "Chetan", Marks = 62 },
            new Student { Name = "Deepa", Marks = 76 }
        };

        // 1. LINQ Query Syntax
        var distinctionStudents = from s in students
                                  where s.Marks >= 75
                                  orderby s.Marks descending
                                  select s;

        // 2. LINQ Method Syntax (Lambda)
        var topScorers = students.Where(s => s.Marks >= 75)
                                 .OrderByDescending(s => s.Marks);

        Console.WriteLine("Distinction Holders:");
        foreach (var s in topScorers)
        {
            Console.WriteLine($"{s.Name} : {s.Marks}");
        }
    }
}`,
            "csharp",
            "LINQ Query and Method Syntax"
        ),

        keyPoints([
            "Disconnected architecture uses SqlDataAdapter, DataSet, and DataTable.",
            "The SqlDataAdapter.Fill() method opens connection, loads data, and closes it.",
            "SqlCommandBuilder automatically generates reconciliation queries for DataAdapter.Update().",
            "DataSet can store multiple DataTables, primary keys, and foreign-key DataRelations.",
            "LINQ provides a unified query syntax across objects (LINQ to Objects) and databases.",
        ]),
    ],

    {
        summary:
            "Explore ADO.NET disconnected architecture, SqlDataAdapter, DataSet, DataTable, SqlCommandBuilder, and LINQ (Language Integrated Query).",
        minutes: 13,
        tags: ["disconnected-adonet", "sqldataadapter", "dataset", "datatable", "linq", "important"],

        mcqs: [
            mcq(
                "Which object acts as the bridge between a physical database and a disconnected DataSet in ADO.NET?",
                ["SqlDataReader", "SqlDataAdapter", "SqlCommand", "SqlConnection"],
                1,
                "SqlDataAdapter mediates between the database and disconnected DataSet using Fill() and Update()."
            ),
            mcq(
                "The DataSet in ADO.NET is an in-memory representation of:",
                ["A single text file", "A relational database containing multiple DataTables and relations", "A binary stream", "An open socket"],
                1,
                "A DataSet is an in-memory representation of a complete database with multiple tables and relations."
            ),
            mcq(
                "Which class automatically generates INSERT, UPDATE, and DELETE commands for an SqlDataAdapter?",
                ["SqlCommandGenerator", "SqlCommandBuilder", "SqlAutoQuery", "SqlDataAdapterHelper"],
                1,
                "SqlCommandBuilder automatically generates reconcile commands for single-table updates."
            ),
            mcq(
                "What does LINQ stand for in C# .NET?",
                ["Language Integrated Native Query", "Language Integrated Query", "Linear Integrated Network Queue", "Logical Interface for Native Queries"],
                1,
                "LINQ stands for Language Integrated Query."
            ),
        ],

        questions: [
            qa(
                "Compare the Connected and Disconnected data access architectures in ADO.NET.",
                "Connected Architecture requires an open, active database connection throughout data retrieval and processing. It uses SqlConnection, SqlCommand, and SqlDataReader. It provides fast, forward-only, read-only streaming with very low memory consumption, but holds database connections open longer. Disconnected Architecture retrieves data and closes the connection immediately. It uses SqlDataAdapter, DataSet, DataTable, and SqlCommandBuilder. Data is stored in in-memory DataTables where it can be filtered, sorted, edited, and navigated bidirectionally without database locking. Changes are synchronized back later in batches using DataAdapter.Update(). Disconnected architecture offers superior application scalability.",
                4
            ),
            qa(
                "What is LINQ in C#? Explain Query Syntax vs Method Syntax with examples.",
                "LINQ (Language Integrated Query) is a feature in C# that introduces native, type-safe query capabilities for collections, databases (LINQ to SQL / EF), and XML. It provides two syntax styles: (1) Query Syntax: SQL-like declarative syntax (e.g., from s in students where s.Marks >= 75 orderby s.Marks descending select s). (2) Method Syntax (Fluent API): Uses extension methods and lambda expressions (e.g., students.Where(s => s.Marks >= 75).OrderByDescending(s => s.Marks),. Both compile to identical execution pipelines.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    advancedControls,
    menusDialogs,
    mdiAndUserControls,
    adoNetConnected,
    adoNetDisconnected,
];
