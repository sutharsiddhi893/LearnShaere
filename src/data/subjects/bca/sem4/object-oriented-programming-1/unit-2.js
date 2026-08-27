/* =========================================================
   BCA • SEM 4 • Object Oriented Programming - I (Java)
   UNIT 2 — Inheritance, Polymorphism, Abstraction and Exceptions
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
   TOPIC 1 — Inheritance
========================================================= */

const inheritance = createTopic(
    "inheritance",
    "Inheritance",

    [
        definition(
            "Inheritance",
            "Inheritance is an OOP mechanism where a new class (child/subclass) derives properties and behaviors from an existing class (parent/superclass). It promotes code reusability and hierarchical classification."
        ),

        heading("Terminology"),

        table(
            ["Term", "Description"],
            [
                ["Superclass", "Parent class (also called base class)"],
                ["Subclass", "Child class (also called derived class)"],
                ["extends", "Keyword for inheritance"],
                ["super", "Keyword to access parent class members"],
                ["IS-A relationship", "Relationship in inheritance"],
            ]
        ),

        heading("Syntax of Inheritance"),

        code(
            `class Parent {
    // parent members
}

class Child extends Parent {
    // child members
    // inherits Parent's members
}`,
            "java",
            "Inheritance syntax"
        ),

        heading("Simple Inheritance Example"),

        code(
            `// Parent class
class Animal {
    String name;
    
    void eat() {
        System.out.println(name + " is eating");
    }
    
    void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child class
class Dog extends Animal {
    void bark() {
        System.out.println(name + " is barking");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.name = "Buddy";
        
        // Inherited methods
        d.eat();     // Buddy is eating
        d.sleep();   // Buddy is sleeping
        
        // Own method
        d.bark();    // Buddy is barking
    }
}`,
            "java",
            "Basic inheritance"
        ),

        heading("Types of Inheritance"),

        table(
            ["Type", "Description", "Supported"],
            [
                ["Single", "One parent, one child", "✓ Yes"],
                ["Multilevel", "Chain of inheritance", "✓ Yes"],
                ["Hierarchical", "One parent, many children", "✓ Yes"],
                ["Multiple", "Many parents, one child", "✗ Not with classes"],
                ["Hybrid", "Combination", "✗ Not with classes"],
            ]
        ),

        note(
            "Java does not support multiple inheritance with classes to avoid the 'diamond problem' (ambiguity from multiple parents). Multiple inheritance is achieved through interfaces.",
            "warning",
            "Multiple Inheritance"
        ),

        heading("Single Inheritance"),

        code(
            `class A {
    void methodA() {
        System.out.println("Method A");
    }
}

class B extends A {
    void methodB() {
        System.out.println("Method B");
    }
}

// B inherits A
B obj = new B();
obj.methodA();  // From A
obj.methodB();  // Own`,
            "java",
            "Single inheritance"
        ),

        heading("Multilevel Inheritance"),

        code(
            `class Grandparent {
    void heritage() {
        System.out.println("Family heritage");
    }
}

class Parent extends Grandparent {
    void wisdom() {
        System.out.println("Family wisdom");
    }
}

class Child extends Parent {
    void talent() {
        System.out.println("My talent");
    }
}

// Child inherits from Parent, which inherits from Grandparent
Child c = new Child();
c.heritage();  // From Grandparent
c.wisdom();    // From Parent
c.talent();    // Own`,
            "java",
            "Multilevel inheritance"
        ),

        heading("Hierarchical Inheritance"),

        code(
            `class Vehicle {
    void start() {
        System.out.println("Vehicle started");
    }
}

class Car extends Vehicle {
    void wheels() {
        System.out.println("Car has 4 wheels");
    }
}

class Bike extends Vehicle {
    void wheels() {
        System.out.println("Bike has 2 wheels");
    }
}

class Truck extends Vehicle {
    void carry() {
        System.out.println("Truck carries loads");
    }
}

// All three inherit from Vehicle
Car c = new Car();
c.start();  // From Vehicle
c.wheels(); // Own`,
            "java",
            "Hierarchical inheritance"
        ),

        heading("The super Keyword"),

        definition(
            "super",
            "The 'super' keyword refers to the immediate parent class. It is used to access parent class members and constructors."
        ),

        heading("Uses of super"),

        list([
            "Access parent class variables (super.variable).",
            "Access parent class methods (super.method(),.",
            "Call parent class constructor (super(),.",
        ]),

        code(
            `class Animal {
    String name = "Animal";
    
    Animal() {
        System.out.println("Animal constructor");
    }
    
    void display() {
        System.out.println("Name: " + name);
    }
}

class Dog extends Animal {
    String name = "Dog";
    
    Dog() {
        super();  // Call parent constructor
        System.out.println("Dog constructor");
    }
    
    void display() {
        System.out.println("Dog name: " + name);
        System.out.println("Animal name: " + super.name);
        super.display();  // Call parent method
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.display();
    }
}

// Output:
// Animal constructor
// Dog constructor
// Dog name: Dog
// Animal name: Animal
// Name: Animal`,
            "java",
            "super keyword"
        ),

        heading("Constructor Chaining"),

        text(
            "When a subclass object is created, its constructor implicitly calls the parent's default constructor. Use super() to explicitly call parameterized parent constructor."
        ),

        code(
            `class Person {
    String name;
    int age;
    
    Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    String course;
    
    Student(String name, int age, String course) {
        super(name, age);  // Must be first statement
        this.course = course;
    }
    
    void display() {
        System.out.println(name + " " + age + " " + course);
    }
}

Student s = new Student("Amit", 20, "BCA");
s.display();  // Amit 20 BCA`,
            "java",
            "Constructor chaining"
        ),

        heading("Method Overriding"),

        definition(
            "Method Overriding",
            "Method overriding occurs when a subclass provides its own implementation of a method that is already defined in its parent class."
        ),

        heading("Rules for Overriding"),

        list([
            "Method name must be same.",
            "Parameters must be same.",
            "Return type must be same or subtype (covariant).",
            "Access modifier can't be more restrictive.",
            "Cannot override static or final methods.",
            "Use @Override annotation (recommended).",
        ]),

        code(
            `class Animal {
    void makeSound() {
        System.out.println("Some animal sound");
    }
}

class Dog extends Animal {
    @Override
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    @Override
    void makeSound() {
        System.out.println("Meow!");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a = new Animal();
        Dog d = new Dog();
        Cat c = new Cat();
        
        a.makeSound();  // Some animal sound
        d.makeSound();  // Woof! Woof!
        c.makeSound();  // Meow!
        
        // Polymorphism
        Animal[] animals = {a, d, c};
        for (Animal animal : animals) {
            animal.makeSound();  // Different sounds
        }
    }
}`,
            "java",
            "Method overriding"
        ),

        heading("Overloading vs Overriding"),

        table(
            ["Basis", "Overloading", "Overriding"],
            [
                ["Definition", "Multiple methods, same name, different params", "Redefining parent method in child"],
                ["Class", "Same class", "Different classes (inheritance)"],
                ["Parameters", "Must be different", "Must be same"],
                ["Return type", "Can be different", "Same or covariant"],
                ["Binding", "Compile-time (static)", "Runtime (dynamic)"],
                ["Also called", "Static polymorphism", "Dynamic polymorphism"],
            ]
        ),

        heading("The final Keyword"),

        heading("final Variable"),

        text("Cannot be reassigned once initialized."),

        code(
            `final int MAX = 100;
// MAX = 200;  // ERROR: cannot assign to final`,
            "java",
            "final variable"
        ),

        heading("final Method"),

        text("Cannot be overridden by subclasses."),

        code(
            `class Parent {
    final void display() {
        System.out.println("Cannot override");
    }
}

class Child extends Parent {
    // void display() {}  // ERROR: cannot override final
}`,
            "java",
            "final method"
        ),

        heading("final Class"),

        text("Cannot be extended (no inheritance possible)."),

        code(
            `final class Immutable {
    // ...
}

// class Sub extends Immutable {} // ERROR
// Example: String class is final`,
            "java",
            "final class"
        ),

        heading("Advantages of Inheritance"),

        list([
            "Code reusability — reuse parent class code.",
            "Method overriding — polymorphism.",
            "Extensibility — extend existing classes.",
            "Represents real-world hierarchies.",
            "Reduces redundancy.",
        ]),

        heading("Disadvantages of Inheritance"),

        list([
            "Tight coupling between parent and child.",
            "Changes in parent affect all children.",
            "Can lead to complex hierarchies.",
            "Overuse can make code harder to understand.",
        ]),

        keyPoints([
            "Inheritance allows child class to inherit from parent.",
            "Uses 'extends' keyword.",
            "Java supports single, multilevel, hierarchical inheritance.",
            "super keyword accesses parent members.",
            "Method overriding provides child's implementation.",
            "final prevents overriding or inheritance.",
        ]),
    ],

    {
        summary:
            "Learn inheritance, types, super keyword, method overriding and final keyword in Java.",
        minutes: 14,
        tags: ["inheritance", "extends", "super", "overriding", "important"],

        mcqs: [
            mcq(
                "Which keyword is used for inheritance?",
                ["inherits", "extends", "super", "implements"],
                1,
                "extends keyword is used for class inheritance."
            ),
            mcq(
                "Java does NOT support:",
                ["Single inheritance", "Multilevel inheritance", "Multiple inheritance with classes", "Hierarchical inheritance"],
                2,
                "Java doesn't support multiple inheritance with classes."
            ),
            mcq(
                "super() must be:",
                ["Last statement", "Anywhere in constructor", "First statement in constructor", "Not used"],
                2,
                "super() must be first statement in constructor."
            ),
            mcq(
                "final method:",
                ["Can be overridden", "Cannot be overridden", "Can be overloaded only", "Must be static"],
                1,
                "final methods cannot be overridden."
            ),
        ],

        questions: [
            qa(
                "What is inheritance? Explain its types.",
                "Inheritance is an OOP mechanism where a new class (child/subclass) derives properties and behaviors from an existing class (parent/superclass) using the 'extends' keyword. It promotes code reusability and represents IS-A relationships. Java supports: (1) Single Inheritance — one child inherits from one parent (class B extends A); (2) Multilevel Inheritance — chain of inheritance (class C extends B, class B extends A); (3) Hierarchical Inheritance — multiple children inherit from one parent (class Dog extends Animal, class Cat extends Animal). Java does NOT support (4) Multiple Inheritance with classes — one child inheriting from multiple parents, to avoid the diamond problem. Multiple inheritance is achieved through interfaces. Inheritance provides code reusability, extensibility and represents real-world hierarchies but creates tight coupling.",
                4
            ),
            qa(
                "Explain method overriding with rules and example.",
                "Method overriding occurs when a subclass provides its own implementation of a method already defined in its parent class. Rules: (1) Method name must be same; (2) Parameters must be same; (3) Return type must be same or covariant (subtype); (4) Access modifier cannot be more restrictive; (5) Cannot override static or final methods; (6) Use @Override annotation for compiler check. Example: class Animal { void makeSound() { System.out.println('Some sound'); } } class Dog extends Animal { @Override void makeSound() { System.out.println('Woof!'); } } Dog d = new Dog(); d.makeSound(); // Prints 'Woof!' instead of 'Some sound'. Overriding enables runtime polymorphism where the actual method called depends on the object's runtime type, not the reference type.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Polymorphism
========================================================= */

const polymorphism = createTopic(
    "polymorphism",
    "Polymorphism",

    [
        definition(
            "Polymorphism",
            "Polymorphism means 'many forms'. In OOP, it allows objects of different classes to be treated as objects of a common parent class, with each object responding differently to the same method call."
        ),

        heading("Types of Polymorphism"),

        table(
            ["Type", "Also Called", "Achieved By"],
            [
                ["Compile-time", "Static Polymorphism", "Method Overloading"],
                ["Runtime", "Dynamic Polymorphism", "Method Overriding"],
            ]
        ),

        heading("Compile-time Polymorphism (Method Overloading)"),

        text(
            "Multiple methods with same name but different parameters. Java decides which method to call at compile time based on the arguments."
        ),

        code(
            `class MathOperations {
    // Method 1: Add two ints
    int add(int a, int b) {
        return a + b;
    }
    
    // Method 2: Add three ints
    int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Method 3: Add two doubles
    double add(double a, double b) {
        return a + b;
    }
    
    // Method 4: Concatenate strings
    String add(String a, String b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        MathOperations m = new MathOperations();
        
        System.out.println(m.add(10, 20),;           // 30
        System.out.println(m.add(10, 20, 30),;       // 60
        System.out.println(m.add(10.5, 20.7),;       // 31.2
        System.out.println(m.add("Hello ", "World"),; // Hello World
    }
}`,
            "java",
            "Method overloading (compile-time)"
        ),

        heading("Constructor Overloading"),

        code(
            `class Rectangle {
    int length, width;
    
    // No-arg constructor
    Rectangle() {
        length = 0;
        width = 0;
    }
    
    // One parameter (square)
    Rectangle(int side) {
        length = side;
        width = side;
    }
    
    // Two parameters
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }
    
    int area() {
        return length * width;
    }
}

Rectangle r1 = new Rectangle();          // 0×0
Rectangle r2 = new Rectangle(5);         // 5×5 (square)
Rectangle r3 = new Rectangle(4, 6);      // 4×6`,
            "java",
            "Constructor overloading"
        ),

        heading("Runtime Polymorphism (Method Overriding)"),

        text(
            "Achieved through inheritance and method overriding. The method to be called is determined at runtime based on the object type."
        ),

        code(
            `class Shape {
    void draw() {
        System.out.println("Drawing a shape");
    }
    
    double area() {
        return 0;
    }
}

class Circle extends Shape {
    double radius;
    
    Circle(double r) {
        radius = r;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a circle");
    }
    
    @Override
    double area() {
        return 3.14 * radius * radius;
    }
}

class Rectangle extends Shape {
    double length, width;
    
    Rectangle(double l, double w) {
        length = l;
        width = w;
    }
    
    @Override
    void draw() {
        System.out.println("Drawing a rectangle");
    }
    
    @Override
    double area() {
        return length * width;
    }
}

public class Main {
    public static void main(String[] args) {
        // Parent reference, child object (upcasting)
        Shape s1 = new Circle(5);
        Shape s2 = new Rectangle(4, 6);
        
        s1.draw();                       // Drawing a circle
        System.out.println(s1.area(),;   // 78.5
        
        s2.draw();                       // Drawing a rectangle
        System.out.println(s2.area(),;   // 24.0
        
        // Array of shapes
        Shape[] shapes = { new Circle(3), new Rectangle(2, 5) };
        for (Shape s : shapes) {
            s.draw();
            System.out.println("Area: " + s.area(),;
        }
    }
}`,
            "java",
            "Runtime polymorphism"
        ),

        heading("Upcasting and Downcasting"),

        heading("Upcasting (Implicit)"),

        text(
            "Assigning subclass object to superclass reference. Automatic and safe."
        ),

        code(
            `class Animal { }
class Dog extends Animal { }

Dog d = new Dog();
Animal a = d;  // Upcasting (automatic)

// OR directly:
Animal a2 = new Dog();  // Upcasting`,
            "java",
            "Upcasting"
        ),

        heading("Downcasting (Explicit)"),

        text(
            "Converting superclass reference back to subclass. Requires explicit cast."
        ),

        code(
            `Animal a = new Dog();     // Upcasting
Dog d = (Dog) a;          // Downcasting

// Use instanceof to check type
if (a instanceof Dog) {
    Dog dog = (Dog) a;
    dog.bark();
}`,
            "java",
            "Downcasting"
        ),

        heading("Dynamic Method Dispatch"),

        definition(
            "Dynamic Method Dispatch",
            "The mechanism by which a call to an overridden method is resolved at runtime rather than compile time. It's how Java implements runtime polymorphism."
        ),

        code(
            `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog barks");
    }
}

class Cat extends Animal {
    void sound() {
        System.out.println("Cat meows");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal a;
        
        a = new Dog();
        a.sound();  // Dog barks (decided at runtime)
        
        a = new Cat();
        a.sound();  // Cat meows (decided at runtime)
    }
}`,
            "java",
            "Dynamic method dispatch"
        ),

        heading("Overloading vs Overriding Comparison"),

        table(
            ["Feature", "Overloading", "Overriding"],
            [
                ["Type", "Compile-time polymorphism", "Runtime polymorphism"],
                ["Location", "Same class", "Different classes (inheritance)"],
                ["Parameters", "Different", "Same"],
                ["Return type", "Can be different", "Same or covariant"],
                ["Access modifier", "No restriction", "Cannot be more restrictive"],
                ["static methods", "Can be overloaded", "Cannot be overridden"],
                ["Purpose", "Multiple ways to do same thing", "Different behavior in subclass"],
            ]
        ),

        heading("Benefits of Polymorphism"),

        list([
            "Code reusability.",
            "Flexibility in program design.",
            "Extensibility — add new classes easily.",
            "Simplified code with common interfaces.",
            "Enables loose coupling.",
            "Foundation for many design patterns.",
        ]),

        heading("Real-World Example"),

        code(
            `// Payment processing system
class Payment {
    void process(double amount) {
        System.out.println("Processing payment");
    }
}

class CreditCardPayment extends Payment {
    @Override
    void process(double amount) {
        System.out.println("Credit card payment: $" + amount);
    }
}

class PayPalPayment extends Payment {
    @Override
    void process(double amount) {
        System.out.println("PayPal payment: $" + amount);
    }
}

class BankTransferPayment extends Payment {
    @Override
    void process(double amount) {
        System.out.println("Bank transfer: $" + amount);
    }
}

public class Main {
    public static void main(String[] args) {
        Payment[] payments = {
            new CreditCardPayment(),
            new PayPalPayment(),
            new BankTransferPayment()
        };
        
        for (Payment p : payments) {
            p.process(100.00);  // Each processes differently
        }
    }
}`,
            "java",
            "Real-world polymorphism"
        ),

        note(
            "Polymorphism is one of the most powerful features of OOP. It allows writing flexible code that works with different types of objects through a common interface, making programs more extensible and maintainable.",
            "tip",
            "Power of Polymorphism"
        ),

        keyPoints([
            "Polymorphism means 'many forms'.",
            "Compile-time polymorphism through overloading.",
            "Runtime polymorphism through overriding.",
            "Upcasting is implicit; downcasting requires cast.",
            "Dynamic method dispatch resolves method at runtime.",
            "Enables flexible and extensible code design.",
        ]),
    ],

    {
        summary:
            "Learn polymorphism — compile-time (overloading), runtime (overriding), upcasting, downcasting and dynamic dispatch.",
        minutes: 13,
        tags: ["polymorphism", "overloading", "overriding", "dynamic-dispatch", "important"],

        mcqs: [
            mcq(
                "Method overloading is:",
                ["Runtime polymorphism", "Compile-time polymorphism", "Inheritance", "Encapsulation"],
                1,
                "Overloading is compile-time (static) polymorphism."
            ),
            mcq(
                "Runtime polymorphism is achieved by:",
                ["Overloading", "Overriding", "Constructor", "Static methods"],
                1,
                "Runtime polymorphism uses method overriding."
            ),
            mcq(
                "Upcasting is:",
                ["Automatic", "Requires cast", "Not allowed", "Same as downcasting"],
                0,
                "Upcasting is automatic (implicit)."
            ),
            mcq(
                "Which keyword checks object type?",
                ["typeof", "instanceof", "type", "classof"],
                1,
                "instanceof checks the type of object."
            ),
        ],

        questions: [
            qa(
                "What is polymorphism? Explain its types with examples.",
                "Polymorphism means 'many forms' — the ability of objects to take multiple forms and respond differently to the same method call. Java supports two types: (1) Compile-time Polymorphism (Static) — achieved through method overloading; the compiler decides which method to call based on arguments. Example: class Math { int add(int a, int b){} int add(int a, int b, int c){} double add(double a, double b){} } (2) Runtime Polymorphism (Dynamic) — achieved through method overriding; JVM decides which method to call at runtime based on actual object type. Example: class Animal { void sound(){} } class Dog extends Animal { void sound(){ System.out.println('Woof'); } } Animal a = new Dog(); a.sound(); // Prints 'Woof' at runtime. Polymorphism enables code flexibility, reusability and extensibility.",
                4
            ),
            qa(
                "Explain dynamic method dispatch with example.",
                "Dynamic Method Dispatch is the mechanism by which Java resolves calls to overridden methods at runtime rather than compile time. It is the basis of runtime polymorphism. When a superclass reference variable refers to a subclass object, the version of the overridden method that gets executed is determined by the type of object referred to, not by the type of reference variable. Example: class Animal { void sound() { System.out.println('Animal sound'); } } class Dog extends Animal { void sound() { System.out.println('Dog barks'); } } Animal a; a = new Dog(); a.sound(); // Prints 'Dog barks' — JVM sees actual object is Dog, calls Dog's method. This mechanism allows programmers to write generic code that works with different subclass objects through a common superclass reference, making programs extensible without modifying existing code.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Abstraction and Interfaces
========================================================= */

const abstractionInterfaces = createTopic(
    "abstraction-and-interfaces",
    "Abstraction and Interfaces",

    [
        definition(
            "Abstraction",
            "Abstraction is the OOP principle of hiding the implementation details and showing only the essential features of an object. It focuses on 'what' an object does rather than 'how' it does it."
        ),

        heading("Ways to Achieve Abstraction"),

        table(
            ["Method", "Abstraction Level"],
            [
                ["Abstract Class", "0% to 100%"],
                ["Interface", "100%"],
            ]
        ),

        heading("Abstract Class"),

        definition(
            "Abstract Class",
            "An abstract class is a class that cannot be instantiated (no object can be created directly). It may contain abstract methods (without body) and concrete methods (with body)."
        ),

        heading("Rules of Abstract Class"),

        list([
            "Declared with 'abstract' keyword.",
            "Cannot be instantiated directly.",
            "Can have abstract and non-abstract methods.",
            "Can have constructors, fields and static methods.",
            "Subclass must implement all abstract methods or be abstract itself.",
            "Can extend another class or implement interfaces.",
        ]),

        heading("Abstract Method"),

        text(
            "A method declared without body using 'abstract' keyword. Must be implemented by subclass."
        ),

        code(
            `abstract class Shape {
    String color;
    
    // Constructor
    Shape(String color) {
        this.color = color;
    }
    
    // Abstract method (no body)
    abstract double area();
    abstract double perimeter();
    
    // Concrete method
    void displayColor() {
        System.out.println("Color: " + color);
    }
}

class Circle extends Shape {
    double radius;
    
    Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }
    
    @Override
    double area() {
        return 3.14 * radius * radius;
    }
    
    @Override
    double perimeter() {
        return 2 * 3.14 * radius;
    }
}

class Rectangle extends Shape {
    double length, width;
    
    Rectangle(String color, double l, double w) {
        super(color);
        length = l;
        width = w;
    }
    
    @Override
    double area() {
        return length * width;
    }
    
    @Override
    double perimeter() {
        return 2 * (length + width);
    }
}

public class Main {
    public static void main(String[] args) {
        // Shape s = new Shape("Red");  // ERROR: cannot instantiate
        
        Shape c = new Circle("Red", 5);
        Shape r = new Rectangle("Blue", 4, 6);
        
        c.displayColor();
        System.out.println("Area: " + c.area(),;          // 78.5
        System.out.println("Perimeter: " + c.perimeter(),; // 31.4
        
        r.displayColor();
        System.out.println("Area: " + r.area(),;          // 24.0
    }
}`,
            "java",
            "Abstract class example"
        ),

        heading("Interfaces"),

        definition(
            "Interface",
            "An interface is a blueprint of a class containing only abstract methods (before Java 8), static and final variables. It provides 100% abstraction and is used to achieve multiple inheritance."
        ),

        heading("Rules of Interfaces"),

        list([
            "Declared with 'interface' keyword.",
            "All methods are public and abstract by default (before Java 8).",
            "All variables are public, static and final (constants).",
            "Cannot have constructors.",
            "A class implements an interface using 'implements'.",
            "Can extend multiple interfaces.",
            "Can achieve multiple inheritance.",
        ]),

        heading("Interface Example"),

        code(
            `interface Animal {
    // Constants (implicitly public static final)
    int LEGS = 4;
    
    // Abstract methods (implicitly public abstract)
    void eat();
    void sleep();
    void makeSound();
}

class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog is eating");
    }
    
    @Override
    public void sleep() {
        System.out.println("Dog is sleeping");
    }
    
    @Override
    public void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
        d.sleep();
        d.makeSound();
        System.out.println("Legs: " + Animal.LEGS);
    }
}`,
            "java",
            "Interface example"
        ),

        heading("Multiple Interface Inheritance"),

        code(
            `interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

interface Runnable {
    void run();
}

// Can implement multiple interfaces
class Duck implements Flyable, Swimmable, Runnable {
    @Override
    public void fly() {
        System.out.println("Duck flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck swimming");
    }
    
    @Override
    public void run() {
        System.out.println("Duck running");
    }
}

public class Main {
    public static void main(String[] args) {
        Duck d = new Duck();
        d.fly();
        d.swim();
        d.run();
    }
}`,
            "java",
            "Multiple inheritance with interfaces"
        ),

        heading("Interface Inheritance"),

        code(
            `interface A {
    void methodA();
}

interface B {
    void methodB();
}

// Interface extending multiple interfaces
interface C extends A, B {
    void methodC();
}

class MyClass implements C {
    public void methodA() { System.out.println("A"); }
    public void methodB() { System.out.println("B"); }
    public void methodC() { System.out.println("C"); }
}`,
            "java",
            "Interface extending interfaces"
        ),

        heading("Default and Static Methods (Java 8+)"),

        text(
            "Java 8 introduced default and static methods in interfaces, allowing method implementation."
        ),

        code(
            `interface Vehicle {
    // Abstract method
    void start();
    
    // Default method (with body)
    default void stop() {
        System.out.println("Vehicle stopped");
    }
    
    // Static method
    static void info() {
        System.out.println("Vehicle interface");
    }
}

class Car implements Vehicle {
    @Override
    public void start() {
        System.out.println("Car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Car c = new Car();
        c.start();      // Car started
        c.stop();       // Vehicle stopped (default)
        Vehicle.info(); // Vehicle interface (static)
    }
}`,
            "java",
            "Default and static methods"
        ),

        heading("Abstract Class vs Interface"),

        table(
            ["Basis", "Abstract Class", "Interface"],
            [
                ["Keyword", "abstract class", "interface"],
                ["Methods", "Abstract + concrete", "Abstract (default from Java 8)"],
                ["Variables", "Any type", "public static final only"],
                ["Constructor", "Yes", "No"],
                ["Multiple inheritance", "No", "Yes"],
                ["Access modifiers", "Any", "public only"],
                ["Implementation", "extends", "implements"],
                ["Speed", "Faster", "Slower"],
                ["Use", "Common base with some default", "Contract/API"],
            ]
        ),

        heading("When to Use Abstract Class"),

        list([
            "Related classes share common code.",
            "Need to declare non-public members.",
            "Need constructors, instance variables.",
            "Want to provide default implementation.",
            "Represent 'is-a' relationship strongly.",
        ]),

        heading("When to Use Interface"),

        list([
            "Unrelated classes need common behavior.",
            "Need multiple inheritance.",
            "Specifying a contract without implementation.",
            "API design where implementation may change.",
            "Represent 'can-do' capability.",
        ]),

        heading("Practical Example — Combining Both"),

        code(
            `interface Payable {
    double calculatePay();
}

abstract class Employee {
    String name;
    int id;
    
    Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    abstract void displayRole();
    
    void showInfo() {
        System.out.println("ID: " + id + ", Name: " + name);
    }
}

class FullTimeEmployee extends Employee implements Payable {
    double salary;
    
    FullTimeEmployee(String name, int id, double salary) {
        super(name, id);
        this.salary = salary;
    }
    
    @Override
    void displayRole() {
        System.out.println("Full-time employee");
    }
    
    @Override
    public double calculatePay() {
        return salary;
    }
}

class Contractor extends Employee implements Payable {
    double hourlyRate;
    int hoursWorked;
    
    Contractor(String name, int id, double rate, int hours) {
        super(name, id);
        hourlyRate = rate;
        hoursWorked = hours;
    }
    
    @Override
    void displayRole() {
        System.out.println("Contractor");
    }
    
    @Override
    public double calculatePay() {
        return hourlyRate * hoursWorked;
    }
}`,
            "java",
            "Combining abstract class and interface"
        ),

        note(
            "In Java 8+, interfaces gained default and static methods, blurring the line between interfaces and abstract classes. Use interfaces when you need multiple inheritance or want to define a contract, and abstract classes when sharing common code is more important.",
            "tip",
            "Modern Java"
        ),

        keyPoints([
            "Abstraction hides implementation details.",
            "Abstract class can have abstract and concrete methods.",
            "Interface provides 100% abstraction.",
            "Java allows multiple interface implementation.",
            "Interfaces support default and static methods (Java 8+).",
            "Choose based on inheritance and implementation needs.",
        ]),
    ],

    {
        summary:
            "Learn abstraction, abstract classes, interfaces, multiple inheritance and default methods.",
        minutes: 14,
        tags: ["abstraction", "abstract-class", "interface", "important"],

        mcqs: [
            mcq(
                "Which achieves 100% abstraction?",
                ["Abstract class", "Interface", "Both", "Neither"],
                1,
                "Interface provides 100% abstraction."
            ),
            mcq(
                "Abstract class:",
                ["Can be instantiated", "Cannot be instantiated", "Must be final", "Cannot have methods"],
                1,
                "Abstract class cannot be instantiated."
            ),
            mcq(
                "Interface methods are by default:",
                ["private", "protected", "public abstract", "static"],
                2,
                "Interface methods are public and abstract by default."
            ),
            mcq(
                "Which keyword implements interface?",
                ["extends", "implements", "inherits", "uses"],
                1,
                "'implements' keyword is used for interfaces."
            ),
        ],

        questions: [
            qa(
                "What is abstract class? Explain with example.",
                "An abstract class is a class that cannot be instantiated directly and may contain both abstract methods (without body) and concrete methods (with body). It is declared using the 'abstract' keyword. Subclasses must implement all abstract methods or be declared abstract themselves. Rules: (1) Declared with 'abstract' keyword; (2) Cannot be instantiated; (3) Can have constructors, fields, static methods; (4) Can have both abstract and non-abstract methods. Example: abstract class Shape { String color; Shape(String c) { color = c; } abstract double area(); void displayColor() { System.out.println(color); } } class Circle extends Shape { double radius; Circle(String c, double r) { super(c); radius = r; } double area() { return 3.14 * radius * radius; } } Abstract classes provide partial abstraction and are useful when you want to share common code among related classes while forcing them to implement specific methods.",
                4
            ),
            qa(
                "Differentiate between abstract class and interface.",
                "Abstract class and interface are both used to achieve abstraction but have key differences: (1) Keyword — abstract class uses 'abstract class', interface uses 'interface'; (2) Methods — abstract class can have both abstract and concrete methods, interface has only abstract methods (until Java 8 which added default/static methods); (3) Variables — abstract class can have any type of variables, interface has only public static final (constants); (4) Constructor — abstract class can have constructors, interface cannot; (5) Multiple Inheritance — a class can extend only one abstract class but implement multiple interfaces; (6) Access Modifiers — abstract class methods can have any access modifier, interface methods are public by default; (7) Keyword to use — 'extends' for abstract class, 'implements' for interface. Use abstract class for related classes sharing code, and interfaces for defining contracts or achieving multiple inheritance.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Exception Handling
========================================================= */

const exceptionHandling = createTopic(
    "exception-handling",
    "Exception Handling",

    [
        definition(
            "Exception",
            "An exception is an unwanted or unexpected event that occurs during program execution, disrupting the normal flow. Exception handling is the mechanism to handle such events gracefully."
        ),

        heading("Types of Errors"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Compile-time Error", "Syntax errors caught by compiler", "Missing semicolon"],
                ["Runtime Error", "Errors during execution (exceptions)", "Division by zero"],
                ["Logical Error", "Program compiles but gives wrong output", "Wrong formula"],
            ]
        ),

        heading("Exception Hierarchy"),

        text(
            "In Java, all exceptions extend from the Throwable class."
        ),

        code(
            `Throwable
├── Error (unchecked, JVM issues)
│   ├── OutOfMemoryError
│   └── StackOverflowError
└── Exception
    ├── Checked Exceptions (must be handled)
    │   ├── IOException
    │   ├── SQLException
    │   └── ClassNotFoundException
    └── Unchecked Exceptions (RuntimeException)
        ├── ArithmeticException
        ├── NullPointerException
        ├── ArrayIndexOutOfBoundsException
        └── NumberFormatException`,
            "text",
            "Exception hierarchy"
        ),

        heading("Checked vs Unchecked Exceptions"),

        table(
            ["Basis", "Checked", "Unchecked"],
            [
                ["Class", "Exception (except RuntimeException)", "RuntimeException"],
                ["Check", "At compile-time", "At runtime"],
                ["Handling", "Must be handled", "Optional"],
                ["Examples", "IOException, SQLException", "NullPointerException"],
                ["Cause", "External factors", "Programming errors"],
            ]
        ),

        heading("Common Exceptions"),

        table(
            ["Exception", "Cause"],
            [
                ["ArithmeticException", "Division by zero"],
                ["NullPointerException", "Accessing null reference"],
                ["ArrayIndexOutOfBoundsException", "Invalid array index"],
                ["StringIndexOutOfBoundsException", "Invalid string index"],
                ["NumberFormatException", "Invalid number conversion"],
                ["ClassNotFoundException", "Class not found"],
                ["FileNotFoundException", "File doesn't exist"],
                ["IOException", "I/O error"],
                ["ClassCastException", "Invalid type casting"],
                ["IllegalArgumentException", "Invalid argument"],
            ]
        ),

        heading("try-catch Block"),

        code(
            `try {
    // Code that may throw exception
} catch (ExceptionType e) {
    // Handle exception
}`,
            "java",
            "try-catch syntax"
        ),

        heading("Basic Example"),

        code(
            `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;  // ArithmeticException
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
        
        System.out.println("Program continues...");
    }
}

// Output:
// Error: / by zero
// Program continues...`,
            "java",
            "Basic try-catch"
        ),

        heading("Multiple catch Blocks"),

        code(
            `public class Main {
    public static void main(String[] args) {
        try {
            int[] arr = {1, 2, 3};
            System.out.println(arr[5]);   // ArrayIndexOutOfBoundsException
            int x = 10 / 0;                // Not reached
            
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error: " + e.getMessage(),;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Array error: " + e.getMessage(),;
        } catch (Exception e) {
            System.out.println("Generic error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Multiple catch blocks"
        ),

        heading("Multi-catch (Java 7+)"),

        code(
            `try {
    // some code
} catch (IOException | SQLException e) {
    // Handle both exceptions same way
    System.out.println("Error: " + e.getMessage(),;
}`,
            "java",
            "Multi-catch"
        ),

        heading("finally Block"),

        definition(
            "finally",
            "The finally block contains code that always executes whether an exception occurs or not. It is used for cleanup activities like closing files or database connections."
        ),

        code(
            `public class Main {
    public static void main(String[] args) {
        try {
            int result = 10 / 2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage(),;
        } finally {
            System.out.println("Finally block executed");
        }
    }
}

// Output:
// Result: 5
// Finally block executed`,
            "java",
            "finally block"
        ),

        heading("try-catch-finally Flow"),

        table(
            ["Scenario", "try", "catch", "finally"],
            [
                ["No exception", "Executes", "Skipped", "Executes"],
                ["Exception caught", "Partial", "Executes", "Executes"],
                ["Exception uncaught", "Partial", "Skipped", "Executes"],
                ["System.exit()", "Partial", "May execute", "Skipped"],
            ]
        ),

        heading("throw Keyword"),

        text(
            "The 'throw' keyword is used to explicitly throw an exception."
        ),

        code(
            `public class Main {
    static void checkAge(int age) {
        if (age < 18) {
            throw new ArithmeticException("Age must be 18+");
        }
        System.out.println("Access granted");
    }
    
    public static void main(String[] args) {
        try {
            checkAge(15);
        } catch (ArithmeticException e) {
            System.out.println("Caught: " + e.getMessage(),;
        }
    }
}

// Output: Caught: Age must be 18+`,
            "java",
            "throw keyword"
        ),

        heading("throws Keyword"),

        text(
            "The 'throws' keyword is used to declare exceptions that a method might throw. Caller must handle or declare them."
        ),

        code(
            `import java.io.*;

public class Main {
    // Declare that method may throw exception
    static void readFile() throws IOException {
        FileReader fr = new FileReader("file.txt");
        // File operations...
    }
    
    public static void main(String[] args) {
        try {
            readFile();
        } catch (IOException e) {
            System.out.println("File error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "throws keyword"
        ),

        heading("throw vs throws"),

        table(
            ["Basis", "throw", "throws"],
            [
                ["Purpose", "Actually throw exception", "Declare exception"],
                ["Location", "Inside method", "Method signature"],
                ["Multiple", "Only one exception", "Multiple with comma"],
                ["Follows", "Exception object", "Exception class"],
            ]
        ),

        heading("User-Defined Exceptions"),

        definition(
            "Custom Exception",
            "A user-defined exception is a class that extends Exception (checked) or RuntimeException (unchecked) to create application-specific exceptions."
        ),

        code(
            `// Custom exception class
class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

class VotingSystem {
    static void checkVoterAge(int age) throws InvalidAgeException {
        if (age < 18) {
            throw new InvalidAgeException("Age must be 18+ to vote");
        }
        System.out.println("Eligible to vote");
    }
}

public class Main {
    public static void main(String[] args) {
        try {
            VotingSystem.checkVoterAge(16);
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
        
        try {
            VotingSystem.checkVoterAge(25);
        } catch (InvalidAgeException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}

// Output:
// Error: Age must be 18+ to vote
// Eligible to vote`,
            "java",
            "Custom exception"
        ),

        heading("try-with-resources (Java 7+)"),

        text(
            "Automatically closes resources like files or database connections. Resources must implement AutoCloseable interface."
        ),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Resource declared in try - auto-closed
        try (FileReader fr = new FileReader("file.txt");
             BufferedReader br = new BufferedReader(fr), {
            
            String line;
            while ((line = br.readLine(), != null) {
                System.out.println(line);
            }
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
        // No need for finally to close resources
    }
}`,
            "java",
            "try-with-resources"
        ),

        heading("Exception Handling Best Practices"),

        list([
            "Catch specific exceptions before general ones.",
            "Don't swallow exceptions (empty catch blocks).",
            "Log exceptions properly.",
            "Use finally or try-with-resources for cleanup.",
            "Create meaningful custom exceptions.",
            "Don't use exceptions for flow control.",
            "Include useful information in exception messages.",
            "Handle exceptions at appropriate level.",
        ]),

        heading("Exception Handling Advantages"),

        list([
            "Separates error-handling code from normal code.",
            "Prevents program crashes.",
            "Allows recovery from errors.",
            "Provides meaningful error messages.",
            "Enables debugging.",
            "Ensures resource cleanup.",
        ]),

        note(
            "Never catch exceptions just to hide them. Always handle them meaningfully — log them, recover from them, or rethrow them with more context. Silent failures make debugging extremely difficult.",
            "warning",
            "Exception Anti-pattern"
        ),

        keyPoints([
            "Exceptions handle runtime errors gracefully.",
            "try-catch-finally structure for handling.",
            "Checked exceptions must be handled or declared.",
            "throw actually throws; throws declares.",
            "Create custom exceptions for domain-specific errors.",
            "Use try-with-resources for automatic cleanup.",
        ]),
    ],

    {
        summary:
            "Learn exception handling in Java: try-catch, finally, throw, throws, custom exceptions and best practices.",
        minutes: 14,
        tags: ["exception", "try-catch", "throws", "finally", "important"],

        mcqs: [
            mcq(
                "Which block always executes?",
                ["try", "catch", "finally", "throw"],
                2,
                "finally block always executes."
            ),
            mcq(
                "Which is an unchecked exception?",
                ["IOException", "SQLException", "NullPointerException", "ClassNotFoundException"],
                2,
                "NullPointerException is unchecked (runtime)."
            ),
            mcq(
                "throw keyword is used to:",
                ["Declare exception", "Throw exception", "Catch exception", "Handle exception"],
                1,
                "throw actually throws an exception."
            ),
            mcq(
                "Custom exceptions extend:",
                ["Object", "Exception or RuntimeException", "Throwable directly", "Error"],
                1,
                "Custom exceptions extend Exception or RuntimeException."
            ),
        ],

        questions: [
            qa(
                "Explain exception handling with try-catch-finally.",
                "Exception handling in Java is a mechanism to gracefully handle runtime errors, preventing program crashes. It uses try-catch-finally blocks: try — contains code that may throw an exception; catch — handles specific exceptions; finally — always executes regardless of exception occurrence, used for cleanup. Example: try { int result = 10 / 0; } catch (ArithmeticException e) { System.out.println('Error: ' + e.getMessage(),; } finally { System.out.println('Cleanup done'); } Multiple catch blocks can handle different exceptions, with more specific exceptions caught before general ones. The finally block executes even if an exception is uncaught. Java 7+ introduced try-with-resources for automatic resource cleanup. Exception handling separates error code from normal code, improves reliability and enables recovery from errors.",
                4
            ),
            qa(
                "Differentiate between throw and throws keywords.",
                "throw and throws are both used in exception handling but serve different purposes. throw is used to explicitly throw an exception object; it is used inside a method body and can throw only one exception at a time. It is followed by an exception object. Example: throw new ArithmeticException('Cannot divide by zero'); throws is used to declare exceptions in a method signature that the method might throw; it is used with method declaration and can declare multiple exceptions separated by commas. It is followed by exception class names. Example: void readFile() throws IOException, SQLException { ... }. When a method declares exceptions using throws, the caller must either handle them with try-catch or declare them with throws. throw actually throws an exception during execution while throws only informs about possible exceptions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Java I/O and File Handling
========================================================= */

const javaIO = createTopic(
    "java-io-and-file-handling",
    "Java I/O and File Handling",

    [
        definition(
            "Java I/O",
            "Java I/O (Input/Output) is a mechanism to perform read and write operations. Java provides the java.io package with various classes to handle input from keyboard, files and network, and output to console, files and network."
        ),

        heading("Streams in Java"),

        definition(
            "Stream",
            "A stream is a sequence of data flowing from source to destination. Java uses streams for input and output operations."
        ),

        heading("Types of Streams"),

        table(
            ["Type", "Description", "Base Classes"],
            [
                ["Byte Stream", "Handles 8-bit bytes", "InputStream, OutputStream"],
                ["Character Stream", "Handles 16-bit Unicode characters", "Reader, Writer"],
            ]
        ),

        heading("Standard I/O Streams"),

        table(
            ["Stream", "Purpose"],
            [
                ["System.in", "Standard input (keyboard)"],
                ["System.out", "Standard output (console)"],
                ["System.err", "Standard error output"],
            ]
        ),

        heading("Console Output"),

        code(
            `// print - no newline
System.out.print("Hello ");
System.out.print("World");
// Output: Hello World

// println - with newline
System.out.println("Hello");
System.out.println("World");
// Output:
// Hello
// World

// printf - formatted
System.out.printf("Name: %s, Age: %d%n", "Amit", 20);
// Output: Name: Amit, Age: 20

// format specifiers
System.out.printf("Integer: %d%n", 100);
System.out.printf("Float: %.2f%n", 3.14159);
System.out.printf("String: %s%n", "Java");
System.out.printf("Character: %c%n", 'A');`,
            "java",
            "Console output"
        ),

        heading("Console Input"),

        heading("Using Scanner Class"),

        code(
            `import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter name: ");
        String name = sc.nextLine();
        
        System.out.print("Enter age: ");
        int age = sc.nextInt();
        
        System.out.print("Enter salary: ");
        double salary = sc.nextDouble();
        
        System.out.println("\\nDetails:");
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: " + salary);
        
        sc.close();
    }
}`,
            "java",
            "Scanner input"
        ),

        heading("Scanner Methods"),

        table(
            ["Method", "Description"],
            [
                ["nextInt()", "Read integer"],
                ["nextDouble()", "Read double"],
                ["nextFloat()", "Read float"],
                ["nextLong()", "Read long"],
                ["nextBoolean()", "Read boolean"],
                ["next()", "Read word (until space)"],
                ["nextLine()", "Read entire line"],
                ["hasNext()", "Check if more input available"],
            ]
        ),

        heading("Using BufferedReader"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(
            new InputStreamReader(System.in)
        );
        
        System.out.print("Enter name: ");
        String name = br.readLine();
        
        System.out.print("Enter age: ");
        int age = Integer.parseInt(br.readLine(),;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        
        br.close();
    }
}`,
            "java",
            "BufferedReader input"
        ),

        heading("Scanner vs BufferedReader"),

        table(
            ["Basis", "Scanner", "BufferedReader"],
            [
                ["Package", "java.util", "java.io"],
                ["Speed", "Slower", "Faster"],
                ["Buffer size", "1 KB", "8 KB"],
                ["Parsing", "Built-in", "Manual"],
                ["Exception", "None", "Throws IOException"],
                ["Ease of use", "Easier", "More complex"],
            ]
        ),

        heading("File Handling"),

        text(
            "Java provides File class in java.io package for file operations like creating, deleting and checking file properties."
        ),

        heading("File Class Methods"),

        table(
            ["Method", "Description"],
            [
                ["createNewFile()", "Create new file"],
                ["exists()", "Check if file exists"],
                ["delete()", "Delete file"],
                ["getName()", "Get file name"],
                ["getPath()", "Get file path"],
                ["length()", "Get file size"],
                ["canRead()", "Check if readable"],
                ["canWrite()", "Check if writable"],
                ["isDirectory()", "Check if directory"],
                ["isFile()", "Check if file"],
                ["list()", "List files in directory"],
            ]
        ),

        heading("File Operations Example"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            File file = new File("test.txt");
            
            // Create file
            if (file.createNewFile(), {
                System.out.println("File created: " + file.getName(),;
            } else {
                System.out.println("File already exists");
            }
            
            // File information
            System.out.println("Path: " + file.getAbsolutePath(),;
            System.out.println("Size: " + file.length() + " bytes");
            System.out.println("Readable: " + file.canRead(),;
            System.out.println("Writable: " + file.canWrite(),;
            
            // Delete file
            // file.delete();
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "File operations"
        ),

        heading("Writing to File"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            FileWriter fw = new FileWriter("output.txt");
            fw.write("Hello, Java I/O!\\n");
            fw.write("This is written to file.\\n");
            fw.write("Line 3\\n");
            fw.close();
            
            System.out.println("File written successfully");
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "FileWriter"
        ),

        heading("Reading from File"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            FileReader fr = new FileReader("output.txt");
            BufferedReader br = new BufferedReader(fr);
            
            String line;
            while ((line = br.readLine(), != null) {
                System.out.println(line);
            }
            
            br.close();
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "FileReader"
        ),

        heading("Try-with-Resources for Files"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Auto-close resources
        try (BufferedReader br = new BufferedReader(
                new FileReader("data.txt"),) {
            
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
            "Try-with-resources for files"
        ),

        heading("Writing with PrintWriter"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try (PrintWriter pw = new PrintWriter(new FileWriter("log.txt"),) {
            pw.println("Line 1");
            pw.println("Line 2");
            pw.printf("Formatted: %s = %d%n", "count", 100);
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "PrintWriter"
        ),

        heading("Appending to File"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        try {
            // true = append mode
            FileWriter fw = new FileWriter("log.txt", true);
            fw.write("Appended line\\n");
            fw.close();
            
            System.out.println("Content appended");
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Appending to file"
        ),

        heading("Reading Line by Line"),

        code(
            `import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> lines = new ArrayList<>();
        
        try (BufferedReader br = new BufferedReader(
                new FileReader("data.txt"),) {
            
            String line;
            int lineNum = 1;
            
            while ((line = br.readLine(), != null) {
                lines.add(line);
                System.out.println(lineNum + ": " + line);
                lineNum++;
            }
            
            System.out.println("\\nTotal lines: " + lines.size(),;
            
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Reading line by line"
        ),

        heading("Working with Directories"),

        code(
            `import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Create directory
        File dir = new File("myFolder");
        if (dir.mkdir(), {
            System.out.println("Directory created");
        }
        
        // Create nested directories
        File nested = new File("parent/child/grandchild");
        nested.mkdirs();
        
        // List directory contents
        File currentDir = new File(".");
        String[] files = currentDir.list();
        
        System.out.println("\\nFiles in current directory:");
        for (String file : files) {
            System.out.println(file);
        }
        
        // Filter files
        File[] filtered = currentDir.listFiles((d, name) -> name.endsWith(".java"),;
        System.out.println("\\nJava files:");
        for (File f : filtered) {
            System.out.println(f.getName(),;
        }
    }
}`,
            "java",
            "Directory operations"
        ),

        heading("Serialization"),

        definition(
            "Serialization",
            "Serialization is the process of converting an object into a byte stream for storage or transmission. Deserialization reverses this process."
        ),

        code(
            `import java.io.*;

class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    
    int rollNo;
    String name;
    
    Student(int r, String n) {
        rollNo = r;
        name = n;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s = new Student(101, "Amit");
        
        // Serialize
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("student.ser"),) {
            oos.writeObject(s);
            System.out.println("Object serialized");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage(),;
        }
        
        // Deserialize
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("student.ser"),) {
            Student loaded = (Student) ois.readObject();
            System.out.println("Roll: " + loaded.rollNo);
            System.out.println("Name: " + loaded.name);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage(),;
        }
    }
}`,
            "java",
            "Serialization"
        ),

        heading("Common I/O Classes"),

        table(
            ["Class", "Purpose"],
            [
                ["FileInputStream", "Read bytes from file"],
                ["FileOutputStream", "Write bytes to file"],
                ["FileReader", "Read characters from file"],
                ["FileWriter", "Write characters to file"],
                ["BufferedReader", "Buffered character input"],
                ["BufferedWriter", "Buffered character output"],
                ["PrintWriter", "Formatted character output"],
                ["ObjectInputStream", "Read objects"],
                ["ObjectOutputStream", "Write objects"],
                ["DataInputStream", "Read primitive types"],
                ["DataOutputStream", "Write primitive types"],
            ]
        ),

        note(
            "Always close I/O resources to prevent resource leaks. Use try-with-resources (Java 7+) which automatically closes resources implementing AutoCloseable interface.",
            "tip",
            "Resource Management"
        ),

        keyPoints([
            "Java I/O uses streams for data transfer.",
            "Byte streams for binary; character streams for text.",
            "Scanner is easier; BufferedReader is faster.",
            "Use File class for file operations.",
            "Try-with-resources auto-closes streams.",
            "Serialization saves objects to files.",
        ]),
    ],

    {
        summary:
            "Learn Java I/O — console input/output, file handling, streams, readers, writers and serialization.",
        minutes: 15,
        tags: ["io", "file", "scanner", "bufferedreader", "serialization"],

        mcqs: [
            mcq(
                "Which class reads primitive types from console?",
                ["Scanner", "PrintWriter", "FileReader", "System"],
                0,
                "Scanner class reads primitive data types."
            ),
            mcq(
                "Which is faster?",
                ["Scanner", "BufferedReader", "Both same", "Depends"],
                1,
                "BufferedReader is faster with larger buffer."
            ),
            mcq(
                "Which package has File class?",
                ["java.util", "java.io", "java.lang", "java.net"],
                1,
                "File class is in java.io package."
            ),
            mcq(
                "Serialization converts object to:",
                ["JSON", "XML", "Byte stream", "Text"],
                2,
                "Serialization converts to byte stream."
            ),
        ],

        questions: [
            qa(
                "Explain Scanner and BufferedReader for input in Java.",
                "Scanner and BufferedReader are two common ways to read input in Java. Scanner (java.util package) is easier to use with built-in parsing methods like nextInt(), nextDouble(), nextLine(). Example: Scanner sc = new Scanner(System.in); int age = sc.nextInt(); String name = sc.nextLine(); It's slower but more convenient with 1 KB buffer. BufferedReader (java.io package) reads text as strings and requires manual parsing. Example: BufferedReader br = new BufferedReader(new InputStreamReader(System.in),; String line = br.readLine(); int age = Integer.parseInt(line); It's faster with 8 KB buffer, throws IOException. Use Scanner for simple input with parsing needs; use BufferedReader for large input or performance-critical applications. Both should be closed after use to release resources.",
                4
            ),
            qa(
                "Explain file handling in Java with example.",
                "File handling in Java allows programs to read from and write to files using the java.io package. The File class represents file/directory paths and provides methods like createNewFile(), exists(), delete(), length(). For reading files, use FileReader with BufferedReader for text. For writing, use FileWriter with BufferedWriter or PrintWriter. Example: Writing: try (FileWriter fw = new FileWriter('output.txt'), { fw.write('Hello Java'); } Reading: try (BufferedReader br = new BufferedReader(new FileReader('output.txt'),) { String line; while ((line = br.readLine(), != null) { System.out.println(line); } } The try-with-resources (Java 7+) automatically closes files after use. FileWriter's second parameter 'true' enables append mode. All file operations throw IOException which must be handled. Directory operations use mkdir(), mkdirs(), list() and listFiles().",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    inheritance,
    polymorphism,
    abstractionInterfaces,
    exceptionHandling,
    javaIO,
];
