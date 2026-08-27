/* =========================================================
   BCA • SEM 2 • Digital Electronics
   UNIT 2 — Sequential Circuits, Flip Flops, Registers, Counters and Memories
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
   TOPIC 1 — Sequential Logic Circuits
========================================================= */

const sequentialLogic = createTopic(
    "sequential-logic-circuits",
    "Sequential Logic Circuits",

    [
        definition(
            "Sequential Circuit",
            "A digital circuit whose output depends not only on the present inputs but also on the past sequence of inputs. It contains memory elements."
        ),

        heading("Combinational vs Sequential"),

        table(
            ["Basis", "Combinational", "Sequential"],
            [
                ["Output depends on", "Present inputs only", "Present inputs and past history"],
                ["Memory", "No memory", "Has memory (flip flops)"],
                ["Feedback", "No feedback path", "Feedback from output to input"],
                ["Examples", "Adder, MUX, Decoder", "Counter, Register, Memory"],
                ["Clock", "Not required", "Usually clock driven"],
                ["Design", "Simpler", "More complex"],
            ]
        ),

        heading("Two Types of Sequential Circuits"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Synchronous", "All flip flops share a common clock", "Synchronous counter"],
                ["Asynchronous", "Different flip flops use different clocks or are chained", "Ripple counter"],
            ]
        ),

        heading("Memory Element Basics"),

        text(
            "A memory element is required to store the past history. The simplest memory element is the SR latch built from two cross coupled NOR or NAND gates. Latches are level sensitive; flip flops are edge sensitive and are used in synchronous circuits."
        ),

        heading("Block Diagram of Sequential Circuit"),

        code(
            `Combinational      Memory
   logic        +   elements
                ↑
                └── feedback

Inputs → [ Combinational ] → Outputs
              ↑       ↓
              └─[ Memory ]─┘
`,
            "text",
            "Block diagram of a sequential circuit"
        ),

        heading("Clock Signal"),

        definition(
            "Clock",
            "A periodic square wave used to synchronise the operation of flip flops in a synchronous sequential circuit."
        ),

        table(
            ["Term", "Meaning"],
            [
                ["Frequency", "Number of cycles per second (Hz)"],
                ["Period", "Time of one full cycle"],
                ["Rising edge", "0 → 1 transition"],
                ["Falling edge", "1 → 0 transition"],
                ["Duty cycle", "Percentage of time the clock is HIGH"],
            ]
        ),

        note(
            "A positive edge triggered flip flop responds to the 0 to 1 transition of the clock, while a negative edge triggered flip flop responds to the 1 to 0 transition. Most modern circuits use positive edge triggering.",
            "tip",
            "Edge Triggering"
        ),

        heading("State Table and State Diagram"),

        list([
            "State table shows the next state for every present state and input.",
            "State diagram is a graphical representation using circles and arrows.",
            "Moore machine: output depends only on the present state.",
            "Mealy machine: output depends on present state and present input.",
        ]),

        keyPoints([
            "Sequential circuits have memory.",
            "Synchronous circuits use a common clock.",
            "Latches are level sensitive, flip flops are edge sensitive.",
            "Moore and Mealy are the two classic state machine models.",
            "State table and state diagram are used to design and analyse them.",
        ]),
    ],

    {
        summary:
            "Understand sequential circuits, the difference from combinational circuits, and the role of clock and memory elements.",
        minutes: 10,
        tags: ["sequential", "clock", "state-machine", "important"],

        mcqs: [
            mcq(
                "Sequential circuits differ from combinational in having:",
                ["No inputs", "Memory", "Only one output", "Larger size"],
                1,
                "Sequential circuits have memory elements."
            ),
            mcq(
                "A synchronous circuit uses:",
                ["Different clocks", "A common clock", "No clock", "Two clocks"],
                1,
                "All flip flops share a common clock in synchronous design."
            ),
            mcq(
                "A flip flop is:",
                ["Level sensitive", "Edge sensitive", "Both", "None"],
                1,
                "Flip flops are edge sensitive devices."
            ),
            mcq(
                "Output of Mealy machine depends on:",
                ["Only present state", "Only input", "Present state and input", "Past states only"],
                2,
                "Mealy machine output depends on present state and input."
            ),
            mcq(
                "Output of Moore machine depends on:",
                ["Only present state", "Only input", "Present state and input", "Past states only"],
                0,
                "Moore machine output depends only on the present state."
            ),
            mcq(
                "Rising edge of a clock is:",
                ["1 → 0", "0 → 1", "0 → 0", "1 → 1"],
                1,
                "Rising edge is the 0 to 1 transition."
            ),
        ],

        questions: [
            qa(
                "Differentiate between combinational and sequential circuits.",
                "A combinational circuit's output depends only on the present inputs and it has no memory. Examples are adders, multiplexers and decoders. A sequential circuit's output depends on the present inputs as well as the past history stored in memory elements such as flip flops. Sequential circuits usually have a clock and may be synchronous or asynchronous. Counters, registers and memory units are sequential circuits.",
                4
            ),
            qa(
                "Explain Moore and Mealy machines.",
                "In a Moore machine the output depends only on the present state of the circuit and is independent of the current input. In a Mealy machine the output depends on both the present state and the current input, so the output can change as soon as the input changes. Moore machines have more states but their outputs are stable for a full clock cycle, while Mealy machines usually have fewer states and faster output response.",
                4
            ),
            qa(
                "What is a clock signal? What is its role?",
                "A clock signal is a periodic square wave used to synchronise the operation of all flip flops in a synchronous sequential circuit. The rising or falling edge of the clock triggers the flip flops to sample their inputs and update their outputs together. The clock ensures predictable behaviour and removes the race conditions of asynchronous circuits. The two important parameters are frequency, measured in Hz, and duty cycle, the percentage of time the clock is HIGH.",
                4
            ),
            qa(
                "Differentiate between latch and flip flop.",
                "A latch is a level sensitive memory element; it is transparent when the enable is HIGH and latches the input when the enable goes LOW. A flip flop is edge sensitive; it samples the input only at the rising or falling edge of the clock and holds the output until the next edge. Latches are simpler and used in asynchronous designs, while flip flops are used in synchronous designs because they are predictable and avoid glitches.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Flip Flops
========================================================= */

const flipFlops = createTopic(
    "flip-flops",
    "Flip Flops",

    [
        definition(
            "Flip Flop",
            "A one bit memory element that stores either 0 or 1 and changes state only on a clock edge. It is the basic building block of sequential circuits."
        ),

        heading("SR Flip Flop (Set Reset)"),

        table(
            ["S", "R", "Q_next", "Comment"],
            [
                ["0", "0", "Q", "No change"],
                ["0", "1", "0", "Reset"],
                ["1", "0", "1", "Set"],
                ["1", "1", "—", "Invalid / forbidden"],
            ]
        ),

        code(
            `Q_next = S + R′·Q

The S=R=1 condition is forbidden because it gives
both Q and Q′ equal to 0, which violates the
definition of complementary outputs.
`,
            "text",
            "SR flip flop equation and forbidden state"
        ),

        heading("JK Flip Flop"),

        definition(
            "JK Flip Flop",
            "An improved SR flip flop in which the J=K=1 condition is allowed and produces a toggle of the output."
        ),

        table(
            ["J", "K", "Q_next", "Comment"],
            [
                ["0", "0", "Q", "No change"],
                ["0", "1", "0", "Reset"],
                ["1", "0", "1", "Set"],
                ["1", "1", "Q′", "Toggle"],
            ]
        ),

        code(
            `Q_next = J·Q′ + K′·Q

JK flip flop is the most widely used because it has
no forbidden state and can be used as a toggle element.
`,
            "text",
            "JK flip flop characteristic equation"
        ),

        heading("D Flip Flop (Data or Delay)"),

        definition(
            "D Flip Flop",
            "A flip flop with a single data input D. The output Q follows the input D on the active clock edge; otherwise Q holds its value."
        ),

        code(
            `Q_next = D

D flip flop is the most common element used in
registers and data storage because of its simplicity.
`,
            "text",
            "D flip flop equation"
        ),

        heading("T Flip Flop (Toggle)"),

        definition(
            "T Flip Flop",
            "A flip flop that toggles its output when T=1 and holds the output when T=0 on the active clock edge."
        ),

        code(
            `Q_next = T ⊕ Q

T flip flop is widely used in binary counters.
A T flip flop can be made from a JK flip flop by
tying J = K = T.
`,
            "text",
            "T flip flop equation"
        ),

        heading("Comparison of Flip Flops"),

        table(
            ["Flip Flop", "Inputs", "Q_next", "Forbidden?"],
            [
                ["SR", "S, R", "S + R′Q", "Yes (S=R=1)"],
                ["JK", "J, K", "JQ′ + K′Q", "No"],
                ["D", "D", "D", "No"],
                ["T", "T", "T ⊕ Q", "No"],
            ]
        ),

        heading("Conversions Between Flip Flops"),

        list([
            "JK to D: connect J = D and K = D′.",
            "JK to T: connect J = K = T.",
            "D to T: connect D = T ⊕ Q.",
            "D to JK: connect D = JQ′ + K′Q.",
        ]),

        note(
            "Master slave JK flip flop was invented to solve the race around condition in the basic JK flip flop. Modern circuits use edge triggered JK flip flops, which avoid this problem.",
            "exam",
            "Frequently Asked"
        ),

        heading("Race Around Condition"),

        definition(
            "Race Around Condition",
            "In a level triggered JK flip flop, when J=K=1 and the clock pulse is wider than the propagation delay, the output toggles continuously for the entire duration of the clock pulse, giving an unpredictable final state."
        ),

        list([
            "Solution 1: make the clock pulse shorter than the propagation delay.",
            "Solution 2: use master slave configuration.",
            "Solution 3: use edge triggered JK flip flop.",
        ]),

        keyPoints([
            "A flip flop is a 1 bit memory element.",
            "SR has a forbidden state; JK does not.",
            "D flip flop is the simplest and most used.",
            "T flip flop toggles the output.",
            "Master slave configuration removes race around in JK flip flops.",
        ]),
    ],

    {
        summary:
            "Learn the four basic flip flops, their characteristic equations, conversions and the race around condition.",
        minutes: 13,
        tags: ["flip-flop", "SR", "JK", "D", "important"],

        mcqs: [
            mcq(
                "Which flip flop has no forbidden state?",
                ["SR", "JK", "Both", "Neither"],
                1,
                "JK flip flop has no forbidden state; J=K=1 toggles."
            ),
            mcq(
                "In a D flip flop, Q_next equals:",
                ["0", "1", "D", "Q"],
                2,
                "D flip flop simply passes D to Q on the active edge."
            ),
            mcq(
                "T flip flop toggles when:",
                ["T = 0", "T = 1", "Always", "Never"],
                1,
                "T = 1 toggles the output on the active clock edge."
            ),
            mcq(
                "The forbidden state of SR flip flop is:",
                ["S=0, R=0", "S=0, R=1", "S=1, R=0", "S=1, R=1"],
                3,
                "S=R=1 is forbidden because both outputs become 0."
            ),
            mcq(
                "Q_next of JK flip flop is:",
                ["J + K", "JQ′ + K′Q", "J·K", "J ⊕ K"],
                1,
                "Q_next = JQ′ + K′Q is the JK characteristic equation."
            ),
            mcq(
                "Race around condition occurs in which flip flop?",
                ["D", "T", "Level triggered JK", "All of these"],
                2,
                "Race around happens in level triggered JK when J=K=1 and clock is long."
            ),
        ],

        questions: [
            qa(
                "Explain the four types of flip flops.",
                "The SR flip flop has Set and Reset inputs and an S=R=1 forbidden state. The JK flip flop removes the forbidden state by toggling when J=K=1. The D flip flop has a single data input and Q follows D on the active edge. The T flip flop toggles the output when T=1 and holds it when T=0. JK and D are the most commonly used in modern designs.",
                4
            ),
            qa(
                "What is the race around condition? How is it solved?",
                "Race around condition occurs in a level triggered JK flip flop when J=K=1 and the clock pulse is wider than the propagation delay of the flip flop. The output toggles continuously for the entire duration of the clock pulse, so the final state becomes unpredictable. It is solved by making the clock pulse shorter than the propagation delay, or by using a master slave JK flip flop, or by using an edge triggered JK flip flop.",
                4
            ),
            qa(
                "Convert a JK flip flop into a D flip flop.",
                "A D flip flop is obtained from a JK flip flop by making the input such that Q_next equals D. The required input is D = JQ′ + K′Q. The simplest implementation is to connect J = D and K = D′. When D = 0, K = 1, the flip flop resets; when D = 1, J = 1, the flip flop sets. So the D input sets or resets the flip flop on the active edge.",
                3
            ),
            qa(
                "Differentiate between level and edge triggered devices.",
                "A level triggered device like a latch is transparent for the entire duration when the enable is active; any change in the input during that time is reflected in the output. An edge triggered device like a flip flop samples the input only at the rising or falling edge of the clock and holds the output until the next edge. Edge triggered devices are preferred in synchronous designs because they are predictable and avoid race conditions.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Registers
========================================================= */

const registers = createTopic(
    "registers",
    "Registers",

    [
        definition(
            "Register",
            "A group of flip flops used to store multiple bits of data, usually 4, 8, 16 or 32 bits, that can be loaded and read together."
        ),

        heading("Types of Registers"),

        table(
            ["Type", "Description"],
            [
                ["Buffer register", "Simply stores data; no shift"],
                ["Shift register", "Shifts data left or right on each clock"],
                ["Universal register", "Can shift both left and right and can load parallel data"],
                ["Counter", "Special register that follows a fixed sequence, usually counting"],
            ]
        ),

        heading("Shift Register Operations"),

        list([
            "Serial In Serial Out (SISO): data enters and leaves one bit at a time.",
            "Serial In Parallel Out (SIPO): data enters serially and leaves in parallel.",
            "Parallel In Serial Out (PISO): data enters in parallel and leaves serially.",
            "Parallel In Parallel Out (PIPO): data enters and leaves in parallel.",
        ]),

        heading("4 Bit SISO Shift Register"),

        code(
            `Initial:  0 0 0 0
Input 1:  1 0 0 0
Input 0:  0 1 0 0
Input 1:  1 0 1 0
Input 1:  1 1 0 1

After 4 clocks, the first bit entered is at the
rightmost position and is shifted out.
`,
            "text",
            "Serial in serial out shift"
        ),

        heading("Applications of Shift Registers"),

        list([
            "Serial to parallel and parallel to serial conversion.",
            "Delay line to delay a digital signal by N clock cycles.",
            "Pseudo random number generation using LFSR.",
            "Shift register based memory in early computers.",
            "Data transmission in UART, SPI and other serial protocols.",
        ]),

        heading("Bidirectional Shift Register"),

        definition(
            "Bidirectional Shift Register",
            "A register that can shift data either to the left or to the right based on a control signal, allowing the same bits to be used as both input and output."
        ),

        heading("Universal Shift Register"),

        list([
            "Has four modes: hold, shift left, shift right and parallel load.",
            "Two select lines are used to choose the mode.",
            "Used as the basis of arithmetic units and processors.",
        ]),

        heading("Counter Using Shift Register (Ring Counter)"),

        code(
            `Ring counter (4 bit):
Initial  1 0 0 0
Clock 1  0 1 0 0
Clock 2  0 0 1 0
Clock 3  0 0 0 1
Clock 4  1 0 0 0   (back to start)

Only one 1 is circulating, so the count repeats
every n clocks for an n bit ring counter.
`,
            "text",
            "Ring counter"
        ),

        note(
            "Ring counter needs n flip flops for n states and is simple but wasteful because only n of the 2ⁿ possible states are used. Johnson counter uses 2n states for n flip flops by feeding back the inverted output.",
            "tip",
            "Johnson Counter"
        ),

        keyPoints([
            "A register is a group of flip flops storing multiple bits.",
            "SISO, SIPO, PISO and PIPO are the four shift register modes.",
            "Bidirectional registers can shift left or right.",
            "Universal registers can also load parallel data.",
            "Ring counter is a shift register with single circulating 1.",
        ]),
    ],

    {
        summary:
            "Understand shift registers, their four modes, bidirectional and universal registers and applications.",
        minutes: 11,
        tags: ["register", "shift-register", "SISO", "SIPO", "important"],

        mcqs: [
            mcq(
                "SISO stands for:",
                ["Serial In Serial Out", "Single In Single Out", "Sequential In Sequential Out", "Synchronous In Synchronous Out"],
                0,
                "SISO means data enters and leaves one bit at a time."
            ),
            mcq(
                "PISO converts:",
                ["Serial to parallel", "Parallel to serial", "Analog to digital", "Digital to analog"],
                1,
                "PISO loads parallel data and outputs it serially."
            ),
            mcq(
                "A 4 bit SIPO register needs how many clock pulses to output 4 bits?",
                ["1", "2", "4", "8"],
                2,
                "SIPO loads 4 bits in 4 clocks and outputs all 4 at once."
            ),
            mcq(
                "Ring counter uses how many flip flops for n states?",
                ["n/2", "n", "2ⁿ", "log n"],
                1,
                "Ring counter needs n flip flops for n states."
            ),
            mcq(
                "Johnson counter uses how many states for n flip flops?",
                ["n", "2n", "2ⁿ", "n²"],
                1,
                "Johnson counter produces 2n states with n flip flops."
            ),
            mcq(
                "A universal shift register can:",
                ["Only shift left", "Only shift right", "Hold, shift and parallel load", "Only count"],
                2,
                "Universal register can hold, shift left, shift right and load."
            ),
        ],

        questions: [
            qa(
                "Explain the four types of shift registers.",
                "A shift register can be classified by the way data enters and leaves. In SISO (Serial In Serial Out), data enters and leaves one bit per clock, useful as a delay line. In SIPO (Serial In Parallel Out), data enters serially and is available in parallel at the output, used to receive serial data. In PISO (Parallel In Serial Out), data is loaded in parallel and shifted out serially, used to transmit parallel data over a single line. In PIPO (Parallel In Parallel Out), data is loaded and read in parallel, used as a simple buffer.",
                4
            ),
            qa(
                "Explain ring counter and Johnson counter.",
                "A ring counter is a shift register in which the output of the last flip flop is fed back to the input of the first. A single 1 is loaded initially and circulates through the register, producing n distinct states using n flip flops. It is simple but uses only n of the 2ⁿ possible states. A Johnson counter feeds back the inverted output, producing 2n states with n flip flops and making better use of the hardware.",
                4
            ),
            qa(
                "What is a universal shift register?",
                "A universal shift register is a register that can perform four operations selected by two mode control lines: hold the current data, shift right, shift left, and load parallel data. The same register can therefore be used as a buffer, a shift register in either direction or as a parallel load register. It is widely used inside CPUs and ALUs.",
                4
            ),
            qa(
                "List the applications of shift registers.",
                "Shift registers are used for serial to parallel and parallel to serial conversion, which is essential in UART, SPI and I2C communication. They are used as delay lines to delay a digital signal by N clock cycles. They form the basis of pseudo random number generators using Linear Feedback Shift Registers. They are used in early digital memory and in ring and Johnson counters.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Counters
========================================================= */

const counters = createTopic(
    "counters",
    "Counters",

    [
        definition(
            "Counter",
            "A sequential circuit that goes through a predetermined sequence of states on the application of clock pulses. The most common counter is a binary counter that counts in binary from 0 to 2ⁿ−1."
        ),

        heading("Types of Counters"),

        table(
            ["Basis", "Type", "Description"],
            [
                ["Clock", "Synchronous", "All flip flops share the same clock"],
                ["Clock", "Asynchronous (Ripple)", "Clock is fed to the first flip flop only; output of one drives the next"],
                ["Direction", "Up counter", "Counts 0, 1, 2, ..., 2ⁿ−1"],
                ["Direction", "Down counter", "Counts 2ⁿ−1, ..., 2, 1, 0"],
                ["Direction", "Up Down counter", "Can count up or down based on control input"],
                ["Code", "Binary, BCD, Johnson, Ring", "Counts in different number systems"],
            ]
        ),

        heading("Asynchronous (Ripple) Up Counter"),

        text(
            "In a ripple counter the clock is applied only to the first flip flop. Each flip flop is connected as a T flip flop (J=K=1). The output of one stage drives the clock of the next stage, so the carry ripples through the flip flops like a wave."
        ),

        code(
            `3 bit ripple up counter using JK flip flops with J=K=1:

Clock   Q2 Q1 Q0   Decimal
  0      0  0  0      0
  1      0  0  1      1
  2      0  1  0      2
  3      0  1  1      3
  4      1  0  0      4
  5      1  0  1      5
  6      1  1  0      6
  7      1  1  1      7
  8      0  0  0      0 (repeats)
`,
            "text",
            "Ripple up counter state table"
        ),

        note(
            "Ripple counter is simple but slow because the carry has to ripple through every flip flop. Synchronous counter is faster because all flip flops are triggered by the same clock, but it is more complex to design.",
            "exam",
            "Frequently Asked"
        ),

        heading("Synchronous Counter Design"),

        steps([
            "Decide the number of bits n and the type of flip flop (usually JK or T).",
            "Write the state sequence from 0 to 2ⁿ−1.",
            "Write the next state for each present state.",
            "Derive the excitation table for the chosen flip flop.",
            "Find Boolean expressions for each flip flop input using K map.",
            "Implement the circuit.",
        ]),

        heading("Modulus of a Counter"),

        definition(
            "Modulus (MOD)",
            "The number of distinct states a counter goes through before it repeats. An n bit binary counter has modulus 2ⁿ."
        ),

        list([
            "MOD 10 counter counts 0 to 9 and is called a BCD or decade counter.",
            "MOD 6 counter counts 0 to 5.",
            "MOD N counter is made by using n flip flops where 2ⁿ ≥ N and resetting when the count reaches N.",
        ]),

        heading("Decade (BCD) Counter"),

        code(
            `Counts from 0000 to 1001 (0 to 9), then resets to 0000.
It is a MOD 10 counter and is used in digital clocks,
frequency counters and event counters.
`,
            "text",
            "Decade counter"
        ),

        heading("Applications of Counters"),

        list([
            "Counting events, pulses or objects.",
            "Frequency division by powers of 2.",
            "Digital clocks and timers.",
            "Address generation in memory and sequence control.",
            "Program counters in microprocessors.",
            "Frequency counters in measurement instruments.",
        ]),

        keyPoints([
            "A counter is a sequential circuit that goes through a fixed sequence.",
            "Asynchronous (ripple) counter is simple but slow.",
            "Synchronous counter is fast but more complex.",
            "Modulus is the number of states; MOD N counter uses 2ⁿ ≥ N flip flops.",
            "Decade counter is a MOD 10 BCD counter.",
        ]),
    ],

    {
        summary:
            "Understand counters, the difference between synchronous and asynchronous, the design of synchronous counters and the concept of modulus.",
        minutes: 12,
        tags: ["counter", "ripple", "synchronous", "MOD", "important"],

        mcqs: [
            mcq(
                "An n bit binary counter has how many states?",
                ["n", "n+1", "2ⁿ", "2n"],
                2,
                "An n bit counter has 2ⁿ states."
            ),
            mcq(
                "Ripple counter is also called:",
                ["Synchronous counter", "Asynchronous counter", "Johnson counter", "Ring counter"],
                1,
                "Ripple counter is asynchronous because clock ripples through flip flops."
            ),
            mcq(
                "A MOD 10 counter is also called:",
                ["Binary counter", "Decade counter", "Johnson counter", "Ring counter"],
                1,
                "MOD 10 counter is the decade or BCD counter."
            ),
            mcq(
                "In a synchronous counter, all flip flops are triggered by:",
                ["Different clocks", "A common clock", "No clock", "Output of previous FF"],
                1,
                "Synchronous counter uses a common clock for all flip flops."
            ),
            mcq(
                "3 bit ripple counter has modulus:",
                ["3", "6", "8", "16"],
                2,
                "3 bit counter counts 0 to 7, so MOD 8 = 2³."
            ),
            mcq(
                "A 4 bit up counter counts from:",
                ["0 to 4", "0 to 15", "1 to 16", "0 to 16"],
                1,
                "n bit counter counts 0 to 2ⁿ−1, so 0 to 15."
            ),
        ],

        questions: [
            qa(
                "Differentiate between synchronous and asynchronous counters.",
                "In an asynchronous (ripple) counter the clock is applied only to the first flip flop and the output of each flip flop drives the clock of the next, so the carry ripples through. It is simple to design using T or JK flip flops but is slow because the delay accumulates. In a synchronous counter all flip flops share a common clock, and the inputs are derived from the current state so that the next state is reached in one clock cycle. It is fast but more complex to design.",
                4
            ),
            qa(
                "Design a MOD 6 counter using JK flip flops.",
                "A MOD 6 counter counts 0, 1, 2, 3, 4, 5 and then resets. We need 3 flip flops because 2³ = 8 > 6. Let the states be Q2 Q1 Q0. The state sequence is 000, 001, 010, 011, 100, 101, then back to 000. The next state logic is derived from a state table and excitation table, and simplified using K map. When the count reaches 110 (which should not occur), the counter is reset to 000 using the asynchronous clear input.",
                4
            ),
            qa(
                "Explain ripple up counter with timing diagram.",
                "In a 3 bit ripple up counter using JK flip flops with J=K=1, the LSB Q0 toggles on every clock pulse, Q1 toggles when Q0 changes from 1 to 0, and Q2 toggles when Q1 changes from 1 to 0. The carry propagates from LSB to MSB like a ripple, hence the name. The state sequence is 000, 001, 010, 011, 100, 101, 110, 111, then repeats from 000. The main disadvantage is the propagation delay, which limits the maximum clock frequency.",
                4
            ),
            qa(
                "What is a decade counter? Where is it used?",
                "A decade counter is a MOD 10 counter that counts from 0000 to 1001 in binary and then resets to 0000. It is also called a BCD counter because each state represents one decimal digit 0 to 9. It is widely used in digital clocks, frequency counters, event counters, scoreboards and anywhere a decimal display must be driven directly from a digital circuit.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Semiconductor Memories
========================================================= */

const memories = createTopic(
    "semiconductor-memories",
    "Semiconductor Memories",

    [
        definition(
            "Memory",
            "A device that stores binary data, either temporarily while the system is running (RAM) or permanently (ROM)."
        ),

        heading("Classification of Memories"),

        table(
            ["Type", "Volatile?", "Description"],
            [
                ["RAM", "Yes", "Read and write memory used for temporary storage"],
                ["ROM", "No", "Read only memory, contents fixed at manufacture"],
                ["PROM", "No", "Programmable once by the user"],
                ["EPROM", "No", "Erasable using UV light and reprogrammable"],
                ["EEPROM", "No", "Electrically erasable, byte by byte"],
                ["Flash", "No", "Block erasable EEPROM, used in SSDs and pen drives"],
            ]
        ),

        note(
            "Volatile memory loses its contents when power is switched off. RAM is volatile. Non volatile memory keeps its data even without power. ROM and its variants are non volatile.",
            "tip",
            "Volatile vs Non Volatile"
        ),

        heading("Static RAM (SRAM)"),

        list([
            "Uses 6 transistors per bit in a flip flop like cell.",
            "No refreshing required as long as power is on.",
            "Faster but lower density and more expensive than DRAM.",
            "Used for cache memory inside the CPU.",
        ]),

        heading("Dynamic RAM (DRAM)"),

        list([
            "Uses 1 transistor and 1 capacitor per bit.",
            "Capacitor leaks charge and must be refreshed thousands of times per second.",
            "Slower than SRAM but higher density and cheaper.",
            "Used for main memory of computers.",
        ]),

        heading("Comparison of SRAM and DRAM"),

        table(
            ["Basis", "SRAM", "DRAM"],
            [
                ["Cell", "6 transistors", "1T + 1 capacitor"],
                ["Refresh", "Not needed", "Needed every few ms"],
                ["Speed", "Faster", "Slower"],
                ["Density", "Lower", "Higher"],
                ["Cost per bit", "Higher", "Lower"],
                ["Use", "Cache", "Main memory"],
            ]
        ),

        heading("Memory Organisation"),

        code(
            `Memory size = number of words × word size

Example: 4K × 8 memory
  Words = 4096
  Bits per word = 8
  Total bits = 32768 = 32 Kb
  Address lines = log₂(4096) = 12
  Data lines = 8
`,
            "text",
            "Memory size calculation"
        ),

        heading("Memory Operations"),

        list([
            "Read operation: place address on address bus, activate read signal, data appears on data bus.",
            "Write operation: place address and data on the buses, activate write signal, data is stored in the cell.",
            "Both operations are controlled by a memory controller or processor.",
        ]),

        heading("Cache Memory"),

        definition(
            "Cache Memory",
            "A small, fast memory placed between the CPU and main memory to hold copies of the most frequently used data and instructions."
        ),

        list([
            "Exploits temporal and spatial locality.",
            "L1 cache is inside the CPU, L2 and L3 are external but very close.",
            "Hit: data found in cache. Miss: data not in cache, must be fetched from RAM.",
            "Hit ratio = hits / (hits + misses).",
        ]),

        heading("Virtual Memory"),

        definition(
            "Virtual Memory",
            "A technique that uses the hard disk to extend the apparent size of the main memory, allowing the execution of programs larger than physical RAM."
        ),

        list([
            "Memory is divided into pages of fixed size (typically 4 KB).",
            "Pages are brought from disk to RAM on demand.",
            "Page fault occurs when a required page is not in RAM.",
            "OS uses page replacement algorithms such as FIFO, LRU and Optimal to decide which page to remove.",
        ]),

        keyPoints([
            "RAM is volatile, ROM is non volatile.",
            "SRAM is used for cache, DRAM for main memory.",
            "Memory size = 2^(address lines) × data lines.",
            "Cache exploits temporal and spatial locality.",
            "Virtual memory uses the disk to extend RAM.",
        ]),
    ],

    {
        summary:
            "Understand the types of semiconductor memories, SRAM vs DRAM, memory organisation, cache and virtual memory.",
        minutes: 12,
        tags: ["memory", "RAM", "ROM", "cache", "important"],

        mcqs: [
            mcq(
                "Which memory is volatile?",
                ["ROM", "RAM", "PROM", "EPROM"],
                1,
                "RAM loses its contents when power is switched off."
            ),
            mcq(
                "SRAM is used as:",
                ["Main memory", "Cache", "Hard disk", "Optical storage"],
                1,
                "SRAM is fast and used for cache memory inside the CPU."
            ),
            mcq(
                "DRAM must be:",
                ["Replaced often", "Refreshed periodically", "Heated", "Connected to a battery"],
                1,
                "DRAM cells must be refreshed thousands of times per second."
            ),
            mcq(
                "A 4K × 8 memory has how many address lines?",
                ["4", "8", "12", "32"],
                2,
                "log₂(4096) = 12 address lines."
            ),
            mcq(
                "Cache memory exploits:",
                ["Volatility", "Locality of reference", "Magnetic storage", "Optical reading"],
                1,
                "Cache exploits temporal and spatial locality."
            ),
            mcq(
                "A page fault occurs when:",
                ["A page is in RAM", "A required page is not in RAM", "The disk is full", "Power is off"],
                1,
                "Page fault is raised when the OS must load a page from disk."
            ),
        ],

        questions: [
            qa(
                "Differentiate between RAM and ROM.",
                "RAM (Random Access Memory) is read write volatile memory used to store data and programs while the computer is running; its contents are lost when power is switched off. ROM (Read Only Memory) is non volatile memory whose contents are written once at the time of manufacture or programming and can only be read during normal operation. RAM is used for main memory, while ROM is used to store the boot program and firmware.",
                4
            ),
            qa(
                "Differentiate between SRAM and DRAM.",
                "SRAM uses a flip flop of 6 transistors per cell and does not need refreshing, so it is faster but has lower density and is more expensive. DRAM uses 1 transistor and 1 capacitor per cell, which is denser and cheaper but needs to be refreshed thousands of times per second, making it slower. SRAM is used for cache memory inside the CPU, while DRAM is used for the main memory of the computer.",
                4
            ),
            qa(
                "Explain cache memory and its importance.",
                "Cache memory is a small, very fast memory placed between the CPU and the main memory to hold copies of the most frequently used data and instructions. It exploits the principle of locality: temporal locality says that recently accessed data is likely to be accessed again soon, and spatial locality says that data near the recently accessed location is also likely to be accessed. When the CPU finds the required data in the cache, it is a hit; otherwise it is a miss and the data must be brought from the slower main memory. A high hit ratio greatly speeds up the system.",
                4
            ),
            qa(
                "What is virtual memory? Why is it used?",
                "Virtual memory is a memory management technique that uses the hard disk to extend the apparent size of the main memory. The program is divided into fixed size pages, and only the required pages are loaded into RAM; the rest remain on disk. When a page not in RAM is needed, a page fault occurs and the OS loads it, possibly removing an old page using a replacement algorithm such as LRU. Virtual memory allows programs larger than the physical RAM to run, increases the degree of multiprogramming and provides memory protection between processes.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    sequentialLogic,
    flipFlops,
    registers,
    counters,
    memories,
];