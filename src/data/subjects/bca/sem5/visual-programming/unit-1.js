/* =========================================================
   BCA • SEM 5 • Visual Programming
   UNIT 1 — .NET Architecture, C# Fundamentals, OOP & Windows Forms
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
   TOPIC 1 — .NET Framework Architecture & CLR
========================================================= */

const dotNetArchitecture = createTopic(
    "dotnet-framework-architecture-and-clr",
    ".NET Framework Architecture & CLR",

    [
        definition(
            ".NET Framework",
            "The .NET Framework is a comprehensive, multi-language software development platform created by Microsoft for building, deploying, and executing Windows desktop, web, and service-oriented applications."
        ),

        definition(
            "Common Language Runtime (CLR)",
            "The virtual machine component of the .NET Framework that manages the execution of .NET programs, providing core services such as JIT compilation, memory management (Garbage Collection), thread execution, and security enforcement."
        ),

        heading("Core Architecture of the .NET Framework"),

        table(
            ["Layer / Component", "Role & Description"],
            [
                ["Languages", "C#, VB.NET, F#, C++/CLI targeting the common runtime"],
                ["Common Language Specification (CLS)", "Set of fundamental rules ensuring complete language interoperability"],
                ["Common Type System (CTS)", "Defines all standard data types and object models supported across all .NET languages"],
                ["Framework Class Library (FCL)", "Massive collection of reusable classes, interfaces, and value types (System.*)"],
                ["Common Language Runtime (CLR)", "Execution engine handling compilation, GC, exception management, and security"],
            ]
        ),

        heading("Compilation and Execution Workflow in .NET"),

        steps([
            "Source code is written in any .NET language (e.g., C#, VB.NET).",
            "Language-specific compiler compiles source code into Microsoft Intermediate Language (MSIL / IL) and metadata.",
            "MSIL is packaged into an Assembly (.exe or .dll).",
            "Upon execution, the CLR's Just-In-Time (JIT) Compiler converts MSIL into native CPU machine code.",
            "The native code is executed directly by the operating system CPU with managed memory oversight.",
        ]),

        heading("Types of JIT Compilers"),

        table(
            ["JIT Compiler Type", "Operation Mechanism", "Usage Context"],
            [
                ["Pre-JIT (NGen)", "Compiles entire MSIL code into native code at deployment time prior to execution", "High-performance applications requiring fast initial launch"],
                ["Normal JIT", "Compiles MSIL methods into native code only when they are first called at runtime and caches them", "Standard default compilation mode in .NET"],
                ["Econo-JIT", "Compiles called methods on the fly without caching native code in memory", "Resource-constrained or memory-limited devices (obsolete in modern .NET)"],
            ]
        ),

        heading("Assemblies in .NET"),

        definition(
            "Assembly",
            "An assembly is the fundamental building block of .NET applications; a compiled, versioned, and self-describing deployment unit containing MSIL code, type metadata, an assembly manifest, and optional resources."
        ),

        list([
            "Process Assembly (.exe) — Executable file with an entry point (Main method).",
            "Library Assembly (.dll) — Reusable library without a direct entry point.",
            "Private Assembly — Deployed locally inside the application's root directory.",
            "Shared / Global Assembly — Installed into the Global Assembly Cache (GAC) with a strong name (cryptographic key pair) for system-wide access.",
        ]),

        heading("Garbage Collection (GC) in .NET"),

        text(
            "The .NET Garbage Collector manages heap memory allocation and reclamation automatically. The managed heap is divided into three generations based on object lifetime:"
        ),

        table(
            ["Generation", "Lifetime & Scope", "Collection Frequency"],
            [
                ["Generation 0", "Short-lived temporary objects (e.g., local variables)", "Collected very frequently and fast"],
                ["Generation 1", "Buffer generation acting as a transitional step between short and long-lived objects", "Collected periodically"],
                ["Generation 2", "Long-lived objects (e.g., static data, application-wide singletons, large objects in LOH)", "Collected rarely (Full GC)"],
            ]
        ),

        keyPoints([
            "The CLR is the core execution engine of the .NET Framework.",
            "MSIL (Intermediate Language) enables cross-language interoperability.",
            "JIT converts MSIL into platform-specific native CPU instructions.",
            "Assemblies consist of Manifest, Type Metadata, MSIL, and Resources.",
            "Garbage collection manages memory across Generations 0, 1, and 2.",
        ]),
    ],

    {
        summary:
            "Understand the .NET platform, CLR engine, CTS, CLS, MSIL compilation pipeline, JIT types, assemblies, and generational Garbage Collection.",
        minutes: 13,
        tags: ["dotnet", "clr", "msil", "jit", "assembly", "garbage-collection", "important"],

        mcqs: [
            mcq(
                "Which .NET component is responsible for translating MSIL code into native machine code at runtime?",
                ["Common Type System (CTS)", "Just-In-Time (JIT) Compiler", "Assembly Manifest", "Language Compiler (csc)"],
                1,
                "The JIT compiler converts intermediate language (MSIL) into native CPU instructions during execution."
            ),
            mcq(
                "What is the role of the Common Language Specification (CLS)?",
                ["To manage physical memory", "To define rules that guarantee seamless language interoperability", "To encrypt assemblies", "To compile C# directly to binary"],
                1,
                "CLS establishes baseline rules that all .NET languages follow so they can interoperate seamlessly."
            ),
            mcq(
                "Where are shared assemblies stored for system-wide access across all applications?",
                ["System32", "Global Assembly Cache (GAC)", "Bin folder", "App_Data"],
                1,
                "The Global Assembly Cache (GAC) stores shared assemblies signed with strong names."
            ),
            mcq(
                "How many generations are maintained by the .NET Garbage Collector?",
                ["Two (0 and 1)", "Three (0, 1, and 2)", "Four (0, 1, 2, and 3)", "One (Flat Heap)"],
                1,
                "The .NET GC partitions managed objects into three generations: Gen 0, Gen 1, and Gen 2."
            ),
        ],

        questions: [
            qa(
                "Explain the architecture of the .NET Framework with an architectural diagram description.",
                "The .NET Framework architecture comprises several interconnected layers: (1) .NET Languages: C#, VB.NET, F#, and C++/CLI. (2) Common Language Specification (CLS): Rules ensuring code written in one language can be consumed by another. (3) Common Type System (CTS): Unified data type definitions across languages. (4) Framework Class Library (FCL): Comprehensive standard libraries providing namespaces like System, System.IO, System.Data, System.Windows.Forms. (5) Common Language Runtime (CLR): The execution engine providing JIT compilation, Garbage Collection, memory management, exception handling, and code security verification.",
                4
            ),
            qa(
                "What is an Assembly in .NET? Differentiate between Private and Shared assemblies.",
                "An Assembly is a compiled, version-controlled, self-describing deployment unit (.exe or .dll) containing MSIL code, type metadata, resources, and an Assembly Manifest. A Private Assembly is deployed locally within an application's installation folder and is used solely by that single application. A Shared (Global) Assembly is installed in the Global Assembly Cache (GAC), can be used concurrently by multiple applications on the system, and must possess a 'Strong Name' comprising a simple name, version number, culture information, and a public-private cryptographic key signature.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — C# Fundamentals, Data Types & Control Structures
========================================================= */

const csharpFundamentals = createTopic(
    "csharp-fundamentals-data-types-control-structures",
    "C# Fundamentals, Data Types & Control Structures",

    [
        definition(
            "C# (C-Sharp)",
            "C# is a modern, object-oriented, type-safe, component-oriented, and strongly typed programming language developed by Microsoft as the flagship language for the .NET ecosystem."
        ),

        heading("Value Types vs Reference Types"),

        table(
            ["Feature", "Value Types", "Reference Types"],
            [
                ["Memory Location", "Stored on the Stack", "Memory allocated on the Managed Heap, pointer stored on the Stack"],
                ["Direct Value", "Contains the actual data directly", "Contains a memory address pointer referencing heap data"],
                ["Inheritance", "Inherit from System.ValueType", "Inherit directly from System.Object"],
                ["Default Value", "0, false, or \0", "null"],
                ["Examples", "int, float, double, bool, char, struct, enum", "class, string, array, interface, delegate"],
            ]
        ),

        heading("Boxing and Unboxing"),

        definition(
            "Boxing & Unboxing",
            "Boxing is the implicit conversion of a value type to a reference type (System.Object). Unboxing is the explicit conversion of an object back into its underlying value type."
        ),

        code(
            `// Boxing: Value type copied to Heap
int num = 100;
object obj = num; // Implicit Boxing

// Unboxing: Heap value extracted to Stack
int extractedNum = (int)obj; // Explicit Cast (Unboxing)

Console.WriteLine($"Boxed: {obj}, Unboxed: {extractedNum}");`,
            "csharp",
            "Boxing and Unboxing in C#"
        ),

        heading("Operators and Console I/O"),

        code(
            `using System;

namespace CSharpBasics
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.Write("Enter Student Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Marks (0-100): ");
            double marks = Convert.ToDouble(Console.ReadLine(),;

            // Null-coalescing (??) and Ternary operators
            string displayName = name ?? "Anonymous";
            string result = marks >= 40 ? "Pass" : "Fail";

            // Formatted string interpolation ($)
            Console.WriteLine($"Student: {displayName} | Marks: {marks:F2} | Result: {result}");
        }
    }
}`,
            "csharp",
            "Console Input / Output and Operators"
        ),

        heading("Decision and Looping Control Structures"),

        code(
            `// 1. Switch Statement with Pattern Matching
int dayNumber = 3;
string dayName = dayNumber switch
{
    1 => "Monday",
    2 => "Tuesday",
    3 => "Wednesday",
    4 => "Thursday",
    5 => "Friday",
    _ => "Weekend"
};

// 2. foreach Loop over Arrays
string[] techStack = { "C#", "ASP.NET", "SQL Server", "Azure" };
foreach (string tech in techStack)
{
    Console.WriteLine($"Skill: {tech}");
}

// 3. Jump Statements
for (int i = 1; i <= 10; i++)
{
    if (i == 5) continue; // Skip 5
    if (i == 8) break;    // Exit at 8
    Console.Write(i + " ");
}`,
            "csharp",
            "Switch and Loop Constructs"
        ),

        keyPoints([
            "C# is a strongly-typed, object-oriented language running on the .NET CLR.",
            "Value types live on the Stack; Reference types live on the Managed Heap.",
            "Boxing wraps a value type in an object on the heap; Unboxing unwraps it.",
            "The 'foreach' loop provides clean forward-only iteration over IEnumerable collections.",
            "C# provides robust null-handling operators (??, ??=, ?.).",
        ]),
    ],

    {
        summary:
            "Explore C# fundamentals, Stack vs Heap memory, Value vs Reference types, Boxing/Unboxing, console I/O, operators, and control structures.",
        minutes: 13,
        tags: ["csharp", "value-types", "reference-types", "boxing", "unboxing", "loops", "important"],

        mcqs: [
            mcq(
                "Which of the following is a Reference Type in C#?",
                ["int", "struct", "string", "enum"],
                2,
                "String is a reference type allocated on the managed heap, despite having immutable value-like semantics."
            ),
            mcq(
                "The process of converting a Value Type to an Object Type is called:",
                ["Unboxing", "Boxing", "Type Casting", "Serialization"],
                1,
                "Boxing allocates heap space and copies the value type into an object wrapper."
            ),
            mcq(
                "What does the null-coalescing operator '??' do in C#?",
                ["Checks if two objects are equal", "Returns the left-hand operand if not null; otherwise returns the right-hand operand", "Multiplies two numbers", "Performs logical bitwise AND"],
                1,
                "The ?? operator returns the left operand if it's not null; otherwise, it evaluates and returns the right operand."
            ),
            mcq(
                "Which loop in C# is specifically designed for iterating through elements of arrays and collections?",
                ["for loop", "while loop", "foreach loop", "do-while loop"],
                2,
                "The foreach loop iterates directly across any collection implementing the IEnumerable interface."
            ),
        ],

        questions: [
            qa(
                "Differentiate between Value Types and Reference Types in C# with memory allocation details.",
                "Value Types store their data directly in their own memory allocation on the Thread Stack. They inherit from System.ValueType and include primitive types (int, float, bool, char), structs, and enums. When copied, a completely independent duplicate value is created. Reference Types store a memory reference (address pointer) on the Stack while the actual object data resides on the Managed Heap. They inherit from System.Object and include classes, strings, arrays, interfaces, and delegates. When copied, only the memory reference pointer is duplicated, meaning both references point to the same object on the heap.",
                4
            ),
            qa(
                "What is Boxing and Unboxing in C#? Explain with code examples and performance implications.",
                "Boxing is the implicit conversion of a value type (stack) to a reference type object (heap). During boxing, CLR allocates an object container on the heap and copies the value into it (e.g., int x = 10; object o = x;). Unboxing is the explicit extraction of the value type from the heap object back onto the stack (e.g., int y = (int)o;). Performance implications: Boxing and unboxing require heap allocation, data copying, and type verification overhead. Frequent boxing/unboxing inside tight loops causes performance degradation and increases Garbage Collector load, which can be avoided using Generics (List<T>).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Object-Oriented Programming in C#
========================================================= */

const oopInCSharp = createTopic(
    "object-oriented-programming-in-csharp",
    "Object-Oriented Programming in C#",

    [
        definition(
            "OOP in C#",
            "C# is a pure object-oriented language that enforces the four fundamental pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism."
        ),

        heading("Classes, Constructors & Auto-Properties"),

        code(
            `public class Account
{
    // Auto-Implemented Properties with Encapsulation
    public int AccountNumber { get; init; }
    public string AccountHolder { get; set; }
    public decimal Balance { get; private set; }

    // Static Variable
    public static string BankName = "State Bank";

    // Default Constructor
    public Account() => Balance = 0;

    // Parameterized Constructor
    public Account(int accNo, string holder, decimal initialBalance)
    {
        AccountNumber = accNo;
        AccountHolder = holder;
        Balance = initialBalance;
    }

    // Instance Method
    public void Deposit(decimal amount)
    {
        if (amount > 0) Balance += amount;
    }
}`,
            "csharp",
            "Class with Properties and Constructors"
        ),

        heading("Inheritance & Method Overriding (virtual / override)"),

        text(
            "In C#, a method in a base class must be explicitly marked 'virtual' to allow derived classes to override it using the 'override' keyword."
        ),

        code(
            `// Base Class
public class Employee
{
    public int Id { get; set; }
    public string Name { get; set; }

    public virtual decimal CalculateBonus(decimal salary)
    {
        return salary * 0.10m; // Default 10% bonus
    }
}

// Derived Class
public class Manager : Employee
{
    public string Department { get; set; }

    public override decimal CalculateBonus(decimal salary)
    {
        return salary * 0.25m; // Manager gets 25% bonus
    }
}`,
            "csharp",
            "Virtual and Override Polymorphism"
        ),

        heading("Abstract Classes vs Interfaces"),

        table(
            ["Feature", "Abstract Class", "Interface"],
            [
                ["Keyword", "abstract class", "interface"],
                ["Multiple Inheritance", "Not supported (Single class inheritance only)", "Supported (A class can implement multiple interfaces)"],
                ["Implementation", "Can contain both abstract methods and complete implementations", "Historically contracts only (C# 8+ allows default implementations)"],
                ["Fields & State", "Can define instance fields, state, and constructors", "Cannot contain instance fields or constructors"],
                ["Speed", "Slightly faster method dispatch", "Requires interface table lookup"],
            ]
        ),

        code(
            `public interface IPrintable
{
    void PrintDetails();
}

public abstract class Shape
{
    public abstract double CalculateArea();
}

public class Circle : Shape, IPrintable
{
    public double Radius { get; set; }
    public Circle(double r) => Radius = r;

    public override double CalculateArea() => Math.PI * Radius * Radius;

    public void PrintDetails() =>
        Console.WriteLine($"Circle Radius: {Radius}, Area: {CalculateArea():F2}");
}`,
            "csharp",
            "Abstract Class and Interface Implementation"
        ),

        keyPoints([
            "C# properties provide secure getters/setters encapsulating private fields.",
            "Base class methods must be marked 'virtual' before derived classes can 'override' them.",
            "The 'base' keyword invokes base class constructors and methods.",
            "Abstract classes define partial implementations; interfaces define strict contracts.",
            "C# supports single class inheritance but multiple interface implementation.",
        ]),
    ],

    {
        summary:
            "Master C# OOP: Properties, Constructors, Inheritance, virtual/override polymorphism, Abstract Classes, and Interfaces.",
        minutes: 13,
        tags: ["oop", "properties", "inheritance", "polymorphism", "interfaces", "abstract-classes", "important"],

        mcqs: [
            mcq(
                "Which keyword is used in a derived class to override a base class virtual method?",
                ["overload", "override", "virtual", "new"],
                1,
                "The 'override' keyword is required to extend or modify the virtual method of a base class."
            ),
            mcq(
                "Can a C# class inherit directly from multiple base classes?",
                ["Yes, always", "No, C# supports single class inheritance only", "Yes, using structs", "Only if both classes are static"],
                1,
                "C# supports single class inheritance, but allows implementing multiple interfaces."
            ),
            mcq(
                "Which keyword is used to call a base class constructor from a derived class constructor?",
                ["this", "parent", "base", "super"],
                2,
                "The 'base' keyword explicitly calls constructors and methods from the base class."
            ),
            mcq(
                "An abstract method in C#:",
                ["Must contain a method body", "Has no implementation and must be implemented by derived classes", "Is always static", "Cannot be public"],
                1,
                "Abstract methods declare signatures without implementation and must be overridden in concrete subclasses."
            ),
        ],

        questions: [
            qa(
                "Explain the difference between Method Overloading and Method Overriding in C#.",
                "Method Overloading (Compile-Time / Early Binding Polymorphism) occurs when multiple methods in the same class share the exact same name but have different parameter signatures (different number, types, or order of arguments). The compiler decides which method to invoke at compile time. Method Overriding (Runtime / Late Binding Polymorphism) occurs when a derived class provides a specific implementation for a method already defined in its base class using the 'virtual' keyword in the base class and the 'override' keyword in the derived class. The method to execute is resolved dynamically at runtime based on the actual object type.",
                4
            ),
            qa(
                "Compare Abstract Classes and Interfaces in C#. When should you choose one over the other?",
                "An Abstract Class is an incomplete class that can contain both abstract members (without bodies) and fully implemented methods, fields, and constructors. A class can inherit from only one abstract class (single inheritance). Use abstract classes when creating a closely related family of objects that share common state and default code. An Interface is a pure contract that defines method/property signatures without holding instance state. A class can implement multiple interfaces (multiple inheritance). Use interfaces when defining common capabilities across unrelated classes (e.g., ISerializable, IComparable, IPrintable).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Exception Handling, Delegates & Events
========================================================= */

const delegatesAndEvents = createTopic(
    "exception-handling-delegates-and-events",
    "Exception Handling, Delegates & Events",

    [
        definition(
            "Delegate",
            "A delegate in C# is a type-safe function pointer that encapsulates a reference to a method with a specific parameter list and return type, forming the foundation for event-driven programming."
        ),

        definition(
            "Event",
            "An event is a messaging mechanism that enables a class (publisher) to notify other classes or objects (subscribers) when an action or state change occurs, implemented using delegates."
        ),

        heading("Structured Exception Handling (try-catch-finally)"),

        code(
            `try
{
    int a = 10;
    int b = 0;
    int result = a / b;
}
catch (DivideByZeroException ex)
{
    Console.WriteLine($"Math Error: {ex.Message}");
}
catch (Exception ex)
{
    Console.WriteLine($"General Error: {ex.Message}");
}
finally
{
    Console.WriteLine("Cleanup: Closed all open resources.");
}`,
            "csharp",
            "Exception Handling in C#"
        ),

        heading("Single Cast vs Multicast Delegates"),

        code(
            `// 1. Delegate declaration
public delegate void NotifyDelegate(string message);

public class NotificationService
{
    public static void SendSMS(string msg) => Console.WriteLine($"SMS: {msg}");
    public static void SendEmail(string msg) => Console.WriteLine($"Email: {msg}");
}

// Multicast Delegate invocation
NotifyDelegate notifier = NotificationService.SendSMS;
notifier += NotificationService.SendEmail; // Add another method reference

notifier("System maintenance scheduled at 10 PM."); // Invokes both SMS and Email`,
            "csharp",
            "Multicast Delegate Example"
        ),

        heading("Built-in Generic Delegates: Action, Func, and Predicate"),

        table(
            ["Generic Delegate", "Parameters", "Return Value", "Example Usage"],
            [
                ["Action<T>", "Takes 0 to 16 input parameters", "void (No return value)", "Action<string> print = msg => Console.WriteLine(msg);"],
                ["Func<T, TResult>", "Takes 0 to 16 input parameters", "Returns a value of type TResult", "Func<int, int, int> add = (a, b) => a + b;"],
                ["Predicate<T>", "Takes exactly 1 input parameter", "Returns a boolean (bool)", "Predicate<int> isEven = n => n % 2 == 0;"],
            ]
        ),

        heading("Event-Driven Architecture Example"),

        code(
            `// Publisher Class
public class OrderProcessor
{
    // Declare event using EventHandler
    public event EventHandler<string> OrderCompleted;

    public void ProcessOrder(int orderId)
    {
        Console.WriteLine($"Processing Order #{orderId}...");
        // Raise event
        OrderCompleted?.Invoke(this, $"Order #{orderId} processed successfully.");
    }
}

// Subscriber
class Program
{
    static void Main()
    {
        OrderProcessor processor = new OrderProcessor();
        // Subscribe to event using lambda
        processor.OrderCompleted += (sender, message) =>
        {
            Console.WriteLine($"[Alert Subscriber] {message}");
        };

        processor.ProcessOrder(1001);
    }
}`,
            "csharp",
            "Publisher-Subscriber Event Pattern"
        ),

        keyPoints([
            "Exception handling uses try, catch, finally, and custom ApplicationException classes.",
            "Delegates are type-safe function pointers that reference one or more methods.",
            "Multicast delegates use += and -= operators to chain multiple methods together.",
            "Built-in generic delegates include Action (void), Func (returns value), and Predicate (returns bool).",
            "Events implement the publisher-subscriber pattern to decouple components in UI programming.",
        ]),
    ],

    {
        summary:
            "Learn structured exception handling, custom exceptions, single/multicast delegates, generic delegates (Func, Action, Predicate), and events.",
        minutes: 13,
        tags: ["exceptions", "delegates", "events", "func", "action", "event-driven", "important"],

        mcqs: [
            mcq(
                "Which built-in delegate type represents a method that takes input parameters and returns void?",
                ["Func<T>", "Action<T>", "Predicate<T>", "EventHandler"],
                1,
                "Action<T> represents a delegate that takes parameters and has a void return type."
            ),
            mcq(
                "Which operators are used to add and remove methods from a Multicast Delegate in C#?",
                ["++ and --", "+= and -=", "*= and /=", "& and |"],
                1,
                "+= adds a method subscription to a delegate, and -= removes it."
            ),
            mcq(
                "What is the return type of a Predicate<T> delegate?",
                ["void", "int", "bool", "object"],
                2,
                "A Predicate<T> delegate always takes one parameter and returns a boolean (True/False)."
            ),
            mcq(
                "What happens in a try-catch-finally block if no exception occurs?",
                ["catch executes, finally is skipped", "try executes, catch is skipped, finally executes", "Only try executes", "finally executes before try"],
                1,
                "If no exception occurs, the try block runs to completion, catch blocks are skipped, and finally executes."
            ),
        ],

        questions: [
            qa(
                "What is a Delegate in C#? Explain Multicast Delegates with code syntax.",
                "A Delegate is a reference type that holds a type-safe reference to a method with a matching signature and return type. It allows methods to be passed as parameters and enables callback mechanisms. A Multicast Delegate holds references to multiple methods simultaneously. When invoked, it executes all registered methods sequentially in the order they were added. Methods are attached using the '+=' operator and detached using the '-=' operator.",
                4
            ),
            qa(
                "Explain the Publisher-Subscriber model in C# using Events and Delegates.",
                "The Publisher-Subscriber pattern decouples the class that triggers an event (Publisher) from the classes that handle it (Subscribers). The Publisher defines a delegate and an 'event' keyword wrapper (e.g., public event EventHandler MyEvent;). When a significant state change occurs, the publisher raises the event using MyEvent?.Invoke(). Subscriber classes subscribe to this event using the '+=' operator and provide callback event-handler methods. This prevents tight coupling and is the architectural foundation of Windows Forms GUI programming.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Windows Forms Architecture & Standard Controls
========================================================= */

const windowsFormsBasics = createTopic(
    "windows-forms-architecture-and-standard-controls",
    "Windows Forms Architecture & Standard Controls",

    [
        definition(
            "Windows Forms (WinForms)",
            "A graphical user interface (GUI) class library included in the .NET Framework (System.Windows.Forms) that provides access to native Windows user interface elements for event-driven desktop software development."
        ),

        heading("The Form Class & Lifecycle"),

        text(
            "The 'Form' class is the top-level container of any WinForms visual application. Key lifecycle events occur in a predictable chronological order:"
        ),

        table(
            ["Lifecycle Event", "When It Fires", "Standard Usage"],
            [
                ["Load", "Fires when the form is loaded into memory before becoming visible", "Initialising database connections, populating dropdowns, setting defaults"],
                ["Shown", "Fires the first time the form is displayed on screen", "Displaying welcome prompts, starting background timer threads"],
                ["Activated", "Fires whenever the form receives user keyboard/mouse focus", "Refreshing active screen data"],
                ["FormClosing", "Fires before the form closes (cancellable via e.Cancel = true)", "Confirming unsaved changes with the user"],
                ["FormClosed", "Fires after the form is completely closed and removed from screen", "Cleaning up and disposing unmanaged resources"],
            ]
        ),

        heading("Standard Windows Forms Controls"),

        table(
            ["Control", "Class Name", "Key Properties", "Key Events"],
            [
                ["Label", "System.Windows.Forms.Label", "Text, Font, ForeColor, AutoSize", "Click"],
                ["TextBox", "System.Windows.Forms.TextBox", "Text, MaxLength, PasswordChar, ReadOnly, MultiLine", "TextChanged, KeyPress, Leave"],
                ["Button", "System.Windows.Forms.Button", "Text, Enabled, DialogResult, Image", "Click"],
                ["CheckBox", "System.Windows.Forms.CheckBox", "Checked, CheckState, Text", "CheckedChanged"],
                ["RadioButton", "System.Windows.Forms.RadioButton", "Checked, Text, GroupName", "CheckedChanged"],
                ["ListBox", "System.Windows.Forms.ListBox", "Items, SelectedIndex, SelectedItem, SelectionMode", "SelectedIndexChanged"],
                ["ComboBox", "System.Windows.Forms.ComboBox", "Items, DropDownStyle, SelectedIndex, Text", "SelectedIndexChanged"],
            ]
        ),

        heading("MessageBox Class"),

        code(
            `// Displaying an Interactive Confirmation Dialog Box
DialogResult result = MessageBox.Show(
    "Are you sure you want to delete this student record?",
    "Confirm Deletion",
    MessageBoxButtons.YesNo,
    MessageBoxIcon.Warning
);

if (result == DialogResult.Yes)
{
    // Execute deletion logic
    MessageBox.Show("Record deleted successfully.", "Success", MessageBoxButtons.OK, MessageBoxIcon.Information);
}`,
            "csharp",
            "MessageBox Usage"
        ),

        heading("Sample Windows Forms Code-Behind"),

        code(
            `using System;
using System.Windows.Forms;

namespace StudentRegistrationApp
{
    public partial class MainForm : Form
    {
        public MainForm()
        {
            InitializeComponent();
        }

        private void btnSubmit_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtStudentName.Text),
            {
                MessageBox.Show("Student Name is required!", "Validation Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
                txtStudentName.Focus();
                return;
            }

            string course = cmbCourse.SelectedItem?.ToString() ?? "Not Selected";
            string gender = rdoMale.Checked ? "Male" : "Female";

            lstSummary.Items.Add($"{txtStudentName.Text} | {course} | {gender}");
            txtStudentName.Clear();
        }
    }
}`,
            "csharp",
            "Form Event Handling Code"
        ),

        keyPoints([
            "Windows Forms applications inherit from the System.Windows.Forms.Form class.",
            "The Form.Load event is used for initialization; FormClosing allows cancelling exit.",
            "Controls communicate user interactions using standard event handlers (e.g., Click, TextChanged).",
            "RadioButtons provide mutually exclusive options within their parent container.",
            "MessageBox.Show() displays modal dialogs returning a DialogResult enum.",
        ]),
    ],

    {
        summary:
            "Understand Windows Forms lifecycle events, standard UI controls (TextBox, Button, ComboBox, RadioButton), and MessageBox dialog interactions.",
        minutes: 13,
        tags: ["winforms", "windows-forms", "controls", "form-lifecycle", "messagebox", "important"],

        mcqs: [
            mcq(
                "Which event is ideal for populating ComboBox values from a database when a form opens?",
                ["Form.Click", "Form.Load", "Form.Disposed", "Form.Resize"],
                1,
                "Form.Load runs before the form becomes visible, making it ideal for data initialization."
            ),
            mcq(
                "How can you cancel a form from closing during the FormClosing event?",
                ["e.Cancel = true;", "e.Stop();", "this.Abort();", "Form.PreventClose();"],
                0,
                "Setting e.Cancel = true inside the FormClosing event handler cancels the close operation."
            ),
            mcq(
                "Which TextBox property masks user password characters (e.g., with '*')?",
                ["MaskText", "PasswordChar", "IsSecret", "HideCharacters"],
                1,
                "PasswordChar masks typed input with a specific character (e.g., '*')."
            ),
            mcq(
                "What data type is returned by the MessageBox.Show() method?",
                ["bool", "int", "DialogResult", "string"],
                2,
                "MessageBox.Show() returns a DialogResult enum indicating the button clicked (Yes, No, OK, Cancel)."
            ),
        ],

        questions: [
            qa(
                "Explain the lifecycle events of a Windows Form in chronological order.",
                "A Windows Form progresses through several lifecycle events: (1) Form Constructor: Allocates memory and invokes InitializeComponent(). (2) Load: Occurs before the form is displayed, used for setting defaults and data loading. (3) Activated: Occurs when the form gains focus. (4) Shown: Occurs the first time the form is rendered on screen. (5) Deactivate: Occurs when the form loses focus to another window. (6) FormClosing: Occurs as the form is closing; can be cancelled using e.Cancel = true. (7) FormClosed: Occurs after the form has closed. (8) Disposed: Releases managed and unmanaged memory resources.",
                4
            ),
            qa(
                "Explain the differences between CheckBox and RadioButton controls in Windows Forms.",
                "CheckBox controls allow the user to make multiple independent selections from a list of options (multiple options can be checked simultaneously). They support three states via the CheckState property (Checked, Unchecked, Indeterminate). RadioButton controls allow the user to select exactly one mutually exclusive option from a group. When one RadioButton in a container (such as a Form, GroupBox, or Panel) is selected, all other RadioButtons in the same container are automatically deselected.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    dotNetArchitecture,
    csharpFundamentals,
    oopInCSharp,
    delegatesAndEvents,
    windowsFormsBasics,
];
