/* =========================================================
   BCA • SEM 5 • Object Oriented Programming - II
   UNIT 2 — I/O, JDBC, GUI and Modern Java
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
   TOPIC 1 — File I/O and Streams
========================================================= */

const fileIO = createTopic(
    "file-io-and-streams",
    "File I/O and Streams",

    [
        definition(
            "Stream",
            "A stream is a sequence of data flowing from a source to a destination. Java provides I/O streams in the java.io package to handle input and output operations."
        ),

        heading("Types of Streams"),

        table(
            ["Type", "Purpose", "Base Classes"],
            [
                ["Byte Stream", "Handle binary data (images, videos)", "InputStream, OutputStream"],
                ["Character Stream", "Handle text data (characters)", "Reader, Writer"],
            ]
        ),

        heading("Byte Stream Classes"),

        table(
            ["Class", "Purpose"],
            [
                ["FileInputStream", "Read bytes from file"],
                ["FileOutputStream", "Write bytes to file"],
                ["BufferedInputStream", "Buffered byte reading"],
                ["BufferedOutputStream", "Buffered byte writing"],
                ["DataInputStream", "Read primitive types"],
                ["DataOutputStream", "Write primitive types"],
            ]
        ),

        heading("Character Stream Classes"),

        table(
            ["Class", "Purpose"],
            [
                ["FileReader", "Read characters from file"],
                ["FileWriter", "Write characters to file"],
                ["BufferedReader", "Buffered character reading"],
                ["BufferedWriter", "Buffered character writing"],
                ["PrintWriter", "Formatted text output"],
            ]
        ),

        heading("Writing to File"),

        code(
            `import java.io.*;

public class Test {
    public static void main(String[] args) {
        try (FileWriter fw = new FileWriter("data.txt"), {
            fw.write("Hello, Java I/O!\\n");
            fw.write("This is second line.");
            System.out.println("File written successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Writing to file using FileWriter"
        ),

        heading("Reading from File"),

        code(
            `import java.io.*;

public class Test {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("data.txt"),) {
            String line;
            while ((line = br.readLine(), != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Reading file line by line"
        ),

        heading("File Class"),

        code(
            `import java.io.File;

public class Test {
    public static void main(String[] args) throws Exception {
        File file = new File("data.txt");

        System.out.println("Name: " + file.getName(),;
        System.out.println("Path: " + file.getAbsolutePath(),;
        System.out.println("Exists: " + file.exists(),;
        System.out.println("Size: " + file.length() + " bytes");
        System.out.println("Readable: " + file.canRead(),;
        System.out.println("Writable: " + file.canWrite(),;

        // Create new file
        File newFile = new File("newfile.txt");
        if (newFile.createNewFile(), {
            System.out.println("File created");
        }

        // Delete file
        // newFile.delete();
    }
}`,
            "java",
            "File class operations"
        ),

        heading("Serialization"),

        definition(
            "Serialization",
            "Serialization is the process of converting an object into a byte stream so it can be saved to a file or sent over a network. Deserialization is the reverse process."
        ),

        code(
            `import java.io.*;

class Student implements Serializable {
    int id;
    String name;

    Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
}

public class Test {
    public static void main(String[] args) throws Exception {
        // Serialize
        Student s = new Student(101, "Amit");
        FileOutputStream fos = new FileOutputStream("student.ser");
        ObjectOutputStream oos = new ObjectOutputStream(fos);
        oos.writeObject(s);
        oos.close();

        // Deserialize
        FileInputStream fis = new FileInputStream("student.ser");
        ObjectInputStream ois = new ObjectInputStream(fis);
        Student s2 = (Student) ois.readObject();
        ois.close();

        System.out.println(s2.id + " : " + s2.name);
    }
}`,
            "java",
            "Serialization and deserialization"
        ),

        heading("Scanner for Input"),

        code(
            `import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter name: ");
        String name = sc.nextLine();

        System.out.print("Enter age: ");
        int age = sc.nextInt();

        System.out.println("Hello " + name + ", age " + age);

        sc.close();
    }
}`,
            "java",
            "Scanner for user input"
        ),

        note(
            "Always use try-with-resources when working with streams. It ensures that resources are automatically closed even if an exception occurs, preventing resource leaks.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Byte streams handle binary data; character streams handle text.",
            "Use BufferedReader/BufferedWriter for efficient I/O.",
            "File class provides metadata about files and directories.",
            "Serialization saves object state to file/stream.",
            "try-with-resources auto-closes streams.",
        ]),
    ],

    {
        summary:
            "Learn Java I/O streams, file handling, serialization and user input using Scanner.",
        minutes: 12,
        tags: ["io", "file", "streams", "serialization", "java"],

        mcqs: [
            mcq(
                "Which class is used to read characters from a file?",
                ["FileInputStream", "FileReader", "DataInputStream", "Scanner"],
                1,
                "FileReader reads characters from files."
            ),
            mcq(
                "Serialization converts object to:",
                ["Text", "Byte stream", "XML", "JSON"],
                1,
                "Serialization converts an object to byte stream."
            ),
            mcq(
                "Which interface must be implemented for serialization?",
                ["Cloneable", "Serializable", "Comparable", "Runnable"],
                1,
                "Class must implement Serializable interface."
            ),
            mcq(
                "BufferedReader is used for:",
                ["Reading bytes", "Efficient character reading", "Writing files", "Network I/O"],
                1,
                "BufferedReader provides efficient character-based reading."
            ),
        ],

        questions: [
            qa(
                "Explain byte streams and character streams in Java.",
                "Java I/O streams are divided into byte streams and character streams. Byte streams handle raw binary data (8-bit bytes) and are used for images, videos, executables and other binary files. Base classes are InputStream and OutputStream, with implementations like FileInputStream, FileOutputStream, BufferedInputStream and DataInputStream. Character streams handle text data (16-bit Unicode characters) and are used for text files, allowing proper handling of international character sets. Base classes are Reader and Writer, with implementations like FileReader, FileWriter, BufferedReader and PrintWriter. Character streams internally use byte streams but convert bytes to characters using specified encoding. For text files, character streams are preferred as they handle character encoding automatically.",
                4
            ),
            qa(
                "What is serialization? Explain with example.",
                "Serialization is the process of converting an object into a byte stream that can be saved to a file, stored in a database or transmitted over a network. The reverse process is called deserialization. To make a class serializable, it must implement the Serializable interface (a marker interface with no methods). Example: class Student implements Serializable { int id; String name; }. To serialize: FileOutputStream fos = new FileOutputStream('student.ser'); ObjectOutputStream oos = new ObjectOutputStream(fos); oos.writeObject(studentObj);. To deserialize: ObjectInputStream ois = new ObjectInputStream(new FileInputStream('student.ser'),; Student s = (Student) ois.readObject();. Transient fields are not serialized. Serialization is useful for saving object state, caching, and distributed computing.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — JDBC - Java Database Connectivity
========================================================= */

const jdbc = createTopic(
    "jdbc-java-database-connectivity",
    "JDBC - Java Database Connectivity",

    [
        definition(
            "JDBC",
            "Java Database Connectivity (JDBC) is a Java API that enables Java applications to connect and interact with relational databases using SQL."
        ),

        heading("JDBC Architecture"),

        text(
            "JDBC has a two-tier or three-tier architecture. It provides a common interface (java.sql package) that different database drivers implement. This allows Java programs to work with any database (MySQL, Oracle, PostgreSQL, SQL Server) with minimal code changes."
        ),

        heading("JDBC Driver Types"),

        table(
            ["Type", "Name", "Description"],
            [
                ["Type 1", "JDBC-ODBC Bridge", "Uses ODBC (deprecated)"],
                ["Type 2", "Native API Driver", "Uses database native library"],
                ["Type 3", "Network Protocol Driver", "Middleware server based"],
                ["Type 4", "Thin Driver (Pure Java)", "Directly connects to database (most used)"],
            ]
        ),

        heading("JDBC Steps"),

        steps([
            "Load the JDBC driver.",
            "Establish connection using DriverManager.",
            "Create Statement or PreparedStatement.",
            "Execute SQL query.",
            "Process ResultSet.",
            "Close the connection.",
        ]),

        heading("Complete JDBC Example"),

        code(
            `import java.sql.*;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/college";
        String user = "root";
        String pass = "password";

        try {
            // 1. Load driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Establish connection
            Connection con = DriverManager.getConnection(url, user, pass);
            System.out.println("Connected successfully");

            // 3. Create statement
            Statement stmt = con.createStatement();

            // 4. Execute query
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");

            // 5. Process result
            while (rs.next(), {
                int id = rs.getInt("id");
                String name = rs.getString("name");
                int age = rs.getInt("age");
                System.out.println(id + " | " + name + " | " + age);
            }

            // 6. Close connection
            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Complete JDBC example"
        ),

        heading("Statement Types"),

        table(
            ["Type", "Description", "Use Case"],
            [
                ["Statement", "Static SQL queries", "One-time queries"],
                ["PreparedStatement", "Precompiled SQL with parameters", "Repeated queries, security"],
                ["CallableStatement", "Execute stored procedures", "Database procedures"],
            ]
        ),

        heading("PreparedStatement Example"),

        code(
            `String query = "INSERT INTO students (name, age, course) VALUES (?, ?, ?)";
PreparedStatement ps = con.prepareStatement(query);

ps.setString(1, "Amit");
ps.setInt(2, 20);
ps.setString(3, "BCA");

int rows = ps.executeUpdate();
System.out.println(rows + " row(s) inserted");

ps.close();`,
            "java",
            "PreparedStatement with parameters"
        ),

        heading("CRUD Operations"),

        code(
            `// CREATE (Insert)
String insert = "INSERT INTO students VALUES (?, ?, ?)";
PreparedStatement ps1 = con.prepareStatement(insert);
ps1.setInt(1, 101);
ps1.setString(2, "Riya");
ps1.setInt(3, 21);
ps1.executeUpdate();

// READ (Select)
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM students");

// UPDATE
String update = "UPDATE students SET age = ? WHERE id = ?";
PreparedStatement ps2 = con.prepareStatement(update);
ps2.setInt(1, 22);
ps2.setInt(2, 101);
ps2.executeUpdate();

// DELETE
String delete = "DELETE FROM students WHERE id = ?";
PreparedStatement ps3 = con.prepareStatement(delete);
ps3.setInt(1, 101);
ps3.executeUpdate();`,
            "java",
            "CRUD operations with JDBC"
        ),

        heading("ResultSet Methods"),

        table(
            ["Method", "Description"],
            [
                ["next()", "Move to next row"],
                ["previous()", "Move to previous row"],
                ["first()", "Move to first row"],
                ["last()", "Move to last row"],
                ["getInt(col)", "Get integer value"],
                ["getString(col)", "Get string value"],
                ["getDate(col)", "Get date value"],
            ]
        ),

        heading("Transaction Management"),

        code(
            `try {
    con.setAutoCommit(false);  // Disable auto commit

    Statement stmt = con.createStatement();
    stmt.executeUpdate("UPDATE accounts SET balance = balance - 1000 WHERE id = 1");
    stmt.executeUpdate("UPDATE accounts SET balance = balance + 1000 WHERE id = 2");

    con.commit();  // Commit transaction
    System.out.println("Transaction successful");

} catch (Exception e) {
    con.rollback();  // Rollback on error
    System.out.println("Transaction failed, rolled back");
}`,
            "java",
            "Transaction management"
        ),

        note(
            "Always use PreparedStatement instead of Statement to prevent SQL injection attacks. Never concatenate user input directly into SQL queries.",
            "warning",
            "Security"
        ),

        keyPoints([
            "JDBC connects Java applications to databases.",
            "Type 4 driver is pure Java and most commonly used.",
            "PreparedStatement prevents SQL injection.",
            "ResultSet stores query results.",
            "Transactions ensure atomicity of multiple operations.",
        ]),
    ],

    {
        summary:
            "Learn JDBC to connect Java with databases, perform CRUD operations, use PreparedStatement and manage transactions.",
        minutes: 13,
        tags: ["jdbc", "database", "sql", "java", "important"],

        mcqs: [
            mcq(
                "JDBC stands for:",
                ["Java Database Component", "Java Database Connectivity", "Java Data Binary Code", "Java Direct Base Call"],
                1,
                "JDBC is Java Database Connectivity."
            ),
            mcq(
                "Which driver is pure Java?",
                ["Type 1", "Type 2", "Type 3", "Type 4"],
                3,
                "Type 4 driver is pure Java (thin driver)."
            ),
            mcq(
                "Which prevents SQL injection?",
                ["Statement", "PreparedStatement", "Both", "Neither"],
                1,
                "PreparedStatement prevents SQL injection."
            ),
            mcq(
                "Which method moves cursor to next row?",
                ["move()", "next()", "forward()", "advance()"],
                1,
                "ResultSet.next() moves to the next row."
            ),
        ],

        questions: [
            qa(
                "Explain the steps to connect Java application with database using JDBC.",
                "Connecting Java to database using JDBC involves six steps. First, load the JDBC driver using Class.forName('com.mysql.cj.jdbc.Driver'). Second, establish a connection using DriverManager.getConnection(url, user, password) where URL is jdbc:mysql://host:port/dbname. Third, create a Statement or PreparedStatement object using con.createStatement() or con.prepareStatement(sql). Fourth, execute the SQL query using executeQuery() for SELECT (returns ResultSet) or executeUpdate() for INSERT/UPDATE/DELETE (returns affected rows). Fifth, process the ResultSet using while(rs.next(), loop and retrieve column values using getInt(), getString() etc. Finally, close all resources (ResultSet, Statement, Connection) to prevent memory leaks. Using try-with-resources automates this cleanup.",
                4
            ),
            qa(
                "Differentiate between Statement and PreparedStatement.",
                "Statement and PreparedStatement are both used to execute SQL queries in JDBC but have important differences. Statement is used for static SQL queries that don't have parameters. Each execution recompiles the SQL query, making it slower for repeated execution. It is vulnerable to SQL injection when user input is concatenated. Example: stmt.executeQuery('SELECT * FROM users WHERE id = ' + userId). PreparedStatement represents a precompiled SQL statement with parameter placeholders (?). The SQL is compiled once and can be executed multiple times with different parameter values, improving performance. Parameters are set using setInt(), setString() etc., which automatically escapes special characters, preventing SQL injection. Example: PreparedStatement ps = con.prepareStatement('SELECT * FROM users WHERE id = ?'); ps.setInt(1, userId);. PreparedStatement is preferred for security and performance.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — GUI with Swing / JavaFX
========================================================= */

const guiSwing = createTopic(
    "gui-with-swing-javafx",
    "GUI with Swing / JavaFX",

    [
        definition(
            "GUI",
            "A Graphical User Interface (GUI) allows users to interact with a program through visual elements like windows, buttons, menus and forms instead of text commands."
        ),

        heading("Java GUI Libraries"),

        table(
            ["Library", "Description", "Status"],
            [
                ["AWT", "Abstract Window Toolkit - original", "Legacy"],
                ["Swing", "Lightweight, pure Java", "Widely used"],
                ["JavaFX", "Modern rich GUI", "Recommended for new apps"],
            ]
        ),

        heading("Swing Components"),

        table(
            ["Component", "Description"],
            [
                ["JFrame", "Top-level window"],
                ["JPanel", "Container for other components"],
                ["JLabel", "Displays text or image"],
                ["JButton", "Clickable button"],
                ["JTextField", "Single-line text input"],
                ["JTextArea", "Multi-line text input"],
                ["JCheckBox", "Checkbox for options"],
                ["JRadioButton", "Radio button for selection"],
                ["JComboBox", "Dropdown list"],
                ["JMenuBar", "Menu bar"],
                ["JTable", "Tabular data display"],
            ]
        ),

        heading("Basic Swing Window"),

        code(
            `import javax.swing.*;

public class MyWindow {
    public static void main(String[] args) {
        JFrame frame = new JFrame("My First Swing App");
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        JLabel label = new JLabel("Hello, Swing!", SwingConstants.CENTER);
        frame.add(label);

        frame.setVisible(true);
    }
}`,
            "java",
            "Simple Swing window"
        ),

        heading("Layout Managers"),

        table(
            ["Layout", "Description"],
            [
                ["FlowLayout", "Components in a row, wraps to next"],
                ["BorderLayout", "North, South, East, West, Center"],
                ["GridLayout", "Grid of rows and columns"],
                ["BoxLayout", "Single row or column"],
                ["GridBagLayout", "Flexible grid layout"],
                ["Null Layout", "Absolute positioning"],
            ]
        ),

        heading("Login Form Example"),

        code(
            `import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class LoginForm extends JFrame {
    JTextField userField;
    JPasswordField passField;

    public LoginForm() {
        setTitle("Login Form");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLayout(new GridLayout(3, 2, 10, 10),;

        add(new JLabel("Username:"),;
        userField = new JTextField();
        add(userField);

        add(new JLabel("Password:"),;
        passField = new JPasswordField();
        add(passField);

        JButton loginBtn = new JButton("Login");
        add(loginBtn);

        JButton cancelBtn = new JButton("Cancel");
        add(cancelBtn);

        loginBtn.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent e) {
                String user = userField.getText();
                String pass = new String(passField.getPassword(),;
                if (user.equals("admin") && pass.equals("1234"), {
                    JOptionPane.showMessageDialog(null, "Login Successful");
                } else {
                    JOptionPane.showMessageDialog(null, "Invalid credentials");
                }
            }
        });

        setVisible(true);
    }

    public static void main(String[] args) {
        new LoginForm();
    }
}`,
            "java",
            "Complete Login form"
        ),

        heading("Event Handling"),

        definition(
            "Event Handling",
            "Event handling is the mechanism through which a program responds to user actions like button clicks, key presses, mouse movements etc."
        ),

        table(
            ["Event Listener", "Handles"],
            [
                ["ActionListener", "Button clicks, menu items"],
                ["MouseListener", "Mouse events"],
                ["KeyListener", "Keyboard events"],
                ["WindowListener", "Window events"],
                ["ItemListener", "Checkbox, radio button"],
                ["FocusListener", "Focus gain/loss"],
            ]
        ),

        heading("Event Handling with Lambda"),

        code(
            `JButton btn = new JButton("Click Me");

btn.addActionListener(e -> {
    System.out.println("Button clicked!");
    JOptionPane.showMessageDialog(null, "Hello!");
});`,
            "java",
            "Modern lambda event handling"
        ),

        heading("Menu Bar Example"),

        code(
            `JMenuBar menuBar = new JMenuBar();

JMenu fileMenu = new JMenu("File");
JMenuItem openItem = new JMenuItem("Open");
JMenuItem exitItem = new JMenuItem("Exit");

fileMenu.add(openItem);
fileMenu.addSeparator();
fileMenu.add(exitItem);

menuBar.add(fileMenu);
frame.setJMenuBar(menuBar);

exitItem.addActionListener(e -> System.exit(0),;`,
            "java",
            "Menu bar with items"
        ),

        note(
            "JavaFX is the modern replacement for Swing, offering rich UI, CSS styling, FXML markup, animations and better performance. However, Swing is still widely used in enterprise applications.",
            "info",
            "Modern GUI"
        ),

        keyPoints([
            "Swing provides lightweight pure-Java GUI components.",
            "JFrame is the top-level window container.",
            "Layout managers arrange components automatically.",
            "Event listeners handle user interactions.",
            "Lambda expressions simplify event handling.",
        ]),
    ],

    {
        summary:
            "Learn Java GUI development using Swing components, layout managers and event handling.",
        minutes: 12,
        tags: ["gui", "swing", "javafx", "events", "java"],

        mcqs: [
            mcq(
                "Which is the top-level container in Swing?",
                ["JPanel", "JFrame", "JLabel", "JButton"],
                1,
                "JFrame is the top-level window container."
            ),
            mcq(
                "Which listener handles button clicks?",
                ["MouseListener", "ActionListener", "KeyListener", "WindowListener"],
                1,
                "ActionListener handles button click events."
            ),
            mcq(
                "Which layout divides into 5 regions?",
                ["FlowLayout", "GridLayout", "BorderLayout", "BoxLayout"],
                2,
                "BorderLayout has North, South, East, West and Center regions."
            ),
            mcq(
                "Modern replacement for Swing is:",
                ["AWT", "JavaFX", "JSP", "Servlet"],
                1,
                "JavaFX is the modern GUI toolkit for Java."
            ),
        ],

        questions: [
            qa(
                "Explain event handling in Java Swing with an example.",
                "Event handling in Swing follows the delegation event model where components (event sources) generate events, and listeners (event handlers) respond to them. To handle events, you register a listener with a component using addXxxListener() method. The listener implements an interface with methods that get called when the event occurs. For example, to handle a button click: JButton btn = new JButton('Click'); btn.addActionListener(new ActionListener() { public void actionPerformed(ActionEvent e) { System.out.println('Clicked'); } });. With lambda expressions (Java 8+), this becomes cleaner: btn.addActionListener(e -> System.out.println('Clicked'),;. Common listeners include ActionListener for buttons, MouseListener for mouse events, KeyListener for keyboard, and WindowListener for window events. Event handling makes GUI applications interactive.",
                4
            ),
            qa(
                "Explain different layout managers in Swing.",
                "Layout managers automatically arrange components in a container. FlowLayout arranges components in a row from left to right, wrapping to next row when needed - default for JPanel. BorderLayout divides container into five regions: North, South, East, West and Center - default for JFrame. GridLayout arranges components in a grid of equal-sized cells with specified rows and columns. BoxLayout arranges components in a single row (X_AXIS) or column (Y_AXIS). GridBagLayout is the most flexible, allowing components to span multiple rows/columns with custom sizes. Null layout allows absolute positioning using setBounds(x, y, w, h) but is not recommended as it doesn't handle resizing. Choosing the right layout manager makes GUI design easier and responsive to different screen sizes.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Lambda Expressions and Streams API
========================================================= */

const lambdaStreams = createTopic(
    "lambda-expressions-and-streams",
    "Lambda Expressions and Streams API",

    [
        definition(
            "Lambda Expression",
            "A lambda expression is a short block of code that takes parameters and returns a value. Introduced in Java 8, it enables functional programming and cleaner code."
        ),

        heading("Lambda Syntax"),

        code(
            `// Syntax: (parameters) -> expression
//         (parameters) -> { statements }

// No parameter
() -> System.out.println("Hello")

// One parameter
name -> System.out.println("Hi " + name)

// Multiple parameters
(a, b) -> a + b

// With body
(x, y) -> {
    int sum = x + y;
    return sum;
}`,
            "java",
            "Lambda expression syntax"
        ),

        heading("Lambda vs Anonymous Class"),

        code(
            `// Old way - anonymous class
Runnable r1 = new Runnable() {
    public void run() {
        System.out.println("Running old way");
    }
};

// New way - lambda
Runnable r2 = () -> System.out.println("Running with lambda");

new Thread(r1).start();
new Thread(r2).start();`,
            "java",
            "Lambda replacing anonymous class"
        ),

        heading("Functional Interfaces"),

        table(
            ["Interface", "Method", "Purpose"],
            [
                ["Runnable", "void run()", "Task without return"],
                ["Callable<T>", "T call()", "Task with return"],
                ["Consumer<T>", "void accept(T)", "Consume value"],
                ["Supplier<T>", "T get()", "Supply value"],
                ["Function<T,R>", "R apply(T)", "Transform value"],
                ["Predicate<T>", "boolean test(T)", "Test condition"],
                ["BiFunction<T,U,R>", "R apply(T,U)", "Two-arg function"],
            ]
        ),

        heading("Predefined Functional Interfaces Example"),

        code(
            `import java.util.function.*;

public class Test {
    public static void main(String[] args) {
        // Predicate - returns boolean
        Predicate<Integer> isEven = n -> n % 2 == 0;
        System.out.println(isEven.test(10),;  // true

        // Function - transforms input to output
        Function<String, Integer> length = s -> s.length();
        System.out.println(length.apply("Hello"),;  // 5

        // Consumer - consumes value
        Consumer<String> print = s -> System.out.println("Value: " + s);
        print.accept("Java");

        // Supplier - supplies value
        Supplier<Double> random = () -> Math.random();
        System.out.println(random.get(),;
    }
}`,
            "java",
            "Functional interfaces from java.util.function"
        ),

        heading("Streams API"),

        definition(
            "Stream",
            "A Stream is a sequence of elements that supports functional-style operations like filter, map and reduce. Introduced in Java 8, it enables declarative processing of collections."
        ),

        heading("Stream Operations"),

        table(
            ["Type", "Operations", "Purpose"],
            [
                ["Intermediate", "filter, map, sorted, distinct", "Transform stream, returns Stream"],
                ["Terminal", "collect, forEach, count, reduce", "Produce result, ends stream"],
            ]
        ),

        heading("Filter and Map Example"),

        code(
            `import java.util.*;
import java.util.stream.*;

public class Test {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Filter even numbers, square them, and collect
        List<Integer> result = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList(),;

        System.out.println(result);  // [4, 16, 36, 64, 100]
    }
}`,
            "java",
            "Filter and map with streams"
        ),

        heading("Common Stream Operations"),

        code(
            `List<String> names = Arrays.asList("Amit", "Riya", "Karan", "Amit", "Neha");

// Count
long count = names.stream().count();

// Distinct
names.stream().distinct().forEach(System.out::println);

// Sorted
names.stream().sorted().forEach(System.out::println);

// Filter
names.stream()
     .filter(n -> n.startsWith("A"),
     .forEach(System.out::println);

// Map to uppercase
List<String> upper = names.stream()
    .map(String::toUpperCase)
    .collect(Collectors.toList(),;

// Reduce - sum of lengths
int totalLength = names.stream()
    .mapToInt(String::length)
    .sum();

// Group by first character
Map<Character, List<String>> grouped = names.stream()
    .collect(Collectors.groupingBy(n -> n.charAt(0),);`,
            "java",
            "Various stream operations"
        ),

        heading("Method References"),

        table(
            ["Type", "Syntax", "Example"],
            [
                ["Static method", "Class::method", "Integer::parseInt"],
                ["Instance method", "obj::method", "System.out::println"],
                ["Class instance method", "Class::method", "String::length"],
                ["Constructor", "Class::new", "ArrayList::new"],
            ]
        ),

        code(
            `List<String> names = Arrays.asList("Amit", "Riya", "Karan");

// Lambda
names.forEach(name -> System.out.println(name),;

// Method reference - shorter
names.forEach(System.out::println);`,
            "java",
            "Method references"
        ),

        note(
            "Streams don't modify the original collection. They create a pipeline of operations that produces a new result. Streams can be sequential or parallel (using parallelStream(), for better performance on large datasets.",
            "tip",
            "Immutability"
        ),

        keyPoints([
            "Lambda expressions provide concise syntax for functional interfaces.",
            "Streams enable functional-style data processing.",
            "Intermediate operations (filter, map) return streams.",
            "Terminal operations (collect, forEach) produce results.",
            "Method references are shortcuts for lambdas.",
        ]),
    ],

    {
        summary:
            "Master modern Java features: lambda expressions, functional interfaces, Streams API and method references.",
        minutes: 13,
        tags: ["lambda", "streams", "functional", "java8", "important"],

        mcqs: [
            mcq(
                "Lambda expressions were introduced in:",
                ["Java 6", "Java 7", "Java 8", "Java 9"],
                2,
                "Lambda expressions were introduced in Java 8."
            ),
            mcq(
                "Which is an intermediate operation?",
                ["forEach", "collect", "filter", "count"],
                2,
                "filter is intermediate; it returns another Stream."
            ),
            mcq(
                "Predicate returns:",
                ["void", "boolean", "String", "Object"],
                1,
                "Predicate.test() returns boolean."
            ),
            mcq(
                "System.out::println is a:",
                ["Lambda", "Method reference", "Constructor", "Interface"],
                1,
                "It is an instance method reference."
            ),
        ],

        questions: [
            qa(
                "Explain lambda expressions in Java with syntax and example.",
                "Lambda expressions, introduced in Java 8, provide a concise way to represent anonymous functions. They enable functional programming in Java. The syntax is (parameters) -> expression or (parameters) -> { statements }. Lambdas can only be used with functional interfaces (interfaces with exactly one abstract method). Examples: () -> System.out.println('Hello') for no parameters; name -> System.out.println(name) for one parameter; (a, b) -> a + b for multiple parameters. Compared to anonymous classes, lambdas are much shorter. For example, Runnable r = () -> System.out.println('Running'); replaces the verbose anonymous class syntax. Lambdas make code more readable, enable functional programming patterns like map/filter/reduce, and are essential for the Streams API.",
                4
            ),
            qa(
                "Explain Java Streams API with example.",
                "The Streams API, introduced in Java 8, provides a functional approach to processing collections of data. A Stream is a sequence of elements supporting operations like filter, map, sorted and collect. Stream operations are of two types: intermediate operations (filter, map, sorted, distinct) that return a Stream and can be chained, and terminal operations (collect, forEach, count, reduce) that produce a result. Example: List<Integer> nums = Arrays.asList(1,2,3,4,5,6,7,8,9,10); List<Integer> result = nums.stream().filter(n -> n%2==0).map(n -> n*n).collect(Collectors.toList(),; This filters even numbers, squares them, and collects into a list, producing [4, 16, 36, 64, 100]. Streams don't modify original collections, support parallel processing using parallelStream() for performance, and make data manipulation code declarative and concise.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Networking and Modern Java Features
========================================================= */

const networkingModern = createTopic(
    "networking-and-modern-java",
    "Networking and Modern Java Features",

    [
        definition(
            "Java Networking",
            "Java provides the java.net package for developing network applications. It supports TCP, UDP, URL and socket programming for client-server communication."
        ),

        heading("Networking Classes"),

        table(
            ["Class", "Purpose"],
            [
                ["Socket", "Client-side TCP connection"],
                ["ServerSocket", "Server-side TCP connection"],
                ["DatagramSocket", "UDP socket"],
                ["DatagramPacket", "UDP data packet"],
                ["URL", "Represents a URL"],
                ["URLConnection", "Connection to URL resource"],
                ["InetAddress", "IP address representation"],
            ]
        ),

        heading("URL Example"),

        code(
            `import java.net.*;
import java.io.*;

public class Test {
    public static void main(String[] args) throws Exception {
        URL url = new URL("https://www.google.com");

        System.out.println("Protocol: " + url.getProtocol(),;
        System.out.println("Host: " + url.getHost(),;
        System.out.println("Port: " + url.getPort(),;
        System.out.println("Path: " + url.getPath(),;

        BufferedReader br = new BufferedReader(
            new InputStreamReader(url.openStream(),
        );

        String line;
        int count = 0;
        while ((line = br.readLine(), != null && count < 5) {
            System.out.println(line);
            count++;
        }
        br.close();
    }
}`,
            "java",
            "Reading content from URL"
        ),

        heading("TCP Server-Client Example"),

        code(
            `// Server.java
import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws Exception {
        ServerSocket ss = new ServerSocket(5000);
        System.out.println("Server started, waiting for client...");

        Socket socket = ss.accept();
        System.out.println("Client connected");

        DataInputStream in = new DataInputStream(socket.getInputStream(),;
        String msg = in.readUTF();
        System.out.println("Client: " + msg);

        DataOutputStream out = new DataOutputStream(socket.getOutputStream(),;
        out.writeUTF("Hello Client, message received");

        socket.close();
        ss.close();
    }
}`,
            "java",
            "TCP Server"
        ),

        code(
            `// Client.java
import java.io.*;
import java.net.*;

public class Client {
    public static void main(String[] args) throws Exception {
        Socket socket = new Socket("localhost", 5000);

        DataOutputStream out = new DataOutputStream(socket.getOutputStream(),;
        out.writeUTF("Hello Server!");

        DataInputStream in = new DataInputStream(socket.getInputStream(),;
        String response = in.readUTF();
        System.out.println("Server: " + response);

        socket.close();
    }
}`,
            "java",
            "TCP Client"
        ),

        heading("Modern Java Features Timeline"),

        table(
            ["Version", "Year", "Key Features"],
            [
                ["Java 8", "2014", "Lambda, Streams, Optional, Date/Time API"],
                ["Java 9", "2017", "Modules, JShell, Private interface methods"],
                ["Java 10", "2018", "var keyword (local variable type inference)"],
                ["Java 11", "2018", "LTS, HTTP Client, String methods"],
                ["Java 14", "2020", "Records (preview), switch expressions"],
                ["Java 17", "2021", "LTS, Sealed classes, Pattern matching"],
                ["Java 21", "2023", "LTS, Virtual threads, Record patterns"],
            ]
        ),

        heading("var Keyword (Java 10+)"),

        code(
            `// Old way
ArrayList<String> list = new ArrayList<String>();
HashMap<String, Integer> map = new HashMap<String, Integer>();

// With var
var list = new ArrayList<String>();
var map = new HashMap<String, Integer>();
var name = "Amit";
var age = 21;

// Note: var is for local variables only, not for fields or method params`,
            "java",
            "Type inference with var"
        ),

        heading("Records (Java 14+)"),

        code(
            `// Traditional class
class Student {
    private final int id;
    private final String name;

    public Student(int id, String name) {
        this.id = id;
        this.name = name;
    }
    // getters, equals, hashCode, toString...
}

// Record - one line!
record Student(int id, String name) {}

public class Test {
    public static void main(String[] args) {
        Student s = new Student(101, "Amit");
        System.out.println(s.id(),;       // 101
        System.out.println(s.name(),;     // Amit
        System.out.println(s);            // Student[id=101, name=Amit]
    }
}`,
            "java",
            "Record for immutable data"
        ),

        heading("Switch Expressions (Java 14+)"),

        code(
            `String day = "TUESDAY";

// New switch expression
String type = switch (day) {
    case "MONDAY", "TUESDAY", "WEDNESDAY",
         "THURSDAY", "FRIDAY" -> "Weekday";
    case "SATURDAY", "SUNDAY" -> "Weekend";
    default -> "Unknown";
};

System.out.println(type);  // Weekday`,
            "java",
            "Modern switch expression"
        ),

        heading("Optional (Java 8+)"),

        code(
            `import java.util.Optional;

public class Test {
    public static Optional<String> findUser(int id) {
        if (id == 1) return Optional.of("Amit");
        return Optional.empty();
    }

    public static void main(String[] args) {
        Optional<String> user = findUser(1);

        if (user.isPresent(), {
            System.out.println("Found: " + user.get(),;
        }

        // Better way
        user.ifPresent(u -> System.out.println("User: " + u),;

        // Default value
        String name = findUser(2).orElse("Guest");
        System.out.println(name);  // Guest
    }
}`,
            "java",
            "Optional to avoid NullPointerException"
        ),

        heading("Date/Time API (Java 8+)"),

        code(
            `import java.time.*;

public class Test {
    public static void main(String[] args) {
        LocalDate date = LocalDate.now();
        System.out.println("Today: " + date);

        LocalTime time = LocalTime.now();
        System.out.println("Time: " + time);

        LocalDateTime dateTime = LocalDateTime.now();
        System.out.println("DateTime: " + dateTime);

        // Add days
        LocalDate future = date.plusDays(30);
        System.out.println("30 days later: " + future);

        // Period between dates
        LocalDate birth = LocalDate.of(2003, 5, 15);
        Period age = Period.between(birth, date);
        System.out.println("Age: " + age.getYears() + " years");
    }
}`,
            "java",
            "Modern Date/Time API"
        ),

        note(
            "Modern Java (Java 8+) has transformed the language with functional programming, cleaner APIs and better features. Learn Java 8 essentials (lambdas, streams, Optional) and stay updated with LTS versions (11, 17, 21).",
            "tip",
            "Stay Modern"
        ),

        keyPoints([
            "Sockets enable TCP client-server communication.",
            "URL class simplifies web resource access.",
            "var enables type inference for local variables.",
            "Records reduce boilerplate for data classes.",
            "Optional prevents NullPointerException.",
        ]),
    ],

    {
        summary:
            "Explore Java networking with sockets, and modern features like var, records, switch expressions, Optional and Date/Time API.",
        minutes: 13,
        tags: ["networking", "sockets", "modern-java", "records", "optional"],

        mcqs: [
            mcq(
                "Which class is used for TCP server?",
                ["Socket", "ServerSocket", "DatagramSocket", "URL"],
                1,
                "ServerSocket creates a server-side TCP socket."
            ),
            mcq(
                "var keyword was introduced in:",
                ["Java 8", "Java 9", "Java 10", "Java 11"],
                2,
                "var was introduced in Java 10."
            ),
            mcq(
                "Records are used for:",
                ["Threading", "Immutable data classes", "Networking", "GUI"],
                1,
                "Records provide concise syntax for immutable data classes."
            ),
            mcq(
                "Optional helps avoid:",
                ["Compile errors", "NullPointerException", "Runtime errors", "Memory leaks"],
                1,
                "Optional helps handle null values safely."
            ),
        ],

        questions: [
            qa(
                "Explain socket programming in Java with example.",
                "Socket programming enables communication between two computers over a network using TCP. Java provides Socket class for client and ServerSocket class for server. The server creates a ServerSocket on a specific port and calls accept() which blocks until a client connects. The client creates a Socket with server IP and port. Once connected, both use input/output streams for data exchange. Example: Server code: ServerSocket ss = new ServerSocket(5000); Socket socket = ss.accept(); DataInputStream in = new DataInputStream(socket.getInputStream(),; String msg = in.readUTF();. Client code: Socket socket = new Socket('localhost', 5000); DataOutputStream out = new DataOutputStream(socket.getOutputStream(),; out.writeUTF('Hello');. This enables applications like chat, file transfer and multiplayer games. UDP is done using DatagramSocket for connectionless communication.",
                4
            ),
            qa(
                "Explain records and Optional class in modern Java.",
                "Records (Java 14+) provide a concise syntax for creating immutable data classes. Instead of writing constructor, getters, equals, hashCode and toString manually, you just declare: record Student(int id, String name) {}. The compiler generates all boilerplate automatically. Fields are final, and accessor methods are id() and name(). Records are ideal for DTOs, value objects and data transfer. Optional class (Java 8+) is a container that may or may not contain a non-null value. It helps avoid NullPointerException by making null-checks explicit. Example: Optional<String> user = findUser(id); user.ifPresent(u -> System.out.println(u),; String name = user.orElse('Guest');. Methods include of(), empty(), isPresent(), get(), orElse(), ifPresent() and map(). Both features make code cleaner, safer and more expressive.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    fileIO,
    jdbc,
    guiSwing,
    lambdaStreams,
    networkingModern,
];
