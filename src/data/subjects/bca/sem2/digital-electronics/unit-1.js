/* =========================================================
   BCA • SEM 2 • Digital Electronics
   UNIT 1 — Number Systems, Logic Gates and Boolean Algebra
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
   TOPIC 1 — Introduction to Digital Electronics
========================================================= */

const introductionToDigital = createTopic(
    "introduction-to-digital-electronics",
    "Introduction to Digital Electronics",

    [
        definition(
            "Digital Electronics",
            "The branch of electronics that deals with digital signals, which represent information as discrete levels, usually 0 and 1, and with circuits that process these signals."
        ),

        text(
            "Modern computers, mobile phones, calculators and almost all electronic devices are built using digital electronics. Understanding how digital signals, gates and circuits work is the foundation of computer hardware and embedded systems."
        ),

        heading("Analog versus Digital Signals"),

        table(
            ["Basis", "Analog", "Digital"],
            [
                ["Signal", "Continuous in time and amplitude", "Discrete, takes only a few levels"],
                ["Values", "Any value in a range", "Only 0 and 1 (LOW and HIGH)"],
                ["Accuracy", "Affected by noise", "Highly immune to noise"],
                ["Storage", "Difficult", "Easy to store as bits"],
                ["Examples", "Sound, temperature, voltage", "Computer data, switch positions"],
            ]
        ),

        heading("Advantages of Digital Systems"),

        list([
            "Easy to design because of switching between two states.",
            "High accuracy and immunity to noise.",
            "Easy to store, transmit and reproduce data.",
            "Reliability and consistency over long periods.",
            "Integration of millions of components on a single chip (IC).",
            "Programmable behaviour through software and firmware.",
        ]),

        heading("Limitations of Digital Systems"),

        list([
            "Real world is mostly analog and needs conversion using ADC and DAC.",
            "Higher bandwidth required for high speed digital signals.",
            "Complex circuits compared to analog for simple tasks.",
        ]),

        note(
            "Almost every real world signal like sound, temperature, light and pressure is analog in nature. It must be converted to digital form using an Analog to Digital Converter (ADC) before a digital system can process it. The output is then converted back using a Digital to Analog Converter (DAC).",
            "tip",
            "Real World Use"
        ),

        heading("Digital Logic Levels"),

        table(
            ["Logic", "Bit Value", "Voltage (TTL)"],
            [
                ["HIGH", "1", "2.0 V to 5.0 V"],
                ["LOW", "0", "0.0 V to 0.8 V"],
                ["Undefined", "X", "0.8 V to 2.0 V (forbidden zone)"],
            ]
        ),

        heading("Integrated Circuit Classification"),

        table(
            ["Type", "Full Form", "Gate Count", "Use"],
            [
                ["SSI", "Small Scale Integration", "1 to 10", "Basic gates"],
                ["MSI", "Medium Scale Integration", "10 to 100", "Encoders, decoders, multiplexers"],
                ["LSI", "Large Scale Integration", "100 to 10,000", "Calculators, small memory"],
                ["VLSI", "Very Large Scale Integration", "10,000 to 1,00,000", "Microprocessors"],
                ["ULSI", "Ultra Large Scale Integration", "More than 1,00,000", "Modern CPUs and GPUs"],
            ]
        ),

        keyPoints([
            "Digital electronics uses two discrete levels, 0 and 1.",
            "Digital signals are immune to noise and easy to store.",
            "Real world signals need ADC and DAC to interface with digital systems.",
            "Logic HIGH in TTL is 2.0 V to 5.0 V, LOW is 0.0 V to 0.8 V.",
            "ICs are classified by integration level: SSI, MSI, LSI, VLSI and ULSI.",
        ]),
    ],

    {
        summary:
            "Understand the difference between analog and digital signals and the advantages of digital systems.",
        minutes: 9,
        tags: ["digital", "analog", "signals", "important"],

        mcqs: [
            mcq(
                "How many discrete levels does a digital signal usually have?",
                ["Infinite", "Two", "Ten", "Depends on the system"],
                1,
                "Digital signals take two values, 0 and 1."
            ),
            mcq(
                "ADC is used to convert:",
                ["Digital to analog", "Analog to digital", "Binary to decimal", "Decimal to binary"],
                1,
                "ADC stands for Analog to Digital Converter."
            ),
            mcq(
                "Logic HIGH in TTL is:",
                ["0 to 0.8 V", "0.8 to 2.0 V", "2.0 to 5.0 V", "5.0 to 12.0 V"],
                2,
                "TTL HIGH is 2.0 V to 5.0 V."
            ),
            mcq(
                "A VLSI chip contains how many gates?",
                ["1 to 10", "10 to 100", "100 to 10,000", "More than 10,000"],
                3,
                "VLSI has more than 10,000 gates per chip."
            ),
            mcq(
                "Which is NOT an advantage of digital systems?",
                ["Easy storage", "Immune to noise", "Continuous signal", "Easy design"],
                2,
                "Digital systems are discrete, not continuous."
            ),
            mcq(
                "DAC stands for:",
                ["Digital Analog Computer", "Digital to Analog Converter", "Data Access Control", "Dual Address Counter"],
                1,
                "DAC converts digital to analog."
            ),
        ],

        questions: [
            qa(
                "Differentiate between analog and digital signals.",
                "An analog signal is continuous in both time and amplitude, taking any value within a range, like the sound wave from a microphone. A digital signal is discrete and takes only a few allowed levels, usually two, 0 and 1. Analog signals are affected by noise and are hard to store, while digital signals are highly immune to noise, easy to store, transmit and process, and can be regenerated perfectly. Most real world signals are analog and are converted to digital form using an ADC for processing by digital systems.",
                4
            ),
            qa(
                "Explain the advantages of digital electronics.",
                "Digital electronics offers several advantages: it is easy to design because circuits switch between two well defined states; data can be stored exactly without loss; signals are highly immune to noise; millions of components can be packed on a single chip using VLSI technology; and the same hardware can be made to perform different functions through programming. These features have made digital electronics the foundation of computers, mobile phones and almost every modern device.",
                4
            ),
            qa(
                "Explain the integration levels of ICs.",
                "Integrated circuits are classified by the number of logic gates they contain. SSI, or Small Scale Integration, has 1 to 10 gates and is used for simple gates. MSI, or Medium Scale Integration, has 10 to 100 gates and is used for encoders, decoders and multiplexers. LSI, or Large Scale Integration, has 100 to 10,000 gates and is used in calculators and small memories. VLSI, or Very Large Scale Integration, has 10,000 to 100,000 gates and forms the heart of microprocessors. ULSI has more than 100,000 gates and is found in modern CPUs and GPUs.",
                4
            ),
            qa(
                "What is the role of ADC and DAC in digital systems?",
                "Real world signals such as sound, temperature, light and pressure are analog in nature. Before a digital system can process them they must be converted to digital form using an Analog to Digital Converter (ADC). The digital system processes the data and produces digital outputs, which are then converted back to analog form using a Digital to Analog Converter (DAC) to drive real world devices such as speakers and motors. Together, ADC and DAC form the interface between the analog real world and the digital world of computers.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Number Systems
========================================================= */

const numberSystems = createTopic(
    "number-systems",
    "Number Systems",

    [
        definition(
            "Number System",
            "An ordered set of symbols used to represent numbers and the rules by which arithmetic is performed on them."
        ),

        heading("Common Number Systems"),

        table(
            ["System", "Base", "Digits", "Example"],
            [
                ["Decimal", "10", "0 to 9", "527₁₀"],
                ["Binary", "2", "0, 1", "101001₂"],
                ["Octal", "8", "0 to 7", "157₈"],
                ["Hexadecimal", "16", "0 to 9, A to F", "2F4₁₆"],
            ]
        ),

        note(
            "Hexadecimal uses A=10, B=11, C=12, D=13, E=14 and F=15. So 2F4₁₆ = 2×256 + 15×16 + 4 = 756₁₀.",
            "tip",
            "Hex Letters"
        ),

        heading("Decimal to Binary Conversion"),

        steps([
            "Divide the decimal number by 2.",
            "Note the remainder at each step.",
            "Continue dividing the quotient until it becomes 0.",
            "Read the remainders from bottom to top.",
        ]),

        code(
            `Convert 25 to binary:
25 ÷ 2 = 12  r 1
12 ÷ 2 =  6  r 0
 6 ÷ 2 =  3  r 0
 3 ÷ 2 =  1  r 1
 1 ÷ 2 =  0  r 1

Read bottom to top: 11001₂
`,
            "text",
            "Repeated division by 2"
        ),

        heading("Binary to Decimal Conversion"),

        code(
            `1 1 0 0 1
× × × × ×
2⁴ 2³ 2² 2¹ 2⁰
= 16 + 8 + 0 + 0 + 1
= 25
`,
            "text",
            "Positional value method"
        ),

        heading("Binary to Octal and Hexadecimal"),

        code(
            `Binary 101 110 011 = 563₈   (group 3 bits from right)
Binary 0001 0111 0011 = 173₁₆ (group 4 bits from right)
`,
            "text",
            "Shortcut conversions"
        ),

        heading("Fractional Conversions"),

        code(
            `Convert 0.625 to binary:
0.625 × 2 = 1.25  → 1
0.250 × 2 = 0.50  → 0
0.500 × 2 = 1.00  → 1
Result: 0.101₂
`,
            "text",
            "Repeated multiplication by base"
        ),

        heading("1's and 2's Complement"),

        list([
            "1's complement of N: flip every bit of N.",
            "2's complement of N: take 1's complement and add 1.",
            "Subtraction A − B: add 2's complement of B to A, discard the final carry.",
        ]),

        code(
            `Number      : 0 1 0 1 1 0 0  = 44
1's complement: 1 0 1 0 0 1 1
2's complement: 1 0 1 0 1 0 0  = -44 in 2's complement
`,
            "text",
            "1's and 2's complement"
        ),

        heading("Codes"),

        table(
            ["Code", "Description", "Example"],
            [
                ["BCD (8421)", "Each decimal digit → 4 binary bits", "5869 = 0101 1000 0110 1001"],
                ["Excess-3", "BCD + 0011", "5 → 1000"],
                ["Gray", "Successive codes differ in 1 bit", "000, 001, 011, 010, 110"],
                ["ASCII", "7 bit alphanumeric code", "'A' = 1000001"],
                ["Unicode", "Supports all world scripts", "'A' = U+0041"],
            ]
        ),

        keyPoints([
            "Binary is base 2, octal is base 8, hex is base 16.",
            "3 binary bits make 1 octal digit; 4 bits make 1 hex digit.",
            "2's complement is the most common signed representation.",
            "Gray code differs in only one bit between consecutive values.",
            "BCD is wasteful but simple; ASCII is the standard for English text.",
        ]),
    ],

    {
        summary:
            "Master number systems and conversions, complements and common codes.",
        minutes: 13,
        tags: ["number-system", "binary", "BCD", "important"],

        mcqs: [
            mcq(
                "The base of the binary system is:",
                ["2", "8", "10", "16"],
                0,
                "Binary uses only 0 and 1, so its base is 2."
            ),
            mcq(
                "The hex digit F equals decimal:",
                ["10", "14", "15", "16"],
                2,
                "F is the last hex digit and equals 15 in decimal."
            ),
            mcq(
                "BCD for 7 is:",
                ["0111", "0110", "1000", "1001"],
                0,
                "7 in BCD 8421 is 0111."
            ),
            mcq(
                "How many binary bits make one hex digit?",
                ["2", "3", "4", "8"],
                2,
                "4 bits cover values 0 to 15, exactly one hex digit."
            ),
            mcq(
                "2's complement of 011001 is:",
                ["100110", "100111", "011001", "111001"],
                1,
                "1's comp is 100110, plus 1 gives 100111."
            ),
            mcq(
                "Gray code of 011 is:",
                ["010", "011", "001", "100"],
                0,
                "Successive Gray codes differ in only 1 bit."
            ),
        ],

        questions: [
            qa(
                "Convert 47 to binary, octal and hexadecimal.",
                "For binary, divide 47 by 2 repeatedly: 47, 23 r1, 11 r1, 5 r1, 2 r1, 1 r0, 0 r1. Reading bottom up: 101111₂. For octal, group 3 bits from right: 101 111 = 57₈. For hexadecimal, group 4 bits: 0010 1111 = 2F₁₆.",
                4
            ),
            qa(
                "Explain 1's and 2's complement with example.",
                "1's complement of a binary number is obtained by replacing every 0 with 1 and every 1 with 0. The 2's complement is obtained by adding 1 to the 1's complement. For example, for 0101100 the 1's complement is 1010011 and the 2's complement is 1010100. 2's complement is the standard signed representation because subtraction can be performed by adding the 2's complement and discarding the final carry.",
                4
            ),
            qa(
                "Differentiate between BCD and Excess-3 code.",
                "BCD (Binary Coded Decimal) represents each decimal digit using its 4 bit binary value, so 5 becomes 0101 and 9 becomes 1001. Excess-3 is obtained by adding 0011 to the BCD code, so 5 becomes 1000 and 9 becomes 1100. BCD is simple but uses only 10 of 16 possible codes, while Excess-3 is a self complementing code useful in some arithmetic operations.",
                4
            ),
            qa(
                "What is Gray code and where is it used?",
                "Gray code is a binary code in which successive values differ in only one bit position. For example, the Gray code for 0 to 3 is 00, 01, 11, 10. This single bit change property makes it useful in applications such as shaft encoders, analog to digital converters and K map simplification, where it avoids transient errors caused by multiple bits switching at slightly different times.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Boolean Algebra and Logic Gates
========================================================= */

const booleanAlgebraGates = createTopic(
    "boolean-algebra-and-logic-gates",
    "Boolean Algebra and Logic Gates",

    [
        definition(
            "Boolean Algebra",
            "A branch of algebra in which variables take only the values 0 and 1, and the operations are AND, OR and NOT."
        ),

        heading("Basic Operations and Symbols"),

        table(
            ["Operation", "Symbol", "Expression"],
            [
                ["AND", "· or ∧", "A · B"],
                ["OR", "+ or ∨", "A + B"],
                ["NOT", "′ or ¯", "A′"],
            ]
        ),

        heading("Truth Tables"),

        table(
            ["A", "B", "A·B", "A+B", "A⊕B", "(A·B)′", "(A+B)′"],
            [
                ["0", "0", "0", "0", "0", "1", "1"],
                ["0", "1", "0", "1", "1", "1", "0"],
                ["1", "0", "0", "1", "1", "1", "0"],
                ["1", "1", "1", "1", "0", "0", "0"],
            ]
        ),

        heading("Boolean Laws"),

        table(
            ["Law", "AND Form", "OR Form"],
            [
                ["Identity", "A·1 = A", "A+0 = A"],
                ["Null", "A·0 = 0", "A+1 = 1"],
                ["Idempotent", "A·A = A", "A+A = A"],
                ["Complement", "A·A′ = 0", "A+A′ = 1"],
                ["Commutative", "A·B = B·A", "A+B = B+A"],
                ["Associative", "A·(B·C) = (A·B)·C", "A+(B+C) = (A+B)+C"],
                ["Distributive", "A·(B+C) = A·B+A·C", "A+(B·C) = (A+B)·(A+C)"],
                ["Absorption", "A·(A+B) = A", "A+(A·B) = A"],
                ["De Morgan", "(A·B)′ = A′+B′", "(A+B)′ = A′·B′"],
            ]
        ),

        note(
            "De Morgan's theorems are extremely important. (A·B)′ = A′+B′ converts AND with NOT into OR with NOT, and (A+B)′ = A′·B′ converts OR with NOT into AND with NOT. They allow any expression to be implemented with only NAND or only NOR gates.",
            "exam",
            "Frequently Asked"
        ),

        heading("Logic Gate Symbols"),

        table(
            ["Gate", "Symbol", "Function", "Output = 1 when"],
            [
                ["AND", "&", "Logical AND", "All inputs are 1"],
                ["OR", "≥1", "Logical OR", "Any input is 1"],
                ["NOT", "1 with bubble", "Inverter", "Input is 0"],
                ["NAND", "& with bubble", "NOT of AND", "Any input is 0"],
                ["NOR", "≥1 with bubble", "NOT of OR", "All inputs are 0"],
                ["XOR", "=1", "Exclusive OR", "Odd number of 1s"],
                ["XNOR", "=1 with bubble", "Equality", "Even number of 1s"],
            ]
        ),

        heading("Universal Gates"),

        text(
            "NAND and NOR are called universal gates because any Boolean function can be implemented using only NAND gates or only NOR gates. NOT is obtained by joining the two inputs, AND is NAND followed by NOT, and OR is obtained by inverting both inputs and applying NAND."
        ),

        heading("XOR and XNOR Properties"),

        list([
            "A ⊕ 0 = A",
            "A ⊕ 1 = A′",
            "A ⊕ A = 0",
            "A ⊕ A′ = 1",
            "A ⊕ B = B ⊕ A",
            "XNOR is the complement of XOR and is used as equality detector.",
        ]),

        heading("Realisation of One Gate Using Another"),

        code(
            `AND using NAND     : NAND + NOT
OR using NAND       : NOT on both inputs + NAND
NOT using NAND      : tie both inputs of NAND
NOT using NOR       : tie both inputs of NOR
OR using NOR        : NOR + NOT
AND using NOR       : NOT on both inputs + NOR
`,
            "text",
            "Universal gate conversions"
        ),

        keyPoints([
            "Boolean variables take only 0 or 1.",
            "De Morgan's laws are the most powerful simplification tools.",
            "NAND and NOR are universal gates.",
            "XOR is true when an odd number of inputs are 1.",
            "XNOR is true when all inputs are equal.",
        ]),
    ],

    {
        summary:
            "Learn Boolean operations, laws, De Morgan's theorems and the working of all basic and universal gates.",
        minutes: 13,
        tags: ["boolean", "gates", "de-morgan", "important"],

        mcqs: [
            mcq(
                "De Morgan's theorem states that (A+B)′ equals:",
                ["A′+B′", "A·B", "A′·B′", "A+B"],
                2,
                "The complement of a sum is the product of the complements."
            ),
            mcq(
                "Which gates are called universal gates?",
                ["AND, OR", "NAND, NOR", "XOR, XNOR", "NOT only"],
                1,
                "NAND and NOR are universal because any function can be built using only them."
            ),
            mcq(
                "The output of a NAND gate is 0 when:",
                ["Any input is 0", "All inputs are 1", "Any input is 1", "No input is connected"],
                1,
                "NAND is 0 only when all inputs are 1."
            ),
            mcq(
                "A ⊕ 1 equals:",
                ["A", "A′", "0", "1"],
                1,
                "XOR with 1 inverts the bit."
            ),
            mcq(
                "A + A′ equals:",
                ["0", "1", "A", "A′"],
                1,
                "A OR NOT A is always 1."
            ),
            mcq(
                "The dual of A + 1 = 1 is:",
                ["A · 0 = 0", "A · 1 = A", "A + 0 = A", "A′ = A"],
                0,
                "Swap + with · and 0 with 1 to get A · 0 = 0."
            ),
        ],

        questions: [
            qa(
                "State and prove De Morgan's theorems.",
                "De Morgan's first theorem states that the complement of a sum equals the product of the complements, that is (A+B)′ = A′·B′. The second states that the complement of a product equals the sum of the complements, that is (A·B)′ = A′+B′. The proof is by constructing a truth table for the two sides for all combinations of A and B and verifying that they give the same output. These theorems are essential in simplifying Boolean expressions and converting between AND-OR and OR-AND forms.",
                4
            ),
            qa(
                "Explain universal property of NAND and NOR.",
                "A gate is universal if any Boolean function can be implemented using only that gate. NOT is obtained by tying the two inputs of a NAND or NOR together. AND is built as NAND followed by NOT. OR is built by inverting both inputs and applying NAND. The same set of functions can be obtained using only NOR gates. Therefore, using only NAND or only NOR, any combinational logic circuit can be constructed, which is why they are called universal gates.",
                4
            ),
            qa(
                "Simplify the function F = AB + AB′ + A′B using Boolean laws.",
                "F = AB + AB′ + A′B = A(B + B′) + A′B = A·1 + A′B = A + A′B. Apply absorption: A + A′B = A + B. Hence the simplified expression is A + B.",
                3
            ),
            qa(
                "Differentiate between XOR and XNOR gates.",
                "XOR (Exclusive OR) gives output 1 when its two inputs are different, that is 0 and 1, and gives 0 when both inputs are the same. XNOR (Exclusive NOR) is the complement of XOR and gives 1 when both inputs are the same and 0 when they differ. XOR is used in adders, parity checkers and crypto circuits, while XNOR is used as an equality detector and in comparators.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Combinational Logic Circuits
========================================================= */

const combinationalCircuits = createTopic(
    "combinational-logic-circuits",
    "Combinational Logic Circuits",

    [
        definition(
            "Combinational Circuit",
            "A digital circuit whose output depends only on the present combination of inputs and not on any past history."
        ),

        heading("Design Steps for Combinational Circuits"),

        steps([
            "Understand the problem and identify inputs and outputs.",
            "Construct the truth table.",
            "Derive the Boolean expression for each output.",
            "Simplify the expression using K map or Boolean laws.",
            "Draw the logic diagram using gates.",
        ]),

        heading("Half Adder"),

        definition(
            "Half Adder",
            "A combinational circuit that adds two single bits and produces a sum bit and a carry bit."
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
            `Sum   = A ⊕ B
Carry = A · B

A ──┬──────┐
    │      ▼
B ──┤    XOR ─── Sum
    │      ▲
    └──────┘
    │
    └── AND ─── Carry
`,
            "text",
            "Half adder using gates"
        ),

        heading("Full Adder"),

        definition(
            "Full Adder",
            "A combinational circuit that adds three input bits, A, B and a carry in Cin, and produces a sum and a carry out Cout."
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
            `Sum  = A ⊕ B ⊕ Cin
Cout = AB + Cin(A ⊕ B)

A full adder can be built from two half adders and one OR gate.
`,
            "text",
            "Full adder equations"
        ),

        heading("Subtractor"),

        list([
            "Half subtractor: difference = A ⊕ B, borrow = A′·B.",
            "Full subtractor: handles a borrow in along with A and B.",
            "Modern ALUs use the 2's complement method, which converts subtraction into addition.",
        ]),

        heading("Multiplexer (MUX)"),

        definition(
            "Multiplexer",
            "A combinational circuit that selects one of many data inputs and forwards it to a single output, based on select lines."
        ),

        list([
            "A 2×1 MUX has 2 inputs, 1 select line and 1 output.",
            "A 4×1 MUX has 4 inputs, 2 select lines and 1 output.",
            "An 8×1 MUX has 8 inputs, 3 select lines and 1 output.",
            "General rule: 2ⁿ inputs need n select lines.",
        ]),

        heading("Demultiplexer (DEMUX)"),

        definition(
            "Demultiplexer",
            "A circuit that takes a single input and routes it to one of many outputs based on select lines. It is the opposite of a multiplexer."
        ),

        heading("Encoder and Decoder"),

        table(
            ["Circuit", "Function", "Example"],
            [
                ["Encoder", "2ⁿ input lines → n output lines", "8 to 3 encoder for keyboard"],
                ["Decoder", "n input lines → 2ⁿ output lines", "3 to 8 decoder for memory chip select"],
            ]
        ),

        heading("Magnitude Comparator"),

        definition(
            "Magnitude Comparator",
            "A combinational circuit that compares two binary numbers A and B and produces three outputs: A>B, A=B and A<B."
        ),

    heading("Applications of Combinational Circuits"),

        list([
            "Adders and subtractors in the ALU.",
            "Multiplexers for data routing and selection.",
            "Decoders for memory chip selection and display driving.",
            "Encoders for keyboards and code conversion.",
            "Comparators for address comparison in caches.",
        ]),

        keyPoints([
            "Combinational circuits have no memory; output depends only on present inputs.",
            "Half adder adds 2 bits; full adder adds 3 bits.",
            "MUX selects 1 of N inputs, DEMUX routes 1 input to 1 of N outputs.",
            "Encoder reduces 2ⁿ lines to n lines; decoder does the opposite.",
            "Design follows truth table → Boolean expression → simplification → gates.",
        ]),
  ],

{
    summary:
    "Master the design of combinational circuits including adder, subtractor, multiplexer, demultiplexer, encoder, decoder and comparator.",
        minutes: 14,
            tags: ["combinational", "adder", "MUX", "decoder", "important"],

                mcqs: [
                    mcq(
                        "A half adder adds how many bits?",
                        ["1", "2", "3", "4"],
                        1,
                        "Half adder adds two single bits."
                    ),
                    mcq(
                        "A full adder has how many inputs?",
                        ["2", "3", "4", "5"],
                        1,
                        "Full adder has three inputs: A, B and Cin."
                    ),
                    mcq(
                        "A 4×1 multiplexer has how many select lines?",
                        ["1", "2", "3", "4"],
                        1,
                        "2ⁿ = 4 so n = 2 select lines."
                    ),
                    mcq(
                        "A 3 to 8 decoder has:",
                        ["3 inputs and 8 outputs", "8 inputs and 3 outputs", "3 inputs and 3 outputs", "8 inputs and 8 outputs"],
                        0,
                        "Decoder: n input lines activate 1 of 2ⁿ output lines."
                    ),
                    mcq(
                        "Sum output of a full adder with A=1, B=1, Cin=1 is:",
                        ["0", "1", "2", "3"],
                        1,
                        "1+1+1 = 3 = 11 in binary, so Sum=1, Cout=1."
                    ),
                    mcq(
                        "A demultiplexer is the opposite of:",
                        ["Encoder", "Multiplexer", "Adder", "Comparator"],
                        1,
                        "DEMUX routes 1 input to many outputs, MUX does the reverse."
                    ),
                ],

                    questions: [
                        qa(
                            "Design a half adder and write its truth table.",
                            "A half adder adds two single bits A and B and produces Sum and Carry. Truth table: 0+0 gives 0 sum 0 carry, 0+1 gives 1 0, 1+0 gives 1 0, 1+1 gives 0 1. The Boolean expressions are Sum = A ⊕ B and Carry = A · B. The circuit uses one XOR gate and one AND gate.",
                            4
                        ),
                        qa(
                            "Explain the working of a full adder.",
                            "A full adder has three inputs A, B and carry in Cin and produces Sum and Cout. The Boolean expressions are Sum = A ⊕ B ⊕ Cin and Cout = AB + Cin(A ⊕ B). It can be implemented using two half adders and one OR gate: the first half adder computes A ⊕ B and AB, the second half adder adds Cin to A ⊕ B to get Sum, and the OR gate combines the two carries to produce Cout. It is the building block of all arithmetic units.",
                            4
                        ),
                        qa(
                            "Differentiate between multiplexer and demultiplexer.",
                            "A multiplexer has many data inputs, a few select lines and a single output. It forwards the selected input to the output based on the binary value of the select lines. A demultiplexer has a single data input, a few select lines and many outputs. It routes the input to the selected output. Together they are widely used for data routing, function selection, memory addressing and communication systems.",
                            4
                        ),
                        qa(
                            "Explain the working of a 3 to 8 decoder.",
                            "A 3 to 8 decoder has 3 input lines A, B, C and 8 output lines D0 to D7. For every possible input combination from 000 to 111, exactly one output line becomes 1 and the others are 0. The output Di is the minterm mi of the three inputs. It is used to select one of 8 memory chips, to drive a 7 segment display or to generate timing and control signals in a digital system.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 — Karnaugh Map Simplification
========================================================= */

const karnaughMap = createTopic(
    "karnaugh-map-simplification",
    "Karnaugh Map Simplification",

    [
        definition(
            "Karnaugh Map",
            "A graphical method of simplifying Boolean expressions by placing 1s of the truth table in a grid arranged so that adjacent cells differ in only one variable."
        ),

        heading("2 Variable K Map"),

        code(
            `        B=0   B=1
A=0 [    m0     m1   ]     = A′B′  A′B
A=1 [    m2     m3   ]     = AB′   AB

m0 = A′B′,  m1 = A′B,
m2 = AB′,   m3 = AB
`,
            "text",
            "2 variable K map layout"
        ),

        heading("3 Variable K Map"),

        code(
            `         BC=00  BC=01  BC=11  BC=10
A=0 [     m0     m1     m3     m2  ]
A=1 [     m4     m5     m7     m6  ]

Note the wrap around order 00, 01, 11, 10.
`,
            "text",
            "3 variable K map layout"
        ),

        heading("4 Variable K Map"),

        code(
            `         CD=00  CD=01  CD=11  CD=10
AB=00 [    m0     m1     m3     m2   ]
AB=01 [    m4     m5     m7     m6   ]
AB=11 [   m12    m13    m15    m14   ]
AB=10 [    m8     m9    m11    m10   ]
`,
            "text",
            "4 variable K map layout"
        ),

        heading("K Map Grouping Rules"),

        list([
            "Groups must be of size 1, 2, 4, 8, 16 — that is powers of 2.",
            "Each group should be as large as possible.",
            "Groups may overlap and may wrap around edges.",
            "A 1 may belong to multiple groups.",
            "All 1s must be covered.",
            "Don't care cells can be used as 1 to enlarge a group.",
        ]),

        heading("Example 1: 3 Variable K Map"),

        code(
            `F(A,B,C) = Σm(1, 2, 3, 5, 7)

         BC=00  BC=01  BC=11  BC=10
A=0 [      0     1      1     1  ]
A=1 [      0     1      1     0  ]

Group of 4: top row (A=0) → A′
Group of 4: middle two columns (C=1) → C
Simplified: F = A′ + C
`,
            "text",
            "K map simplification"
        ),

        heading("Example 2: 4 Variable K Map with Don't Cares"),

        code(
            `F(A,B,C,D) = Σm(0, 2, 5, 7, 8, 10, 13, 15)
             + d(1, 11)

Group the four corners (m0, m2, m8, m10) + d1, d11 → B′D′
Group the 4 in the middle (m5, m7, m13, m15) → BD
Simplified: F = B′D′ + BD
`,
            "text",
            "K map with don't cares"
        ),

        heading("Sum of Products and Product of Sums"),

        table(
            ["Form", "Description", "Example"],
            [
                ["SOP", "OR of AND terms, one for each 1 of the function", "F = AB + A′C"],
                ["POS", "AND of OR terms, one for each 0 of the function", "F = (A+B)(A′+C)"],
                ["Minterm", "Product term that is 1 for exactly one row", "m3 = A′BC"],
                ["Maxterm", "Sum term that is 0 for exactly one row", "M3 = A+B′+C′"],
            ]
        ),

        note(
            "K maps are limited to 4 or 5 variables. For larger problems the Quine McCluskey method or computer aided tools like Espresso are used.",
            "tip",
            "Beyond 4 Variables"
        ),

        keyPoints([
            "K map is a visual method of simplifying Boolean expressions.",
            "Group sizes must be 1, 2, 4, 8 or 16.",
            "Groups may wrap around the edges.",
            "Don't cares can be used as 1 to enlarge a group.",
            "K map is practical for up to 4 variables.",
        ]),
    ],

    {
        summary:
            "Learn K map layout, grouping rules, and simplification of SOP and POS expressions.",
        minutes: 12,
        tags: ["k-map", "simplification", "boolean", "important"],

        mcqs: [
            mcq(
                "K map is used for:",
                ["Storing data", "Simplifying Boolean expressions", "Counting bits", "Multiplying numbers"],
                1,
                "K map gives a visual method of simplifying Boolean functions."
            ),
            mcq(
                "Allowed group sizes in a K map are:",
                ["Any number", "Powers of 2", "Prime numbers", "Only 1 and 2"],
                1,
                "Groups must be 1, 2, 4, 8, 16 ..."
            ),
            mcq(
                "A 3 variable K map has how many cells?",
                ["2", "4", "8", "16"],
                2,
                "2³ = 8 cells."
            ),
            mcq(
                "A 4 variable K map has how many cells?",
                ["4", "8", "12", "16"],
                3,
                "2⁴ = 16 cells."
            ),
            mcq(
                "K map cells are arranged in which order?",
                ["00, 01, 10, 11", "00, 01, 11, 10", "01, 00, 11, 10", "11, 10, 01, 00"],
                1,
                "Gray code order 00, 01, 11, 10 ensures adjacency differs in 1 bit."
            ),
            mcq(
                "Don't care cells in K map are represented by:",
                ["0", "1", "X", "—"],
                2,
                "X represents don't care conditions."
            ),
        ],

        questions: [
            qa(
                "Explain K map and its grouping rules.",
                "A Karnaugh map is a visual method of simplifying Boolean expressions. Each cell corresponds to one minterm of the function, and adjacent cells differ in only one variable. Groups are formed of size 1, 2, 4, 8 and so on, each as large as possible, and may wrap around the edges. Each group eliminates one variable and gives a product or sum term. Overlapping of groups is allowed. The final simplified expression is the OR of the product terms obtained from each group.",
                4
            ),
            qa(
                "Simplify the function F(A,B,C) = Σm(1, 3, 5, 7) using K map.",
                "Place 1s in cells corresponding to minterms 1, 3, 5 and 7, which all have C = 1. The four cells form a single group of size 4, covering the entire right half of the map. The simplified expression is F = C, because the other two variables A and B vary within the group and get eliminated.",
                3
            ),
            qa(
                "Differentiate between SOP and POS forms.",
                "Sum of Products (SOP) is a disjunction of product terms; each product term is a minterm and is 1 for exactly one input combination. The expression is built from the 1s of the truth table. Product of Sums (POS) is a conjunction of sum terms; each sum term is a maxterm and is 0 for exactly one input combination. It is built from the 0s of the truth table. Both forms are equivalent and can be converted to each other.",
                4
            ),
            qa(
                "What is a don't care condition in K map?",
                "A don't care condition is an input combination for which the output is not specified, because that combination will never occur or the output does not matter. In the K map it is written as X. The designer is free to use the X as 1 to enlarge a group or treat it as 0 to ignore it, whichever gives a simpler expression. This often leads to a smaller and cheaper circuit.",
                3
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToDigital,
    numberSystems,
    booleanAlgebraGates,
    combinationalCircuits,
    karnaughMap,
];