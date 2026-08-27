/* =========================================================
   MSc-IT • SEM 1 • Python Programming
   UNIT 2 — Aggregate Data Types
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
   TOPIC 1 — Lists: Creation, Accessing and Slicing
========================================================= */

const listsBasics = createTopic(
    "lists-creation-accessing-and-slicing",
    "Lists: Creation, Accessing and Slicing",

    [
        definition(
            "List",
            "An ordered, mutable collection of items that can hold elements of different data types. Lists are created using square brackets [ ] and are the most versatile aggregate data type in Python."
        ),

        text(
            "Lists are the workhorse of Python data structures. They can store integers, strings, floats, booleans, other lists, or any combination of types in a single variable. Because lists are mutable, you can add, remove or change elements after the list has been created."
        ),

        heading("Creating Lists"),

        code(
            `# Empty list
empty = []
also_empty = list()

# List of integers
numbers = [10, 20, 30, 40, 50]

# List of strings
fruits = ["apple", "banana", "cherry", "date"]

# Mixed data types
mixed = [1, "hello", 3.14, True, None]

# Nested list (list of lists)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Using the list() constructor
letters = list("Python")
print(letters)  # ['P', 'y', 't', 'h', 'o', 'n']

# Using range
nums = list(range(1, 6))
print(nums)  # [1, 2, 3, 4, 5]`,
            "python",
            "Different ways to create lists"
        ),

        heading("Accessing Elements"),

        text(
            "List elements are accessed using their index position. Python uses zero-based indexing, meaning the first element is at index 0. Python also supports negative indexing, where -1 refers to the last element, -2 to the second last, and so on."
        ),

        table(
            ["Index Type", "Syntax", "Example (fruits = ['apple','banana','cherry','date'])", "Result"],
            [
                ["Positive (from start)", "fruits[0]", "fruits[0]", "'apple'"],
                ["Positive", "fruits[2]", "fruits[2]", "'cherry'"],
                ["Negative (from end)", "fruits[-1]", "fruits[-1]", "'date'"],
                ["Negative", "fruits[-3]", "fruits[-3]", "'banana'"],
                ["Out of range", "fruits[10]", "fruits[10]", "IndexError"],
            ]
        ),

        code(
            `fruits = ["apple", "banana", "cherry", "date"]

print(fruits[0])    # apple
print(fruits[-1])   # date
print(fruits[2])    # cherry

# Nested list access
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(matrix[1][2])  # 6  (row 1, column 2)`,
            "python",
            "Accessing list elements by index"
        ),

        heading("Slicing"),

        definition(
            "Slicing",
            "Extracting a portion of a list using the syntax list[start:stop:step], where start is inclusive, stop is exclusive, and step is the interval between elements."
        ),

        table(
            ["Syntax", "Meaning", "Example (nums = [0,1,2,3,4,5,6,7,8,9])", "Result"],
            [
                ["nums[2:5]", "Elements from index 2 to 4", "nums[2:5]", "[2, 3, 4]"],
                ["nums[:4]", "From start to index 3", "nums[:4]", "[0, 1, 2, 3]"],
                ["nums[6:]", "From index 6 to end", "nums[6:]", "[6, 7, 8, 9]"],
                ["nums[::2]", "Every second element", "nums[::2]", "[0, 2, 4, 6, 8]"],
                ["nums[::-1]", "Reverse the list", "nums[::-1]", "[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]"],
                ["nums[1:8:2]", "From 1 to 7, step 2", "nums[1:8:2]", "[1, 3, 5, 7]"],
            ]
        ),

        code(
            `nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(nums[2:5])    # [2, 3, 4]
print(nums[:4])     # [0, 1, 2, 3]
print(nums[6:])     # [6, 7, 8, 9]
print(nums[::2])    # [0, 2, 4, 6, 8]
print(nums[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

# Slicing creates a new list (shallow copy)
copy = nums[:]
print(copy is nums)  # False`,
            "python",
            "List slicing examples"
        ),

        note(
            "Slicing never raises an IndexError, even if the indices are out of range. For example, nums[100:200] simply returns an empty list [] instead of an error.",
            "tip",
            "Slicing Safety"
        ),

        heading("Basic List Operations"),

        table(
            ["Operation", "Syntax", "Example", "Result"],
            [
                ["Length", "len(list)", "len([1, 2, 3])", "3"],
                ["Concatenation", "list1 + list2", "[1, 2] + [3, 4]", "[1, 2, 3, 4]"],
                ["Repetition", "list * n", "[0] * 5", "[0, 0, 0, 0, 0]"],
                ["Membership", "x in list", "3 in [1, 2, 3]", "True"],
                ["Iteration", "for x in list", "for i in [1,2]: print(i)", "Prints 1 then 2"],
                ["Min / Max", "min() / max()", "min([5, 1, 9])", "1"],
                ["Sum", "sum(list)", "sum([1, 2, 3])", "6"],
            ]
        ),

        keyPoints([
            "Lists are ordered, mutable and can contain mixed data types.",
            "Indexing starts at 0; negative indexing starts at -1 for the last element.",
            "Slicing uses the syntax list[start:stop:step] and never raises IndexError.",
            "Slicing creates a new list, not a reference to the original.",
            "Built-in functions len(), min(), max() and sum() work directly on lists.",
        ]),
    ],

    {
        summary:
            "Learn to create lists, access elements by positive and negative index, and extract sublists using slicing.",
        minutes: 11,
        tags: ["python", "lists", "slicing", "important"],

        mcqs: [
            mcq(
                "What is the index of the first element in a Python list?",
                ["1", "0", "-1", "None"],
                1,
                "Python uses zero-based indexing, so the first element is at index 0."
            ),
            mcq(
                "What does fruits[-1] return if fruits = ['apple', 'banana', 'cherry']?",
                ["'apple'", "'banana'", "'cherry'", "IndexError"],
                2,
                "Negative index -1 refers to the last element, which is 'cherry'."
            ),
            mcq(
                "What is the result of [1, 2, 3, 4, 5][1:4]?",
                ["[1, 2, 3, 4]", "[2, 3, 4]", "[2, 3, 4, 5]", "[1, 2, 3]"],
                1,
                "Slicing [1:4] includes indices 1, 2 and 3, giving [2, 3, 4]."
            ),
            mcq(
                "What does [0] * 3 produce?",
                ["[0, 3]", "[0, 0, 0]", "[3, 3, 3]", "Error"],
                1,
                "The * operator repeats the list elements, giving [0, 0, 0]."
            ),
            mcq(
                "What does nums[::-1] do?",
                ["Removes the last element", "Reverses the list", "Returns every other element", "Raises an error"],
                1,
                "A step of -1 reverses the list."
            ),
            mcq(
                "Which function returns the number of elements in a list?",
                ["count()", "size()", "len()", "length()"],
                2,
                "The built-in len() function returns the number of elements."
            ),
        ],

        questions: [
            qa(
                "What is a list in Python? Explain its characteristics.",
                "A list is an ordered, mutable collection of items in Python that can hold elements of different data types. It is created using square brackets. Being ordered means elements maintain the sequence in which they were added. Being mutable means elements can be added, removed or changed after creation. Lists support indexing, slicing, concatenation, repetition and membership testing. They are the most versatile and commonly used aggregate data type in Python.",
                4
            ),
            qa(
                "Explain list slicing with at least five examples.",
                "List slicing extracts a portion of a list using the syntax list[start:stop:step]. For a list nums = [0,1,2,3,4,5,6,7,8,9], nums[2:5] returns [2,3,4] because start is inclusive and stop is exclusive. nums[:4] returns [0,1,2,3] from the beginning up to index 3. nums[6:] returns [6,7,8,9] from index 6 to the end. nums[::2] returns [0,2,4,6,8] taking every second element. nums[::-1] returns the entire list reversed as [9,8,7,6,5,4,3,2,1,0].",
                5
            ),
            qa(
                "Explain positive and negative indexing with examples.",
                "Positive indexing starts from 0 at the beginning of the list. For fruits = ['apple','banana','cherry','date'], fruits[0] gives 'apple' and fruits[2] gives 'cherry'. Negative indexing starts from -1 at the end of the list. So fruits[-1] gives 'date' and fruits[-3] gives 'banana'. Positive indexing counts forward from the start while negative indexing counts backward from the end. Accessing an index beyond the list length raises an IndexError.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — List Methods and List Comprehension
========================================================= */

const listMethodsAndComprehension = createTopic(
    "list-methods-and-list-comprehension",
    "List Methods and List Comprehension",

    [
        text(
            "Python provides a rich set of built-in methods to modify, search and rearrange lists. Additionally, list comprehension offers a concise and Pythonic way to create new lists from existing iterables."
        ),

        heading("Methods that Modify the List"),

        table(
            ["Method", "Purpose", "Example", "Result"],
            [
                ["append(x)", "Add x to the end", "lst.append(5)", "lst gains 5 at the end"],
                ["extend(iter)", "Add all items from iterable", "lst.extend([6, 7])", "lst gains 6 and 7"],
                ["insert(i, x)", "Insert x at index i", "lst.insert(0, 'a')", "'a' placed at index 0"],
                ["remove(x)", "Remove first occurrence of x", "lst.remove(3)", "First 3 is removed"],
                ["pop(i)", "Remove and return item at i", "lst.pop(0)", "Returns and removes item at 0"],
                ["pop()", "Remove and return last item", "lst.pop()", "Returns and removes last item"],
                ["clear()", "Remove all items", "lst.clear()", "lst becomes []"],
                ["sort()", "Sort the list in place", "lst.sort()", "lst is sorted ascending"],
                ["reverse()", "Reverse the list in place", "lst.reverse()", "lst order is reversed"],
            ]
        ),

        code(
            `fruits = ["banana", "apple", "cherry"]

# append
fruits.append("date")
print(fruits)  # ['banana', 'apple', 'cherry', 'date']

# insert
fruits.insert(1, "mango")
print(fruits)  # ['banana', 'mango', 'apple', 'cherry', 'date']

# remove
fruits.remove("apple")
print(fruits)  # ['banana', 'mango', 'cherry', 'date']

# pop
last = fruits.pop()
print(last)    # date
print(fruits)  # ['banana', 'mango', 'cherry']

# sort
fruits.sort()
print(fruits)  # ['banana', 'cherry', 'mango']

# reverse
fruits.reverse()
print(fruits)  # ['mango', 'cherry', 'banana']`,
            "python",
            "List modification methods"
        ),

        note(
            "append() adds a single element, while extend() adds each element of an iterable individually. If you do fruits.append(['date', 'fig']), you get a nested list. If you do fruits.extend(['date', 'fig']), you get two new elements at the same level.",
            "exam",
            "Frequently Asked"
        ),

        heading("Methods that Return Information"),

        table(
            ["Method", "Purpose", "Example", "Result"],
            [
                ["index(x)", "Index of first occurrence of x", "lst.index('a')", "Integer index"],
                ["count(x)", "Number of occurrences of x", "lst.count(3)", "Integer count"],
                ["copy()", "Shallow copy of the list", "lst.copy()", "New list with same elements"],
            ]
        ),

        code(
            `nums = [1, 2, 3, 2, 4, 2, 5]

print(nums.index(2))   # 1 (first occurrence)
print(nums.count(2))   # 3 (appears three times)

# copy vs assignment
a = [1, 2, 3]
b = a          # b references the same list
c = a.copy()   # c is a new list

a[0] = 99
print(b[0])  # 99  (b is affected)
print(c[0])  # 1   (c is not affected)`,
            "python",
            "List information methods and copying"
        ),

        heading("Sorting in Detail"),

        code(
            `nums = [5, 2, 8, 1, 9, 3]

# sort() modifies in place
nums.sort()
print(nums)  # [1, 2, 3, 5, 8, 9]

# Descending order
nums.sort(reverse=True)
print(nums)  # [9, 8, 5, 3, 2, 1]

# sorted() returns a new list (does not modify original)
original = [5, 2, 8]
new_list = sorted(original)
print(original)  # [5, 2, 8] (unchanged)
print(new_list)  # [2, 5, 8]

# Sorting with key
words = ["banana", "apple", "cherry", "date"]
words.sort(key=len)
print(words)  # ['date', 'apple', 'banana', 'cherry']`,
            "python",
            "Sorting lists"
        ),

        heading("List Comprehension"),

        definition(
            "List Comprehension",
            "A concise syntax for creating a new list by applying an expression to each item in an iterable, optionally filtered by a condition. Syntax: [expression for item in iterable if condition]."
        ),

        table(
            ["Traditional Loop", "List Comprehension Equivalent"],
            [
                [
                    "squares = []\nfor x in range(10):\n    squares.append(x**2)",
                    "squares = [x**2 for x in range(10)]"
                ],
                [
                    "evens = []\nfor x in range(20):\n    if x % 2 == 0:\n        evens.append(x)",
                    "evens = [x for x in range(20) if x % 2 == 0]"
                ],
                [
                    "upper = []\nfor w in words:\n    upper.append(w.upper())",
                    "upper = [w.upper() for w in words]"
                ],
            ]
        ),

        code(
            `# Basic comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# With condition (filter)
evens = [x for x in range(20) if x % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# With if-else
labels = ["even" if x % 2 == 0 else "odd" for x in range(5)]
print(labels)  # ['even', 'odd', 'even', 'odd', 'even']

# Nested comprehension (2D list)
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# Flattening a 2D list
flat = [x for row in matrix for x in row]
print(flat)  # [1, 2, 3, 2, 4, 6, 3, 6, 9]`,
            "python",
            "List comprehension examples"
        ),

        note(
            "List comprehensions are generally faster than equivalent for loops because they are optimised internally by Python. However, if the logic becomes too complex, a regular for loop is more readable and should be preferred.",
            "tip",
            "Performance"
        ),

        keyPoints([
            "append() adds one element; extend() adds multiple elements from an iterable.",
            "sort() modifies the list in place; sorted() returns a new sorted list.",
            "pop() without arguments removes and returns the last element.",
            "List comprehension [expr for x in iter if cond] is concise and faster than loops.",
            "Use .copy() to create a shallow copy; simple assignment (=) creates a reference.",
        ]),
    ],

    {
        summary:
            "Master list methods for adding, removing, sorting and searching elements, and learn list comprehension for concise list creation.",
        minutes: 12,
        tags: ["python", "lists", "methods", "comprehension", "important"],

        mcqs: [
            mcq(
                "What is the difference between append() and extend()?",
                ["No difference", "append adds one element, extend adds elements from an iterable", "append is faster", "extend works only on strings"],
                1,
                "append() adds a single element to the end, while extend() adds each element of an iterable individually."
            ),
            mcq(
                "What does lst.pop() without arguments do?",
                ["Removes the first element", "Removes and returns the last element", "Removes all elements", "Raises an error"],
                1,
                "pop() without arguments removes and returns the last element of the list."
            ),
            mcq(
                "Which method sorts a list in place?",
                ["sorted()", "sort()", "order()", "arrange()"],
                1,
                "The sort() method sorts the list in place, modifying the original list."
            ),
            mcq(
                "What is the output of [x**2 for x in range(4)]?",
                ["[1, 4, 9, 16]", "[0, 1, 4, 9]", "[0, 2, 4, 6]", "[1, 2, 3, 4]"],
                1,
                "range(4) gives 0,1,2,3 and squaring each gives [0, 1, 4, 9]."
            ),
            mcq(
                "What does a.copy() do?",
                ["Creates a deep copy", "Creates a shallow copy", "Creates a reference", "Deletes the list"],
                1,
                "The copy() method creates a shallow copy — a new list with the same elements."
            ),
            mcq(
                "What does [x for x in range(10) if x % 2 == 0] produce?",
                ["[1, 3, 5, 7, 9]", "[0, 2, 4, 6, 8]", "[2, 4, 6, 8, 10]", "[0, 1, 2, 3, 4]"],
                1,
                "The condition filters for even numbers from 0 to 9, giving [0, 2, 4, 6, 8]."
            ),
        ],

        questions: [
            qa(
                "Differentiate between append(), extend() and insert() with examples.",
                "The append() method adds a single element to the end of the list. For example, if lst = [1, 2], then lst.append(3) gives [1, 2, 3]. The extend() method adds each element of an iterable to the end. For example, lst.extend([4, 5]) gives [1, 2, 3, 4, 5]. If you use append with a list, it adds the entire list as a single nested element. The insert() method adds an element at a specified index. For example, lst.insert(0, 0) places 0 at the beginning, giving [0, 1, 2, 3, 4, 5].",
                5
            ),
            qa(
                "What is list comprehension? Explain with four examples.",
                "List comprehension is a concise syntax for creating a new list by applying an expression to each item in an iterable, optionally filtered by a condition. The syntax is [expression for item in iterable if condition]. For example, [x**2 for x in range(5)] creates [0, 1, 4, 9, 16]. With a filter, [x for x in range(10) if x % 2 == 0] creates [0, 2, 4, 6, 8]. With if-else, ['even' if x % 2 == 0 else 'odd' for x in range(3)] creates ['even', 'odd', 'even']. A nested comprehension like [[i*j for j in range(3)] for i in range(3)] creates a 2D multiplication table.",
                5
            ),
            qa(
                "Explain the difference between sort() and sorted().",
                "The sort() method sorts the list in place, meaning it modifies the original list and returns None. For example, if nums = [3, 1, 2], calling nums.sort() changes nums to [1, 2, 3]. The sorted() function returns a new sorted list and leaves the original unchanged. For example, if nums = [3, 1, 2], then new = sorted(nums) gives new = [1, 2, 3] while nums remains [3, 1, 2]. Both accept the reverse=True parameter for descending order and a key parameter for custom sorting criteria.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Tuples
========================================================= */

const tuples = createTopic(
    "tuples",
    "Tuples",

    [
        definition(
            "Tuple",
            "An ordered, immutable collection of items. Once created, elements cannot be added, removed or changed. Tuples are created using parentheses ( ) and are faster and more memory-efficient than lists."
        ),

        text(
            "Tuples are similar to lists in that they are ordered and can contain mixed data types, but they differ in one crucial way: they are immutable. This immutability makes tuples suitable for storing fixed collections of data that should not be modified, such as coordinates, database records or configuration values."
        ),

        heading("Creating Tuples"),

        code(
            `# Basic tuple
coordinates = (10, 20, 30)

# Without parentheses (tuple packing)
point = 5, 10, 15
print(type(point))  # <class 'tuple'>

# Single element tuple (comma is required)
single = (42,)
print(type(single))  # <class 'tuple'>

not_a_tuple = (42)
print(type(not_a_tuple))  # <class 'int'>

# Empty tuple
empty = ()
also_empty = tuple()

# From other iterables
from_list = tuple([1, 2, 3])
from_string = tuple("hello")
print(from_string)  # ('h', 'e', 'l', 'l', 'o')`,
            "python",
            "Creating tuples"
        ),

        note(
            "A single element tuple requires a trailing comma. Writing (42) is just an integer in parentheses, not a tuple. You must write (42,) to create a tuple with one element.",
            "warning",
            "Common Mistake"
        ),

        heading("Accessing and Slicing Tuples"),

        code(
            `colors = ("red", "green", "blue", "yellow", "purple")

# Indexing
print(colors[0])    # red
print(colors[-1])   # purple

# Slicing
print(colors[1:4])  # ('green', 'blue', 'yellow')
print(colors[::2])  # ('red', 'blue', 'purple')

# Length
print(len(colors))  # 5`,
            "python",
            "Accessing tuple elements"
        ),

        heading("Tuple Immutability"),

        code(
            `t = (1, 2, 3)

# This raises a TypeError
# t[0] = 99  → TypeError: 'tuple' object does not support item assignment

# But if a tuple contains a mutable object, that object can be modified
t2 = (1, [2, 3], 4)
t2[1].append(5)
print(t2)  # (1, [2, 3, 5]) — the list inside was modified`,
            "python",
            "Tuple immutability"
        ),

        heading("Tuple Methods"),

        table(
            ["Method", "Purpose", "Example", "Result"],
            [
                ["count(x)", "Count occurrences of x", "(1,2,2,3).count(2)", "2"],
                ["index(x)", "Index of first occurrence", "(1,2,3).index(2)", "1"],
            ]
        ),

        note(
            "Tuples have only two methods — count() and index() — because they are immutable. Methods like append(), remove() and sort() do not exist for tuples.",
            "exam",
            "Frequently Asked"
        ),

        heading("Tuple Packing and Unpacking"),

        definition(
            "Tuple Packing",
            "The process of combining multiple values into a single tuple."
        ),

        definition(
            "Tuple Unpacking",
            "The process of extracting values from a tuple into separate variables."
        ),

        code(
            `# Packing
student = "Rahul", 22, "MSc IT"

# Unpacking
name, age, course = student
print(name)    # Rahul
print(age)     # 22
print(course)  # MSc IT

# Swap two variables using tuple unpacking
a, b = 10, 20
a, b = b, a
print(a, b)  # 20 10

# Unpacking with * (star)
first, *middle, last = [1, 2, 3, 4, 5]
print(first)   # 1
print(middle)  # [2, 3, 4]
print(last)    # 5`,
            "python",
            "Tuple packing and unpacking"
        ),

        heading("When to Use Tuples over Lists"),

        table(
            ["Use Tuples When", "Use Lists When"],
            [
                ["Data should not change (coordinates, dates)", "Data needs to be modified frequently"],
                ["You need a dictionary key (tuples are hashable)", "You need to add or remove elements"],
                ["Performance matters (tuples are faster)", "You need methods like sort() or append()"],
                ["Representing a fixed record (database row)", "Building a dynamic collection"],
                ["Returning multiple values from a function", "Collecting items in a loop"],
            ]
        ),

        heading("Named Tuples"),

        code(
            `from collections import namedtuple

# Define a named tuple type
Student = namedtuple("Student", ["name", "age", "course"])

# Create instances
s1 = Student("Rahul", 22, "MSc IT")
print(s1.name)    # Rahul
print(s1.age)     # 22
print(s1[0])      # Rahul (also accessible by index)`,
            "python",
            "Named tuples for readable code"
        ),

        keyPoints([
            "Tuples are ordered and immutable — elements cannot be changed after creation.",
            "A single-element tuple requires a trailing comma: (42,).",
            "Tuples have only two methods: count() and index().",
            "Tuple unpacking allows assigning multiple variables in one statement.",
            "Tuples are faster and more memory-efficient than lists and can be used as dictionary keys.",
        ]),
    ],

    {
        summary:
            "Understand tuple creation, immutability, packing and unpacking, and when to prefer tuples over lists.",
        minutes: 10,
        tags: ["python", "tuples", "immutable", "important"],

        mcqs: [
            mcq(
                "What is the type of (42)?",
                ["tuple", "int", "list", "Error"],
                1,
                "(42) is just an integer in parentheses. A single-element tuple requires a comma: (42,)."
            ),
            mcq(
                "How many built-in methods do tuples have?",
                ["0", "1", "2", "5"],
                2,
                "Tuples have exactly two methods: count() and index()."
            ),
            mcq(
                "Which of the following is true about tuples?",
                ["They are mutable", "They are unordered", "They are immutable", "They cannot contain mixed types"],
                2,
                "Tuples are immutable — their elements cannot be changed after creation."
            ),
            mcq(
                "What does a, b = b, a do in Python?",
                ["Causes an error", "Swaps the values of a and b", "Assigns b to both", "Creates a tuple"],
                1,
                "This is tuple unpacking used to swap two variables without a temporary variable."
            ),
            mcq(
                "Why can tuples be used as dictionary keys but lists cannot?",
                ["Tuples are faster", "Tuples are immutable and therefore hashable", "Lists are too large", "Python does not allow it by convention"],
                1,
                "Dictionary keys must be hashable, and only immutable types like tuples are hashable."
            ),
        ],

        questions: [
            qa(
                "What is a tuple? How does it differ from a list?",
                "A tuple is an ordered, immutable collection of items created using parentheses. The main difference from a list is that a tuple cannot be modified after creation — you cannot add, remove or change elements. Tuples have only two methods (count and index) compared to the many methods available for lists. Tuples are faster and more memory-efficient than lists, and because they are immutable and hashable, they can be used as dictionary keys, whereas lists cannot. A single-element tuple requires a trailing comma, such as (42,).",
                5
            ),
            qa(
                "Explain tuple packing and unpacking with examples.",
                "Tuple packing is the process of combining multiple values into a single tuple. For example, student = 'Rahul', 22, 'MSc IT' packs three values into a tuple. Tuple unpacking is the reverse — extracting values from a tuple into separate variables. For example, name, age, course = student assigns 'Rahul' to name, 22 to age and 'MSc IT' to course. Unpacking can also be used to swap variables: a, b = b, a swaps the values of a and b. The star operator can capture remaining elements: first, *middle, last = [1,2,3,4,5] gives first=1, middle=[2,3,4] and last=5.",
                5
            ),
            qa(
                "When should you use a tuple instead of a list?",
                "You should use a tuple when the data should not change, such as coordinates, dates or configuration values. Tuples are preferred when you need a dictionary key because they are immutable and hashable. They are also better when performance matters, as tuples are faster to create and iterate over than lists. Tuples are ideal for representing fixed records like database rows, and for returning multiple values from a function. Use a list when you need to frequently add, remove or modify elements.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Sets
========================================================= */

const sets = createTopic(
    "sets",
    "Sets",

    [
        definition(
            "Set",
            "An unordered, mutable collection of unique elements. Sets do not allow duplicate values and are created using curly braces { } or the set() constructor."
        ),

        text(
            "Sets are based on the mathematical concept of a set. They are extremely useful for membership testing, removing duplicates from a sequence, and performing mathematical set operations such as union, intersection and difference."
        ),

        heading("Creating Sets"),

        code(
            `# Using curly braces
colors = {"red", "green", "blue"}
print(colors)  # {'green', 'red', 'blue'} (order may vary)

# Duplicates are automatically removed
nums = {1, 2, 2, 3, 3, 3}
print(nums)  # {1, 2, 3}

# Using set() constructor
from_list = set([1, 2, 2, 3, 4, 4])
print(from_list)  # {1, 2, 3, 4}

from_string = set("hello")
print(from_string)  # {'h', 'e', 'l', 'o'}

# Empty set (must use set(), not {})
empty = set()
print(type(empty))  # <class 'set'>

# {} creates an empty dictionary, NOT a set
not_a_set = {}
print(type(not_a_set))  # <class 'dict'>`,
            "python",
            "Creating sets"
        ),

        note(
            "To create an empty set, you must use set(). Writing {} creates an empty dictionary, not an empty set. This is a very common mistake in exams and interviews.",
            "warning",
            "Common Mistake"
        ),

        heading("Set Operations (Mathematical)"),

            table(
                ["Operation", "Operator", "Method", "Meaning", "Example (A={1,2,3}, B={3,4,5})"],
                [
                    ["Union", "|", "A.union(B)", "All elements from both sets", "{1, 2, 3, 4, 5}"],
                    ["Intersection", "&", "A.intersection(B)", "Elements common to both", "{3}"],
                    ["Difference", "-", "A.difference(B)", "Elements in A but not in B", "{1, 2}"],
                    ["Symmetric Difference", "^", "A.symmetric_difference(B)", "Elements in either but not both", "{1, 2, 4, 5}"],
                ]
            ),

            code(
                `A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

print(A | B)   # Union: {1, 2, 3, 4, 5, 6}
print(A & B)   # Intersection: {3, 4}
print(A - B)   # Difference: {1, 2}
print(B - A)   # Difference: {5, 6}
print(A ^ B)   # Symmetric Difference: {1, 2, 5, 6}

# Subset and Superset
print({1, 2}.issubset(A))     # True
print(A.issuperset({1, 2}))   # True
print(A.isdisjoint({7, 8}))   # True (no common elements)`,
                "python",
                "Mathematical set operations"
            ),

            heading("Set Methods"),

            table(
                ["Method", "Purpose", "Example"],
                [
                    ["add(x)", "Add element x to the set", "s.add(5)"],
                    ["remove(x)", "Remove x; raises KeyError if not found", "s.remove(3)"],
                    ["discard(x)", "Remove x; does nothing if not found", "s.discard(99)"],
                    ["pop()", "Remove and return an arbitrary element", "s.pop()"],
                    ["clear()", "Remove all elements", "s.clear()"],
                    ["update(iter)", "Add all elements from an iterable", "s.update([4, 5, 6])"],
                    ["copy()", "Return a shallow copy", "s.copy()"],
                ]
            ),

            code(
                `fruits = {"apple", "banana"}

fruits.add("cherry")
print(fruits)  # {'apple', 'banana', 'cherry'}

fruits.discard("banana")
print(fruits)  # {'apple', 'cherry'}

# discard vs remove
fruits.discard("mango")   # No error, does nothing
# fruits.remove("mango")  # Would raise KeyError!

fruits.update(["date", "fig"])
print(fruits)  # {'apple', 'cherry', 'date', 'fig'}`,
                "python",
                "Set methods"
            ),

            heading("Practical Uses of Sets"),

            list([
                "Removing duplicates from a list: list(set(my_list)).",
                "Checking membership efficiently: if item in my_set is O(1) average time.",
                "Finding common elements between two collections using intersection.",
                "Finding unique elements using symmetric difference.",
                "Validating that all required items are present using issubset.",
            ]),

            code(
                `# Remove duplicates from a list
names = ["Rahul", "Priya", "Rahul", "Amit", "Priya"]
unique = list(set(names))
print(unique)  # ['Rahul', 'Priya', 'Amit'] (order may vary)

# Fast membership testing
valid_users = {"admin", "editor", "viewer"}
if "admin" in valid_users:
    print("Access granted")  # O(1) lookup`,
                "python",
                "Practical uses of sets"
            ),

            heading("Frozen Sets"),

            definition(
                "Frozenset",
                "An immutable version of a set. Once created, elements cannot be added or removed. Frozensets are hashable and can be used as dictionary keys or elements of other sets."
            ),

            code(
                `fs = frozenset([1, 2, 3])
print(fs)  # frozenset({1, 2, 3})

# fs.add(4)  → AttributeError: 'frozenset' has no attribute 'add'

# Can be used as dictionary key
d = {fs: "immutable set"}
print(d[fs])  # immutable set`,
                "python",
                "Frozenset example"
            ),

            keyPoints([
                "Sets are unordered collections of unique elements — duplicates are automatically removed.",
                "Use set() to create an empty set; {} creates an empty dictionary.",
                "Set operations: union (|), intersection (&), difference (-), symmetric difference (^).",
                "discard() does not raise an error if the element is missing; remove() raises KeyError.",
                "Sets provide O(1) average time for membership testing, making them ideal for lookups.",
            ]),
  ],

    {
        summary:
            "Learn set creation, mathematical operations, methods, practical uses and the immutable frozenset.",
        minutes: 11,
        tags: ["python", "sets", "important"],

        mcqs: [
            mcq(
                "What does {} create in Python?",
                ["An empty set", "An empty dictionary", "An empty tuple", "An error"],
                1,
                "{} creates an empty dictionary. To create an empty set, use set()."
            ),
            mcq(
                "What is the result of {1, 2, 2, 3, 3}?",
                ["{1, 2, 2, 3, 3}", "{1, 2, 3}", "[1, 2, 3]", "Error"],
                1,
                "Sets automatically remove duplicates, so the result is {1, 2, 3}."
            ),
            mcq(
                "Which operator performs set intersection?",
                ["|", "&", "-", "^"],
                1,
                "The & operator performs intersection, returning elements common to both sets."
            ),
            mcq(
                "What happens when you call discard() with an element not in the set?",
                ["KeyError is raised", "ValueError is raised", "Nothing happens", "The element is added"],
                2,
                "discard() silently does nothing if the element is not found, unlike remove() which raises KeyError."
            ),
            mcq(
                "What is a frozenset?",
                ["A sorted set", "An immutable set", "A set of frozen objects", "A set that cannot be iterated"],
                1,
                "A frozenset is an immutable version of a set that is hashable and can be used as a dictionary key."
            ),
            mcq(
                "What is the time complexity of checking membership in a set?",
                ["O(n)", "O(log n)", "O(1) average", "O(n²)"],
                2,
                "Set membership testing is O(1) on average due to hash table implementation."
            ),
        ],

        questions: [
            qa(
                "Explain the four mathematical set operations with examples.",
                "Given A = {1, 2, 3, 4} and B = {3, 4, 5, 6}, the union A | B gives {1, 2, 3, 4, 5, 6}, which contains all elements from both sets. The intersection A & B gives {3, 4}, which contains only elements present in both sets. The difference A - B gives {1, 2}, which contains elements in A but not in B. The symmetric difference A ^ B gives {1, 2, 5, 6}, which contains elements in either set but not in both. Each operation also has a method equivalent: union(), intersection(), difference() and symmetric_difference().",
                5
            ),
            qa(
                "Differentiate between remove() and discard() methods of sets.",
                "Both remove() and discard() delete a specified element from a set. The difference is in their behaviour when the element is not present. The remove() method raises a KeyError if the element is not found in the set. The discard() method silently does nothing if the element is not found. For example, if s = {1, 2, 3}, then s.remove(5) raises a KeyError, but s.discard(5) simply does nothing and the set remains unchanged. Use discard() when you are unsure whether the element exists.",
                4
            ),
            qa(
                "What are the practical uses of sets in Python?",
                "Sets are commonly used to remove duplicates from a list by converting it to a set and back: list(set(my_list)). They provide O(1) average time membership testing, making them ideal for checking if an item exists in a large collection. Set intersection finds common elements between two collections, such as finding mutual friends. Symmetric difference finds elements unique to each collection. The issubset() method validates that all required items are present. Frozensets, being immutable and hashable, can be used as dictionary keys.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Dictionaries
========================================================= */

const dictionaries = createTopic(
    "dictionaries",
    "Dictionaries",

    [
        definition(
            "Dictionary",
            "An unordered (ordered from Python 3.7+), mutable collection of key-value pairs. Keys must be unique and immutable, while values can be of any type. Dictionaries are created using curly braces { } with colon-separated key-value pairs."
        ),

        text(
            "Dictionaries are one of the most important data structures in Python. They provide extremely fast lookups by key, with O(1) average time complexity. Dictionaries are used extensively in real-world applications such as JSON data, configuration files, database records and API responses."
        ),

        heading("Creating Dictionaries"),

        code(
            `# Using curly braces
student = {
    "name": "Rahul",
    "age": 22,
    "course": "MSc IT",
    "marks": [85, 90, 78]
}

# Using dict() constructor
employee = dict(name="Priya", age=25, dept="IT")
print(employee)  # {'name': 'Priya', 'age': 25, 'dept': 'IT'}

# From list of tuples
pairs = [("a", 1), ("b", 2), ("c", 3)]
d = dict(pairs)
print(d)  # {'a': 1, 'b': 2, 'c': 3}

# Empty dictionary
empty = {}
also_empty = dict()

# Using fromkeys
keys = ["x", "y", "z"]
default_dict = dict.fromkeys(keys, 0)
print(default_dict)  # {'x': 0, 'y': 0, 'z': 0}`,
            "python",
            "Creating dictionaries"
        ),

        heading("Accessing Values"),

        table(
            ["Method", "Syntax", "Key Exists", "Key Missing"],
            [
                ["Bracket notation", "d['key']", "Returns value", "Raises KeyError"],
                ["get() method", "d.get('key')", "Returns value", "Returns None"],
                ["get() with default", "d.get('key', default)", "Returns value", "Returns default"],
            ]
        ),

        code(
            `student = {"name": "Rahul", "age": 22}

# Bracket notation
print(student["name"])  # Rahul
# print(student["phone"])  → KeyError!

# get() method (safer)
print(student.get("name"))           # Rahul
print(student.get("phone"))          # None
print(student.get("phone", "N/A"))   # N/A`,
            "python",
            "Accessing dictionary values"
        ),

        note(
            "Always prefer d.get('key') over d['key'] when you are not sure the key exists. The get() method returns None (or a default value) instead of crashing with a KeyError.",
            "tip",
            "Best Practice"
        ),

        heading("Modifying Dictionaries"),

        code(
            `student = {"name": "Rahul", "age": 22}

# Add or update
student["email"] = "r@email.com"   # Add new key
student["age"] = 23                # Update existing key
print(student)

# update() merges another dictionary
student.update({"phone": "98765", "age": 24})
print(student)

# Remove
del student["phone"]               # Delete by key
age = student.pop("age")           # Remove and return value
print(age)                         # 24

# popitem() removes the last inserted pair (Python 3.7+)
last = student.popitem()
print(last)  # ('email', 'r@email.com')

# clear() removes all items
student.clear()
print(student)  # {}`,
            "python",
            "Modifying dictionaries"
        ),

        heading("Dictionary Methods"),

        table(
            ["Method", "Purpose", "Returns"],
            [
                ["keys()", "All keys", "dict_keys view object"],
                ["values()", "All values", "dict_values view object"],
                ["items()", "All key-value pairs", "dict_items view object"],
                ["get(k, default)", "Value for key k", "Value or default"],
                ["update(d)", "Merge dictionary d", "None"],
                ["pop(k)", "Remove and return value for k", "Value"],
                ["popitem()", "Remove and return last pair", "(key, value) tuple"],
                ["setdefault(k, v)", "Return value of k; if missing, set k=v", "Value"],
                ["copy()", "Shallow copy", "New dictionary"],
                ["clear()", "Remove all items", "None"],
            ]
        ),

        heading("Iterating Over Dictionaries"),

        code(
            `student = {"name": "Rahul", "age": 22, "course": "MSc IT"}

# Iterate over keys (default)
for key in student:
    print(key)

# Iterate over values
for value in student.values():
    print(value)

# Iterate over key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")

# Output:
# name: Rahul
# age: 22
# course: MSc IT`,
            "python",
            "Iterating over dictionaries"
        ),

        heading("Dictionary Comprehension"),

        code(
            `# Basic comprehension
squares = {x: x**2 for x in range(1, 6)}
print(squares)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# With condition
evens = {x: x**2 for x in range(10) if x % 2 == 0}
print(evens)  # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Swap keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(swapped)  # {1: 'a', 2: 'b', 3: 'c'}`,
            "python",
            "Dictionary comprehension"
        ),

        heading("Nested Dictionaries"),

        code(
            `# Dictionary of dictionaries
students = {
    "S001": {"name": "Rahul", "marks": 85},
    "S002": {"name": "Priya", "marks": 92},
    "S003": {"name": "Amit", "marks": 78},
}

# Access nested values
print(students["S002"]["name"])  # Priya

# Iterate
for roll, info in students.items():
    print(f"{roll}: {info['name']} scored {info['marks']}")`,
            "python",
            "Nested dictionaries"
        ),

        heading("Comparison of All Aggregate Types"),

        table(
            ["Feature", "List", "Tuple", "Set", "Dictionary"],
            [
                ["Syntax", "[ ]", "( )", "{ }", "{k: v}"],
                ["Ordered", "Yes", "Yes", "No (3.7+: insertion order)", "Yes (3.7+)"],
                ["Mutable", "Yes", "No", "Yes", "Yes"],
                ["Duplicates", "Allowed", "Allowed", "Not allowed", "Keys: No, Values: Yes"],
                ["Indexing", "Yes", "Yes", "No", "By key"],
                ["Use case", "General collection", "Fixed data", "Unique items, math ops", "Key-value mapping"],
                ["Speed of lookup", "O(n)", "O(n)", "O(1) average", "O(1) average"],
            ]
        ),

        keyPoints([
            "Dictionaries store key-value pairs and provide O(1) average lookup by key.",
            "Use d.get('key') instead of d['key'] to avoid KeyError for missing keys.",
            "Keys must be immutable (string, int, tuple); values can be any type.",
            "Dictionary comprehension {k: v for ...} creates dictionaries concisely.",
            "From Python 3.7+, dictionaries maintain insertion order.",
        ]),
    ],

    {
        summary:
            "Master dictionary creation, access, modification, iteration, comprehension and nested structures, and compare all four aggregate types.",
        minutes: 13,
        tags: ["python", "dictionaries", "important"],

        mcqs: [
            mcq(
                "What happens when you access a missing key using d['key']?",
                ["Returns None", "Returns 0", "Raises KeyError", "Returns False"],
                2,
                "Accessing a missing key with bracket notation raises a KeyError."
            ),
            mcq(
                "What does d.get('key', 'N/A') return if the key is missing?",
                ["None", "KeyError", "'N/A'", "False"],
                2,
                "The get() method returns the specified default value when the key is not found."
            ),
            mcq(
                "Which of the following can be a dictionary key?",
                ["List", "Dictionary", "Set", "Tuple"],
                3,
                "Dictionary keys must be immutable and hashable. Tuples are immutable, so they can be keys."
            ),
            mcq(
                "What does d.popitem() return?",
                ["A random key", "The first key-value pair", "The last inserted key-value pair", "None"],
                2,
                "In Python 3.7+, popitem() removes and returns the last inserted key-value pair as a tuple."
            ),
            mcq(
                "What is the output of {x: x**2 for x in range(3)}?",
                ["{0: 0, 1: 1, 2: 4}", "{1: 1, 2: 4, 3: 9}", "[0, 1, 4]", "{0, 1, 4}"],
                0,
                "range(3) gives 0, 1, 2 and squaring each gives the dictionary {0: 0, 1: 1, 2: 4}."
            ),
            mcq(
                "Which aggregate type does NOT allow duplicate elements?",
                ["List", "Tuple", "Set", "Dictionary values"],
                2,
                "Sets do not allow duplicate elements — duplicates are automatically removed."
            ),
        ],

        questions: [
            qa(
                "What is a dictionary in Python? Explain how to create and access elements.",
                "A dictionary is a mutable collection of key-value pairs where keys are unique and immutable. It is created using curly braces with colon-separated pairs, for example student = {'name': 'Rahul', 'age': 22}. Elements are accessed using bracket notation like student['name'] which returns 'Rahul', but this raises a KeyError if the key is missing. The safer get() method returns None or a specified default value for missing keys: student.get('phone', 'N/A') returns 'N/A'. Dictionaries can also be created using the dict() constructor or from a list of tuples.",
                5
            ),
            qa(
                "Explain the methods keys(), values() and items() with an example.",
                "For a dictionary d = {'name': 'Rahul', 'age': 22, 'course': 'MSc IT'}, the keys() method returns a view of all keys: dict_keys(['name', 'age', 'course']). The values() method returns a view of all values: dict_values(['Rahul', 22, 'MSc IT']). The items() method returns a view of all key-value pairs as tuples: dict_items([('name', 'Rahul'), ('age', 22), ('course', 'MSc IT')]). These views are commonly used in for loops, especially items() which allows iterating over both keys and values simultaneously: for key, value in d.items().",
                5
            ),
            qa(
                "Compare all four aggregate data types: list, tuple, set and dictionary.",
                "Lists use square brackets, are ordered, mutable and allow duplicates; they are used for general-purpose collections. Tuples use parentheses, are ordered and immutable, allow duplicates, and are used for fixed data and as dictionary keys. Sets use curly braces, are unordered, mutable and do not allow duplicates; they are used for unique items and mathematical operations with O(1) membership testing. Dictionaries use curly braces with key-value pairs, are ordered from Python 3.7+, mutable, have unique keys but allow duplicate values, and provide O(1) key-based lookups; they are used for mapping relationships between data.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    listsBasics,
    listMethodsAndComprehension,
    tuples,
    sets,
    dictionaries,
];
