/* =========================================================
   MSc-IT • SEM 2 • Object Oriented Programming Using Java
   UNIT 3 — More Features of the Java Platform
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
   TOPIC 1 — Exception Handling in Java
========================================================= */

const exceptionHandlingInJava = createTopic(
    "exception-handling-in-java",
    "Exception Handling in Java",

    [
        definition(
            "Exception",
            "An event that occurs during the execution of a program and disrupts its normal flow. In Java, exceptions are objects that represent error conditions. Exception handling allows a program to catch and respond to errors gracefully instead of crashing."
        ),

        text(
            "Java provides a robust exception handling mechanism through the try-catch-finally block, the throw and throws keywords, and a well-defined hierarchy of exception classes. Proper exception handling is essential for building reliable and maintainable applications."
        ),

        heading("Exception Hierarchy"),

        code(
            `Throwable (root of all errors and exceptions)
  ├── Error (serious problems, not meant to be caught)
  │   ├── OutOfMemoryError
  │   ├── StackOverflowError
  │   ├── VirtualMachineError
  │   └── LinkageError
  │
  └── Exception (conditions that can be caught and handled)
      ├── RuntimeException (unchecked — compiler does not force handling)
      │   ├── NullPointerException
      │   ├── ArrayIndexOutOfBoundsException
      │   ├── ArithmeticException
      │   ├── IllegalArgumentException
      │   ├── NumberFormatException
      │   └── ClassCastException
      │
      └── Checked Exceptions (compiler forces you to handle or declare)
          ├── IOException
          ├── FileNotFoundException
          ├── SQLException
          ├── ClassNotFoundException
          └── InterruptedException`,
            "text",
            "Java exception hierarchy"
        ),

        heading("Checked versus Unchecked Exceptions"),

        table(
            ["Aspect", "Checked Exception", "Unchecked Exception"],
            [
                ["Checked by compiler?", "Yes — must be caught or declared", "No — compiler does not enforce handling"],
                ["Inherits from", "Exception (but not RuntimeException)", "RuntimeException"],
                ["Cause", "External factors (file not found, network error)", "Programming errors (null reference, bad index)"],
                ["Examples", "IOException, SQLException, FileNotFoundException", "NullPointerException, ArithmeticException"],
                ["Handling", "Must use try-catch or throws", "Should be prevented by proper coding"],
            ]
        ),

        heading("try-catch-finally"),

        code(
            `public class ExceptionDemo {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);  // ArrayIndexOutOfBoundsException
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Index out of bounds!");
            System.out.println("Message: " + e.getMessage());
        } catch (Exception e) {
            System.out.println("Some other error: " + e.getMessage());
        } finally {
            System.out.println("This always executes.");
        }
    }
}`,
            "java",
            "try-catch-finally example"
        ),

        output(
            `Error: Index out of bounds!
Message: Index 5 out of bounds for length 3
This always executes.`
        ),

        heading("Multiple catch Blocks"),

        code(
            `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero");
} catch (Exception e) {
    System.out.println("General error: " + e.getMessage());
}

// Multi-catch (Java 7+)
try {
    // risky code
} catch (IOException | SQLException e) {
    System.out.println("IO or SQL error: " + e.getMessage());
}`,
            "java",
            "Multiple and multi-catch blocks"
        ),

        heading("The finally Block"),

        table(
            ["Scenario", "finally Executes?", "Description"],
            [
                ["No exception", "Yes", "After try block completes normally"],
                ["Exception caught", "Yes", "After catch block completes"],
                ["Exception not caught", "Yes", "Before the exception propagates up"],
                ["return in try/catch", "Yes", "Before the method actually returns"],
                ["System.exit() called", "No", "JVM terminates immediately"],
            ]
        ),

        note(
            "The finally block is ideal for cleanup operations like closing files, database connections and network sockets. Since Java 7, the try-with-resources statement provides a cleaner alternative for AutoCloseable resources.",
            "tip",
            "Best Practice"
        ),

        heading("throw and throws"),

        definition(
            "throw",
            "A keyword used to explicitly throw an exception object within a method."
        ),

        definition(
            "throws",
            "A keyword used in a method signature to declare that the method may throw one or more checked exceptions. It delegates the responsibility of handling to the caller."
        ),

        code(
            `// throw — explicitly throwing an exception
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative");
    }
    this.age = age;
}

// throws — declaring that a method may throw exceptions
public void readFile(String path) throws FileNotFoundException, IOException {
    FileReader fr = new FileReader(path);  // May throw FileNotFoundException
    BufferedReader br = new BufferedReader(fr);
    String line = br.readLine();           // May throw IOException
    br.close();
}`,
            "java",
            "throw and throws keywords"
        ),

        heading("try-with-resources (Java 7+)"),

        definition(
            "try-with-resources",
            "A try statement that declares one or more resources (objects that implement AutoCloseable). The resources are automatically closed at the end of the try block, even if an exception occurs."
        ),

        code(
            `// Without try-with-resources (old way)
FileReader fr = null;
try {
    fr = new FileReader("data.txt");
    // read file
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) fr.close();  // Manual cleanup
}

// With try-with-resources (Java 7+)
try (FileReader fr = new FileReader("data.txt");
     BufferedReader br = new BufferedReader(fr)) {
    String line = br.readLine();
    System.out.println(line);
} catch (IOException e) {
    e.printStackTrace();
}
// fr and br are automatically closed here!`,
            "java",
            "try-with-resources"
        ),

        heading("Custom Exceptions"),

        code(
            `// Define a custom exception
public class InsufficientFundsException extends Exception {
    private double deficit;

    public InsufficientFundsException(double deficit) {
        super("Insufficient funds. Short by: ₹" + deficit);
        this.deficit = deficit;
    }

    public double getDeficit() {
        return deficit;
    }
}

// Use the custom exception
public void withdraw(double amount) throws InsufficientFundsException {
    if (amount > balance) {
        throw new InsufficientFundsException(amount - balance);
    }
    balance -= amount;
}`,
            "java",
            "Custom exception class"
        ),

        keyPoints([
            "Java exceptions are organised in a hierarchy rooted at Throwable, with Error and Exception as main branches.",
            "Checked exceptions must be caught or declared; unchecked exceptions (RuntimeException) are not enforced.",
            "try-catch-finally handles exceptions; finally always executes for cleanup.",
            "throw explicitly throws an exception; throws declares exceptions a method may throw.",
            "try-with-resources automatically closes AutoCloseable resources.",
        ]),
    ],

    {
        summary:
            "Master Java exception handling: hierarchy, checked vs unchecked, try-catch-finally, throw/throws, try-with-resources and custom exceptions.",
        minutes: 13,
        tags: ["java", "exceptions", "try-catch", "throw", "throws", "important"],

        mcqs: [
            mcq(
                "The root class of all exceptions and errors in Java is:",
                ["Exception", "Error", "Throwable", "RuntimeException"],
                2,
                "Throwable is the root class of the entire exception hierarchy in Java."
            ),
            mcq(
                "Checked exceptions are:",
                ["Not enforced by the compiler", "Enforced by the compiler — must be caught or declared", "Subclasses of RuntimeException", "Never thrown by Java methods"],
                1,
                "Checked exceptions must be caught in a try-catch block or declared with throws."
            ),
            mcq(
                "The finally block executes:",
                ["Only when an exception occurs", "Only when no exception occurs", "Always (except System.exit())", "Only with catch blocks"],
                2,
                "The finally block always executes regardless of whether an exception occurred, except when System.exit() is called."
            ),
            mcq(
                "The throw keyword is used to:",
                ["Declare exceptions in a method signature", "Explicitly throw an exception object", "Catch an exception", "Close a resource"],
                1,
                "throw is used inside a method to explicitly throw an exception object."
            ),
            mcq(
                "try-with-resources automatically:",
                ["Catches all exceptions", "Closes AutoCloseable resources", "Declares throws", "Creates new threads"],
                1,
                "try-with-resources automatically closes resources that implement AutoCloseable."
            ),
            mcq(
                "NullPointerException is a:",
                ["Checked exception", "Unchecked exception (RuntimeException)", "Error", "Custom exception"],
                1,
                "NullPointerException extends RuntimeException and is an unchecked exception."
            ),
        ],

        questions: [
            qa(
                "Explain the Java exception hierarchy and the difference between checked and unchecked exceptions.",
                "The Java exception hierarchy is rooted at the Throwable class, which has two main subclasses: Error and Exception. Error represents serious problems like OutOfMemoryError and StackOverflowError that applications should not try to catch. Exception represents conditions that can be caught and handled, and is further divided into checked and unchecked exceptions. Checked exceptions inherit from Exception but not from RuntimeException. The compiler enforces that checked exceptions must be either caught in a try-catch block or declared in the method signature with throws. Examples include IOException and SQLException. They typically represent external conditions beyond the programmer's control. Unchecked exceptions inherit from RuntimeException. The compiler does not enforce handling them. Examples include NullPointerException and ArithmeticException. They typically represent programming errors that should be prevented by proper coding rather than caught.",
                5
            ),
            qa(
                "Explain the try-catch-finally block with an example.",
                "The try block contains code that might throw an exception. If an exception occurs, execution jumps to the matching catch block. Multiple catch blocks can handle different exception types, and they are checked in order from most specific to most general. The finally block contains cleanup code that always executes regardless of whether an exception occurred, whether it was caught, or whether a return statement was encountered. For example, in a file reading operation, the try block opens and reads the file, the catch block handles IOException by printing an error message, and the finally block closes the file to release system resources. The only situation where finally does not execute is when System.exit() is called or the JVM crashes.",
                5
            ),
            qa(
                "Differentiate between throw and throws with examples.",
                "The throw keyword is used inside a method body to explicitly throw an exception object. For example, throw new IllegalArgumentException('Age cannot be negative') creates and throws an exception when invalid input is detected. The throws keyword is used in a method signature to declare that the method may throw one or more checked exceptions, delegating the responsibility of handling them to the calling method. For example, public void readFile(String path) throws FileNotFoundException, IOException declares that this method might throw these exceptions. The caller must then either catch them or declare them further. In summary, throw actually throws an exception object at runtime, while throws declares potential exceptions at compile time.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Multithreading in Java
========================================================= */

const multithreadingInJava = createTopic(
    "multithreading-in-java",
    "Multithreading in Java",

    [
        definition(
            "Thread",
            "The smallest unit of execution within a process. A thread is a lightweight subprocess that shares the process's memory and resources but has its own execution stack and program counter."
        ),

        definition(
            "Multithreading",
            "The ability of a program to execute multiple threads concurrently, allowing multiple tasks to run simultaneously within a single process. Java has built-in support for multithreading."
        ),

        text(
            "Multithreading enables efficient utilisation of CPU resources, especially on multi-core processors. It is essential for responsive GUI applications, web servers handling multiple clients, game engines and any application that needs to perform multiple tasks simultaneously."
        ),

        heading("Process versus Thread"),

        table(
            ["Aspect", "Process", "Thread"],
            [
                ["Definition", "An independent program in execution", "A lightweight subprocess within a process"],
                ["Memory", "Separate memory space", "Shared memory space within the process"],
                ["Overhead", "Heavy (creation, context switching)", "Light (faster creation and switching)"],
                ["Communication", "IPC (pipes, sockets, shared memory)", "Direct access to shared variables"],
                ["Failure", "One process crash doesn't affect others", "One thread crash can kill the entire process"],
                ["Example", "Running two separate Java programs", "A web server handling multiple requests"],
            ]
        ),

        heading("Creating Threads in Java"),

        heading("Method 1: Extending Thread Class"),

        code(
            `public class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try { Thread.sleep(500); } catch (InterruptedException e) {}
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.setName("Thread-A");
        t2.setName("Thread-B");
        t1.start();  // Starts the thread (calls run() internally)
        t2.start();
        // t1.run();  → WRONG! This runs on the main thread, not a new thread
    }
}`,
            "java",
            "Creating threads by extending Thread"
        ),

        heading("Method 2: Implementing Runnable Interface"),

        code(
            `public class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MyRunnable task = new MyRunnable();
        Thread t1 = new Thread(task, "Thread-A");
        Thread t2 = new Thread(task, "Thread-B");
        t1.start();
        t2.start();
    }
}`,
            "java",
            "Creating threads by implementing Runnable"
        ),

        heading("Method 3: Lambda Expression (Java 8+)"),

        code(
            `public class Main {
    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                System.out.println("Lambda Thread: " + i);
            }
        });
        t1.start();
    }
}`,
            "java",
            "Creating threads with lambda"
        ),

        heading("Runnable versus Thread"),

        table(
            ["Aspect", "Extends Thread", "Implements Runnable"],
            [
                ["Inheritance", "Cannot extend any other class (Java single inheritance)", "Can extend another class"],
                ["Reusability", "Thread object is tied to the task", "Runnable task can be shared among multiple threads"],
                ["Design", "Tight coupling (is-a Thread)", "Loose coupling (has-a task)"],
                ["Preferred?", "Less preferred", "More preferred (best practice)"],
            ]
        ),

        heading("Thread Lifecycle"),

        code(
            `Thread States:

  [New] → start() → [Runnable] → Scheduler picks → [Running]
                         ↑                              │
                         │                              ↓
                         │                     [Blocked/Waiting]
                         │                     (sleep, wait, I/O)
                         │                              │
                         └──────────────────────────────┘
                                        ↓
                                  [Terminated]
                                  (run() completes)`,
            "text",
            "Thread lifecycle states"
        ),

        table(
            ["State", "Description"],
            [
                ["New", "Thread object created but start() not yet called"],
                ["Runnable", "Thread is ready to run and waiting for CPU time"],
                ["Running", "Thread is currently executing on the CPU"],
                ["Blocked/Waiting", "Thread is waiting for a resource, lock, sleep or I/O"],
                ["Terminated", "Thread has completed execution or been stopped"],
            ]
        ),

        heading("Thread Methods"),

        table(
            ["Method", "Purpose"],
            [
                ["start()", "Starts the thread and calls run() in a new thread"],
                ["run()", "Contains the code to be executed by the thread"],
                ["sleep(ms)", "Pauses the thread for the specified milliseconds"],
                ["join()", "Waits for the thread to complete before continuing"],
                ["yield()", "Suggests the scheduler to give other threads a chance"],
                ["setPriority(p)", "Sets thread priority (1-10, default 5)"],
                ["isAlive()", "Returns true if the thread is still running"],
                ["getName()", "Returns the thread's name"],
                ["interrupt()", "Interrupts a sleeping or waiting thread"],
            ]
        ),

        heading("Synchronisation"),

        definition(
            "Synchronisation",
            "A mechanism that ensures only one thread can access a shared resource at a time, preventing data inconsistency and race conditions."
        ),

        code(
            `public class Counter {
    private int count = 0;

    // Synchronized method — only one thread at a time
    public synchronized void increment() {
        count++;
    }

    public synchronized int getCount() {
        return count;
    }
}

// Synchronized block (more fine-grained control)
public void update() {
    synchronized (this) {
        // Only one thread can execute this block at a time
        count++;
    }
}`,
            "java",
            "Synchronisation example"
        ),

        note(
            "Implementing Runnable is preferred over extending Thread because Java supports single inheritance. By implementing Runnable, your class can still extend another class. Additionally, a Runnable task can be shared among multiple threads, which is not possible with the Thread class approach.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "A thread is the smallest unit of execution; multithreading runs multiple threads concurrently.",
            "Threads can be created by extending Thread, implementing Runnable or using lambda expressions.",
            "Implementing Runnable is preferred because it allows extending another class.",
            "Thread states: New, Runnable, Running, Blocked/Waiting, Terminated.",
            "Synchronisation prevents race conditions by allowing only one thread to access shared resources at a time.",
        ]),
    ],

    {
        summary:
            "Learn thread creation (Thread, Runnable, lambda), thread lifecycle, important methods and synchronisation.",
        minutes: 13,
        tags: ["java", "multithreading", "thread", "runnable", "synchronization", "important"],

        mcqs: [
            mcq(
                "The preferred way to create a thread in Java is:",
                ["Extending Thread class", "Implementing Runnable interface", "Using the start() method directly", "Using the main method"],
                1,
                "Implementing Runnable is preferred because it allows the class to extend another class."
            ),
            mcq(
                "Calling run() directly instead of start():",
                ["Creates a new thread", "Runs the code on the current thread", "Throws an exception", "Pauses the thread"],
                1,
                "Calling run() directly executes the code on the calling thread, not on a new thread."
            ),
            mcq(
                "The sleep() method:",
                ["Terminates the thread", "Pauses the thread for a specified time", "Stops the thread permanently", "Yields to other threads"],
                1,
                "Thread.sleep(ms) pauses the current thread for the specified number of milliseconds."
            ),
            mcq(
                "Synchronisation in Java is used to:",
                ["Speed up execution", "Prevent race conditions on shared resources", "Create new threads", "Kill threads"],
                1,
                "Synchronisation ensures only one thread accesses a shared resource at a time."
            ),
            mcq(
                "Thread priority in Java ranges from:",
                ["0 to 5", "1 to 10", "1 to 100", "0 to 1"],
                1,
                "Thread priorities range from 1 (MIN_PRIORITY) to 10 (MAX_PRIORITY), with 5 as default."
            ),
        ],

        questions: [
            qa(
                "Explain the two main ways to create threads in Java and compare them.",
                "The first way is to extend the Thread class and override its run() method. You create an instance and call start() to begin execution in a new thread. The second way is to implement the Runnable interface and provide the run() method. You then pass the Runnable object to a Thread constructor and call start(). Implementing Runnable is preferred for two reasons. First, Java supports single inheritance, so extending Thread prevents your class from extending any other class, while implementing Runnable leaves the extends option available. Second, a Runnable task object can be shared among multiple Thread objects, allowing the same task to be executed by multiple threads, which is not possible when extending Thread. Both approaches call start() to begin execution, and both execute the run() method in a new thread.",
                5
            ),
            qa(
                "Explain the thread lifecycle states in Java.",
                "A thread goes through several states during its lifetime. In the New state, the Thread object has been created but start() has not been called yet. After calling start(), the thread enters the Runnable state, meaning it is ready to execute and waiting for the CPU scheduler to allocate time. When the scheduler picks it, the thread enters the Running state and its run() method executes. The thread may enter the Blocked or Waiting state if it calls sleep(), wait(), is waiting for I/O or is waiting to acquire a synchronised lock. From Blocked/Waiting, the thread returns to Runnable when the condition is resolved (sleep time expires, lock acquired, I/O complete). Finally, the thread enters the Terminated state when the run() method completes normally or an unhandled exception terminates it.",
                5
            ),
            qa(
                "What is synchronisation and why is it needed in multithreading?",
                "Synchronisation is a mechanism that ensures only one thread can access a shared resource at a time. It is needed because when multiple threads access and modify shared data concurrently, race conditions can occur, leading to data inconsistency and unpredictable results. For example, if two threads simultaneously increment a shared counter, one increment may be lost because both threads read the same value before either writes back. Synchronisation prevents this by using the synchronized keyword on methods or blocks, which acquires a lock on an object. Only the thread holding the lock can execute the synchronised code; other threads must wait until the lock is released. This ensures atomic access to shared resources and maintains data consistency.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Java Collections Framework
========================================================= */

const javaCollectionsFramework = createTopic(
    "java-collections-framework",
    "Java Collections Framework",

    [
        definition(
            "Collections Framework",
            "A unified architecture for representing and manipulating groups of objects in Java. It provides interfaces, implementations and algorithms for common data structures like lists, sets, maps and queues."
        ),

        text(
            "Before the Collections Framework (introduced in Java 2), Java had ad-hoc data structures like Vector, Hashtable and arrays with no common interface. The Collections Framework provides a standard set of interfaces and implementations that are interoperable, reusable and efficient."
        ),

        heading("Collections Framework Hierarchy"),

        code(
            `Iterable
  └── Collection
        ├── List (ordered, allows duplicates)
        │   ├── ArrayList
        │   ├── LinkedList
        │   └── Vector (synchronized)
        │
        ├── Set (unordered, no duplicates)
        │   ├── HashSet
        │   ├── LinkedHashSet (insertion order)
        │   └── TreeSet (sorted order)
        │
        └── Queue (FIFO)
            ├── PriorityQueue (priority order)
            └── LinkedList (also implements Queue)

  Map (key-value pairs, NOT a Collection)
  ├── HashMap
  ├── LinkedHashMap (insertion order)
  ├── TreeMap (sorted by key)
  └── Hashtable (synchronized)`,
            "text",
            "Collections Framework hierarchy"
        ),

        heading("List Interface"),

        definition(
            "List",
            "An ordered collection that allows duplicate elements. Elements can be accessed by their integer index. The two main implementations are ArrayList and LinkedList."
        ),

        code(
            `import java.util.*;

// ArrayList — backed by a dynamic array
List<String> names = new ArrayList<>();
names.add("Rahul");
names.add("Priya");
names.add("Amit");
names.add("Priya");  // Duplicates allowed

System.out.println(names.get(1));      // Priya (index-based access)
System.out.println(names.size());      // 4
System.out.println(names.contains("Amit"));  // true
names.remove("Amit");                  // Removes first occurrence

// Iterating
for (String name : names) {
    System.out.println(name);
}

// LinkedList — backed by a doubly linked list
List<String> linked = new LinkedList<>();
linked.add("First");
linked.add("Second");
((LinkedList<String>) linked).addFirst("Zero");  // LinkedList-specific`,
            "java",
            "List examples"
        ),

        heading("ArrayList versus LinkedList"),

        table(
            ["Operation", "ArrayList", "LinkedList"],
            [
                ["Access by index", "O(1) — direct array access", "O(n) — must traverse"],
                ["Insert at end", "O(1) amortised", "O(1)"],
                ["Insert at beginning", "O(n) — shift elements", "O(1)"],
                ["Delete at beginning", "O(n) — shift elements", "O(1)"],
                ["Memory", "Less overhead (array)", "More overhead (node pointers)"],
                ["Cache friendly", "Yes (contiguous memory)", "No (scattered nodes)"],
                ["Best for", "Frequent random access", "Frequent insert/delete at ends"],
            ]
        ),

        heading("Set Interface"),

        definition(
            "Set",
            "A collection that does not allow duplicate elements. It models the mathematical concept of a set."
        ),

        code(
            `// HashSet — unordered, no duplicates, O(1) operations
Set<String> fruits = new HashSet<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple");  // Duplicate — ignored
System.out.println(fruits.size());  // 2

// TreeSet — sorted order (natural or custom)
Set<Integer> numbers = new TreeSet<>();
numbers.add(5);
numbers.add(1);
numbers.add(3);
System.out.println(numbers);  // [1, 3, 5] (sorted)

// LinkedHashSet — maintains insertion order
Set<String> ordered = new LinkedHashSet<>();
ordered.add("C");
ordered.add("A");
ordered.add("B");
System.out.println(ordered);  // [C, A, B] (insertion order)`,
            "java",
            "Set examples"
        ),

        heading("Map Interface"),

        definition(
            "Map",
            "A collection of key-value pairs where each key is unique. Maps do not extend the Collection interface but are part of the Collections Framework."
        ),

        code(
            `// HashMap — unordered key-value pairs
Map<String, Integer> marks = new HashMap<>();
marks.put("Rahul", 85);
marks.put("Priya", 92);
marks.put("Amit", 78);

System.out.println(marks.get("Priya"));     // 92
System.out.println(marks.containsKey("Rahul"));  // true
System.out.println(marks.size());           // 3

// Iterating over a Map
for (Map.Entry<String, Integer> entry : marks.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// TreeMap — sorted by key
Map<String, Integer> sorted = new TreeMap<>(marks);
System.out.println(sorted);  // {Amit=78, Priya=92, Rahul=85}`,
            "java",
            "Map examples"
        ),

        heading("Collection Comparison"),

        table(
            ["Feature", "ArrayList", "LinkedList", "HashSet", "TreeSet", "HashMap", "TreeMap"],
            [
                ["Ordered?", "Yes (index)", "Yes (index)", "No", "Yes (sorted)", "No", "Yes (sorted by key)"],
                ["Duplicates?", "Yes", "Yes", "No", "No", "Values yes, Keys no", "Values yes, Keys no"],
                ["Null allowed?", "Yes", "Yes", "One null", "No", "One null key", "No null key"],
                ["Access", "O(1) by index", "O(n)", "O(1) by hash", "O(log n)", "O(1) by key", "O(log n)"],
                ["Thread-safe?", "No", "No", "No", "No", "No", "No"],
            ]
        ),

        heading("Iterating Collections"),

        code(
            `List<String> list = Arrays.asList("A", "B", "C");

// 1. Enhanced for loop
for (String s : list) { System.out.println(s); }

// 2. Iterator
Iterator<String> it = list.iterator();
while (it.hasNext()) { System.out.println(it.next()); }

// 3. forEach with lambda (Java 8+)
list.forEach(s -> System.out.println(s));

// 4. Stream API (Java 8+)
list.stream()
    .filter(s -> s.equals("B"))
    .forEach(System.out::println);`,
            "java",
            "Ways to iterate collections"
        ),

        note(
            "The Collections Framework provides utility methods in the Collections class: Collections.sort(), Collections.reverse(), Collections.shuffle(), Collections.max(), Collections.min(), Collections.unmodifiableList() and more.",
            "tip",
            "Utility Methods"
        ),

        keyPoints([
            "The Collections Framework provides standard interfaces: List, Set, Queue and Map.",
            "List (ArrayList, LinkedList) is ordered and allows duplicates; Set (HashSet, TreeSet) has no duplicates.",
            "Map (HashMap, TreeMap) stores key-value pairs with unique keys.",
            "ArrayList offers O(1) random access; LinkedList offers O(1) insertion/deletion at ends.",
            "TreeSet and TreeMap maintain sorted order; HashSet and HashMap offer O(1) average operations.",
        ]),
    ],

    {
        summary:
            "Master the Java Collections Framework: List, Set, Map interfaces and their implementations with comparisons.",
        minutes: 13,
        tags: ["java", "collections", "arraylist", "hashmap", "treeset", "important"],

        mcqs: [
            mcq(
                "Which collection allows duplicate elements and maintains insertion order?",
                ["HashSet", "TreeSet", "ArrayList", "HashMap"],
                2,
                "ArrayList is a List implementation that allows duplicates and maintains insertion order."
            ),
            mcq(
                "HashMap stores data as:",
                ["Indexed elements", "Key-value pairs", "Sorted elements", "Linked nodes only"],
                1,
                "HashMap stores data as key-value pairs where each key is unique."
            ),
            mcq(
                "Which Set implementation maintains sorted order?",
                ["HashSet", "LinkedHashSet", "TreeSet", "ArrayList"],
                2,
                "TreeSet maintains elements in sorted (natural or custom) order."
            ),
            mcq(
                "Accessing an element by index in ArrayList takes:",
                ["O(n)", "O(log n)", "O(1)", "O(n²)"],
                2,
                "ArrayList is backed by an array, so index-based access is O(1)."
            ),
            mcq(
                "The Map interface:",
                ["Extends Collection", "Does NOT extend Collection", "Extends List", "Extends Set"],
                1,
                "Map does not extend the Collection interface but is part of the Collections Framework."
            ),
            mcq(
                "Which collection does NOT allow null elements?",
                ["ArrayList", "HashSet", "TreeSet", "LinkedList"],
                2,
                "TreeSet does not allow null elements because it uses natural ordering which cannot compare null."
            ),
        ],

        questions: [
            qa(
                "Compare ArrayList and LinkedList.",
                "ArrayList is backed by a dynamic array and provides O(1) random access by index because elements are stored in contiguous memory. However, insertion and deletion at the beginning or middle require shifting elements, taking O(n) time. It is cache-friendly due to contiguous memory layout and has less memory overhead. LinkedList is backed by a doubly linked list and provides O(1) insertion and deletion at both ends because it only requires updating pointers. However, accessing an element by index requires traversing from the head or tail, taking O(n) time. It has more memory overhead due to storing prev and next pointers for each node and is not cache-friendly due to scattered memory allocation. Choose ArrayList for frequent random access and LinkedList for frequent insertions and deletions at the ends.",
                5
            ),
            qa(
                "Explain the Set interface and its three main implementations.",
                "The Set interface represents a collection that does not allow duplicate elements, modelling the mathematical concept of a set. HashSet is the most commonly used implementation, backed by a hash table, providing O(1) average time for add, remove and contains operations. It does not maintain any ordering of elements and allows one null element. LinkedHashSet extends HashSet and maintains insertion order by using a linked list running through the hash table, with slightly more overhead than HashSet. TreeSet implements the SortedSet interface and stores elements in sorted (natural or custom comparator) order using a Red-Black tree. It provides O(log n) time for operations and does not allow null elements because it needs to compare elements for ordering.",
                5
            ),
            qa(
                "Explain the Map interface with HashMap and TreeMap.",
                "The Map interface stores data as key-value pairs where each key is unique. It does not extend the Collection interface but is part of the Collections Framework. HashMap is the most common implementation, backed by a hash table, providing O(1) average time for put, get and remove operations. It does not maintain any ordering and allows one null key and multiple null values. TreeMap stores entries in sorted order by key using a Red-Black tree, providing O(log n) time for operations. It does not allow null keys because it needs to compare keys for ordering. Common Map operations include put(key, value) to add or update, get(key) to retrieve, containsKey(key) to check existence, remove(key) to delete and entrySet() to iterate over all key-value pairs.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — File I/O and Generics in Java
========================================================= */

const fileIOAndGenerics = createTopic(
    "file-io-and-generics-in-java",
    "File I/O and Generics in Java",

    [
        heading("File I/O in Java"),

        text(
            "Java provides comprehensive I/O (Input/Output) classes for reading and writing data to files, the console and network connections. The java.io package provides stream-based I/O, while the java.nio package (New I/O, introduced in Java 7) provides more efficient buffer-based I/O."
        ),

        heading("Stream Hierarchy"),

        table(
            ["Type", "Reads/Writes", "Base Classes", "Use For"],
            [
                ["Byte Streams", "Raw bytes (8-bit)", "InputStream, OutputStream", "Binary files (images, audio)"],
                ["Character Streams", "Characters (16-bit Unicode)", "Reader, Writer", "Text files"],
            ]
        ),

        heading("Important I/O Classes"),

        table(
            ["Class", "Type", "Purpose"],
            [
                ["FileInputStream", "Byte input", "Reads raw bytes from a file"],
                ["FileOutputStream", "Byte output", "Writes raw bytes to a file"],
                ["FileReader", "Character input", "Reads characters from a text file"],
                ["FileWriter", "Character output", "Writes characters to a text file"],
                ["BufferedReader", "Character input", "Reads text efficiently with buffering; has readLine()"],
                ["BufferedWriter", "Character output", "Writes text efficiently with buffering"],
                ["Scanner", "Character input", "Parses primitive types and strings from input"],
                ["PrintWriter", "Character output", "Prints formatted text (like System.out)"],
            ]
        ),

        heading("Reading a Text File"),

        code(
            `import java.io.*;

// Method 1: BufferedReader (efficient for large files)
try (BufferedReader br = new BufferedReader(new FileReader("data.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
} catch (IOException e) {
    e.printStackTrace();
}

// Method 2: Scanner (convenient for parsing)
try (Scanner sc = new Scanner(new File("data.txt"))) {
    while (sc.hasNextLine()) {
        System.out.println(sc.nextLine());
    }
} catch (FileNotFoundException e) {
    e.printStackTrace();
}

// Method 3: Files.readAllLines (Java 7+ NIO)
List<String> lines = Files.readAllLines(Paths.get("data.txt"));
lines.forEach(System.out::println);`,
            "java",
            "Reading text files"
        ),

        heading("Writing to a Text File"),

        code(
            `import java.io.*;

// Method 1: BufferedWriter
try (BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"))) {
    bw.write("Hello, World!");
    bw.newLine();
    bw.write("Second line");
} catch (IOException e) {
    e.printStackTrace();
}

// Method 2: PrintWriter
try (PrintWriter pw = new PrintWriter(new FileWriter("output.txt"))) {
    pw.println("Hello, World!");
    pw.printf("Name: %s, Marks: %d%n", "Rahul", 85);
} catch (IOException e) {
    e.printStackTrace();
}

// Method 3: Files.write (Java 7+ NIO)
Files.write(Paths.get("output.txt"),
    Arrays.asList("Line 1", "Line 2", "Line 3"));`,
            "java",
            "Writing text files"
        ),

        heading("File Class"),

        code(
            `import java.io.File;

File f = new File("data.txt");

// File information
System.out.println("Exists: " + f.exists());
System.out.println("Name: " + f.getName());
System.out.println("Path: " + f.getAbsolutePath());
System.out.println("Size: " + f.length() + " bytes");
System.out.println("Is File: " + f.isFile());
System.out.println("Is Directory: " + f.isDirectory());

// File operations
f.createNewFile();     // Create file
f.delete();            // Delete file
f.mkdir();             // Create directory

// List directory contents
File dir = new File(".");
String[] files = dir.list();
for (String name : files) {
    System.out.println(name);
}`,
            "java",
            "File class operations"
        ),

        heading("Generics in Java"),

        definition(
            "Generics",
            "A feature that allows classes, interfaces and methods to operate on parameterised types. Generics provide compile-time type safety and eliminate the need for explicit type casting."
        ),

        text(
            "Before generics (pre-Java 5), collections stored objects as type Object, requiring explicit casting and risking ClassCastException at runtime. Generics allow you to specify the type of elements a collection can hold, catching type errors at compile time."
        ),

        heading("Generics with Collections"),

        code(
            `// Without generics (old way — unsafe)
List list = new ArrayList();
list.add("Hello");
list.add(42);  // No compile error!
String s = (String) list.get(1);  // ClassCastException at runtime!

// With generics (type-safe)
List<String> names = new ArrayList<>();
names.add("Rahul");
names.add("Priya");
// names.add(42);  → COMPILE ERROR! Type safety enforced

String name = names.get(0);  // No cast needed`,
            "java",
            "Generics with collections"
        ),

        heading("Generic Class"),

        code(
            `// Generic class with type parameter T
public class Box<T> {
    private T item;

    public void set(T item) {
        this.item = item;
    }

    public T get() {
        return item;
    }
}

// Usage with different types
Box<String> stringBox = new Box<>();
stringBox.set("Hello");
String s = stringBox.get();  // No cast needed

Box<Integer> intBox = new Box<>();
intBox.set(42);
int n = intBox.get();  // No cast needed`,
            "java",
            "Generic class"
        ),

        heading("Generic Method"),

        code(
            `// Generic method
public static <T> void printArray(T[] array) {
    for (T element : array) {
        System.out.print(element + " ");
    }
    System.out.println();
}

// Usage
printArray(new Integer[]{1, 2, 3});     // 1 2 3
printArray(new String[]{"A", "B", "C"}); // A B C`,
            "java",
            "Generic method"
        ),

        heading("Bounded Type Parameters"),

        code(
            `// Upper bound: T must be Number or a subclass
public static <T extends Number> double sum(T a, T b) {
    return a.doubleValue() + b.doubleValue();
}

sum(5, 3.14);     // OK: Integer and Double extend Number
// sum("A", "B"); → COMPILE ERROR: String does not extend Number

// Multiple bounds
public static <T extends Comparable<T> & Serializable> void sort(T[] arr) {
    // T must implement both Comparable and Serializable
}`,
            "java",
            "Bounded type parameters"
        ),

        heading("Wildcards"),

        table(
            ["Wildcard", "Meaning", "Example"],
            [
                ["?", "Unknown type", "List<?> list"],
                ["? extends T", "Upper bound — T or any subclass", "List<? extends Number>"],
                ["? super T", "Lower bound — T or any superclass", "List<? super Integer>"],
            ]
        ),

        note(
            "The diamond operator <> was introduced in Java 7 to avoid repeating type parameters: List<String> list = new ArrayList<>() instead of new ArrayList<String>(). Java 10 added the var keyword for local variable type inference: var list = new ArrayList<String>().",
            "tip",
            "Modern Java"
        ),

        keyPoints([
            "Java I/O uses byte streams (InputStream/OutputStream) for binary data and character streams (Reader/Writer) for text.",
            "BufferedReader/BufferedWriter provide efficient buffered I/O; try-with-resources ensures cleanup.",
            "Generics provide compile-time type safety for collections and custom classes.",
            "A generic class like Box<T> can work with any type specified at creation time.",
            "Bounded type parameters restrict the types that can be used: <T extends Number>.",
        ]),
    ],

    {
        summary:
            "Learn Java File I/O (streams, readers/writers, File class) and Generics (type safety, generic classes, methods and bounds).",
        minutes: 13,
        tags: ["java", "file-io", "generics", "collections", "streams", "important"],

        mcqs: [
            mcq(
                "BufferedReader is used for:",
                ["Writing binary data", "Reading text efficiently with buffering", "Network communication", "Database access"],
                1,
                "BufferedReader reads text from a character stream efficiently using an internal buffer and provides readLine()."
            ),
            mcq(
                "Generics in Java provide:",
                ["Runtime type checking", "Compile-time type safety", "Faster execution", "Memory management"],
                1,
                "Generics enforce type safety at compile time, preventing ClassCastException at runtime."
            ),
            mcq(
                "The diamond operator <> was introduced in Java:",
                ["5", "6", "7", "8"],
                2,
                "The diamond operator <> was introduced in Java 7 to simplify generic type declarations."
            ),
            mcq(
                "Character streams in Java are based on:",
                ["InputStream and OutputStream", "Reader and Writer", "File and Path", "Socket and ServerSocket"],
                1,
                "Character streams use Reader (input) and Writer (output) as their base classes."
            ),
            mcq(
                "A bounded type parameter <T extends Number> means T can be:",
                ["Any type", "Only Number", "Number or any subclass of Number", "Only Integer"],
                2,
                "T extends Number means T can be Number itself or any subclass like Integer, Double, Float, etc."
            ),
        ],

        questions: [
            qa(
                "Explain the Java I/O stream hierarchy and the difference between byte and character streams.",
                "Java I/O is organised into two parallel hierarchies. Byte streams, rooted at InputStream and OutputStream, read and write raw 8-bit bytes and are used for binary data like images, audio and video files. Key classes include FileInputStream and FileOutputStream. Character streams, rooted at Reader and Writer, read and write 16-bit Unicode characters and are used for text files. Key classes include FileReader and FileWriter. Character streams internally handle the conversion between bytes and characters using the platform's default character encoding. For efficiency, both types can be wrapped in buffered versions: BufferedInputStream/BufferedOutputStream for bytes and BufferedReader/BufferedWriter for characters. BufferedReader provides the convenient readLine() method for reading text line by line.",
                5
            ),
            qa(
                "What are generics in Java? Explain with examples.",
                "Generics allow classes, interfaces and methods to operate on parameterised types, providing compile-time type safety and eliminating the need for explicit type casting. Before generics, collections stored elements as Object type, requiring explicit casting and risking ClassCastException at runtime. With generics, you specify the element type: List<String> names = new ArrayList<>() ensures only strings can be added, and names.get(0) returns a String without casting. A generic class like Box<T> can work with any type: Box<String> stores strings, Box<Integer> stores integers, all using the same class definition. Generic methods like <T> void printArray(T[] arr) work with arrays of any type. Bounded type parameters like <T extends Number> restrict T to Number or its subclasses, enabling type-safe operations on numeric types.",
                5
            ),
            qa(
                "How do you read and write text files in Java? Explain with code examples.",
                "To read a text file, the most efficient approach is to wrap a FileReader in a BufferedReader and use readLine() in a loop until it returns null. Using try-with-resources ensures the file is automatically closed: try(BufferedReader br = new BufferedReader(new FileReader('data.txt'))) { String line; while((line = br.readLine()) != null) { System.out.println(line); } }. Alternatively, Scanner can parse formatted input, and Java 7's Files.readAllLines() reads all lines into a List. To write a text file, wrap a FileWriter in a BufferedWriter or use PrintWriter for formatted output: try(PrintWriter pw = new PrintWriter(new FileWriter('output.txt'))) { pw.println('Hello'); pw.printf('Marks: %d', 85); }. The try-with-resources statement automatically closes all resources that implement AutoCloseable.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Lambda Expressions and Functional Interfaces
========================================================= */

const lambdaAndFunctionalInterfaces = createTopic(
    "lambda-expressions-and-functional-interfaces",
    "Lambda Expressions and Functional Interfaces",

    [
        definition(
            "Lambda Expression",
            "A concise way to represent an anonymous function (a method without a name) that can be passed as an argument or stored in a variable. Introduced in Java 8, lambdas enable functional programming style in Java."
        ),

        text(
            "Lambda expressions dramatically reduce boilerplate code, especially when working with collections, event handlers and callbacks. They are the foundation of the Stream API and many modern Java features."
        ),

        heading("Lambda Syntax"),

        code(
            `// General syntax: (parameters) -> { body }

// No parameters
() -> System.out.println("Hello")

// One parameter (parentheses optional)
x -> x * x
(x) -> x * x

// Multiple parameters
(x, y) -> x + y

// Multiple statements (braces required)
(x, y) -> {
    int sum = x + y;
    System.out.println("Sum: " + sum);
    return sum;
}

// With explicit types (usually inferred)
(int x, int y) -> x + y`,
            "java",
            "Lambda expression syntax"
        ),

        heading("Lambda Examples"),

        code(
            `// Before lambda: Anonymous inner class
Runnable r1 = new Runnable() {
    @Override
    public void run() {
        System.out.println("Running");
    }
};

// After lambda: Much cleaner
Runnable r2 = () -> System.out.println("Running");

// Sorting with lambda
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");

// Before: Anonymous Comparator
Collections.sort(names, new Comparator<String>() {
    public int compare(String a, String b) {
        return a.compareTo(b);
    }
});

// After: Lambda
Collections.sort(names, (a, b) -> a.compareTo(b));

// Even shorter: Method reference
Collections.sort(names, String::compareTo);`,
            "java",
            "Lambda examples"
        ),

        heading("Functional Interface"),

        definition(
            "Functional Interface",
            "An interface that has exactly one abstract method. It can have any number of default and static methods. Lambda expressions can only be used where a functional interface is expected. The @FunctionalInterface annotation is optional but recommended."
        ),

        code(
            `@FunctionalInterface
interface Greeting {
    String sayHello(String name);  // Single abstract method
}

// Lambda implementation
Greeting g = (name) -> "Hello, " + name + "!";
System.out.println(g.sayHello("Rahul"));  // Hello, Rahul!`,
            "java",
            "Custom functional interface"
        ),

        heading("Built-in Functional Interfaces (java.util.function)"),

        table(
            ["Interface", "Method", "Input → Output", "Example"],
            [
                ["Predicate<T>", "boolean test(T t)", "T → boolean", "x -> x > 10"],
                ["Function<T,R>", "R apply(T t)", "T → R", "s -> s.length()"],
                ["Consumer<T>", "void accept(T t)", "T → void", "s -> System.out.println(s)"],
                ["Supplier<T>", "T get()", "() → T", "() -> Math.random()"],
                ["BiFunction<T,U,R>", "R apply(T t, U u)", "(T,U) → R", "(a,b) -> a + b"],
                ["UnaryOperator<T>", "T apply(T t)", "T → T", "x -> x * 2"],
                ["BinaryOperator<T>", "T apply(T a, T b)", "(T,T) → T", "(a,b) -> a + b"],
            ]
        ),

        code(
            `import java.util.function.*;

// Predicate — tests a condition
Predicate<Integer> isEven = x -> x % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function — transforms input to output
Function<String, Integer> strLen = s -> s.length();
System.out.println(strLen.apply("Hello"));  // 5

// Consumer — performs an action, returns nothing
Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hello, World!");

// Supplier — provides a value, takes no input
Supplier<Double> random = () -> Math.random();
System.out.println(random.get());`,
            "java",
            "Built-in functional interfaces"
        ),

        heading("Method References"),

        definition(
            "Method Reference",
            "A shorthand for a lambda expression that calls an existing method. Syntax: ClassName::methodName."
        ),

        table(
            ["Type", "Syntax", "Lambda Equivalent"],
            [
                ["Static method", "ClassName::staticMethod", "(args) -> ClassName.staticMethod(args)"],
                ["Instance method", "object::instanceMethod", "(args) -> object.instanceMethod(args)"],
                ["Constructor", "ClassName::new", "(args) -> new ClassName(args)"],
                ["Arbitrary object", "ClassName::instanceMethod", "(obj, args) -> obj.instanceMethod(args)"],
            ]
        ),

        code(
            `// Static method reference
Function<String, Integer> parser = Integer::parseInt;
// Equivalent to: s -> Integer.parseInt(s)

// Instance method reference
String str = "hello";
Supplier<Integer> len = str::length;
// Equivalent to: () -> str.length()

// Constructor reference
Supplier<ArrayList<String>> listFactory = ArrayList::new;
// Equivalent to: () -> new ArrayList<>()

// Using with collections
List<String> names = Arrays.asList("Rahul", "Priya", "Amit");
names.forEach(System.out::println);
// Equivalent to: names.forEach(name -> System.out.println(name))`,
            "java",
            "Method reference examples"
        ),

        heading("Stream API (Brief Introduction)",

            code(
                `List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// Filter even numbers, square them, collect to list
List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)       // Keep even: 2,4,6,8,10
    .map(n -> n * n)               // Square: 4,16,36,64,100
    .collect(Collectors.toList());

System.out.println(result);  // [4, 16, 36, 64, 100]

// Sum of all numbers
int sum = numbers.stream()
    .reduce(0, Integer::sum);
System.out.println(sum);  // 55`,
                "java",
                "Stream API example"
            ),

            note(
                "Lambda expressions and the Stream API (both Java 8) fundamentally changed Java programming. They enable a declarative, functional style that is more concise and expressive than traditional imperative loops. The Stream API is covered in detail in advanced Java courses.",
                "tip",
                "Java 8 Revolution"
            ),

            keyPoints([
                "Lambda expressions provide a concise syntax for anonymous functions: (params) -> body.",
                "A functional interface has exactly one abstract method and is the target type for lambdas.",
                "Built-in functional interfaces include Predicate, Function, Consumer and Supplier.",
                "Method references (ClassName::method) are shorthand for lambdas that call existing methods.",
                "The Stream API uses lambdas for declarative data processing: filter, map, reduce, collect.",
            ]),
  ],

    {
        summary:
            "Master lambda expressions, functional interfaces, built-in functional types, method references and a brief introduction to the Stream API.",
        minutes: 12,
        tags: ["java", "lambda", "functional-interface", "stream-api", "method-reference", "important"],

        mcqs: [
            mcq(
                "Lambda expressions were introduced in Java:",
                ["5", "6", "7", "8"],
                3,
                "Lambda expressions were introduced in Java 8 (2014)."
            ),
            mcq(
                "A functional interface must have:",
                ["No methods", "Exactly one abstract method", "Only static methods", "Only default methods"],
                1,
                "A functional interface has exactly one abstract method (it can have default and static methods too)."
            ),
            mcq(
                "The Predicate<T> functional interface:",
                ["Takes T and returns T", "Takes T and returns boolean", "Takes no input and returns T", "Takes T and returns void"],
                1,
                "Predicate<T> has the method boolean test(T t) — it takes a T and returns a boolean."
            ),
            mcq(
                "System.out::println is an example of:",
                ["A lambda expression", "A method reference", "A constructor reference", "A static import"],
                1,
                "System.out::println is an instance method reference equivalent to x -> System.out.println(x)."
            ),
            mcq(
                "The Consumer<T> functional interface:",
                ["Returns a value of type T", "Takes T and returns boolean", "Takes T and returns void", "Takes no input"],
                2,
                "Consumer<T> has the method void accept(T t) — it takes a T and performs an action without returning anything."
            ),
        ],

        questions: [
            qa(
                "What are lambda expressions? Explain their syntax with examples.",
                "Lambda expressions, introduced in Java 8, provide a concise way to represent anonymous functions that can be passed as arguments or stored in variables. The general syntax is (parameters) -> { body }. For example, () -> System.out.println('Hello') is a lambda with no parameters. x -> x * x takes one parameter and returns its square (parentheses are optional for a single parameter). (x, y) -> x + y takes two parameters and returns their sum. When the body has multiple statements, braces and an explicit return are required: (x, y) -> { int sum = x + y; return sum; }. Lambdas dramatically reduce boilerplate code. For example, instead of writing an anonymous inner class for Runnable with five lines, you can write () -> System.out.println('Running') in one line.",
                5
            ),
            qa(
                "What is a functional interface? Explain four built-in functional interfaces.",
                "A functional interface is an interface that has exactly one abstract method, making it a valid target for lambda expressions. It can have any number of default and static methods. The @FunctionalInterface annotation is optional but recommended for compile-time checking. Four important built-in functional interfaces in java.util.function are: Predicate<T> with method boolean test(T t), used for testing conditions like x -> x > 10. Function<T,R> with method R apply(T t), used for transforming input to output like s -> s.length(). Consumer<T> with method void accept(T t), used for performing actions without returning a value like s -> System.out.println(s). Supplier<T> with method T get(), used for providing values without input like () -> Math.random().",
                5
            ),
            qa(
                "What are method references? Explain the different types with examples.",
                "Method references are a shorthand syntax for lambda expressions that simply call an existing method. They use the :: operator. There are four types. Static method references use ClassName::staticMethod, for example Integer::parseInt is equivalent to s -> Integer.parseInt(s). Instance method references on a specific object use object::instanceMethod, for example str::length where str is a String variable is equivalent to () -> str.length(). Constructor references use ClassName::new, for example ArrayList::new is equivalent to () -> new ArrayList<>(). Instance method references on an arbitrary object use ClassName::instanceMethod, for example String::toUpperCase is equivalent to s -> s.toUpperCase(). Method references make code more readable when the lambda body is just a single method call.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    exceptionHandlingInJava,
    multithreadingInJava,
    javaCollectionsFramework,
    fileIOAndGenerics,
    lambdaAndFunctionalInterfaces,
];