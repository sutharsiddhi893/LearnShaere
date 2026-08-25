/* =========================================================
   BCA • SEM 5 • Object Oriented Programming - II
   UNIT 1 — Advanced Java Concepts and Collections
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
   TOPIC 1 — Advanced Inheritance and Polymorphism
========================================================= */

const advancedInheritance = createTopic(
    "advanced-inheritance-polymorphism",
    "Advanced Inheritance and Polymorphism",

    [
        definition(
            "Inheritance",
            "Inheritance is an OOP feature that allows a class (child) to acquire properties and methods of another class (parent), promoting code reuse and hierarchical classification."
        ),

        text(
            "Object Oriented Programming - II builds on basic Java concepts and introduces advanced topics such as abstract classes, interfaces, generics, collections, exception handling, multithreading, JDBC and GUI programming."
        ),

        heading("Types of Inheritance in Java"),

        table(
            ["Type", "Description", "Java Support"],
            [
                ["Single", "One class inherits one class", "Yes"],
                ["Multilevel", "Chain of inheritance", "Yes"],
                ["Hierarchical", "One parent, many children", "Yes"],
                ["Multiple", "One class, many parents", "No (only via interface)"],
                ["Hybrid", "Combination of types", "No (only via interface)"],
            ]
        ),

        heading("Single Inheritance Example"),

        code(
            `class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

public class Test {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // inherited
        d.bark();  // own method
    }
}`,
            "java",
            "Single inheritance example"
        ),

        heading("Method Overriding"),

        definition(
            "Method Overriding",
            "Method overriding occurs when a subclass provides a specific implementation of a method already defined in its parent class, enabling runtime polymorphism."
        ),

        code(
            `class Shape {
    void draw() {
        System.out.println("Drawing shape");
    }
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing circle");
    }
}

public class Test {
    public static void main(String[] args) {
        Shape s = new Circle();
        s.draw();  // Output: Drawing circle
    }
}`,
            "java",
            "Method overriding with runtime polymorphism"
        ),

        heading("Overloading vs Overriding"),

        table(
            ["Basis", "Overloading", "Overriding"],
            [
                ["Definition", "Same method name, different parameters", "Same method name and signature in child class"],
                ["Class", "Same class", "Parent-child classes"],
                ["Polymorphism", "Compile-time", "Runtime"],
                ["Return type", "Can be different", "Must be same or covariant"],
                ["Access modifier", "Can be anything", "Cannot be more restrictive"],
                ["Static methods", "Can be overloaded", "Cannot be overridden"],
            ]
        ),

        heading("super Keyword"),

        code(
            `class Vehicle {
    int speed = 60;

    void show() {
        System.out.println("Vehicle method");
    }
}

class Car extends Vehicle {
    int speed = 120;

    void display() {
        System.out.println("Car speed: " + speed);
        System.out.println("Vehicle speed: " + super.speed);
        super.show();  // call parent method
    }
}`,
            "java",
            "super keyword example"
        ),

        heading("final Keyword"),

        table(
            ["Used With", "Effect"],
            [
                ["Variable", "Value cannot be changed (constant)"],
                ["Method", "Cannot be overridden"],
                ["Class", "Cannot be inherited"],
            ]
        ),

        code(
            `final class Constants {
    static final double PI = 3.14159;
}

class Base {
    final void display() {
        System.out.println("Cannot override");
    }
}`,
            "java",
            "final keyword usage"
        ),

        note(
            "Java does not support multiple inheritance with classes to avoid the 'diamond problem'. However, multiple inheritance is achieved through interfaces.",
            "info",
            "Diamond Problem"
        ),

        keyPoints([
            "Inheritance promotes code reuse using 'extends' keyword.",
            "Java supports single, multilevel and hierarchical inheritance.",
            "Multiple inheritance is achieved via interfaces.",
            "Overriding enables runtime polymorphism.",
            "final prevents modification, inheritance or overriding.",
        ]),
    ],

    {
        summary:
            "Understand advanced inheritance, method overriding, super keyword, final keyword and polymorphism in Java.",
        minutes: 12,
        tags: ["inheritance", "polymorphism", "override", "java", "important"],

        mcqs: [
            mcq(
                "Which type of inheritance is NOT supported by Java classes?",
                ["Single", "Multilevel", "Hierarchical", "Multiple"],
                3,
                "Java does not support multiple inheritance with classes."
            ),
            mcq(
                "Method overriding enables:",
                ["Compile-time polymorphism", "Runtime polymorphism", "No polymorphism", "Static binding"],
                1,
                "Overriding enables runtime polymorphism through dynamic dispatch."
            ),
            mcq(
                "Which keyword prevents a class from being inherited?",
                ["static", "final", "abstract", "private"],
                1,
                "final class cannot be extended."
            ),
            mcq(
                "super keyword is used to:",
                ["Call child method", "Call parent method/constructor", "Create object", "Exit program"],
                1,
                "super is used to access parent class members."
            ),
        ],

        questions: [
            qa(
                "Explain method overriding with an example.",
                "Method overriding occurs when a subclass provides its own implementation of a method already defined in its parent class. The method signature (name and parameters) must be exactly the same. It enables runtime polymorphism, where the actual method called is determined at runtime based on the object type. For example, class Shape has method draw(), and class Circle extends Shape and overrides draw() to display 'Drawing circle'. When Shape s = new Circle(); s.draw(); is called, it invokes Circle's version. The @Override annotation is recommended to catch errors at compile time.",
                4
            ),
            qa(
                "Differentiate between method overloading and method overriding.",
                "Method overloading and overriding are two forms of polymorphism. Overloading occurs in the same class when multiple methods share the same name but differ in parameters (number, type or order). It is resolved at compile time and is called compile-time polymorphism. Overriding occurs between parent and child classes where the child provides a new implementation for an inherited method with the same signature. It is resolved at runtime and is called runtime polymorphism. Overloaded methods can have different return types, but overridden methods must have the same or covariant return type. Static methods can be overloaded but not overridden.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Abstract Classes and Interfaces
========================================================= */

const abstractInterfaces = createTopic(
    "abstract-classes-and-interfaces",
    "Abstract Classes and Interfaces",

    [
        definition(
            "Abstract Class",
            "An abstract class is a class declared with the 'abstract' keyword that cannot be instantiated and may contain both abstract (without body) and concrete (with body) methods."
        ),

        definition(
            "Interface",
            "An interface is a blueprint of a class that contains only abstract methods (and constants) by default. It defines what a class must do without specifying how."
        ),

        heading("Abstract Class Example"),

        code(
            `abstract class Shape {
    abstract void draw();  // abstract method

    void display() {       // concrete method
        System.out.println("This is a shape");
    }
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

class Square extends Shape {
    void draw() {
        System.out.println("Drawing Square");
    }
}

public class Test {
    public static void main(String[] args) {
        Shape s1 = new Circle();
        Shape s2 = new Square();
        s1.draw();
        s2.draw();
        s1.display();
    }
}`,
            "java",
            "Abstract class implementation"
        ),

        heading("Rules for Abstract Class"),

        list([
            "Declared with 'abstract' keyword.",
            "Cannot be instantiated (no object creation).",
            "Can have abstract and non-abstract methods.",
            "Can have constructors, static methods and instance variables.",
            "Subclass must implement all abstract methods (or be abstract too).",
            "Can extend only one abstract class.",
        ]),

        heading("Interface Example"),

        code(
            `interface Vehicle {
    int MAX_SPEED = 200;  // implicitly public static final

    void start();          // implicitly public abstract
    void stop();
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }

    public void stop() {
        System.out.println("Car stopped");
    }
}

public class Test {
    public static void main(String[] args) {
        Vehicle v = new Car();
        v.start();
        v.stop();
        System.out.println("Max Speed: " + Vehicle.MAX_SPEED);
    }
}`,
            "java",
            "Interface implementation"
        ),

        heading("Multiple Interface Implementation"),

        code(
            `interface Drawable {
    void draw();
}

interface Colorable {
    void fillColor(String color);
}

class Shape implements Drawable, Colorable {
    public void draw() {
        System.out.println("Drawing shape");
    }

    public void fillColor(String color) {
        System.out.println("Filling color: " + color);
    }
}`,
            "java",
            "Multiple inheritance using interfaces"
        ),

        heading("Abstract Class vs Interface"),

        table(
            ["Basis", "Abstract Class", "Interface"],
            [
                ["Keyword", "abstract class", "interface"],
                ["Methods", "Abstract + concrete", "Abstract (default in Java 8+)"],
                ["Variables", "Any type", "public static final only"],
                ["Constructor", "Yes", "No"],
                ["Multiple inheritance", "No", "Yes"],
                ["Access modifiers", "Any", "public only (default)"],
                ["Use when", "Share code among related classes", "Define contract for unrelated classes"],
                ["Implements/Extends", "extends (only one)", "implements (multiple)"],
            ]
        ),

        heading("Default and Static Methods (Java 8+)"),

        code(
            `interface Calculator {
    default int add(int a, int b) {
        return a + b;
    }

    static int multiply(int a, int b) {
        return a * b;
    }

    int subtract(int a, int b);  // abstract
}

class MyCalc implements Calculator {
    public int subtract(int a, int b) {
        return a - b;
    }
}

public class Test {
    public static void main(String[] args) {
        MyCalc c = new MyCalc();
        System.out.println(c.add(5, 3),;           // default method
        System.out.println(c.subtract(10, 4),;     // implemented
        System.out.println(Calculator.multiply(2, 6),; // static
    }
}`,
            "java",
            "Default and static methods in interface"
        ),

        heading("Functional Interface"),

        definition(
            "Functional Interface",
            "An interface with exactly one abstract method. It can be used with lambda expressions. Marked with @FunctionalInterface annotation."
        ),

        code(
            `@FunctionalInterface
interface Greeting {
    void sayHello(String name);
}

public class Test {
    public static void main(String[] args) {
        Greeting g = (name) -> System.out.println("Hello " + name);
        g.sayHello("Amit");
    }
}`,
            "java",
            "Functional interface with lambda"
        ),

        note(
            "From Java 8, interfaces can have default and static methods with implementations. From Java 9, they can also have private methods. This blurred the line between abstract classes and interfaces.",
            "info",
            "Modern Java"
        ),

        keyPoints([
            "Abstract class cannot be instantiated but can have constructors.",
            "Interface achieves multiple inheritance in Java.",
            "Interface methods are public and abstract by default.",
            "Java 8+ allows default and static methods in interfaces.",
            "Functional interfaces enable lambda expressions.",
        ]),
    ],

    {
        summary:
            "Learn abstract classes, interfaces, multiple inheritance via interfaces, and modern Java 8+ features like default methods and lambdas.",
        minutes: 13,
        tags: ["abstract", "interface", "lambda", "java", "important"],

        mcqs: [
            mcq(
                "Which cannot be instantiated?",
                ["Concrete class", "Abstract class", "Static class", "Inner class"],
                1,
                "Abstract classes cannot be instantiated."
            ),
            mcq(
                "By default, interface methods are:",
                ["private", "public abstract", "protected", "static"],
                1,
                "Interface methods are implicitly public and abstract."
            ),
            mcq(
                "Multiple inheritance in Java is achieved through:",
                ["Classes", "Interfaces", "Packages", "Constructors"],
                1,
                "Multiple inheritance is done using interfaces."
            ),
            mcq(
                "A functional interface has:",
                ["Zero methods", "One abstract method", "Two abstract methods", "Only default methods"],
                1,
                "Functional interface has exactly one abstract method."
            ),
        ],

        questions: [
            qa(
                "Differentiate between abstract class and interface.",
                "An abstract class is declared with 'abstract' keyword and can have both abstract and concrete methods. It can have instance variables, constructors and any access modifier. A class can extend only one abstract class using 'extends'. An interface is declared with 'interface' keyword and traditionally contains only abstract methods and public static final variables. It cannot have constructors. A class can implement multiple interfaces using 'implements', achieving multiple inheritance. From Java 8, interfaces support default and static methods. Abstract classes are used when related classes share code, while interfaces define a contract for unrelated classes.",
                4
            ),
            qa(
                "How does Java achieve multiple inheritance? Explain with example.",
                "Java does not support multiple inheritance with classes to avoid the diamond problem. Instead, it achieves multiple inheritance through interfaces. A class can implement multiple interfaces, gaining the abilities defined by each. For example, interface Drawable has draw() and interface Colorable has fillColor(). Class Shape can implement both: class Shape implements Drawable, Colorable { public void draw() {...} public void fillColor(String c) {...} }. This way, Shape gets the contract of both interfaces. Since interfaces only define what to do (not how), there is no ambiguity even if two interfaces have same method names.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Exception Handling
========================================================= */

const exceptionHandling = createTopic(
    "exception-handling",
    "Exception Handling",

    [
        definition(
            "Exception",
            "An exception is an abnormal condition or event that occurs during program execution, disrupting the normal flow of instructions."
        ),

        definition(
            "Exception Handling",
            "Exception handling is a mechanism to handle runtime errors gracefully, maintaining normal program flow and providing meaningful error messages."
        ),

        heading("Exception Hierarchy"),

        code(
            `Throwable
    ├── Error (unchecked, serious)
    │       ├── OutOfMemoryError
    │       └── StackOverflowError
    └── Exception
            ├── Checked Exceptions
            │       ├── IOException
            │       ├── SQLException
            │       └── ClassNotFoundException
            └── RuntimeException (Unchecked)
                    ├── ArithmeticException
                    ├── NullPointerException
                    ├── ArrayIndexOutOfBoundsException
                    └── NumberFormatException`,
            "text",
            "Java exception hierarchy"
        ),

        heading("Checked vs Unchecked Exceptions"),

        table(
            ["Basis", "Checked", "Unchecked"],
            [
                ["Detection", "At compile time", "At runtime"],
                ["Handling", "Must be handled or declared", "Optional"],
                ["Parent", "Exception", "RuntimeException"],
                ["Examples", "IOException, SQLException", "NullPointerException, ArithmeticException"],
            ]
        ),

        heading("try-catch Block"),

        code(
            `public class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;  // ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("Cannot divide by zero: " + e.getMessage(),;
        }
        System.out.println("Program continues...");
    }
}`,
            "java",
            "Basic try-catch"
        ),

        heading("Multiple catch Blocks"),

        code(
            `public class Test {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);
            String s = null;
            System.out.println(s.length(),;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array index out of bounds");
        } catch (NullPointerException e) {
            System.out.println("Null pointer accessed");
        } catch (Exception e) {
            System.out.println("Some exception occurred");
        }
    }
}`,
            "java",
            "Multiple catch blocks"
        ),

        heading("finally Block"),

        code(
            `public class Test {
    public static void main(String[] args) {
        try {
            int a = 10 / 2;
            System.out.println("Result: " + a);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage(),;
        } finally {
            System.out.println("Finally block always executes");
        }
    }
}`,
            "java",
            "finally block example"
        ),

        heading("throw and throws"),

        table(
            ["Basis", "throw", "throws"],
            [
                ["Purpose", "Explicitly throw an exception", "Declare exceptions in method signature"],
                ["Location", "Inside method body", "In method declaration"],
                ["Number", "One exception at a time", "Multiple exceptions"],
                ["Type", "Instance of exception", "Class of exception"],
            ]
        ),

        code(
            `class AgeException extends Exception {
    public AgeException(String msg) {
        super(msg);
    }
}

public class Test {
    static void checkAge(int age) throws AgeException {
        if (age < 18) {
            throw new AgeException("Age must be 18 or above");
        }
        System.out.println("Age is valid");
    }

    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (AgeException e) {
            System.out.println("Exception: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Custom exception with throw and throws"
        ),

        heading("try-with-resources (Java 7+)"),

        code(
            `import java.io.*;

public class Test {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(new FileReader("file.txt"),) {
            String line = br.readLine();
            System.out.println(line);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
        // Resource automatically closed
    }
}`,
            "java",
            "try-with-resources for automatic resource management"
        ),

        note(
            "Always catch specific exceptions before general ones. If you catch Exception first, more specific catches will be unreachable and cause compile error.",
            "warning",
            "Catch Order"
        ),

        keyPoints([
            "Exceptions disrupt normal program flow.",
            "Checked exceptions must be handled; unchecked are optional.",
            "try-catch handles exceptions; finally always executes.",
            "throw is used to raise; throws declares exceptions.",
            "Custom exceptions extend Exception or RuntimeException.",
        ]),
    ],

    {
        summary:
            "Master exception handling in Java using try, catch, finally, throw, throws and custom exceptions.",
        minutes: 12,
        tags: ["exception", "try-catch", "throws", "java", "important"],

        mcqs: [
            mcq(
                "Which block always executes whether exception occurs or not?",
                ["try", "catch", "finally", "throw"],
                2,
                "The finally block always executes."
            ),
            mcq(
                "NullPointerException is a:",
                ["Checked exception", "Unchecked exception", "Error", "Warning"],
                1,
                "NullPointerException is a runtime (unchecked) exception."
            ),
            mcq(
                "Which is used to explicitly throw an exception?",
                ["throws", "throw", "try", "catch"],
                1,
                "throw is used to explicitly raise an exception."
            ),
            mcq(
                "Custom exceptions extend:",
                ["Object", "Exception or RuntimeException", "Throwable only", "Error"],
                1,
                "Custom exceptions typically extend Exception or RuntimeException."
            ),
        ],

        questions: [
            qa(
                "Explain exception handling in Java with try-catch-finally.",
                "Exception handling in Java is done using try, catch and finally blocks. The try block contains code that may throw an exception. The catch block handles the exception if one occurs, receiving the exception object as parameter. Multiple catch blocks can handle different exception types, but specific exceptions must be caught before general ones. The finally block always executes whether an exception occurred or not, and is commonly used for cleanup like closing files or database connections. For example: try { int a = 10/0; } catch (ArithmeticException e) { System.out.println('Cannot divide by zero'); } finally { System.out.println('Cleanup'); }. This mechanism prevents program crashes and provides graceful error handling.",
                4
            ),
            qa(
                "Differentiate between throw and throws keyword.",
                "The throw keyword is used to explicitly throw an exception from a method or block of code. It is followed by an instance of an exception, for example: throw new ArithmeticException('Invalid'). Only one exception can be thrown at a time. The throws keyword is used in a method signature to declare that the method may throw certain exceptions, forcing the caller to handle them. Multiple exceptions can be declared separated by commas, for example: public void readFile() throws IOException, SQLException. throw is used inside the method body while throws is part of the method declaration. throw is used for actual throwing, while throws is a compile-time notification.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Java Collections Framework
========================================================= */

const collectionsFramework = createTopic(
    "java-collections-framework",
    "Java Collections Framework",

    [
        definition(
            "Collections Framework",
            "The Java Collections Framework is a unified architecture that provides interfaces, implementations and algorithms to store, retrieve and manipulate groups of objects efficiently."
        ),

        heading("Collection Hierarchy"),

        code(
            `Collection (interface)
    ├── List (interface)
    │       ├── ArrayList
    │       ├── LinkedList
    │       └── Vector
    │              └── Stack
    ├── Set (interface)
    │       ├── HashSet
    │       │      └── LinkedHashSet
    │       └── TreeSet (SortedSet)
    └── Queue (interface)
            ├── PriorityQueue
            └── Deque
                   └── ArrayDeque

Map (interface) - separate hierarchy
    ├── HashMap
    │      └── LinkedHashMap
    ├── TreeMap (SortedMap)
    └── Hashtable`,
            "text",
            "Java Collections hierarchy"
        ),

        heading("List Interface"),

        text(
            "List is an ordered collection that allows duplicate elements. Elements are accessed by index."
        ),

        code(
            `import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("Java");
        list.add("Python");
        list.add("C++");
        list.add("Java");  // duplicates allowed

        System.out.println(list);              // [Java, Python, C++, Java]
        System.out.println(list.get(1),;       // Python
        System.out.println(list.size(),;       // 4

        list.remove("Python");
        Collections.sort(list);
        System.out.println(list);              // [C++, Java, Java]
    }
}`,
            "java",
            "ArrayList example"
        ),

        heading("ArrayList vs LinkedList"),

        table(
            ["Basis", "ArrayList", "LinkedList"],
            [
                ["Internal", "Dynamic array", "Doubly linked list"],
                ["Access", "Fast O(1)", "Slow O(n)"],
                ["Insert/Delete", "Slow O(n)", "Fast O(1)"],
                ["Memory", "Less overhead", "More overhead"],
                ["Use", "Frequent access", "Frequent insertion/deletion"],
            ]
        ),

        heading("Set Interface"),

        text(
            "Set is a collection that does not allow duplicate elements. It is unordered (HashSet) or ordered (LinkedHashSet, TreeSet)."
        ),

        code(
            `import java.util.*;

public class Test {
    public static void main(String[] args) {
        Set<Integer> set = new HashSet<>();
        set.add(10);
        set.add(20);
        set.add(30);
        set.add(10);  // duplicate ignored

        System.out.println(set);           // [20, 10, 30] - unordered

        Set<Integer> treeSet = new TreeSet<>(set);
        System.out.println(treeSet);       // [10, 20, 30] - sorted
    }
}`,
            "java",
            "HashSet and TreeSet"
        ),

        heading("Map Interface"),

        text(
            "Map stores key-value pairs. Keys are unique but values can be duplicated. Not part of Collection interface."
        ),

        code(
            `import java.util.*;

public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();
        map.put("Amit", 85);
        map.put("Riya", 92);
        map.put("Karan", 78);

        System.out.println(map.get("Riya"),;       // 92
        System.out.println(map.containsKey("Amit"),; // true
        System.out.println(map.size(),;              // 3

        // Iterate
        for (Map.Entry<String, Integer> entry : map.entrySet(), {
            System.out.println(entry.getKey() + " -> " + entry.getValue(),;
        }
    }
}`,
            "java",
            "HashMap example"
        ),

        heading("HashMap vs Hashtable"),

        table(
            ["Basis", "HashMap", "Hashtable"],
            [
                ["Synchronization", "Not synchronized", "Synchronized"],
                ["Thread-safety", "Not thread-safe", "Thread-safe"],
                ["Null keys/values", "One null key, many null values", "Not allowed"],
                ["Performance", "Faster", "Slower"],
                ["Introduced", "Java 1.2", "Java 1.0 (legacy)"],
            ]
        ),

        heading("Iterator"),

        code(
            `import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("A", "B", "C", "D");

        Iterator<String> it = list.iterator();
        while (it.hasNext(), {
            System.out.println(it.next(),;
        }

        // Enhanced for-loop
        for (String s : list) {
            System.out.println(s);
        }
    }
}`,
            "java",
            "Iterator and enhanced for-loop"
        ),

        heading("Generics"),

        definition(
            "Generics",
            "Generics enable classes, interfaces and methods to operate on typed parameters, providing type safety at compile time and eliminating the need for casting."
        ),

        code(
            `class Box<T> {
    private T value;

    public void set(T value) {
        this.value = value;
    }

    public T get() {
        return value;
    }
}

public class Test {
    public static void main(String[] args) {
        Box<String> strBox = new Box<>();
        strBox.set("Hello");
        System.out.println(strBox.get(),;

        Box<Integer> intBox = new Box<>();
        intBox.set(100);
        System.out.println(intBox.get(),;
    }
}`,
            "java",
            "Generic class example"
        ),

        note(
            "Use ArrayList for read-heavy operations and LinkedList for write-heavy operations. Choose HashMap when order doesn't matter, TreeMap for sorted order, and LinkedHashMap to maintain insertion order.",
            "tip",
            "Choosing Collections"
        ),

        keyPoints([
            "Collections framework provides ready-made data structures.",
            "List allows duplicates; Set does not.",
            "Map stores key-value pairs with unique keys.",
            "ArrayList is fast for access; LinkedList for insertion.",
            "Generics provide type safety at compile time.",
        ]),
    ],

    {
        summary:
            "Master Java Collections Framework including List, Set, Map, ArrayList, HashMap, and Generics for type safety.",
        minutes: 13,
        tags: ["collections", "arraylist", "hashmap", "generics", "important"],

        mcqs: [
            mcq(
                "Which collection does NOT allow duplicates?",
                ["List", "ArrayList", "Set", "Vector"],
                2,
                "Set does not allow duplicate elements."
            ),
            mcq(
                "Which is faster for random access?",
                ["LinkedList", "ArrayList", "Vector", "Stack"],
                1,
                "ArrayList provides O(1) random access."
            ),
            mcq(
                "HashMap allows how many null keys?",
                ["Zero", "One", "Many", "Unlimited"],
                1,
                "HashMap allows one null key."
            ),
            mcq(
                "Generics provide:",
                ["Runtime type checking", "Compile-time type safety", "Better performance", "Multiple inheritance"],
                1,
                "Generics provide compile-time type safety."
            ),
        ],

        questions: [
            qa(
                "Explain ArrayList vs LinkedList with use cases.",
                "ArrayList and LinkedList are both implementations of the List interface but differ internally. ArrayList uses a dynamic array internally, providing fast random access with O(1) time complexity using get() method. However, insertion and deletion in the middle are slow O(n) because elements need to be shifted. LinkedList uses a doubly linked list internally, providing fast insertion and deletion at any position O(1) if position is known, but slow random access O(n) because traversal is needed. ArrayList uses less memory due to less overhead per element. Use ArrayList when read/access operations dominate, such as displaying lists. Use LinkedList when frequent insertions and deletions occur, such as implementing queues or stacks.",
                4
            ),
            qa(
                "Explain the Map interface with HashMap example.",
                "The Map interface represents a collection of key-value pairs where each key is unique. It is not part of the Collection interface hierarchy but is part of the Collections Framework. HashMap is the most commonly used implementation, providing O(1) average time for put and get operations using hashing. Keys must be unique, but values can be duplicated. HashMap allows one null key and multiple null values. Example: Map<String, Integer> map = new HashMap<>(); map.put('Amit', 85); map.put('Riya', 92); Integer marks = map.get('Amit'); It provides methods like put(), get(), remove(), containsKey(), containsValue(), size() and keySet(). Iteration is done using entrySet() with Map.Entry objects. Other implementations include TreeMap for sorted keys and LinkedHashMap for insertion order.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Multithreading
========================================================= */

const multithreading = createTopic(
    "multithreading-in-java",
    "Multithreading in Java",

    [
        definition(
            "Multithreading",
            "Multithreading is a Java feature that allows concurrent execution of two or more threads to maximize CPU utilization and improve application performance."
        ),

        definition(
            "Thread",
            "A thread is a lightweight sub-process, the smallest unit of processing. Multiple threads share the same memory space of a process."
        ),

        heading("Process vs Thread"),

        table(
            ["Basis", "Process", "Thread"],
            [
                ["Definition", "Independent program", "Sub-part of process"],
                ["Memory", "Own memory space", "Shared memory"],
                ["Creation", "Heavy, slow", "Lightweight, fast"],
                ["Communication", "Complex (IPC)", "Easy (shared memory)"],
                ["Context switch", "Slow", "Fast"],
            ]
        ),

        heading("Ways to Create Thread"),

        heading("1. Extending Thread Class"),

        code(
            `class MyThread extends Thread {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " : " + i);
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {}
        }
    }
}

public class Test {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        t1.start();
        t2.start();
    }
}`,
            "java",
            "Thread by extending Thread class"
        ),

        heading("2. Implementing Runnable Interface"),

        code(
            `class MyRunnable implements Runnable {
    public void run() {
        for (int i = 1; i <= 5; i++) {
            System.out.println(Thread.currentThread().getName() + " : " + i);
        }
    }
}

public class Test {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable(), "Thread-1");
        Thread t2 = new Thread(new MyRunnable(), "Thread-2");
        t1.start();
        t2.start();
    }
}`,
            "java",
            "Thread by implementing Runnable"
        ),

        heading("Thread Lifecycle"),

        table(
            ["State", "Description"],
            [
                ["New", "Thread created but not started"],
                ["Runnable", "Ready to run, waiting for CPU"],
                ["Running", "Currently executing"],
                ["Blocked/Waiting", "Waiting for resource or signal"],
                ["Timed Waiting", "Waiting for specified time"],
                ["Terminated", "Execution completed"],
            ]
        ),

        heading("Thread Methods"),

        table(
            ["Method", "Description"],
            [
                ["start()", "Starts the thread"],
                ["run()", "Contains code to execute"],
                ["sleep(ms)", "Pauses thread for given time"],
                ["join()", "Waits for thread to finish"],
                ["yield()", "Gives chance to other threads"],
                ["setPriority()", "Sets thread priority (1-10)"],
                ["getName()", "Gets thread name"],
                ["isAlive()", "Checks if thread is running"],
                ["interrupt()", "Interrupts a sleeping/waiting thread"],
            ]
        ),

        heading("Thread Synchronization"),

        definition(
            "Synchronization",
            "Synchronization is the capability to control access of multiple threads to a shared resource, preventing race conditions and ensuring data consistency."
        ),

        code(
            `class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class Test {
    public static void main(String[] args) throws InterruptedException {
        Counter c = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) c.increment();
        });

        t1.start(); t2.start();
        t1.join(); t2.join();

        System.out.println("Count: " + c.getCount(),;  // 2000
    }
}`,
            "java",
            "Synchronized method"
        ),

        heading("Inter-thread Communication"),

        code(
            `class Shared {
    private int value;
    private boolean available = false;

    public synchronized void produce(int v) throws InterruptedException {
        while (available) wait();
        this.value = v;
        available = true;
        notify();
    }

    public synchronized int consume() throws InterruptedException {
        while (!available) wait();
        available = false;
        notify();
        return value;
    }
}`,
            "java",
            "Producer-Consumer using wait/notify"
        ),

        heading("Thread Priority"),

        table(
            ["Constant", "Value"],
            [
                ["MIN_PRIORITY", "1"],
                ["NORM_PRIORITY", "5 (default)"],
                ["MAX_PRIORITY", "10"],
            ]
        ),

        note(
            "Implementing Runnable is preferred over extending Thread because Java does not allow multiple inheritance. Implementing Runnable still allows the class to extend another class.",
            "tip",
            "Best Practice"
        ),

        keyPoints([
            "Multithreading allows concurrent execution of tasks.",
            "Thread can be created by extending Thread or implementing Runnable.",
            "Runnable is preferred for better design.",
            "Synchronization prevents race conditions.",
            "wait() and notify() enable thread communication.",
        ]),
    ],

    {
        summary:
            "Learn multithreading in Java including thread creation, lifecycle, synchronization and inter-thread communication.",
        minutes: 13,
        tags: ["multithreading", "thread", "synchronization", "java", "important"],

        mcqs: [
            mcq(
                "Which method starts a thread?",
                ["run()", "start()", "execute()", "begin()"],
                1,
                "start() method initiates the thread and calls run() internally."
            ),
            mcq(
                "Default priority of a thread is:",
                ["1", "5", "10", "0"],
                1,
                "Default thread priority is 5 (NORM_PRIORITY)."
            ),
            mcq(
                "Synchronization is used to:",
                ["Increase speed", "Prevent race conditions", "Create threads", "Kill threads"],
                1,
                "Synchronization prevents race conditions on shared resources."
            ),
            mcq(
                "Which is better for creating threads?",
                ["Extending Thread", "Implementing Runnable", "Both same", "Neither"],
                1,
                "Runnable is preferred as it allows extending other classes."
            ),
        ],

        questions: [
            qa(
                "Explain two ways to create a thread in Java.",
                "Java provides two ways to create threads. First, by extending the Thread class: Create a class extending Thread, override the run() method with the code to execute, and call start() on the object to begin execution. For example, class MyThread extends Thread { public void run() { ... } }. Second, by implementing the Runnable interface: Create a class implementing Runnable, override the run() method, then pass an instance to a Thread object and call start(). For example, Thread t = new Thread(new MyRunnable(),; t.start(). Implementing Runnable is preferred because Java doesn't support multiple inheritance, and this approach still allows extending other classes. It also separates the task from the thread mechanism, following better design principles.",
                4
            ),
            qa(
                "What is thread synchronization? Why is it needed?",
                "Thread synchronization is a mechanism that controls access of multiple threads to a shared resource, ensuring only one thread accesses the resource at a time. It is needed to prevent race conditions, where multiple threads modify shared data simultaneously, causing inconsistent or incorrect results. For example, if two threads increment a counter without synchronization, some increments may be lost. In Java, synchronization is achieved using the 'synchronized' keyword on methods or blocks. A synchronized method locks the object, preventing other threads from executing any synchronized method on the same object until the current thread releases the lock. Example: public synchronized void increment() { count++; }. Synchronization ensures data consistency in multithreaded programs but may reduce performance due to blocking.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    advancedInheritance,
    abstractInterfaces,
    exceptionHandling,
    collectionsFramework,
    multithreading,
];
