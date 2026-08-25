/* =========================================================
   BCA • SEM 1 • Fundamentals of Computer Organization
   UNIT 1 — Number Systems, Boolean Algebra and Logic Gates
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
   TOPIC 1 — Number Systems
========================================================= */

const numberSystems = createTopic(
    "number-systems",
    "Number Systems",

    [
        definition(
            "Number System",
            "An ordered set of digits, symbols or characters used to represent quantities and the rules by which arithmetic is performed on them."
        ),

        text(
            "A number system is identified by its base, also called the radix. The base indicates the number of unique digits used and the place value of each digit in the number."
        ),

        heading("Common Number Systems"),

        table(
            ["System", "Base", "Digits Used", "Example"],
            [
                ["Binary", "2", "0, 1", "1011₂"],
                ["Octal", "8", "0 to 7", "753₈"],
                ["Decimal", "10", "0 to 9", "629₁₀"],
                ["Hexadecimal", "16", "0 to 9, A to F", "2F5A₁₆"],
            ]
        ),

        note(
            "The hexadecimal system uses the letters A, B, C, D, E and F for the values ten to fifteen respectively. So A1F in hex equals 2591 in decimal.",
            "tip",
            "Hex Tip"
        ),

        heading("Positional Value"),

        text(
            "In any positional system, the value of a digit depends on two things: the digit itself and its place. The place values are successive powers of the base, starting from zero on the right."
        ),

        code(
            `Decimal 4 7 2 9
Place   10³ 10² 10¹ 10⁰
Value  4000 + 700 + 20 + 9 = 4729

Binary  1 0 1 1
Place   2³ 2² 2¹ 2⁰
Value    8 + 0 + 2 + 1 = 11`,
            "text",
            "Positional expansion"
        ),

        heading("Decimal to Binary Conversion"),

        steps([
            "Divide the decimal number by 2",
            "Note the remainder at each step",
            "Continue dividing the quotient until it becomes zero",
            "Read the remainders from bottom to top as the binary number",
        ]),

        code(
            `Convert 25 to binary
25 ÷ 2 = 12  remainder 1
12 ÷ 2 =  6  remainder 0
 6 ÷ 2 =  3  remainder 0
 3 ÷ 2 =  1  remainder 1
 1 ÷ 2 =  0  remainder 1

Reading bottom to top: 11001₂

Check: 1×16 + 1×8 + 0×4 + 0×2 + 1×1 = 25`,
            "text",
            "Decimal to binary using repeated division"
        ),

        heading("Binary to Decimal Conversion"),

        steps([
            "Write the binary number with place values above each digit",
            "Multiply each digit by its place value",
            "Add the products to obtain the decimal equivalent",
        ]),

        code(
            `Convert 11010₂ to decimal

Place  2⁴  2³  2²  2¹  2⁰
Digit   1   1   0   1   0

Value = 16 + 8 + 0 + 2 + 0 = 26`,
            "text",
            "Binary to decimal"
        ),

        heading("Decimal to Octal and Hexadecimal"),

        code(
            `Convert 425 to octal
425 ÷ 8 = 53  rem 1
 53 ÷ 8 =  6  rem 5
  6 ÷ 8 =  0  rem 6
Reading bottom to top: 651₈

Convert 1862 to hexadecimal
1862 ÷ 16 = 116  rem 6
 116 ÷ 16 =   7  rem 4
   7 ÷ 16 =   0  rem 7
Reading bottom to top: 746₁₆`,
            "text",
            "Decimal to octal and hex"
        ),

        heading("Binary to Octal and Hexadecimal"),

        code(
            `Binary 101110011 to octal
Group into 3 bits from right: 101  110  011
Convert each group         :  5    6    3
Result                     :  563₈

Binary 101110011 to hex
Group into 4 bits from right: 0001  0111  0011
Convert each group         :   1     7     3
Result                     :  173₁₆`,
            "text",
            "Shortcut conversions"
        ),

        heading("Fractional Conversions"),

        code(
            `Convert 0.625 to binary
0.625 × 2 = 1.25  integer 1
0.250 × 2 = 0.50  integer 0
0.500 × 2 = 1.00  integer 1
Read top to bottom: 0.101₂

Convert 25.375 to binary
Integer part 25 = 11001₂
Fraction 0.375 × 2 = 0.75  integer 0
            0.750 × 2 = 1.50  integer 1
            0.500 × 2 = 1.00  integer 1
Fraction part = 0.011₂
Result: 25.375₁₀ = 11001.011₂`,
            "text",
            "Fractional conversion by repeated multiplication"
        ),

        keyPoints([
            "Every number system has a base equal to the number of unique digits.",
            "Place values are successive powers of the base.",
            "Decimal to binary uses repeated division by 2 and reading remainders from bottom to top.",
            "Three binary bits make one octal digit and four binary bits make one hex digit.",
            "Fractional conversion uses repeated multiplication by the base.",
        ]),
    ],

    {
        summary:
            "Understand decimal, binary, octal and hexadecimal systems and learn to convert numbers between them.",
        minutes: 14,
        tags: ["number-system", "binary", "conversion", "important"],

        mcqs: [
            mcq(
                "The base of the binary number system is:",
                ["2", "8", "10", "16"],
                0,
                "Binary uses only two digits, so its base is 2."
            ),
            mcq(
                "The hexadecimal digit F has the decimal value:",
                ["10", "14", "15", "16"],
                2,
                "F represents fifteen in hexadecimal."
            ),
            mcq(
                "The binary equivalent of decimal 13 is:",
                ["1010", "1101", "1110", "1001"],
                1,
                "8 + 4 + 0 + 1 equals thirteen."
            ),
            mcq(
                "How many binary bits make one hex digit?",
                ["2", "3", "4", "8"],
                2,
                "Four bits cover values from 0 to 15, exactly one hex digit."
            ),
            mcq(
                "The octal equivalent of binary 101101 is:",
                ["45", "55", "65", "75"],
                1,
                "Grouping as 101 101 gives 5 and 5, so 55₈."
            ),
            mcq(
                "The decimal value of binary 1010 is:",
                ["8", "10", "12", "14"],
                1,
                "8 + 0 + 2 + 0 equals ten."
            ),
        ],

        questions: [
            qa(
                "Convert the decimal number 58 to binary, octal and hexadecimal.",
                "For binary, 58 divided by 2 gives remainders 0, 1, 0, 1, 1, 1, so 58 = 111010₂. For octal, 58 divided by 8 gives remainders 2 and 7, read as 72₈. For hexadecimal, 58 divided by 16 gives remainder 10 written as A, so 58 = 3A₁₆.",
                5
            ),
            qa(
                "Convert binary 11010110 to decimal, octal and hexadecimal.",
                "Binary 11010110 equals 128 + 64 + 16 + 4 + 2 = 214 in decimal. Grouping into threes from the right gives 011 010 110, which is 326₈. Grouping into fours gives 1101 0110, which is D6₁₆.",
                4
            ),
            qa(
                "Explain the positional value concept with an example.",
                "In a positional system, the value of a digit is the product of the digit and the value of its position, where positions are successive powers of the base starting from zero on the right. In decimal 4729, the place values are 1000, 100, 10 and 1, giving 4×1000 + 7×100 + 2×10 + 9×1 = 4729. Similarly in binary 1101, the place values are 8, 4, 2 and 1, giving 8 + 4 + 0 + 1 = 13.",
                4
            ),
            qa(
                "Convert the fractional decimal 0.6875 to binary.",
                "0.6875 × 2 = 1.375  integer 1, 0.375 × 2 = 0.75  integer 0, 0.75 × 2 = 1.5  integer 1, 0.5 × 2 = 1.0  integer 1. Reading the integers top to bottom gives 0.1011₂, which equals 0.5 + 0.125 + 0.0625 = 0.6875.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Binary Arithmetic
========================================================= */

const binaryArithmetic = createTopic(
    "binary-arithmetic",
    "Binary Arithmetic",

    [
        text(
            "The four basic operations of binary arithmetic follow the same pattern as decimal arithmetic. Because binary has only two digits, the rules are particularly simple."
        ),

        heading("Binary Addition Rules"),

        table(
            ["A", "B", "Sum", "Carry"],
            [
                ["0", "0", "0", "0"],
                ["0", "1", "1", "0"],
                ["1", "0", "1", "0"],
                ["1", "1", "0", "1"],
            ]
        ),

        heading("Binary Subtraction Rules"),

        table(
            ["A", "B", "Difference", "Borrow"],
            [
                ["0", "0", "0", "0"],
                ["1", "0", "1", "0"],
                ["0", "1", "1", "1"],
                ["1", "1", "0", "0"],
            ]
        ),

        heading("Worked Examples of Addition and Subtraction"),

        code(
            `Addition
   carry 1 1 1
         0 1 1 0    (6)
       + 1 0 1 1    (11)
       ---------
       1 0 0 0 1    (17)

Subtraction using borrow
        1 0 1 1 0    (22)
      -   1 1 0 1    (13)
      -----------
        0 1 0 0 1    (9)`,
            "text",
            "Binary addition and subtraction"
        ),

        heading("Signed Number Representation"),

        table(
            ["Representation", "Method", "Range for n bits"],
            [
                ["Sign and magnitude", "Leftmost bit is sign, rest is magnitude", "−(2^(n−1)−1) to +(2^(n−1)−1)"],
                ["1's complement", "Flip every bit of the positive number", "−(2^(n−1)−1) to +(2^(n−1)−1)"],
                ["2's complement", "Add 1 to the 1's complement", "−2^(n−1) to +(2^(n−1)−1)"],
                ["Excess (biased)", "Add a fixed bias to the value", "Shifts range to all positive"],
            ]
        ),

        note(
            "2's complement is the most widely used representation because subtraction can be performed by adding the 2's complement of the subtrahend, and there is only one zero.",
            "exam",
            "Frequently Asked"
        ),

        heading("Finding 1's and 2's Complement"),

        steps([
            "1's complement — replace every 0 with 1 and every 1 with 0",
            "2's complement — take the 1's complement and add 1 to it",
        ]),

        code(
            `Number      : 0 1 0 1 1 0 0   (decimal 44)
1's complement: 1 0 1 0 0 1 1
2's complement: 1 0 1 0 1 0 0   (decimal −44 in 2's complement)`,
            "text",
            "Computing 1's and 2's complement"
        ),

        heading("Subtraction Using 2's Complement"),

        steps([
            "Find the 2's complement of the subtrahend",
            "Add it to the minuend",
            "If a carry is produced, discard it and the result is positive",
            "If no carry is produced, the result is negative and is in 2's complement form",
        ]),

        code(
            `Compute 22 − 13 using 2's complement
  22       = 0 1 0 1 1 0
  13       = 0 0 1 1 0 1
  2's comp = 1 1 0 0 1 1

  0 1 0 1 1 0
+ 1 1 0 0 1 1
-------------
1 0 0 1 0 0 1
Discard carry → 0 0 1 0 0 1 = 9`,
            "text",
            "Subtraction using 2's complement"
        ),

        heading("Binary Multiplication and Division"),

        code(
            `Multiplication
        1 0 1 1    (11)
      ×   1 0 1    (5)
      ----------
        1 0 1 1
      0 0 0 0 0
    1 0 1 1 0 0
    ----------
  1 1 0 1 1 1 1   (55)

Division
   Dividend 1 0 1 1 0  (22)
   Divisor  1 0 1     (5)
   Quotient 1 0 0     (4)  Remainder 0 1 0  (2)`,
            "text",
            "Multiplication and long division"
        ),

        keyPoints([
            "Binary addition uses the rules 0+1=1 and 1+1=0 with a carry of 1.",
            "2's complement is the standard signed representation in modern computers.",
            "2's complement of a number is the 1's complement plus one.",
            "Subtraction can be done by adding the 2's complement of the subtrahend.",
            "Multiplication is repeated shifting and adding; division is repeated shifting and subtracting.",
        ]),
    ],

    {
        summary:
            "Perform addition, subtraction, multiplication and division in binary, and learn the 2's complement method.",
        minutes: 12,
        tags: ["binary", "arithmetic", "complement", "important"],

        mcqs: [
            mcq(
                "In binary, 1 + 1 gives sum and carry as:",
                ["0, 0", "1, 0", "0, 1", "1, 1"],
                2,
                "1 + 1 = 0 with a carry of 1."
            ),
            mcq(
                "The 1's complement of 101100 is:",
                ["010011", "010100", "101011", "100011"],
                0,
                "Flipping every bit of 101100 gives 010011."
            ),
            mcq(
                "The 2's complement of 011001 is:",
                ["100110", "100111", "011001", "111001"],
                1,
                "1's complement is 100110, adding 1 gives 100111."
            ),
            mcq(
                "Subtraction using 2's complement is performed by:",
                ["Adding the minuend and subtrahend", "Adding the minuend and 2's complement of the subtrahend", "Subtracting 1's complement from the minuend", "Multiplying and discarding bits"],
                1,
                "Subtraction becomes addition of the 2's complement of the subtrahend."
            ),
            mcq(
                "Binary 1011 × 101 equals:",
                ["110111", "110011", "111011", "101111"],
                0,
                "11 × 5 = 55 which is 110111 in binary."
            ),
            mcq(
                "How is 0 represented in 2's complement?",
                ["As 0000 only", "As 0000 and 10000", "As 1111 only", "As 0111"],
                0,
                "2's complement has only one representation for zero, namely all zeros."
            ),
        ],

        questions: [
            qa(
                "Add the binary numbers 1011 and 1101 and verify the answer.",
                "Adding from the right, 1 + 1 = 0 carry 1, 1 + 0 + carry 1 = 0 carry 1, 0 + 1 + carry 1 = 0 carry 1, 1 + 1 + carry 1 = 1 carry 1. The result is 11000₂, which equals sixteen plus eight = 24 in decimal. The check 11 + 13 = 24 confirms the answer.",
                4
            ),
            qa(
                "Subtract 13 from 22 using the 2's complement method.",
                "The 2's complement of 13 in six bits is 110011. Adding this to 22 written as 010110 gives 1001001. The carry of 1 on the left is discarded, leaving 001001, which equals 9 in decimal. Hence 22 − 13 = 9.",
                4
            ),
            qa(
                "Explain the 1's and 2's complement representations with examples.",
                "The 1's complement of a binary number is obtained by changing every 0 to 1 and every 1 to 0; for example, the 1's complement of 0101100 is 1010011. The 2's complement is obtained by adding 1 to the 1's complement; so the 2's complement of 0101100 is 1010100. 2's complement is widely used because it represents both positive and negative numbers, has only one zero and allows subtraction through addition.",
                4
            ),
            qa(
                "Perform the binary division 101100 ÷ 100.",
                "101100 (44) divided by 100 (4) gives quotient 1011 (11) with remainder 0, because 11 × 4 = 44 exactly.",
                3
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Codes and Data Representation
========================================================= */

const codesAndDataRepresentation = createTopic(
    "codes-and-data-representation",
    "Codes and Data Representation",

    [
        text(
            "Inside a computer, all information, whether numbers, text, sound, image or instruction, is ultimately stored and processed as patterns of bits. A code defines the meaning of each pattern."
        ),

        heading("Binary Coded Decimal (BCD)"),

        definition(
            "BCD",
            "A code in which each decimal digit is represented by its own four bit binary value."
        ),

        table(
            ["Decimal", "BCD 8421"],
            [
                ["0", "0000"],
                ["1", "0001"],
                ["2", "0010"],
                ["3", "0011"],
                ["4", "0100"],
                ["5", "0101"],
                ["6", "0110"],
                ["7", "0111"],
                ["8", "1000"],
                ["9", "1001"],
            ]
        ),

        code(
            `Decimal  5  8  6  9
BCD     0101 1000 0110 1001
Stored as 0101100001101001 (16 bits)`,
            "text",
            "Encoding 5869 in BCD"
        ),

        note(
            "BCD is easy to convert to and from decimal but is wasteful of storage because the codes 1010 to 1111 are never used. It is, however, very common in digital clocks and calculators.",
            "tip",
            "BCD Use"
        ),

        heading("Excess-3 Code"),

        table(
            ["Decimal", "Excess-3"],
            [
                ["0", "0011"],
                ["1", "0100"],
                ["2", "0101"],
                ["3", "0110"],
                ["4", "0111"],
                ["5", "1000"],
                ["6", "1001"],
                ["7", "1010"],
                ["8", "1011"],
                ["9", "1100"],
            ]
        ),

        heading("Gray Code"),

        definition(
            "Gray Code",
            "A binary code in which successive values differ in only one bit, eliminating transition errors."
        ),

        table(
            ["Decimal", "Binary", "Gray"],
            [
                ["0", "0000", "0000"],
                ["1", "0001", "0001"],
                ["2", "0010", "0011"],
                ["3", "0011", "0010"],
                ["4", "0100", "0110"],
                ["5", "0101", "0111"],
                ["6", "0110", "0101"],
                ["7", "0111", "0100"],
            ]
        ),

        heading("Alphanumeric Codes"),

        table(
            ["Code", "Bits", "Characters Supported", "Remarks"],
            [
                ["ASCII", "7 or 8", "English letters, digits, symbols", "Most widely used"],
                ["EBCDIC", "8", "Mainframe character set", "Used in IBM mainframes"],
                ["Unicode (UTF-8)", "8 to 32", "All world languages and symbols", "Internet and modern software"],
                ["ISCII", "8", "Indian scripts", "Standard for Indian languages"],
            ]
        ),

        heading("ASCII Example"),

        table(
            ["Character", "Decimal", "Binary", "Hex"],
            [
                ["A", "65", "01000001", "41"],
                ["Z", "90", "01011010", "5A"],
                ["a", "97", "01100001", "61"],
                ["0", "48", "00110000", "30"],
                ["Space", "32", "00100000", "20"],
            ]
        ),

        heading("Parity"),

        definition(
            "Parity Bit",
            "An extra bit added to a group of bits to make the total number of 1s either even (even parity) or odd (odd parity)."
        ),

        code(
            `Data 1 0 0 1 1 0 1 0
Even parity bit = 1 (so total 1s = 5, odd)
Even parity bit = 0 (so total 1s = 4, even)`,
            "text",
            "Even and odd parity"
        ),

        heading("Other Data Representations"),

        table(
            ["Data Type", "Typical Representation"],
            [
                ["Integers", "2's complement binary"],
                ["Real numbers", "IEEE 754 floating point"],
                ["Characters", "ASCII or Unicode"],
                ["Boolean", "0 for false, 1 for true"],
                ["Images", "Pixel grid with RGB values"],
                ["Audio", "Sampled amplitude values"],
                ["Video", "Sequence of images with audio"],
            ]
        ),

        keyPoints([
            "BCD encodes each decimal digit as four bits, making conversion simple but storage inefficient.",
            "Gray code differs in only one bit between consecutive values and is used in sensors and ADCs.",
            "ASCII is a 7 or 8 bit code for English text; Unicode covers all world scripts.",
            "A parity bit detects single bit errors in transmitted data.",
            "All forms of data inside a computer are ultimately patterns of bits.",
        ]),
    ],

    {
        summary:
            "Learn BCD, Excess-3, Gray code, ASCII, Unicode, parity and the way different data types are represented in binary.",
        minutes: 11,
        tags: ["codes", "bcd", "ascii", "representation", "important"],

        mcqs: [
            mcq(
                "The BCD code for decimal 7 is:",
                ["0111", "0110", "1000", "1001"],
                0,
                "7 in 8421 BCD is 0111."
            ),
            mcq(
                "In Excess-3, decimal 4 is represented as:",
                ["0111", "0100", "1011", "1001"],
                0,
                "Excess-3 is decimal plus 3, so 4 becomes 7 which is 0111."
            ),
            mcq(
                "A code in which successive values differ in only one bit is called:",
                ["BCD", "ASCII", "Gray code", "EBCDIC"],
                2,
                "Gray code is the unit distance code."
            ),
            mcq(
                "The ASCII code for the letter A is:",
                ["65 decimal", "97 decimal", "48 decimal", "32 decimal"],
                0,
                "The capital letter A has the decimal value 65 in ASCII."
            ),
            mcq(
                "Adding a parity bit helps to:",
                ["Correct errors", "Detect errors", "Encrypt data", "Compress data"],
                1,
                "Parity can detect a single bit error but cannot correct it."
            ),
            mcq(
                "Unicode was developed to overcome the limitation of:",
                ["BCD", "Gray code", "ASCII", "Excess-3"],
                2,
                "Unicode supports far more characters than ASCII."
            ),
        ],

        questions: [
            qa(
                "Explain BCD with an example.",
                "In Binary Coded Decimal each decimal digit is replaced by its four bit binary value using the 8421 weights. For example, the decimal number 5869 is encoded as 0101 1000 0110 1001, which is sixteen bits long. BCD is simple to convert but uses storage inefficiently because the codes 1010 to 1111 are never used. It is used in digital clocks, calculators and other devices that display decimal digits.",
                4
            ),
            qa(
                "Differentiate between ASCII and Unicode.",
                "ASCII is a 7 or 8 bit code that can represent 128 or 256 characters and is sufficient for English text, digits and basic symbols. Unicode is a much larger standard that can use 8 to 32 bits per character and is designed to represent every character in every language of the world, along with mathematical and other symbols. Unicode has become the universal standard for the web and modern software, while ASCII is now a subset of Unicode.",
                4
            ),
            qa(
                "What is Gray code? Why is it preferred in digital systems?",
                "Gray code is a binary code in which successive values differ from one another in only one bit position. For example, the Gray code sequence for 0 to 3 is 00, 01, 11, 10. It is preferred in digital systems such as shaft encoders and analog to digital converters because when the value changes by one, only one bit changes, so transient errors caused by bits switching at slightly different times are avoided.",
                4
            ),
            qa(
                "Explain parity checking with an example.",
                "Parity checking adds one extra bit to a group of bits so that the total number of 1s in the group becomes even (even parity) or odd (odd parity). For the data 10011010 there are four 1s, so an even parity bit of 0 is added while an odd parity bit of 1 is added. At the receiver, the parity of the received group is checked and any mismatch indicates that a single bit has been altered during transmission.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Boolean Algebra
========================================================= */

const booleanAlgebra = createTopic(
    "boolean-algebra",
    "Boolean Algebra",

    [
        definition(
            "Boolean Algebra",
            "A branch of algebra in which the variables can take only the values 0 and 1, and the operations are AND, OR and NOT."
        ),

        text(
            "Boolean algebra, developed by George Boole in 1854, provides the mathematical foundation for the design of digital circuits. Every output of a digital system can be expressed as a Boolean function of its inputs."
        ),

        heading("Basic Operations"),

        table(
            ["Operation", "Symbol", "Expression", "Read As"],
            [
                ["AND", "·", "A · B", "A AND B"],
                ["OR", "+", "A + B", "A OR B"],
                ["NOT", "′ or ¯", "A′", "NOT A or A bar"],
            ]
        ),

        heading("Truth Tables"),

        table(
            ["A", "B", "A AND B", "A OR B", "A XOR B", "NAND", "NOR"],
            [
                ["0", "0", "0", "0", "0", "1", "1"],
                ["0", "1", "0", "1", "1", "1", "0"],
                ["1", "0", "0", "1", "1", "1", "0"],
                ["1", "1", "1", "1", "0", "0", "0"],
            ]
        ),

        heading("Boolean Laws and Theorems"),

        table(
            ["Law", "AND Form", "OR Form"],
            [
                ["Identity", "A · 1 = A", "A + 0 = A"],
                ["Null", "A · 0 = 0", "A + 1 = 1"],
                ["Idempotent", "A · A = A", "A + A = A"],
                ["Complement", "A · A′ = 0", "A + A′ = 1"],
                ["Double negation", "—", "(A′)′ = A"],
                ["Commutative", "A · B = B · A", "A + B = B + A"],
                ["Associative", "A·(B·C) = (A·B)·C", "A+(B+C) = (A+B)+C"],
                ["Distributive", "A·(B+C) = A·B + A·C", "A+(B·C) = (A+B)·(A+C)"],
                ["Absorption", "A·(A+B) = A", "A+(A·B) = A"],
                ["De Morgan's", "(A·B)′ = A′ + B′", "(A+B)′ = A′ · B′"],
            ]
        ),

        note(
            "De Morgan's theorems are the most important laws for digital designers because they allow an AND circuit to be replaced by a NOR of inverted inputs and an OR circuit to be replaced by a NAND of inverted inputs.",
            "exam",
            "Frequently Asked"
        ),

        heading("Duality Principle"),

        text(
            "The dual of a Boolean expression is obtained by replacing AND with OR, OR with AND, 0 with 1 and 1 with 0. If an expression is true, so is its dual."
        ),

        code(
            `Expression : A + 0 = A
Dual       : A · 1 = A
Both laws hold true in Boolean algebra.`,
            "text",
            "Duality example"
        ),

        heading("Canonical Forms"),

        table(
            ["Form", "Description", "Example"],
            [
                ["Sum of Products (SOP)", "OR of AND terms, one for each 1 of the function", "F = A′B + AB′"],
                ["Product of Sums (POS)", "AND of OR terms, one for each 0 of the function", "F = (A+B) · (A′+B′)"],
                ["Minterm", "Product term that is 1 for exactly one input combination", "m₃ = A′B′C"],
                ["Maxterm", "Sum term that is 0 for exactly one input combination", "M₃ = A+B+C′"],
            ]
        ),

        heading("Karnaugh Map Simplification"),

        definition(
            "K Map",
            "A grid arrangement of the minterms of a Boolean function that makes simplification possible by grouping adjacent 1s."
        ),

        code(
            `Two variable K map

        B=0  B=1
A=0 [   0     1  ]
A=1 [   1     0  ]

Grouping: (A=0, B=1) and (A=1, B=0) are diagonally placed and
cannot be grouped together, so no simplification is possible.

Three variable K map

        BC=00  BC=01  BC=11  BC=10
A=0 [    0     1     0     1   ]
A=1 [    1     0     1     0   ]

Group: top row A=0 → F = A′
Group: middle column BC=01 ∪ BC=11 → F = C
Simplified expression: F = A′ + C`,
            "text",
            "Two and three variable K maps"
        ),

        heading("Rules for K Map Grouping"),

        list(
            [
                "Group sizes must be powers of two: 1, 2, 4, 8 ...",
                "Each group should be as large as possible.",
                "Groups may wrap around the edges of the map.",
                "A 1 may belong to more than one group.",
                "All 1s must be covered, even if a group has only one cell.",
                "Unused 1s are called don't care conditions and may be used to enlarge groups.",
            ],
            true
        ),

        keyPoints([
            "Boolean variables take only the values 0 and 1.",
            "The three basic operations are AND, OR and NOT.",
            "De Morgan's laws connect AND with OR by complementation.",
            "Sum of products and product of sums are the two canonical forms.",
            "K maps are used to simplify Boolean functions graphically.",
        ]),
    ],

    {
        summary:
            "Master Boolean operations, laws, De Morgan's theorems, canonical forms and K map simplification.",
        minutes: 13,
        tags: ["boolean", "algebra", "k-map", "important"],

        mcqs: [
            mcq(
                "The Boolean expression for NOT A is written as:",
                ["A′", "A · A", "A + 1", "0"],
                0,
                "A bar or A prime represents the NOT of A."
            ),
            mcq(
                "De Morgan's theorem states that (A+B)′ equals:",
                ["A′ + B′", "A · B", "A′ · B′", "A + B"],
                2,
                "The complement of a sum is the product of the complements."
            ),
            mcq(
                "The dual of A + 1 = 1 is:",
                ["A · 1 = A", "A · 0 = 0", "A + 0 = A", "A′ = A"],
                1,
                "Swap AND with OR, 0 with 1, to get A · 0 = 0."
            ),
            mcq(
                "A minterm is a product term that equals 1 for:",
                ["All input combinations", "Exactly one input combination", "No input combination", "Two input combinations"],
                1,
                "A minterm is high for exactly one row of the truth table."
            ),
            mcq(
                "K map groups must have a size that is:",
                ["Any number", "A power of two", "A prime number", "Always four"],
                1,
                "Allowed group sizes are 1, 2, 4, 8 and so on."
            ),
            mcq(
                "The expression A · (A + B) simplifies to:",
                ["A · B", "A + B", "A", "B"],
                2,
                "By the absorption law, A · (A + B) = A."
            ),
        ],

        questions: [
            qa(
                "State and prove De Morgan's theorems.",
                "De Morgan's first theorem states that the complement of a sum equals the product of the complements, that is (A + B)′ = A′ · B′. It is proved by the truth table: for every combination of A and B the left side equals the right side. The second theorem states that the complement of a product equals the sum of the complements, that is (A · B)′ = A′ + B′. These theorems are widely used to convert expressions between AND-OR and OR-AND forms.",
                5
            ),
            qa(
                "State the distributive laws of Boolean algebra.",
                "The distributive laws state that A · (B + C) = A · B + A · C, and A + (B · C) = (A + B) · (A + C). They are proved by constructing truth tables for both sides for all combinations of A, B and C and observing identical results. These laws allow factoring and expanding of Boolean expressions and are essential in simplifying circuits.",
                4
            ),
            qa(
                "Simplify the function F(A,B,C) = Σm(1,2,3,5,7) using a K map.",
                "Place 1s in the cells corresponding to minterms 1, 2, 3, 5 and 7. Group the four cells in the right half (m1, m3, m5, m7) to obtain C. Group m2 and m3 to obtain A′B. The simplified expression is F = C + A′B. The four cell group covers B′C also, so the final form is F = C + A′B, which is the simplest sum of products.",
                5
            ),
            qa(
                "Differentiate between SOP and POS forms.",
                "A Sum of Products expression is a disjunction of product terms, each product term being an AND of literals; it is built from the 1s of the truth table, so it is also called the minterm expansion. A Product of Sums expression is a conjunction of sum terms, each sum term being an OR of literals; it is built from the 0s of the truth table and is also called the maxterm expansion. For any function, the SOP and POS forms are equivalent and convertible into each other.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Logic Gates and Combinational Circuits
========================================================= */

const logicGates = createTopic(
    "logic-gates-and-combinational-circuits",
    "Logic Gates and Combinational Circuits",

    [
        definition(
            "Logic Gate",
            "An electronic device that performs a basic Boolean operation on one or more inputs to produce a single output."
        ),

        heading("Basic Gates"),

        table(
            ["Gate", "Symbol", "Expression", "Function"],
            [
                ["AND", "A·B", "Output is 1 only when all inputs are 1", ""],
                ["OR", "A+B", "Output is 1 when any input is 1", ""],
                ["NOT", "A′", "Inverts the input", ""],
            ]
        ),

        heading("Universal Gates"),

        table(
            ["Gate", "Symbol", "Expression", "Function"],
            [
                ["NAND", "(A·B)′", "Output is 0 only when all inputs are 1", "Universal: can build any function"],
                ["NOR", "(A+B)′", "Output is 1 only when all inputs are 0", "Universal: can build any function"],
            ]
        ),

        note(
            "NAND and NOR are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates.",
            "exam",
            "Frequently Asked"
        ),

        heading("Special Gates"),

        table(
            ["Gate", "Expression", "Description"],
            [
                ["XOR", "A ⊕ B = A′B + AB′", "Output is 1 when inputs differ."],
                ["XNOR", "(A ⊕ B)′ = AB + A′B′", "Output is 1 when inputs are the same."],
            ]
        ),

        heading("Realising Basic Gates from Universal Gates"),

        code(
            `NOT from NAND      : join the two inputs of a NAND gate
AND from NAND       : NAND followed by NOT
OR from NAND        : invert both inputs, then NAND
NOT from NOR        : join the two inputs of a NOR gate
OR from NOR         : NOR followed by NOT
AND from NOR        : invert both inputs, then NOR`,
            "text",
            "Using only NAND or only NOR"
        ),

        heading("Combinational Circuit Design Steps"),

        steps([
            "Understand the problem and identify inputs and outputs",
            "Construct the truth table",
            "Derive the Boolean expression from the truth table",
            "Simplify the expression using Boolean laws or K map",
            "Draw the logic diagram using gates",
        ]),

        heading("Half Adder"),

        definition(
            "Half Adder",
            "A combinational circuit that adds two single bits and produces a sum and a carry."
        ),

        table(
            ["A", "B", "Sum", "Carry"],
            [
                ["0", "0", "0", "0"],
                ["0", "1", "1", "0"],
                ["1", "0", "1", "0"],
                ["1", "1", "0", "1"],
            ]
        ),

        code(
            `Sum    = A ⊕ B
Carry  = A · B

          ┌──────┐
A ──┬───►│ XOR  │────► Sum
    │    └──────┘
B ──┼───►
    │
    │    ┌──────┐
    └───►│ AND  │────► Carry
         └──────┘`,
            "text",
            "Half adder logic diagram"
        ),

        heading("Full Adder"),

        definition(
            "Full Adder",
            "A combinational circuit that adds three bits, two significant bits and a previous carry, and produces a sum and a new carry."
        ),

        table(
            ["A", "B", "Cin", "Sum", "Cout"],
            [
                ["0", "0", "0", "0", "0"],
                ["0", "0", "1", "1", "0"],
                ["0", "1", "0", "1", "0"],
                ["0", "1", "1", "0", "1"],
                ["1", "0", "0", "1", "0"],
                ["1", "0", "1", "0", "1"],
                ["1", "1", "0", "0", "1"],
                ["1", "1", "1", "1", "1"],
            ]
        ),

        code(
            `Sum   = A ⊕ B ⊕ Cin
Cout  = (A · B) + (Cin · (A ⊕ B),

A full adder can be built from two half adders and an OR gate.`,
            "text",
            "Full adder expressions"
        ),

        heading("Multiplexer and Demultiplexer"),

        table(
            ["Circuit", "Function", "Use"],
            [
                ["Multiplexer (MUX)", "Selects one of many inputs and forwards it to a single output", "Data routing, function selection"],
                ["Demultiplexer (DEMUX)", "Takes a single input and routes it to one of many outputs", "Distribution of data"],
            ]
        ),

        heading("Encoder and Decoder"),

        table(
            ["Circuit", "Function", "Use"],
            [
                ["Encoder", "Converts 2^n input lines into n output lines", "Keyboard scanning"],
                ["Decoder", "Converts n input lines into 2^n output lines", "Memory address decoding"],
            ]
        ),

        heading("Flip Flops (Brief Preview)"),

        text(
            "A flip flop is a one bit memory element. Unlike combinational circuits, its output depends on both the present inputs and its previous state. The main types are SR, JK, D and T flip flops, which are covered in detail in Unit 2."
        ),

        keyPoints([
            "The three basic gates are AND, OR and NOT.",
            "NAND and NOR are universal gates because any Boolean function can be built from them alone.",
            "XOR is true when inputs differ, XNOR when they are the same.",
            "A half adder adds two bits; a full adder adds three bits.",
            "MUX, DEMUX, encoder and decoder are important combinational circuits.",
        ]),
    ],

    {
        summary:
            "Identify logic gates, learn to design combinational circuits such as adders, multiplexers and decoders.",
        minutes: 13,
        tags: ["gates", "circuits", "adder", "important"],

        mcqs: [
            mcq(
                "Which gate is called a universal gate?",
                ["AND", "OR", "NAND", "XOR"],
                2,
                "NAND alone is sufficient to build any Boolean function."
            ),
            mcq(
                "The output of a NAND gate is 0 when:",
                ["Any input is 0", "Any input is 1", "All inputs are 1", "No input is connected"],
                2,
                "NAND is the complement of AND, so it is 0 only when all inputs are 1."
            ),
            mcq(
                "A half adder has two inputs and:",
                ["One output", "Two outputs", "Three outputs", "Four outputs"],
                1,
                "It produces a sum bit and a carry bit."
            ),
            mcq(
                "A multiplexer selects:",
                ["One of several inputs", "All inputs", "A group of outputs", "A pair of inputs"],
                0,
                "A multiplexer chooses one of its data inputs based on the select lines."
            ),
            mcq(
                "The output of XNOR is 1 when:",
                ["Inputs differ", "Inputs are the same", "Any input is 1", "Both inputs are 0"],
                1,
                "XNOR is the complement of XOR."
            ),
            mcq(
                "How many full adders are needed to add two four bit numbers?",
                ["2", "3", "4", "5"],
                2,
                "Each bit position needs one full adder to include the carry from the previous stage."
            ),
        ],

        questions: [
            qa(
                "Explain the universal property of NAND and NOR gates.",
                "A gate is called universal if any Boolean function can be implemented using only that gate. NOT is obtained by joining the inputs of a NAND or NOR together. AND is obtained by NAND followed by NOT, and OR is obtained by inverting both inputs and feeding them to a NAND. Similarly, AND is obtained by inverting both inputs of a NOR. Therefore, using only NAND or only NOR, any combination of AND, OR and NOT can be built, which proves universality.",
                5
            ),
            qa(
                "Design a half adder and give its truth table.",
                "A half adder adds two single bits A and B. It has two outputs: Sum and Carry. The truth table is: when A=0, B=0, Sum=0, Carry=0; when A=0, B=1, Sum=1, Carry=0; when A=1, B=0, Sum=1, Carry=0; when A=1, B=1, Sum=0, Carry=1. The expressions are Sum = A XOR B and Carry = A AND B, which are implemented using one XOR gate and one AND gate.",
                4
            ),
            qa(
                "Explain the working of a full adder.",
                "A full adder takes three inputs, A, B and a carry input Cin, and produces a sum output and a carry output Cout. The sum is the XOR of all three inputs, and the carry is 1 when at least two of the three inputs are 1. A full adder can be built from two half adders and an OR gate: the first half adder adds A and B, the second adds its sum with Cin, and the OR gate combines the two carry outputs.",
                4
            ),
            qa(
                "Differentiate between a multiplexer and a demultiplexer.",
                "A multiplexer has many data inputs, a few select lines and a single output, and it forwards the selected input to the output. A demultiplexer has a single data input, a few select lines and many outputs, and it routes the input to the selected output. The two circuits are opposites of each other and together they implement data routing in digital systems.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    numberSystems,
    binaryArithmetic,
    codesAndDataRepresentation,
    booleanAlgebra,
    logicGates,
];
