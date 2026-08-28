/* =========================================================
   MSc-IT • SEM 2 • Object Oriented Programming Using Java
   UNIT 4 — Graphical Programming
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
   TOPIC 1 — Introduction to GUI Programming in Java
========================================================= */

const introToGUIProgramming = createTopic(
    "introduction-to-gui-programming-in-java",
    "Introduction to GUI Programming in Java",

    [
        definition(
            "GUI (Graphical User Interface)",
            "A visual interface that allows users to interact with a computer program through graphical elements such as windows, buttons, menus, text fields and icons, rather than typing commands as in a Command-Line Interface (CLI)."
        ),

        text(
            "Java provides two primary GUI toolkits: AWT (Abstract Window Toolkit) and Swing. AWT was the original toolkit introduced with Java 1.0, using native platform components (heavyweight). Swing, introduced in Java 1.2 as part of JFC (Java Foundation Classes), is a lightweight, platform-independent toolkit built on top of AWT that provides a richer set of components and a consistent look and feel across platforms."
        ),

        heading("GUI versus CLI"),

        table(
            ["Aspect", "CLI (Command-Line Interface)", "GUI (Graphical User Interface)"],
            [
                ["Interaction", "Text commands typed by the user", "Mouse clicks, keyboard input on visual elements"],
                ["Learning curve", "Steeper — user must know commands", "Easier — visual and intuitive"],
                ["Resource usage", "Low", "Higher (graphics, events)"],
                ["Speed of use", "Faster for experienced users", "Faster for beginners"],
                ["Accessibility", "Excellent for screen readers and automation", "May need extra work for accessibility"],
                ["Example", "Terminal, command prompt", "Windows, macOS, Android apps"],
            ]
        ),

        heading("Java GUI Toolkits"),

        table(
            ["Toolkit", "Introduced", "Type", "Description"],
            [
                ["AWT", "Java 1.0 (1996)", "Heavyweight", "Uses native OS components; platform-dependent look"],
                ["Swing", "Java 1.2 (1998)", "Lightweight", "Pure Java components; consistent look across platforms"],
                ["JavaFX", "JavaFX 1.0 (2008)", "Lightweight", "Modern successor to Swing; CSS styling, FXML, 3D graphics"],
            ]
        ),

        heading("AWT versus Swing"),

        table(
            ["Aspect", "AWT", "Swing"],
            [
                ["Component type", "Heavyweight (native OS widgets)", "Lightweight (drawn by Java)"],
                ["Look and Feel", "Platform-dependent (native look)", "Platform-independent (pluggable L&F)"],
                ["Package", "java.awt", "javax.swing"],
                ["Component naming", "Button, Frame, TextField", "JButton, JFrame, JTextField (J prefix)"],
                ["MVC architecture", "No", "Yes (Model-View-Controller)"],
                ["Component set", "Limited (basic widgets)", "Rich (tables, trees, tabbed panes, sliders)"],
                ["Performance", "Faster (native rendering)", "Slightly slower (Java rendering)"],
                ["Extensibility", "Hard to extend", "Easy to extend and customise"],
                ["Recommended?", "Legacy; not recommended for new apps", "Standard for desktop Java apps"],
            ]
        ),

        heading("JFC (Java Foundation Classes)"),

        definition(
            "JFC",
            "A set of GUI libraries that include Swing, Java 2D, Accessibility API, Drag-and-Drop and the Pluggable Look and Feel. JFC was introduced with Java 1.2 to provide a comprehensive toolkit for building rich desktop applications."
        ),

        heading("Components of JFC"),

        list([
            "Swing — A rich set of lightweight GUI components (buttons, tables, trees, etc.).",
            "Java 2D — Advanced 2D graphics, text and image rendering.",
            "Accessibility API — Support for assistive technologies (screen readers, etc.).",
            "Drag and Drop — Built-in support for dragging and dropping data between components.",
            "Pluggable Look and Feel — Ability to change the visual appearance of the entire application.",
        ]),

        heading("Basic GUI Application Structure"),

        code(
            `import javax.swing.*;

public class HelloGUI {
    public static void main(String[] args) {
        // Create a window
        JFrame frame = new JFrame("My First GUI");

        // Set window properties
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Add a label
        JLabel label = new JLabel("Hello, World!", SwingConstants.CENTER);
        frame.add(label);

        // Make the window visible
        frame.setVisible(true);
    }
}`,
            "java",
            "Simplest Swing application"
        ),

        heading("Event-Driven Programming"),

        definition(
            "Event-Driven Programming",
            "A programming paradigm where the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs or messages from other programs. GUI applications are inherently event-driven."
        ),

        code(
            `Event-Driven Programming Model:

  1. Application starts and displays GUI
  2. Application enters an event loop (waiting)
  3. User performs an action (click, type, resize)
  4. An event object is generated
  5. The event is dispatched to the appropriate listener
  6. The listener's method executes (event handler)
  7. GUI is updated based on the handler's logic
  8. Return to step 2 (wait for next event)

  This cycle continues until the application is closed.`,
            "text",
            "Event-driven programming model"
        ),

        note(
            "Swing is still widely used and taught, but JavaFX is the modern replacement recommended by Oracle for new desktop applications. JavaFX offers CSS styling, FXML (XML-based UI definition), hardware-accelerated graphics and a more modern architecture. However, Swing remains important because of its vast existing codebase and exam relevance.",
            "tip",
            "Swing vs JavaFX"
        ),

        keyPoints([
            "A GUI allows users to interact with programs through visual elements rather than text commands.",
            "Java's GUI toolkits are AWT (heavyweight, native), Swing (lightweight, pure Java) and JavaFX (modern).",
            "Swing components have a 'J' prefix (JFrame, JButton) and are built on top of AWT.",
            "GUI applications use event-driven programming where the flow is determined by user actions.",
            "JFC includes Swing, Java 2D, Accessibility, Drag-and-Drop and Pluggable Look and Feel.",
        ]),
    ],

    {
        summary:
            "Understand GUI vs CLI, Java GUI toolkits (AWT, Swing, JavaFX), JFC components and the event-driven programming model.",
        minutes: 11,
        tags: ["java", "gui", "awt", "swing", "event-driven", "important"],

        mcqs: [
            mcq(
                "Swing components are:",
                ["Heavyweight (native OS widgets)", "Lightweight (drawn by Java)", "Hardware-dependent", "Only available on Windows"],
                1,
                "Swing components are lightweight — they are drawn by Java itself, not by the native OS."
            ),
            mcq(
                "Swing was introduced in:",
                ["Java 1.0", "Java 1.1", "Java 1.2", "Java 5"],
                2,
                "Swing was introduced in Java 1.2 (1998) as part of the Java Foundation Classes (JFC)."
            ),
            mcq(
                "AWT components are called heavyweight because:",
                ["They use a lot of memory", "They rely on native OS widgets", "They are slow", "They have many methods"],
                1,
                "AWT components are heavyweight because they use native operating system widgets."
            ),
            mcq(
                "GUI applications follow which programming paradigm?",
                ["Procedural", "Functional", "Event-driven", "Logic-based"],
                2,
                "GUI applications are event-driven — the program flow is determined by user actions and events."
            ),
            mcq(
                "Swing components typically have which prefix?",
                ["A", "S", "J", "W"],
                2,
                "Swing components have a 'J' prefix: JFrame, JButton, JLabel, JTextField, etc."
            ),
        ],

        questions: [
            qa(
                "Compare AWT and Swing.",
                "AWT (Abstract Window Toolkit) was Java's original GUI toolkit introduced in Java 1.0. Its components are heavyweight, meaning they use native operating system widgets, so the look and feel depends on the platform. AWT has a limited set of components and is harder to extend. Swing, introduced in Java 1.2 as part of JFC, is a lightweight toolkit where components are drawn by Java itself rather than the OS. This gives Swing a consistent look and feel across platforms, a much richer set of components (tables, trees, tabbed panes, sliders), MVC architecture, pluggable look and feel, and easier extensibility. Swing components have a 'J' prefix (JButton vs Button). Swing is built on top of AWT — JFrame extends Frame, and Swing uses AWT's event model. Swing is recommended for new desktop applications, while AWT is considered legacy.",
                5
            ),
            qa(
                "What is event-driven programming and how does it apply to GUI applications?",
                "Event-driven programming is a paradigm where the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs or messages from other programs, rather than by a predetermined sequence of statements. In a GUI application, the program starts by displaying the interface and then enters an event loop, waiting for user actions. When the user clicks a button, types in a text field or resizes a window, an event object is generated. This event is dispatched to the appropriate event listener (a registered object that implements a listener interface). The listener's handler method executes, performing the associated logic such as updating the display, validating input or performing a calculation. The application then returns to waiting for the next event. This cycle continues until the user closes the application.",
                5
            ),
            qa(
                "What is JFC? List its components.",
                "JFC (Java Foundation Classes) is a set of GUI libraries introduced with Java 1.2 to provide a comprehensive toolkit for building rich desktop applications. Its components include: Swing, a rich set of lightweight GUI components such as buttons, tables, trees, tabbed panes and sliders. Java 2D, which provides advanced 2D graphics, text rendering and image processing capabilities. The Accessibility API, which supports assistive technologies like screen readers for users with disabilities. Drag and Drop, which provides built-in support for dragging and dropping data between components and applications. Pluggable Look and Feel, which allows developers to change the entire visual appearance of an application to match different platforms or custom designs without changing the application logic.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — AWT Components and Containers
========================================================= */

const awtComponentsAndContainers = createTopic(
    "awt-components-and-containers",
    "AWT Components and Containers",

    [
        text(
            "AWT organises GUI elements into a hierarchy of components and containers. A Component is a visual element that can be displayed on the screen. A Container is a special type of Component that can hold other Components. Understanding this hierarchy is essential because Swing builds upon the same structure."
        ),

        heading("AWT Component Hierarchy"),

        code(
            `java.lang.Object
  └── java.awt.Component
        ├── java.awt.Button
        ├── java.awt.Label
        ├── java.awt.TextField
        ├── java.awt.TextArea
        ├── java.awt.Checkbox
        ├── java.awt.Choice
        ├── java.awt.List
        ├── java.awt.Canvas
        ├── java.awt.Scrollbar
        └── java.awt.Container
              ├── java.awt.Panel
              │     └── java.applet.Applet
              ├── java.awt.ScrollPane
              └── java.awt.Window
                    ├── java.awt.Frame
                    └── java.awt.Dialog`,
            "text",
            "AWT component hierarchy"
        ),

        heading("AWT Components"),

        table(
            ["Component", "Purpose", "Key Methods"],
            [
                ["Label", "Displays a non-editable text string", "setText(), getText(), setAlignment()"],
                ["Button", "A clickable button that generates an ActionEvent", "setLabel(), getLabel()"],
                ["TextField", "A single-line text input field", "setText(), getText(), setEchoChar()"],
                ["TextArea", "A multi-line text input/display area", "setText(), getText(), append()"],
                ["Checkbox", "A toggleable on/off box", "setState(), getState(), setLabel()"],
                ["CheckboxGroup", "Groups checkboxes into radio buttons (one selection)", "setSelectedCheckbox()"],
                ["Choice", "A drop-down list of items", "add(), getSelectedItem(), getItemCount()"],
                ["List", "A scrollable list of items (single or multiple selection)", "add(), getSelectedItem(), getSelectedIndexes()"],
                ["Canvas", "A blank rectangular area for custom drawing", "paint(Graphics g)"],
                ["Scrollbar", "A slider for scrolling or selecting a value", "setValue(), getValue(), setMinimum()"],
            ]
        ),

        heading("AWT Containers"),

        table(
            ["Container", "Description", "Typical Use"],
            [
                ["Frame", "A top-level window with a title bar, menu bar and borders", "Main application window"],
                ["Panel", "A generic container with no window decorations; used for grouping", "Organising components within a Frame"],
                ["Dialog", "A pop-up window, typically used for messages or input", "Alert boxes, file choosers"],
                ["Window", "A top-level window without decorations (no title bar)", "Splash screens, custom pop-ups"],
                ["ScrollPane", "A container that provides automatic scrolling", "Displaying large content"],
            ]
        ),

        heading("Creating an AWT Frame"),

        code(
            `import java.awt.*;
import java.awt.event.*;

public class AWTDemo extends Frame {
    public AWTDemo() {
        setTitle("AWT Example");
        setSize(400, 250);
        setLayout(new FlowLayout());

        // Add components
        Label label = new Label("Enter your name:");
        TextField tf = new TextField(20);
        Button btn = new Button("Submit");
        Label result = new Label("");

        add(label);
        add(tf);
        add(btn);
        add(result);

        // Event handling
        btn.addActionListener(e -> {
            result.setText("Hello, " + tf.getText() + "!");
        });

        // Close the window
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });

        setVisible(true);
    }

    public static void main(String[] args) {
        new AWTDemo();
    }
}`,
            "java",
            "AWT Frame with components"
        ),

        heading("Important Component Methods"),

        table(
            ["Method", "Class", "Purpose"],
            [
                ["setSize(w, h)", "Component", "Sets the width and height of the component"],
                ["setVisible(true)", "Component", "Makes the component visible on screen"],
                ["setEnabled(false)", "Component", "Disables the component (greyed out)"],
                ["setBackground(Color)", "Component", "Sets the background colour"],
                ["setForeground(Color)", "Component", "Sets the text/foreground colour"],
                ["setFont(Font)", "Component", "Sets the font of the component"],
                ["setLayout(LayoutManager)", "Container", "Sets the layout manager"],
                ["add(Component)", "Container", "Adds a child component"],
                ["remove(Component)", "Container", "Removes a child component"],
                ["setTitle(String)", "Frame", "Sets the window title"],
            ]
        ),

        heading("Color and Font"),

        code(
            `import java.awt.*;

// Using predefined colours
label.setForeground(Color.BLUE);
label.setBackground(Color.YELLOW);

// Custom colour using RGB
Color custom = new Color(100, 150, 200);  // R, G, B (0-255)
panel.setBackground(custom);

// Font: name, style, size
Font font = new Font("Arial", Font.BOLD, 16);
label.setFont(font);

// Font styles: Font.PLAIN, Font.BOLD, Font.ITALIC
// Combined: Font.BOLD | Font.ITALIC`,
            "java",
            "Color and Font usage"
        ),

        heading("Graphics Class (Drawing)"),

        code(
            `import java.awt.*;

public class DrawingDemo extends Frame {
    public DrawingDemo() {
        setTitle("Drawing Example");
        setSize(400, 300);
        setVisible(true);
    }

    @Override
    public void paint(Graphics g) {
        g.setColor(Color.RED);
        g.drawRect(50, 50, 100, 80);      // Outline rectangle
        g.fillRect(200, 50, 100, 80);      // Filled rectangle

        g.setColor(Color.BLUE);
        g.drawOval(50, 160, 80, 80);       // Outline circle
        g.fillOval(200, 160, 80, 80);      // Filled circle

        g.setColor(Color.BLACK);
        g.drawLine(50, 250, 350, 250);     // Line
        g.drawString("Hello Graphics!", 140, 280);  // Text
    }

    public static void main(String[] args) {
        new DrawingDemo();
    }
}`,
            "java",
            "Drawing with Graphics class"
        ),

        heading("Graphics Methods"),

        table(
            ["Method", "Purpose"],
            [
                ["drawLine(x1, y1, x2, y2)", "Draws a line between two points"],
                ["drawRect(x, y, w, h)", "Draws a rectangle outline"],
                ["fillRect(x, y, w, h)", "Draws a filled rectangle"],
                ["drawOval(x, y, w, h)", "Draws an oval/circle outline"],
                ["fillOval(x, y, w, h)", "Draws a filled oval/circle"],
                ["drawArc(x, y, w, h, start, arc)", "Draws an arc"],
                ["drawString(str, x, y)", "Draws a text string at the specified position"],
                ["drawImage(img, x, y, observer)", "Draws an image"],
                ["setColor(Color)", "Sets the current drawing colour"],
                ["setFont(Font)", "Sets the current font for text drawing"],
            ]
        ),

        note(
            "The paint() method is called automatically by the AWT system whenever the component needs to be redrawn (window opened, resized, uncovered). You should never call paint() directly — use repaint() instead, which schedules a call to paint() at an appropriate time.",
            "warning",
            "Important"
        ),

        keyPoints([
            "AWT organises GUI elements into Components (visual elements) and Containers (holders of components).",
            "Frame is the top-level window; Panel is a generic container for grouping components.",
            "Common AWT components include Label, Button, TextField, TextArea, Checkbox, Choice and List.",
            "The Graphics class provides methods for drawing shapes, text and images in the paint() method.",
            "Call repaint() to request a redraw; never call paint() directly.",
        ]),
    ],

    {
        summary:
            "Learn AWT component hierarchy, common components, containers, Color, Font, and drawing with the Graphics class.",
        minutes: 12,
        tags: ["java", "awt", "components", "containers", "graphics", "important"],

        mcqs: [
            mcq(
                "Which AWT container is a top-level window with a title bar?",
                ["Panel", "Frame", "Canvas", "Dialog"],
                1,
                "Frame is a top-level window with a title bar, menu bar and borders."
            ),
            mcq(
                "A Panel in AWT is:",
                ["A top-level window", "A generic container without window decorations", "A drawing area", "A menu"],
                1,
                "Panel is a generic container used for grouping components; it has no title bar or borders."
            ),
            mcq(
                "To draw custom graphics, you override which method?",
                ["draw()", "render()", "paint(Graphics g)", "display()"],
                2,
                "The paint(Graphics g) method is overridden to perform custom drawing."
            ),
            mcq(
                "Which method should you call to request a redraw of a component?",
                ["paint()", "repaint()", "redraw()", "refresh()"],
                1,
                "repaint() schedules a call to paint() at an appropriate time; paint() should never be called directly."
            ),
            mcq(
                "CheckboxGroup in AWT is used to:",
                ["Create a list of checkboxes", "Group checkboxes into radio buttons (single selection)", "Set checkbox colours", "Disable checkboxes"],
                1,
                "CheckboxGroup turns a set of Checkboxes into radio buttons where only one can be selected."
            ),
        ],

        questions: [
            qa(
                "Explain the AWT component hierarchy including Components and Containers.",
                "The AWT hierarchy starts with java.awt.Component, which is the base class for all visual elements. Direct subclasses of Component include Button, Label, TextField, TextArea, Checkbox, Choice, List, Canvas and Scrollbar — these are individual GUI widgets. Component also has a subclass Container, which can hold other Components. Container has three important subclasses: Panel (a generic grouping container without window decorations), Window (a top-level window without decorations) and ScrollPane (a container with automatic scrolling). Window further has Frame (a top-level window with title bar, menu bar and borders — the main application window) and Dialog (a pop-up window for messages or input). This hierarchical design allows containers to nest: a Frame can contain Panels, and Panels can contain Buttons, Labels and other components, enabling complex layouts.",
                5
            ),
            qa(
                "Explain the Graphics class and how custom drawing is done in AWT.",
                "The Graphics class provides methods for drawing shapes, text and images on a component. Custom drawing is done by overriding the paint(Graphics g) method of a Component (typically a Frame or Canvas). The AWT system automatically calls paint() whenever the component needs to be redrawn — when the window is first shown, resized, or uncovered after being hidden. Inside paint(), you use methods like g.drawLine(), g.drawRect(), g.fillRect(), g.drawOval(), g.fillOval(), g.drawString() and g.setColor() to create graphics. You should never call paint() directly because the Graphics object is managed by the system. Instead, call repaint(), which schedules a paint() call at an appropriate time. The paint() method receives a Graphics object that represents the drawing context of the component.",
                5
            ),
            qa(
                "Write a Java AWT program that creates a window with a label, text field and button.",
                "The program should extend Frame, set a title and size, and use FlowLayout. Create a Label with text 'Enter your name:', a TextField with a column width of 20, a Button labelled 'Submit' and a result Label. Add all components to the Frame using add(). Attach an ActionListener to the button that reads the text field value and displays a greeting in the result label. Add a WindowListener using WindowAdapter to handle windowClosing by calling System.exit(0). Finally, call setVisible(true) to display the window. The complete program demonstrates component creation, layout, event handling and window management — the four essential aspects of an AWT application.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Swing Components
========================================================= */

const swingComponents = createTopic(
    "swing-components",
    "Swing Components",

    [
        text(
            "Swing provides a much richer set of components than AWT. All Swing components (except top-level containers) are lightweight — they are drawn by Java rather than the native OS. Swing components follow a naming convention with a 'J' prefix and are located in the javax.swing package."
        ),

        heading("Swing Component Hierarchy"),

        code(
            `java.awt.Container
  ├── javax.swing.JComponent  (base for most Swing components)
  │     ├── JLabel
  │     ├── JButton
  │     ├── AbstractButton
  │     │     ├── JToggleButton
  │     │     ├── JCheckBox
  │     │     └── JRadioButton
  │     ├── JTextComponent
  │     │     ├── JTextField
  │     │     ├── JPasswordField
  │     │     └── JTextArea
  │     ├── JComboBox
  │     ├── JList
  │     ├── JTable
  │     ├── JTree
  │     ├── JSlider
  │     ├── JProgressBar
  │     ├── JTabbedPane
  │     ├── JScrollPane
  │     ├── JSplitPane
  │     └── JPanel
  │
  └── java.awt.Window
        └── java.awt.Frame
              └── javax.swing.JFrame  (top-level container)`,
            "text",
            "Swing component hierarchy"
        ),

        heading("Top-Level Containers"),

        table(
            ["Container", "Description", "Typical Use"],
            [
                ["JFrame", "A top-level window with title bar, menu bar and borders", "Main application window"],
                ["JDialog", "A pop-up dialog window (modal or non-modal)", "Alerts, input dialogs, file choosers"],
                ["JWindow", "A window without decorations", "Splash screens"],
                ["JApplet", "A Swing applet (deprecated)", "Legacy web applets"],
            ]
        ),

        heading("JFrame — The Main Window"),

        code(
            `import javax.swing.*;

public class SwingDemo {
    public static void main(String[] args) {
        // Always create GUI on the Event Dispatch Thread (EDT)
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Swing Example");
            frame.setSize(400, 300);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLocationRelativeTo(null);  // Centre on screen

            // Get the content pane to add components
            // (or just use frame.add() which delegates to content pane)
            JPanel panel = new JPanel();
            frame.add(panel);

            frame.setVisible(true);
        });
    }
}`,
            "java",
            "Creating a JFrame"
        ),

        heading("JFrame Close Operations"),

        table(
            ["Constant", "Behaviour"],
            [
                ["EXIT_ON_CLOSE", "Exits the application when the window is closed"],
                ["DISPOSE_ON_CLOSE", "Disposes the window but does not exit the application"],
                ["HIDE_ON_CLOSE", "Hides the window (default for JFrame)"],
                ["DO_NOTHING_ON_CLOSE", "Does nothing; the program must handle closing"],
            ]
        ),

        heading("Common Swing Components"),

        table(
            ["Component", "Purpose", "AWT Equivalent"],
            [
                ["JLabel", "Displays text or an icon", "Label"],
                ["JButton", "A clickable button; can have text and/or icon", "Button"],
                ["JTextField", "Single-line text input", "TextField"],
                ["JPasswordField", "Text field that hides input (shows dots)", "TextField + setEchoChar"],
                ["JTextArea", "Multi-line text input/display", "TextArea"],
                ["JCheckBox", "A toggleable checkbox", "Checkbox"],
                ["JRadioButton", "A radio button (use with ButtonGroup)", "Checkbox + CheckboxGroup"],
                ["JComboBox", "A drop-down list", "Choice"],
                ["JList", "A list of items for selection", "List"],
                ["JTable", "A table for displaying tabular data", "None"],
                ["JTree", "A tree view for hierarchical data", "None"],
                ["JSlider", "A slider for selecting a value from a range", "Scrollbar"],
                ["JProgressBar", "A bar showing progress of an operation", "None"],
                ["JTabbedPane", "A container with tabbed pages", "None"],
                ["JScrollPane", "Adds scrollbars to any component", "ScrollPane"],
                ["JSplitPane", "Splits two components with a resizable divider", "None"],
                ["JMenuBar / JMenu / JMenuItem", "Menu bar, menus and menu items", "MenuBar / Menu / MenuItem"],
            ]
        ),

        heading("Complete Swing Example"),

        code(
            `import javax.swing.*;
import java.awt.*;

public class StudentForm {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Student Registration");
            frame.setSize(400, 350);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setLayout(new GridLayout(6, 2, 10, 10));

            // Components
            JLabel nameLabel = new JLabel("Name:");
            JTextField nameField = new JTextField();

            JLabel courseLabel = new JLabel("Course:");
            String[] courses = {"MSc IT", "MSc CS", "MCA"};
            JComboBox<String> courseBox = new JComboBox<>(courses);

            JLabel genderLabel = new JLabel("Gender:");
            JPanel genderPanel = new JPanel();
            JRadioButton male = new JRadioButton("Male");
            JRadioButton female = new JRadioButton("Female");
            ButtonGroup genderGroup = new ButtonGroup();
            genderGroup.add(male);
            genderGroup.add(female);
            genderPanel.add(male);
            genderPanel.add(female);

            JLabel agreeLabel = new JLabel("Agreement:");
            JCheckBox agreeBox = new JCheckBox("I agree to the terms");

            JButton submitBtn = new JButton("Submit");
            JLabel resultLabel = new JLabel("");

            // Add to frame
            frame.add(nameLabel);    frame.add(nameField);
            frame.add(courseLabel);  frame.add(courseBox);
            frame.add(genderLabel);  frame.add(genderPanel);
            frame.add(agreeLabel);   frame.add(agreeBox);
            frame.add(submitBtn);    frame.add(resultLabel);

            // Event handling
            submitBtn.addActionListener(e -> {
                if (agreeBox.isSelected() && !nameField.getText().isEmpty()) {
                    resultLabel.setText("Registered: " + nameField.getText());
                } else {
                    resultLabel.setText("Please fill all fields and agree.");
                }
            });

            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
            "java",
            "Complete Swing form example"
        ),

        heading("JOptionPane — Dialog Boxes"),

        code(
            `import javax.swing.JOptionPane;

// Message dialog
JOptionPane.showMessageDialog(null, "Operation successful!");

// Message with type
JOptionPane.showMessageDialog(null, "File not found!",
    "Error", JOptionPane.ERROR_MESSAGE);

// Confirmation dialog
int choice = JOptionPane.showConfirmDialog(null,
    "Are you sure?", "Confirm", JOptionPane.YES_NO_OPTION);
if (choice == JOptionPane.YES_OPTION) {
    // User clicked Yes
}

// Input dialog
String name = JOptionPane.showInputDialog(null, "Enter your name:");

// Option dialog
String[] options = {"Save", "Don't Save", "Cancel"};
int result = JOptionPane.showOptionDialog(null, "Save changes?",
    "Confirm", JOptionPane.DEFAULT_OPTION,
    JOptionPane.QUESTION_MESSAGE, null, options, options[0]);`,
            "java",
            "JOptionPane dialogs"
        ),

        heading("JOptionPane Message Types"),

        table(
            ["Type", "Icon", "Use"],
            [
                ["ERROR_MESSAGE", "Red X / error icon", "Error notifications"],
                ["INFORMATION_MESSAGE", "Blue i / info icon", "Informational messages"],
                ["WARNING_MESSAGE", "Yellow triangle / warning icon", "Warnings"],
                ["QUESTION_MESSAGE", "Question mark icon", "Questions requiring a response"],
                ["PLAIN_MESSAGE", "No icon", "Simple messages"],
            ]
        ),

        note(
            "Always create and update Swing components on the Event Dispatch Thread (EDT) using SwingUtilities.invokeLater(). Swing is not thread-safe, and accessing components from other threads can cause race conditions and visual glitches.",
            "warning",
            "Thread Safety"
        ),

        keyPoints([
            "Swing components are lightweight, have a 'J' prefix and live in the javax.swing package.",
            "JFrame is the main window; setDefaultCloseOperation(EXIT_ON_CLOSE) exits the app on close.",
            "Swing has a rich set of components: JButton, JTextField, JComboBox, JTable, JTree, JTabbedPane.",
            "JOptionPane provides ready-made dialogs for messages, confirmations and input.",
            "Always create Swing GUIs on the Event Dispatch Thread using SwingUtilities.invokeLater().",
        ]),
    ],

    {
        summary:
            "Master Swing components: JFrame, JPanel, JButton, JTextField, JComboBox, JRadioButton, JCheckBox, JOptionPane and more.",
        minutes: 13,
        tags: ["java", "swing", "jframe", "jbutton", "joptionpane", "important"],

        mcqs: [
            mcq(
                "The main window in a Swing application is:",
                ["JPanel", "JFrame", "JDialog", "JWindow"],
                1,
                "JFrame is the top-level window used as the main application window in Swing."
            ),
            mcq(
                "setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE) causes:",
                ["The window to hide", "The application to exit when the window is closed", "Nothing to happen", "A confirmation dialog"],
                1,
                "EXIT_ON_CLOSE terminates the entire application when the JFrame is closed."
            ),
            mcq(
                "JOptionPane.showMessageDialog() is used to:",
                ["Create a custom window", "Display a simple message dialog", "Create a menu", "Add a button"],
                1,
                "showMessageDialog displays a modal dialog with a message and an OK button."
            ),
            mcq(
                "To group JRadioButtons so only one can be selected, you use:",
                ["JPanel", "ButtonGroup", "JComboBox", "CheckboxGroup"],
                1,
                "ButtonGroup ensures that only one JRadioButton in the group can be selected at a time."
            ),
            mcq(
                "Swing GUIs should be created on which thread?",
                ["Main thread", "Event Dispatch Thread (EDT)", "A new Thread", "The garbage collector thread"],
                1,
                "Swing is not thread-safe; all GUI creation and updates must happen on the Event Dispatch Thread."
            ),
            mcq(
                "JPasswordField differs from JTextField by:",
                ["Being multi-line", "Hiding the entered characters", "Being read-only", "Having a drop-down"],
                1,
                "JPasswordField masks the entered characters (typically showing dots or asterisks) for password input."
            ),
        ],

        questions: [
            qa(
                "Explain JFrame and its important methods.",
                "JFrame is the top-level window in a Swing application, providing a title bar, menu bar, borders and window controls (minimise, maximise, close). Important methods include setSize(width, height) to set the window dimensions, setTitle(string) to set the title bar text, setDefaultCloseOperation(int) to define what happens when the user clicks the close button (EXIT_ON_CLOSE terminates the application, DISPOSE_ON_CLOSE closes only that window, HIDE_ON_CLOSE hides it, DO_NOTHING_ON_CLOSE requires custom handling), setVisible(true) to display the window, setLocationRelativeTo(null) to centre the window on the screen, setLayout(LayoutManager) to set the layout, and add(Component) to add child components to the content pane. JFrame uses a content pane internally; calling frame.add() automatically delegates to the content pane.",
                5
            ),
            qa(
                "List and explain any eight Swing components.",
                "JLabel displays non-editable text or an icon. JButton is a clickable button that can have text, an icon or both, and generates an ActionEvent when clicked. JTextField is a single-line text input field. JPasswordField is like JTextField but hides the entered characters for password input. JTextArea is a multi-line text area for input or display. JCheckBox is a toggleable box that can be independently selected or deselected. JRadioButton is a radio button that, when grouped with ButtonGroup, allows only one selection. JComboBox is a drop-down list that allows the user to select one item from a list. JTable displays data in a tabular (rows and columns) format. JTabbedPane organises content into tabbed pages. JScrollPane adds horizontal and vertical scrollbars to any component that exceeds the visible area.",
                5
            ),
            qa(
                "Explain JOptionPane and its different dialog types.",
                "JOptionPane is a Swing class that provides ready-made modal dialog boxes for common interactions without needing to create a custom JDialog. showMessageDialog() displays an informational, warning or error message with an OK button. It accepts a message type constant like ERROR_MESSAGE, INFORMATION_MESSAGE, WARNING_MESSAGE, QUESTION_MESSAGE or PLAIN_MESSAGE that determines the icon. showConfirmDialog() displays a question with Yes/No or Yes/No/Cancel buttons and returns an integer indicating which button was clicked (YES_OPTION, NO_OPTION, CANCEL_OPTION). showInputDialog() displays a text field for the user to enter a string and returns the entered text (or null if cancelled). showOptionDialog() is the most flexible, allowing custom button labels, icons and message types. All JOptionPane dialogs are modal, meaning they block the parent window until the user responds.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Event Handling
========================================================= */

const eventHandling = createTopic(
    "event-handling",
    "Event Handling",

    [
        definition(
            "Event Handling",
            "The mechanism by which a program responds to user actions such as mouse clicks, key presses, window closing and menu selections. Java uses the Delegation Event Model where events are generated by source components and handled by registered listener objects."
        ),

        heading("Delegation Event Model"),

        definition(
            "Delegation Event Model",
            "Java's event handling architecture introduced in JDK 1.1. An event source generates an event and delegates its handling to one or more registered listener objects. This separates the event generation (source) from event processing (listener)."
        ),

        code(
            `Delegation Event Model:

  ┌──────────────┐     generates      ┌──────────────┐
  │ Event Source │ ─────────────────→ │ Event Object │
  │ (JButton)    │                    │ (ActionEvent)│
  └──────────────┘                    └──────┬───────┘
                                             │ dispatched to
                                      ┌──────▼───────┐
                                      │   Listener   │
                                      │ (ActionListener)
                                      │ actionPerformed()
                                      └──────────────┘

  1. Source generates an event (user clicks button)
  2. Event object is created (ActionEvent)
  3. Event is dispatched to all registered listeners
  4. Listener's handler method is invoked`,
            "text",
            "Delegation event model"
        ),

        heading("Key Concepts"),

        table(
            ["Concept", "Description", "Example"],
            [
                ["Event Source", "The component that generates the event", "JButton, JTextField, JFrame"],
                ["Event Object", "An object containing information about the event", "ActionEvent, MouseEvent, KeyEvent"],
                ["Event Listener", "An object that implements a listener interface to handle the event", "ActionListener, MouseListener"],
                ["Event Handler", "The method in the listener that processes the event", "actionPerformed(), mouseClicked()"],
                ["Registration", "Attaching a listener to a source using addXxxListener()", "btn.addActionListener(listener)"],
            ]
        ),

        heading("Common Event Types and Listeners"),

        table(
            ["Event", "Listener Interface", "Handler Method(s)", "Generated By"],
            [
                ["ActionEvent", "ActionListener", "actionPerformed()", "JButton click, JTextField Enter key, JMenuItem"],
                ["ItemEvent", "ItemListener", "itemStateChanged()", "JCheckBox, JRadioButton, JComboBox"],
                ["MouseEvent", "MouseListener", "mouseClicked(), mousePressed(), mouseReleased(), mouseEntered(), mouseExited()", "Any component"],
                ["MouseEvent", "MouseMotionListener", "mouseMoved(), mouseDragged()", "Any component"],
                ["KeyEvent", "KeyListener", "keyTyped(), keyPressed(), keyReleased()", "Components with keyboard focus"],
                ["WindowEvent", "WindowListener", "windowClosing(), windowOpened(), windowIconified(), etc.", "JFrame, JDialog"],
                ["FocusEvent", "FocusListener", "focusGained(), focusLost()", "Any focusable component"],
                ["AdjustmentEvent", "AdjustmentListener", "adjustmentValueChanged()", "JScrollBar"],
                ["ChangeEvent", "ChangeListener", "stateChanged()", "JSlider, JProgressBar, JTabbedPane"],
            ]
        ),

        heading("Handling ActionEvent (Most Common)"),

        code(
            `import javax.swing.*;
import java.awt.event.*;

// Method 1: Implement ActionListener
public class EventDemo1 extends JFrame implements ActionListener {
    JButton btn;
    JLabel label;

    public EventDemo1() {
        btn = new JButton("Click Me");
        label = new JLabel("Waiting...");
        btn.addActionListener(this);  // Register this object as listener
        add(btn); add(label);
        setSize(300, 150);
        setLayout(new java.awt.FlowLayout());
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        label.setText("Button clicked!");
    }

    public static void main(String[] args) {
        new EventDemo1();
    }
}`,
            "java",
            "Event handling by implementing ActionListener"
        ),

        heading("Anonymous Inner Class"),

        code(
            `btn.addActionListener(new ActionListener() {
    @Override
    public void actionPerformed(ActionEvent e) {
        label.setText("Button clicked!");
    }
});`,
            "java",
            "Anonymous inner class listener"
        ),

        heading("Lambda Expression (Java 8+)"),

        code(
            `// ActionListener is a functional interface (one abstract method)
btn.addActionListener(e -> label.setText("Button clicked!"));

// Multiple statements
btn.addActionListener(e -> {
    String text = tf.getText();
    label.setText("Hello, " + text + "!");
    tf.setText("");
});`,
            "java",
            "Lambda expression listener"
        ),

        heading("Mouse Events"),

        code(
            `panel.addMouseListener(new MouseAdapter() {
    @Override
    public void mouseClicked(MouseEvent e) {
        System.out.println("Clicked at: " + e.getX() + ", " + e.getY());
        if (e.getClickCount() == 2) {
            System.out.println("Double click!");
        }
        if (e.getButton() == MouseEvent.BUTTON3) {
            System.out.println("Right click!");
        }
    }

    @Override
    public void mouseEntered(MouseEvent e) {
        panel.setBackground(Color.YELLOW);
    }

    @Override
    public void mouseExited(MouseEvent e) {
        panel.setBackground(Color.WHITE);
    }
});`,
            "java",
            "Mouse event handling"
        ),

        heading("Adapter Classes"),

        definition(
            "Adapter Class",
            "A convenience class that provides empty implementations of all methods in a listener interface that has more than one method. You only override the methods you need. Named XxxAdapter (e.g., MouseAdapter, WindowAdapter, KeyAdapter)."
        ),

        table(
            ["Listener Interface", "Methods", "Adapter Class"],
            [
                ["MouseListener", "5 methods", "MouseAdapter"],
                ["MouseMotionListener", "2 methods", "MouseMotionAdapter"],
                ["KeyListener", "3 methods", "KeyAdapter"],
                ["WindowListener", "7 methods", "WindowAdapter"],
                ["FocusListener", "2 methods", "FocusAdapter"],
                ["ActionListener", "1 method", "None (functional interface)"],
            ]
        ),

        code(
            `// Without adapter — must implement ALL 7 methods
frame.addWindowListener(new WindowListener() {
    public void windowClosing(WindowEvent e) { System.exit(0); }
    public void windowOpened(WindowEvent e) {}
    public void windowClosed(WindowEvent e) {}
    public void windowIconified(WindowEvent e) {}
    public void windowDeiconified(WindowEvent e) {}
    public void windowActivated(WindowEvent e) {}
    public void windowDeactivated(WindowEvent e) {}
});

// With adapter — override only what you need
frame.addWindowListener(new WindowAdapter() {
    public void windowClosing(WindowEvent e) { System.exit(0); }
});`,
            "java",
            "Adapter class vs full interface"
        ),

        heading("Event Object Methods"),

        table(
            ["Method", "Class", "Returns"],
            [
                ["getSource()", "AWTEvent", "The object that generated the event"],
                ["getActionCommand()", "ActionEvent", "The action command string (usually button text)"],
                ["getX(), getY()", "MouseEvent", "Mouse coordinates relative to the source component"],
                ["getClickCount()", "MouseEvent", "Number of clicks (1 = single, 2 = double)"],
                ["getButton()", "MouseEvent", "Which mouse button (BUTTON1, BUTTON2, BUTTON3)"],
                ["getKeyChar()", "KeyEvent", "The character associated with the key"],
                ["getKeyCode()", "KeyEvent", "The integer key code (VK_ENTER, VK_ESCAPE, etc.)"],
                ["isControlDown()", "InputEvent", "Whether the Ctrl key is held"],
            ]
        ),

        note(
            "ActionListener has only one method (actionPerformed), so it is a functional interface and can be implemented with a lambda. Listeners with multiple methods (MouseListener, WindowListener, KeyListener) cannot use lambdas directly — use adapter classes instead.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Java uses the Delegation Event Model: sources generate events, listeners handle them.",
            "Register a listener with addXxxListener(); the handler method is called when the event occurs.",
            "ActionEvent is the most common event, generated by button clicks and menu selections.",
            "Adapter classes provide empty implementations so you only override the methods you need.",
            "ActionListener can use lambdas (one method); multi-method listeners need adapter classes.",
        ]),
    ],

    {
        summary:
            "Master the Delegation Event Model, common event types and listeners, adapter classes, and event handling with interfaces, anonymous classes and lambdas.",
        minutes: 13,
        tags: ["java", "events", "actionlistener", "mouselistener", "adapter", "important"],

        mcqs: [
            mcq(
                "Java's event handling architecture is called the:",
                ["Inheritance Event Model", "Delegation Event Model", "Observer Event Model", "Callback Event Model"],
                1,
                "Java uses the Delegation Event Model where sources generate events and listeners handle them."
            ),
            mcq(
                "The method that handles a button click is:",
                ["mouseClicked()", "actionPerformed()", "buttonPressed()", "itemStateChanged()"],
                1,
                "actionPerformed(ActionEvent e) of ActionListener handles button clicks."
            ),
            mcq(
                "An adapter class is useful because:",
                ["It is faster", "It provides empty implementations so you only override needed methods", "It handles all events automatically", "It replaces the listener interface"],
                1,
                "Adapter classes provide empty method bodies, allowing you to override only the methods you need."
            ),
            mcq(
                "Which listener can be implemented with a lambda expression?",
                ["MouseListener", "WindowListener", "ActionListener", "KeyListener"],
                2,
                "ActionListener has only one abstract method, making it a functional interface that supports lambdas."
            ),
            mcq(
                "getSource() on an event object returns:",
                ["The event type", "The object that generated the event", "The timestamp", "The listener"],
                1,
                "getSource() returns a reference to the component that generated the event."
            ),
            mcq(
                "MouseAdapter is an adapter for:",
                ["MouseListener", "ActionListener", "KeyListener", "ItemListener"],
                0,
                "MouseAdapter provides empty implementations of all MouseListener methods."
            ),
        ],

        questions: [
            qa(
                "Explain the Delegation Event Model in Java.",
                "The Delegation Event Model, introduced in JDK 1.1, is Java's architecture for event handling. It consists of three parts: an event source (the component that generates the event, such as a JButton), an event object (containing information about the event, such as ActionEvent) and an event listener (an object that implements a listener interface to handle the event). When a user interacts with a component, the source generates an event object and dispatches it to all registered listeners. Each listener's handler method is invoked with the event object as a parameter. Listeners are registered using addXxxListener() methods. This model separates event generation from event processing, allowing multiple listeners for one source and one listener for multiple sources. It replaced the older inheritance-based model from JDK 1.0.",
                5
            ),
            qa(
                "What are adapter classes? Why are they needed? Give examples.",
                "Adapter classes are convenience classes that provide empty implementations of all methods in a listener interface that has more than one method. They are needed because Java requires a class implementing an interface to provide implementations for all of the interface's methods. Without adapters, you would have to write empty method bodies for every unused method. For example, WindowListener has 7 methods, but you typically only need windowClosing(). With WindowAdapter, you override only windowClosing() and ignore the rest. Other adapters include MouseAdapter (for MouseListener's 5 methods), KeyAdapter (for KeyListener's 3 methods), MouseMotionAdapter and FocusAdapter. ActionListener has only one method so it does not need an adapter — it can use a lambda instead. Adapter classes are abstract classes in the java.awt.event package.",
                5
            ),
            qa(
                "Explain three ways to handle an ActionEvent in Java.",
                "The first way is to implement the ActionListener interface in the class itself. The class implements actionPerformed() and registers itself using btn.addActionListener(this). This is simple but mixes GUI setup with event handling logic. The second way is to use an anonymous inner class: btn.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { /* handle */ } }). This keeps the handler close to the component but is verbose. The third and most concise way (Java 8+) is a lambda expression: btn.addActionListener(e -> label.setText('Clicked!')). This works because ActionListener is a functional interface with a single abstract method. Lambdas are the preferred modern approach for ActionListener. For listeners with multiple methods like MouseListener, lambdas cannot be used and adapter classes are preferred.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Layout Managers
========================================================= */

const layoutManagers = createTopic(
    "layout-managers",
    "Layout Managers",

    [
        definition(
            "Layout Manager",
            "An object that determines the size and position of components within a container. Layout managers automatically arrange components according to a specific strategy, making GUIs resolution-independent and easier to maintain than absolute positioning."
        ),

        text(
            "Without a layout manager, you would need to specify the exact pixel coordinates of every component using setBounds(). This approach (absolute positioning) is fragile — it breaks when the window is resized, when the font changes or when the application runs on a different screen resolution. Layout managers solve this by automatically calculating positions based on rules."
        ),

        heading("Setting a Layout Manager"),

        code(
            `// Set layout on a container
frame.setLayout(new FlowLayout());
panel.setLayout(new BorderLayout());
dialog.setLayout(new GridLayout(3, 2));

// Remove layout manager (use absolute positioning)
panel.setLayout(null);
button.setBounds(50, 30, 100, 30);  // x, y, width, height`,
            "java",
            "Setting a layout manager"
        ),

        heading("1. FlowLayout"),

        definition(
            "FlowLayout",
            "Arranges components in a left-to-right flow, wrapping to the next line when the current line is full. This is the default layout for JPanel. Components retain their preferred size."
        ),

        code(
            `import java.awt.FlowLayout;
panel.setLayout(new FlowLayout());                    // Centre aligned (default)
panel.setLayout(new FlowLayout(FlowLayout.LEFT));     // Left aligned
panel.setLayout(new FlowLayout(FlowLayout.RIGHT));    // Right aligned
panel.setLayout(new FlowLayout(FlowLayout.CENTER, 10, 15));  // Gaps: hgap=10, vgap=15

panel.add(new JButton("One"));
panel.add(new JButton("Two"));
panel.add(new JButton("Three"));
// Buttons appear in a row, wrapping if the window is too narrow.`,
            "java",
            "FlowLayout example"
        ),

        heading("2. BorderLayout"),

        definition(
            "BorderLayout",
            "Divides the container into five regions: NORTH, SOUTH, EAST, WEST and CENTER. Each region can hold at most one component. This is the default layout for JFrame's content pane."
        ),

        code(
            `BorderLayout Regions:

  ┌─────────────────────────────────┐
  │            NORTH                │  ← Top, full width, preferred height
  ├────────┬──────────────┬─────────┤
  │        │              │         │
  │  WEST  │    CENTER    │  EAST   │  ← Sides: preferred width, remaining height
  │        │              │         │     Centre: remaining space
  │        │              │         │
  ├────────┴──────────────┴─────────┤
  │            SOUTH                │  ← Bottom, full width, preferred height
  └─────────────────────────────────┘`,
            "text",
            "BorderLayout regions"
        ),

        code(
            `frame.setLayout(new BorderLayout(5, 5));  // hgap=5, vgap=5

frame.add(new JButton("North"), BorderLayout.NORTH);
frame.add(new JButton("South"), BorderLayout.SOUTH);
frame.add(new JButton("East"),  BorderLayout.EAST);
frame.add(new JButton("West"),  BorderLayout.WEST);
frame.add(new JButton("Center"), BorderLayout.CENTER);

// If you add without specifying a region, CENTER is used (overwrites previous CENTER)`,
            "java",
            "BorderLayout example"
        ),

        heading("3. GridLayout"),

        definition(
            "GridLayout",
            "Arranges components in a rectangular grid of equally sized cells. Components are added left-to-right, top-to-bottom. All components are forced to the same size."
        ),

        code(
            `// 3 rows, 2 columns, 10px horizontal gap, 10px vertical gap
frame.setLayout(new GridLayout(3, 2, 10, 10));

frame.add(new JButton("1"));
frame.add(new JButton("2"));
frame.add(new JButton("3"));
frame.add(new JButton("4"));
frame.add(new JButton("5"));
frame.add(new JButton("6"));

// Result:
// ┌─────┬─────┐
// │  1  │  2  │
// ├─────┼─────┤
// │  3  │  4  │
// ├─────┼─────┤
// │  5  │  6  │
// └─────┴─────┘`,
            "java",
            "GridLayout example"
        ),

        heading("4. GridBagLayout"),

        definition(
            "GridBagLayout",
            "The most flexible and complex layout manager. It arranges components in a grid where components can span multiple rows and columns, have different sizes and have custom alignment and padding. Each component is associated with a GridBagConstraints object."
        ),

        code(
            `import java.awt.*;

panel.setLayout(new GridBagLayout());
GridBagConstraints gbc = new GridBagConstraints();

gbc.fill = GridBagConstraints.HORIZONTAL;
gbc.insets = new Insets(5, 5, 5, 5);  // Padding

// Label at (0, 0)
gbc.gridx = 0; gbc.gridy = 0;
panel.add(new JLabel("Name:"), gbc);

// TextField spanning 2 columns at (1, 0)
gbc.gridx = 1; gbc.gridy = 0;
gbc.gridwidth = 2;
gbc.weightx = 1.0;
panel.add(new JTextField(20), gbc);

// Button at (1, 1)
gbc.gridx = 1; gbc.gridy = 1;
gbc.gridwidth = 1;
panel.add(new JButton("Submit"), gbc);`,
            "java",
            "GridBagLayout example"
        ),

        heading("GridBagConstraints Properties"),

        table(
            ["Property", "Purpose"],
            [
                ["gridx, gridy", "Column and row position (0-based)"],
                ["gridwidth, gridheight", "Number of columns/rows the component spans"],
                ["weightx, weighty", "How extra space is distributed (0.0 to 1.0)"],
                ["fill", "NONE, HORIZONTAL, VERTICAL, BOTH — how the component fills its cell"],
                ["anchor", "Alignment within the cell (CENTER, NORTH, NORTHEAST, etc.)"],
                ["insets", "External padding around the component (top, left, bottom, right)"],
                ["ipadx, ipady", "Internal padding (added to the component's minimum size)"],
            ]
        ),

        heading("5. BoxLayout"),

        definition(
            "BoxLayout",
            "Arranges components in a single row (X_AXIS) or a single column (Y_AXIS). Unlike FlowLayout, it does not wrap. Unlike GridLayout, components can have different sizes."
        ),

        code(
            `// Vertical arrangement
panel.setLayout(new BoxLayout(panel, BoxLayout.Y_AXIS));
panel.add(new JButton("Top"));
panel.add(Box.createVerticalStrut(10));  // 10px gap
panel.add(new JButton("Middle"));
panel.add(Box.createVerticalGlue());     // Flexible space
panel.add(new JButton("Bottom"));

// Horizontal arrangement
panel.setLayout(new BoxLayout(panel, BoxLayout.X_AXIS));`,
            "java",
            "BoxLayout example"
        ),

        heading("6. CardLayout"),

        definition(
            "CardLayout",
            "Manages multiple components (cards) occupying the same space, showing only one at a time. Useful for wizards, tabbed interfaces and sliding panels."
        ),

        code(
            `CardLayout cardLayout = new CardLayout();
JPanel cards = new JPanel(cardLayout);

cards.add(panel1, "card1");
cards.add(panel2, "card2");
cards.add(panel3, "card3");

cardLayout.show(cards, "card2");   // Show card2
cardLayout.next(cards);            // Show next card
cardLayout.previous(cards);        // Show previous card
cardLayout.first(cards);           // Show first card`,
            "java",
            "CardLayout example"
        ),

        heading("Layout Manager Comparison"),

        table(
            ["Layout", "Arrangement", "Component Size", "Default For", "Complexity"],
            [
                ["FlowLayout", "Left-to-right, wrapping", "Preferred size", "JPanel", "Simple"],
                ["BorderLayout", "5 regions (N/S/E/W/C)", "Stretched to fill region", "JFrame content pane", "Simple"],
                ["GridLayout", "Equal-sized grid cells", "All same size", "—", "Simple"],
                ["GridBagLayout", "Flexible grid with spanning", "Custom per component", "—", "Complex"],
                ["BoxLayout", "Single row or column", "Preferred size", "—", "Moderate"],
                ["CardLayout", "Stacked cards, one visible", "Fills container", "—", "Moderate"],
                ["null (absolute)", "Pixel coordinates", "setBounds()", "—", "Fragile"],
            ]
        ),

        heading("Combining Layouts (Nested Panels)"),

        code(
            `// Combining layouts using nested JPanels
JFrame frame = new JFrame("Combined Layouts");
frame.setLayout(new BorderLayout());

// Top panel with FlowLayout
JPanel topPanel = new JPanel(new FlowLayout());
topPanel.add(new JLabel("Search:"));
topPanel.add(new JTextField(20));
topPanel.add(new JButton("Go"));
frame.add(topPanel, BorderLayout.NORTH);

// Centre panel with GridLayout
JPanel centrePanel = new JPanel(new GridLayout(2, 2, 5, 5));
centrePanel.add(new JButton("1"));
centrePanel.add(new JButton("2"));
centrePanel.add(new JButton("3"));
centrePanel.add(new JButton("4"));
frame.add(centrePanel, BorderLayout.CENTER);

// Bottom panel
JPanel bottomPanel = new JPanel(new FlowLayout(FlowLayout.RIGHT));
bottomPanel.add(new JButton("OK"));
bottomPanel.add(new JButton("Cancel"));
frame.add(bottomPanel, BorderLayout.SOUTH);`,
            "java",
            "Combining layouts with nested panels"
        ),

        note(
            "The most common approach in real applications is combining layouts using nested JPanels. For example, a BorderLayout on the JFrame with a FlowLayout panel in NORTH (toolbar), a BorderLayout or GridLayout panel in CENTER (main content) and a FlowLayout panel in SOUTH (status bar or buttons). This gives you the flexibility of complex layouts without the complexity of GridBagLayout.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Layout managers automatically arrange components, making GUIs resolution-independent.",
            "FlowLayout arranges left-to-right with wrapping (default for JPanel).",
            "BorderLayout has 5 regions: NORTH, SOUTH, EAST, WEST, CENTER (default for JFrame).",
            "GridLayout creates equal-sized cells; GridBagLayout is the most flexible but complex.",
            "Combine layouts using nested JPanels for professional-looking interfaces.",
        ]),
    ],

    {
        summary:
            "Master all major layout managers: FlowLayout, BorderLayout, GridLayout, GridBagLayout, BoxLayout, CardLayout and nested panel combinations.",
        minutes: 14,
        tags: ["java", "layout", "flowlayout", "borderlayout", "gridlayout", "gridbaglayout", "important"],

        mcqs: [
            mcq(
                "The default layout manager for JPanel is:",
                ["BorderLayout", "FlowLayout", "GridLayout", "null"],
                1,
                "JPanel uses FlowLayout by default, arranging components left-to-right."
            ),
            mcq(
                "The default layout manager for JFrame's content pane is:",
                ["FlowLayout", "GridLayout", "BorderLayout", "BoxLayout"],
                2,
                "JFrame's content pane uses BorderLayout by default."
            ),
            mcq(
                "BorderLayout has how many regions?",
                ["3", "4", "5", "6"],
                2,
                "BorderLayout has 5 regions: NORTH, SOUTH, EAST, WEST and CENTER."
            ),
            mcq(
                "In GridLayout, all components:",
                ["Keep their preferred size", "Are forced to the same size", "Can span multiple cells", "Are stacked"],
                1,
                "GridLayout forces all components to be the same size, filling their grid cells equally."
            ),
            mcq(
                "The most flexible layout manager is:",
                ["FlowLayout", "BorderLayout", "GridLayout", "GridBagLayout"],
                3,
                "GridBagLayout is the most flexible, allowing components to span cells and have custom constraints."
            ),
            mcq(
                "CardLayout is used to:",
                ["Arrange in a grid", "Show one of several panels at a time", "Arrange in a single row", "Fill five regions"],
                1,
                "CardLayout manages multiple components occupying the same space, showing only one at a time."
            ),
        ],

        questions: [
            qa(
                "Explain FlowLayout, BorderLayout and GridLayout with their characteristics.",
                "FlowLayout arranges components in a left-to-right flow, wrapping to the next line when there is no more space. Components retain their preferred size. Alignment can be LEFT, CENTER (default) or RIGHT. It is the default layout for JPanel and is simple but limited for complex interfaces. BorderLayout divides the container into five regions: NORTH, SOUTH, EAST, WEST and CENTER. Each region holds at most one component. NORTH and SOUTH get their preferred height and stretch to full width; EAST and WEST get their preferred width and stretch to remaining height; CENTER fills all remaining space. It is the default for JFrame. GridLayout arranges components in a rectangular grid of equally sized cells, added left-to-right, top-to-bottom. All components are forced to the same size regardless of their preferred size. It is useful for calculator buttons, photo galleries and forms with uniform fields.",
                5
            ),
            qa(
                "What is GridBagLayout? Explain GridBagConstraints.",
                "GridBagLayout is the most flexible and powerful layout manager in Java. It arranges components in a grid where each component can span multiple rows and columns, have different sizes, and have custom alignment and padding. Unlike GridLayout, cells do not have to be equal size. Each component is associated with a GridBagConstraints object that specifies its placement. Key constraints include: gridx and gridy for the column and row position, gridwidth and gridheight for how many cells the component spans, weightx and weighty for how extra space is distributed when the container is resized, fill (NONE, HORIZONTAL, VERTICAL, BOTH) for how the component fills its cell, anchor for alignment within the cell, and insets for external padding around the component. GridBagLayout is complex but essential for professional, resizable forms.",
                5
            ),
            qa(
                "How do you combine multiple layout managers in a Swing application?",
                "The standard approach is to use nested JPanels, each with its own layout manager. The JFrame typically uses BorderLayout as the outer layout. A JPanel with FlowLayout is placed in NORTH for a toolbar or search bar. A JPanel with GridLayout or BorderLayout is placed in CENTER for the main content. A JPanel with FlowLayout (right-aligned) is placed in SOUTH for action buttons like OK and Cancel. WEST and EAST can hold navigation panels or sidebars. This nesting can go several levels deep — a CENTER panel with BorderLayout can itself contain nested panels. This approach gives you the simplicity of basic layouts with the flexibility of complex designs, avoiding the steep learning curve of GridBagLayout for most applications. Each panel is an independent layout unit that manages its own children.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit4Topics = [
    introToGUIProgramming,
    awtComponentsAndContainers,
    swingComponents,
    eventHandling,
    layoutManagers,
];

// Alias if index.js imports { unit4 }
export const unit4 = unit4Topics;