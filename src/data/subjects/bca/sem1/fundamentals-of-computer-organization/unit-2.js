/* =========================================================
   BCA • SEM 1 • Fundamentals of Computer Organization
   UNIT 2 — Computer Organization, Memory and I/O
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
   TOPIC 1 — Basic Computer Organization
========================================================= */

const basicComputerOrganization = createTopic(
    "basic-computer-organization",
    "Basic Computer Organization",

    [
        definition(
            "Computer Organization",
            "The study of the internal structure, interconnection and operation of the major units of a computer system."
        ),

        heading("Functional Units of a Computer"),

        table(
            ["Unit", "Function"],
            [
                ["Input", "Accepts data and instructions from the user."],
                ["Memory", "Stores data, instructions and results."],
                ["Arithmetic and Logic Unit (ALU)", "Performs arithmetic, logic and shift operations."],
                ["Control Unit (CU)", "Directs the sequence of operations and decodes instructions."],
                ["Output", "Presents the processed information to the user."],
            ]
        ),

        note(
            "The ALU and the Control Unit together form the Central Processing Unit, or CPU, which is the brain of the computer.",
            "exam",
            "Frequently Asked"
        ),

        heading("System Bus"),

        definition(
            "System Bus",
            "A set of parallel wires that carry data, addresses and control signals between the components of a computer."
        ),

        table(
            ["Bus", "Carries"],
            [
                ["Data bus", "The actual data being transferred."],
                ["Address bus", "The memory or I/O location being accessed."],
                ["Control bus", "Signals such as read, write and clock."],
            ]
        ),

        heading("Stored Program Concept"),

        text(
            "Modern computers follow the stored program concept proposed by John von Neumann. Both the instructions and the data on which they operate are stored in the same memory. The CPU fetches an instruction, decodes it and executes it in a continuous cycle."
        ),

        heading("Von Neumann Architecture"),

        table(
            ["Component", "Role"],
            [
                ["Memory", "Stores both instructions and data."],
                ["Arithmetic Logic Unit", "Performs computation."],
                ["Control Unit", "Fetches, decodes and executes instructions."],
                ["Input and Output", "Communicate with the outside world."],
                ["Bus system", "Connects all units for data movement."],
            ]
        ),

        heading("Instruction Cycle"),

        steps([
            "Fetch the next instruction from memory",
            "Decode the instruction to determine the operation",
            "Read the required operands from registers or memory",
            "Execute the operation in the ALU",
            "Store the result back in a register or memory",
            "Repeat the cycle for the next instruction",
        ]),

        heading("Instruction Format"),

        code(
            `Simple three address format

[ Opcode ][ Operand 1 ][ Operand 2 ][ Result ]

Example: ADD R1, R2, R3   means R1 = R2 + R3

Two address format
[ Opcode ][ Destination ][ Source ]

Example: ADD R1, R2       means R1 = R1 + R2

One address format
[ Opcode ][ Address ]

Used in simple accumulator based machines.`,
            "text",
            "Common instruction formats"
        ),

        heading("Addressing Modes"),

        table(
            ["Mode", "Address field gives", "Example (Address = 200)"],
            [
                ["Immediate", "The operand itself", "MOV R1, #5 — R1 = 5"],
                ["Direct", "The memory address of the operand", "MOV R1, 200 — R1 = M[200]"],
                ["Indirect", "The address of a location that contains the address", "MOV R1, (200) — R1 = M[M[200]]"],
                ["Register", "The name of a register", "MOV R1, R2 — R1 = R2"],
                ["Register indirect", "A register that holds the memory address", "MOV R1, (R2) — R1 = M[R2]"],
                ["Indexed", "Address plus the value of an index register", "MOV R1, 200(R2) — R1 = M[200 + R2]"],
            ]
        ),

        keyPoints([
            "The five functional units of a computer are input, memory, ALU, control and output.",
            "The CPU consists of the ALU and the control unit.",
            "The system bus has three parts: data, address and control bus.",
            "The stored program concept loads both instructions and data into memory.",
            "Addressing modes describe how the operand of an instruction is located.",
        ]),
    ],

    {
        summary:
            "Understand the functional units, system bus, stored program concept and addressing modes.",
        minutes: 12,
        tags: ["organization", "cpu", "von-neumann", "important"],

        mcqs: [
            mcq(
                "The ALU and control unit together form the:",
                ["Memory", "CPU", "Bus", "Register"],
                1,
                "The CPU combines the ALU and the control unit."
            ),
            mcq(
                "The address bus carries:",
                ["Data values", "Memory locations", "Clock signals", "Power"],
                1,
                "The address bus carries the address of the location being accessed."
            ),
            mcq(
                "The stored program concept is associated with:",
                ["Charles Babbage", "John von Neumann", "Alan Turing", "Bill Gates"],
                1,
                "Von Neumann described the stored program concept in 1945."
            ),
            mcq(
                "The first step in the instruction cycle is:",
                ["Decode", "Fetch", "Execute", "Store"],
                1,
                "The cycle begins by fetching the instruction from memory."
            ),
            mcq(
                "In immediate addressing, the operand is:",
                ["In memory", "In the instruction itself", "In a register file", "On the bus"],
                1,
                "Immediate mode encodes the value inside the instruction."
            ),
            mcq(
                "Register indirect addressing uses:",
                ["Two registers", "A register that holds a memory address", "An immediate value", "A stack"],
                1,
                "The register contains the address of the operand in memory."
            ),
        ],

        questions: [
            qa(
                "Draw a block diagram of a computer and explain each unit.",
                "A computer consists of five units connected by the system bus. The input unit accepts data and instructions from devices such as the keyboard. The memory unit stores programs and data. The ALU performs arithmetic, logic and shift operations. The control unit directs the other units by decoding instructions and issuing control signals. The output unit sends the processed results to the user through devices such as the monitor. The data, address and control buses interconnect the units.",
                5
            ),
            qa(
                "Explain the stored program concept.",
                "The stored program concept, proposed by John von Neumann, states that both the instructions of a program and the data on which the program operates are stored in the same memory. The CPU fetches an instruction, decodes it, fetches the required data, executes the operation and stores the result. Because programs can be treated as data, the computer can modify its own instructions, which makes it flexible and powerful.",
                4
            ),
            qa(
                "Differentiate between direct and indirect addressing modes.",
                "In direct addressing, the address field of the instruction gives the memory address of the operand, so only one memory access is needed. In indirect addressing, the address field gives the address of a location that contains the address of the operand, so two memory accesses are needed. Indirect addressing is slower but allows pointer based data structures.",
                4
            ),
            qa(
                "Explain the instruction cycle.",
                "The instruction cycle has three main phases. In the fetch phase, the CPU reads the next instruction from the address held in the program counter. In the decode phase, the control unit interprets the opcode and determines the required operands. In the execute phase, the ALU performs the operation, the result is stored and the program counter is updated. The cycle then repeats for the next instruction.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — CPU, Registers and Control Unit
========================================================= */

const cpuRegistersControl = createTopic(
    "cpu-registers-and-control-unit",
    "CPU, Registers and Control Unit",

    [
        heading("Inside the CPU"),

        text(
            "The CPU is built from three main parts: the arithmetic logic unit, the control unit and a small set of high speed storage locations called registers."
        ),

        heading("Important Registers"),

        table(
            ["Register", "Symbol", "Function"],
            [
                ["Program Counter", "PC", "Holds the address of the next instruction."],
                ["Instruction Register", "IR", "Holds the instruction currently being decoded."],
                ["Memory Address Register", "MAR", "Holds the address of the memory location to be accessed."],
                ["Memory Data Register", "MDR", "Holds the data read from or written to memory."],
                ["Accumulator", "ACC", "Holds one operand and the result of ALU operations."],
                ["Status Register", "SR", "Holds condition flags such as zero, carry and sign."],
                ["Stack Pointer", "SP", "Holds the address of the top of the stack."],
            ]
        ),

        heading("Flags of the Status Register"),

        table(
            ["Flag", "Meaning"],
            [
                ["Zero (Z)", "Set when the result of an operation is zero."],
                ["Carry (C)", "Set when an addition produces a carry out or a subtraction needs a borrow."],
                ["Sign (S)", "Set when the result is negative in two's complement."],
                ["Overflow (V)", "Set when the result is too large to fit in the available bits."],
                ["Parity (P)", "Set when the result has an even number of 1s."],
            ]
        ),

        heading("Functions of the Control Unit"),

        list([
            "Fetch the next instruction from memory",
            "Decode the instruction to find the operation",
            "Generate the control signals that activate the ALU, registers and buses",
            "Manage the flow of data between the CPU, memory and devices",
            "Handle interrupts and exceptional conditions",
            "Update the program counter to point to the next instruction",
        ]),

        heading("Microprogrammed versus Hardwired Control"),

        table(
            ["Basis", "Hardwired Control", "Microprogrammed Control"],
            [
                ["Implementation", "Combinational logic gates", "Firmware stored in control memory"],
                ["Speed", "Very fast", "Slightly slower due to memory access"],
                ["Flexibility", "Difficult to modify", "Easy to modify by rewriting microcode"],
                ["Cost of design", "High for complex CPUs", "Lower for complex instruction sets"],
                ["Use", "RISC processors", "CISC processors"],
            ]
        ),

        note(
            "A microprogram is a small program stored in a special ROM inside the control unit. Each machine instruction is broken into a sequence of microinstructions, and these are executed to carry out the machine instruction.",
            "tip",
            "Control Memory"
        ),

        heading("Microinstruction Format"),

        code(
            `[ Control field ][ Condition ][ Branch address ]
[  Activate ALU   ][  Flag Z  ][  Next micro address  ]

Example
1100  01  00010110
↑      ↑   ↑
Signals  Z=1  next = 22`,
            "text",
            "Typical microinstruction layout"
        ),

        keyPoints([
            "The CPU contains the ALU, control unit and registers.",
            "The program counter points to the next instruction.",
            "The status register holds condition flags.",
            "Hardwired control uses gates; microprogrammed control uses microcode.",
            "Microprogrammed control is easier to modify and is used in CISC processors.",
        ]),
    ],

    {
        summary:
            "Study the internal structure of the CPU, the role of registers, control unit design and microprogramming.",
        minutes: 11,
        tags: ["cpu", "registers", "control-unit", "important"],

        mcqs: [
            mcq(
                "The register that holds the address of the next instruction is:",
                ["IR", "PC", "MAR", "MDR"],
                1,
                "The program counter holds the address of the next instruction."
            ),
            mcq(
                "The instruction currently being executed is stored in:",
                ["PC", "MDR", "IR", "SP"],
                2,
                "The instruction register holds the instruction being decoded."
            ),
            mcq(
                "The carry flag is set when:",
                ["Result is zero", "Result is negative", "Addition produces a carry out", "Result is too large"],
                2,
                "The carry flag indicates carry out of the most significant bit."
            ),
            mcq(
                "Hardwired control uses:",
                ["Microcode", "Combinational logic", "Magnetic tape", "A compiler"],
                1,
                "Hardwired control is built from gates and flip flops."
            ),
            mcq(
                "Microprogrammed control stores its signals in:",
                ["Main memory", "Cache", "Control memory (ROM)", "Hard disk"],
                2,
                "Microcode is stored in a special control memory inside the CPU."
            ),
            mcq(
                "The stack pointer holds:",
                ["The top element of the stack", "The address of the top of the stack", "The base of the stack", "The size of the stack"],
                1,
                "SP points to the topmost element currently in the stack."
            ),
        ],

        questions: [
            qa(
                "Explain the role of the program counter and instruction register.",
                "The program counter is a register that always holds the address of the next instruction to be fetched from memory. After each fetch, the PC is automatically incremented so that the CPU can move to the following instruction, or it is loaded with a new address when a branch or jump occurs. The instruction register holds the instruction that has just been fetched and is being decoded. While the IR holds the instruction, the PC is free to be updated for the next cycle.",
                4
            ),
            qa(
                "Differentiate between hardwired and microprogrammed control.",
                "Hardwired control is implemented using fixed combinational and sequential logic circuits and is therefore very fast but difficult to design and modify. Microprogrammed control is implemented using a small program stored in a control memory, in which each machine instruction is decoded into a sequence of microinstructions. Microprogrammed control is easier to design, modify and debug but is slightly slower. Hardwired control is typical of RISC processors, while microprogrammed control is used in CISC processors.",
                4
            ),
            qa(
                "Explain the various CPU registers.",
                "The CPU contains several special purpose registers. The program counter holds the address of the next instruction. The instruction register holds the instruction being decoded. The memory address register holds the address of the memory location being accessed. The memory data register holds the data read from or written to memory. The accumulator holds one of the operands and the result of ALU operations. The status register stores condition flags such as zero, carry, sign and overflow. The stack pointer keeps track of the top of the stack.",
                4
            ),
            qa(
                "What is a microinstruction? Explain its format.",
                "A microinstruction is the smallest operation executed by the control unit in a microprogrammed CPU. Its format typically consists of a control field that specifies which gates and buses to activate, a condition field that tests a status flag, and a branch address field that specifies the address of the next microinstruction. Each machine instruction is decoded into a sequence of such microinstructions, which together implement the instruction.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Memory Organization
========================================================= */

const memoryOrganization = createTopic(
    "memory-organization",
    "Memory Organization",

    [
        definition(
            "Memory Hierarchy",
            "The arrangement of different storage devices in order of speed, cost and capacity, so that the most frequently accessed data is kept in the fastest memory."
        ),

        heading("Memory Hierarchy from Fastest to Slowest"),

        table(
            ["Level", "Type", "Typical Size", "Access Time"],
            [
                ["L1", "Registers inside the CPU", "Hundreds of bytes", "Sub nanosecond"],
                ["L2", "Cache memory (SRAM)", "Tens to hundreds of KB", "A few nanoseconds"],
                ["L3", "Main memory (DRAM)", "Several GB", "Tens of nanoseconds"],
                ["L4", "Solid state drive", "Hundreds of GB", "Microseconds"],
                ["L5", "Hard disk drive", "Several TB", "Milliseconds"],
                ["L6", "Magnetic tape or optical", "Up to PB", "Seconds"],
            ]
        ),

        note(
            "As we move down the hierarchy, capacity increases, cost per bit decreases, but access time also increases. The principle of locality is exploited to keep frequently used data near the top of the hierarchy.",
            "tip",
            "Hierarchy Rule"
        ),

        heading("Principle of Locality"),

        list([
            "Temporal locality — if a location is referenced, it is likely to be referenced again soon.",
            "Spatial locality — if a location is referenced, nearby locations are likely to be referenced soon.",
        ]),

        heading("Primary Memory"),

        table(
            ["Type", "Full Form", "Property"],
            [
                ["RAM", "Random Access Memory", "Volatile, read and write, temporary storage."],
                ["ROM", "Read Only Memory", "Non volatile, contents written at manufacture."],
                ["PROM", "Programmable ROM", "Can be programmed once by the user."],
                ["EPROM", "Erasable PROM", "Can be erased using ultraviolet light and reprogrammed."],
                ["EEPROM", "Electrically EPROM", "Can be erased electrically and reprogrammed in place."],
                ["Flash", "Flash memory", "A type of EEPROM that erases in blocks, used in SSDs and pen drives."],
            ]
        ),

        heading("RAM: SRAM versus DRAM"),

        table(
            ["Basis", "SRAM", "DRAM"],
            [
                ["Construction", "Six transistors per cell", "One transistor and one capacitor per cell"],
                ["Refresh", "Not required", "Must be refreshed thousands of times per second"],
                ["Speed", "Very fast", "Slower than SRAM"],
                ["Density", "Low", "High"],
                ["Cost per bit", "High", "Low"],
                ["Use", "Cache memory", "Main memory"],
            ]
        ),

        heading("Cache Memory"),

        definition(
            "Cache Memory",
            "A small, fast memory placed between the CPU and main memory that holds a copy of the most frequently used data and instructions."
        ),

        heading("Cache Mapping Techniques"),

        table(
            ["Technique", "Description", "Advantage", "Disadvantage"],
            [
                ["Direct mapping", "Each main memory block maps to exactly one cache line", "Simple and fast", "High conflict misses"],
                ["Associative", "A block can be placed in any cache line", "Low conflict misses", "Complex and expensive"],
                ["Set associative", "A block maps to a specific set but any line within that set", "Compromise between the two", "Moderate cost and complexity"],
            ]
        ),

        heading("Virtual Memory"),

        definition(
            "Virtual Memory",
            "A technique that uses the hard disk to extend the apparent size of the main memory, allowing programs larger than physical RAM to run."
        ),

        list([
            "Each process is given an illusion of a large private address space.",
            "Pages of the process are brought into RAM on demand, a process called paging.",
            "When a page is not in RAM, a page fault occurs and the OS loads the required page.",
            "If RAM is full, an old page is written to disk, which is called page replacement.",
        ]),

        heading("Common Page Replacement Algorithms"),

        table(
            ["Algorithm", "Strategy"],
            [
                ["FIFO", "Replace the page that has been in memory the longest."],
                ["LRU", "Replace the page that has not been used for the longest time."],
                ["Optimal", "Replace the page that will not be used for the longest time in the future."],
                ["LFU", "Replace the page that has been used the least number of times."],
            ]
        ),

        keyPoints([
            "Memory hierarchy balances speed, cost and capacity.",
            "Cache memory exploits temporal and spatial locality.",
            "SRAM is faster and costlier than DRAM and is used for cache.",
            "Virtual memory uses the disk to extend RAM.",
            "Page replacement algorithms decide which page to remove when memory is full.",
        ]),
    ],

    {
        summary:
            "Understand the memory hierarchy, types of RAM and ROM, cache mapping and virtual memory concepts.",
        minutes: 13,
        tags: ["memory", "cache", "ram", "rom", "important"],

        mcqs: [
            mcq(
                "Which memory is the fastest?",
                ["Registers", "Cache", "Main memory", "Hard disk"],
                0,
                "Registers are the fastest storage inside the CPU."
            ),
            mcq(
                "DRAM must be:",
                ["Refreshed continuously", "Read only", "Wired permanently", "Cooled by a fan"],
                0,
                "DRAM cells lose charge and must be refreshed periodically."
            ),
            mcq(
                "EEPROM can be:",
                ["Programmed only once", "Erased only with UV light", "Erased electrically", "Never erased"],
                2,
                "EEPROM can be erased electrically and reprogrammed in place."
            ),
            mcq(
                "In direct mapping, a main memory block maps to:",
                ["Any cache line", "Exactly one cache line", "Two cache lines", "All cache lines"],
                1,
                "Direct mapping places each block in a fixed line."
            ),
            mcq(
                "A page fault occurs when:",
                ["A page is corrupted", "A required page is not in RAM", "The disk is full", "A program ends"],
                1,
                "The OS must load the missing page from disk into RAM."
            ),
            mcq(
                "Which algorithm replaces the least recently used page?",
                ["FIFO", "LRU", "LFU", "Optimal"],
                1,
                "LRU evicts the page unused for the longest time."
            ),
        ],

        questions: [
            qa(
                "Explain the memory hierarchy of a computer.",
                "The memory hierarchy arranges storage devices from the fastest and costliest at the top to the slowest and cheapest at the bottom. The top consists of CPU registers, followed by cache memory, then main memory made of DRAM, then solid state drives, then hard disks, and finally magnetic tapes. As we go down, capacity grows and cost per bit falls, but access time increases. The hierarchy exploits the principle of locality to give the user the illusion of a very large and very fast memory.",
                4
            ),
            qa(
                "Differentiate between SRAM and DRAM.",
                "SRAM uses six transistors per cell, does not need refreshing, is very fast, has low density and is expensive, so it is used for cache memory. DRAM uses one transistor and one capacitor per cell, must be refreshed thousands of times per second, is slower, has higher density and is cheaper, so it is used for main memory. Both are volatile.",
                4
            ),
            qa(
                "Explain cache mapping techniques.",
                "In direct mapping each main memory block can be placed in only one specific cache line, which is simple and fast but causes many conflict misses. In fully associative mapping a block can be placed in any cache line, which gives the best hit ratio but requires a complex search. Set associative mapping is a compromise: each block maps to a specific set, but it can occupy any line within that set, giving a good balance between speed, cost and performance.",
                4
            ),
            qa(
                "What is virtual memory? Explain page replacement.",
                "Virtual memory is a technique that uses the hard disk to extend the apparent size of main memory, allowing the system to run programs whose total size exceeds the physical RAM. Memory is divided into pages, and the OS loads only the required pages into RAM. When a referenced page is absent, a page fault occurs and the OS brings the page from disk. If RAM is full, an existing page must be removed by a page replacement algorithm such as FIFO, LRU or optimal.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Input Output Organization
========================================================= */

const ioOrganization = createTopic(
    "input-output-organization",
    "Input Output Organization",

    [
        text(
            "The input output subsystem connects the CPU and memory to the outside world through keyboards, monitors, disks, printers and networks. Designing efficient I/O is a major concern of computer organization."
        ),

        heading("I/O Devices"),

        table(
            ["Category", "Examples", "Direction"],
            [
                ["Input", "Keyboard, mouse, scanner, microphone", "Device to computer"],
                ["Output", "Monitor, printer, speaker", "Computer to device"],
                ["Input and output", "Touch screen, hard disk, modem", "Both directions"],
            ]
        ),

        heading("Methods of Data Transfer"),

        table(
            ["Method", "Description", "Use"],
            [
                ["Programmed I/O", "The CPU repeatedly checks the device and transfers data when ready", "Simple but wastes CPU time"],
                ["Interrupt driven I/O", "The device signals the CPU when it is ready", "Better CPU utilization"],
                ["Direct Memory Access (DMA)", "A separate controller transfers data between device and memory without CPU intervention", "Best for large transfers"],
            ]
        ),

        note(
            "In programmed I/O the CPU is busy waiting and cannot do other work. DMA offloads the transfer to a special controller and frees the CPU for computation.",
            "exam",
            "Frequently Asked"
        ),

        heading("Programmed I/O"),

        steps([
            "CPU reads the status register of the device",
            "CPU waits in a loop until the device is ready",
            "CPU reads a word from the device data register",
            "CPU stores the word in memory",
            "Repeat until all data has been transferred",
        ]),

        heading("Interrupt Driven I/O"),

        list([
            "The CPU starts the I/O and continues with other work.",
            "When the device is ready, it raises an interrupt request line.",
            "The CPU finishes the current instruction and saves its state.",
            "The CPU jumps to the interrupt service routine.",
            "The routine transfers one word and returns control to the main program.",
            "This continues until the entire block is transferred.",
        ]),

        heading("Direct Memory Access"),

        definition(
            "DMA Controller",
            "A special purpose processor that takes control of the bus and transfers blocks of data directly between an I/O device and memory."
        ),

        list([
            "The CPU sets up the DMA controller with the source, destination and count.",
            "The CPU returns to its main task.",
            "The DMA controller requests the bus and performs the transfer.",
            "When the transfer is complete, the DMA controller interrupts the CPU.",
            "DMA is essential for high speed devices such as disks and network cards.",
        ]),

        heading("I/O Processor"),

        text(
            "In large systems a dedicated I/O processor handles all input output operations, including device control, error recovery and formatting. The CPU only issues high level commands to the I/O processor."
        ),

        heading("I/O Interfaces and Ports"),

        table(
            ["Interface", "Use"],
            [
                ["USB", "Universal connection for keyboards, mice, pen drives and many others."],
                ["HDMI", "Digital video and audio to monitors and televisions."],
                ["SATA", "Connection between the motherboard and storage devices."],
                ["PCIe", "High speed bus for graphics cards and SSDs."],
                ["Bluetooth", "Short range wireless for peripherals and audio."],
            ]
        ),

        keyPoints([
            "I/O methods are programmed I/O, interrupt driven I/O and DMA.",
            "Programmed I/O keeps the CPU busy in a wait loop.",
            "Interrupt driven I/O lets the device signal the CPU when ready.",
            "DMA transfers data without CPU intervention, freeing the CPU.",
            "An I/O processor handles all I/O in large systems.",
        ]),
    ],

    {
        summary:
            "Learn the three methods of I/O transfer and the role of DMA and I/O processors.",
        minutes: 11,
        tags: ["io", "dma", "interrupt", "important"],

        mcqs: [
            mcq(
                "In programmed I/O, the CPU:",
                ["Waits in a loop for the device", "Receives an interrupt", "Hands over to DMA", "Switches off"],
                0,
                "The CPU is busy waiting until the device is ready."
            ),
            mcq(
                "DMA stands for:",
                ["Direct Memory Access", "Dynamic Memory Allocation", "Dual Mode Adapter", "Digital Media Adapter"],
                0,
                "DMA stands for Direct Memory Access."
            ),
            mcq(
                "Which I/O method gives the best CPU utilization for large transfers?",
                ["Programmed I/O", "Interrupt driven I/O", "DMA", "Polling"],
                2,
                "DMA performs the transfer independently of the CPU."
            ),
            mcq(
                "An interrupt is raised by:",
                ["The CPU", "The memory", "The I/O device", "The power supply"],
                2,
                "An I/O device raises an interrupt when it needs attention."
            ),
            mcq(
                "SATA is an interface used for:",
                ["Keyboards", "Storage devices", "Monitors", "Network cards"],
                1,
                "SATA connects the motherboard to hard disks and SSDs."
            ),
            mcq(
                "When DMA completes a transfer, it:",
                ["Stops the CPU", "Interrupts the CPU", "Resets the device", "Formats the disk"],
                1,
                "The DMA controller signals completion through an interrupt."
            ),
        ],

        questions: [
            qa(
                "Compare the three methods of I/O data transfer.",
                "In programmed I/O the CPU itself transfers each word and spends most of its time in a wait loop, which wastes processing power. In interrupt driven I/O the CPU issues a command and continues with other work; the device raises an interrupt when it is ready, and the CPU transfers one word in the service routine. In DMA the CPU sets up a controller that transfers an entire block directly between the device and memory, so the CPU is free throughout the transfer. DMA gives the best performance for large or high speed transfers.",
                5
            ),
            qa(
                "Explain the working of a DMA controller.",
                "A DMA controller is a small processor dedicated to moving data. The CPU first sets up the controller with the starting address in memory, the address of the I/O device and the number of words to transfer. The controller then requests the system bus and performs the transfer one word at a time without any CPU intervention. When the entire block has been moved, the controller raises an interrupt so that the CPU knows the transfer is complete. This method is used by disks, tapes and network cards where large blocks must be moved quickly.",
                4
            ),
            qa(
                "Differentiate between programmed and interrupt driven I/O.",
                "In programmed I/O the CPU continuously checks the status of the device and is unable to do any other work until the transfer is over. In interrupt driven I/O the CPU starts the device, returns to its main task and is interrupted only when the device is ready. Interrupt driven I/O makes better use of the CPU, especially when the device is slow, but it is more complex because the CPU must save and restore its state on each interrupt.",
                4
            ),
            qa(
                "What is the role of an I/O processor?",
                "An I/O processor is a dedicated processor that manages all input output operations in a large computer system. The CPU only sends high level commands to the I/O processor, which then controls the devices, supervises the data transfer, handles errors and performs any necessary formatting. By offloading these tasks from the main CPU, the I/O processor greatly increases the overall throughput of the system.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Reduced Instruction Set Computer (RISC) and CISC
========================================================= */

const riscCisc = createTopic(
    "risc-and-cisc",
    "RISC and CISC",

    [
        definition(
            "Instruction Set Architecture",
            "The part of the computer visible to the programmer, including the instructions, registers, addressing modes and data types."
        ),

        heading("CISC"),

        definition(
            "CISC",
            "Complex Instruction Set Computer, a design philosophy that uses many instructions of variable length, some of which perform complex operations in a single instruction."
        ),

        heading("RISC"),

        definition(
            "RISC",
            "Reduced Instruction Set Computer, a design philosophy that uses a small, highly optimised set of instructions of fixed length, each executable in a single clock cycle."
        ),

        heading("CISC versus RISC"),

        table(
            ["Basis", "CISC", "RISC"],
            [
                ["Instruction set", "Large, with many addressing modes", "Small and highly regular"],
                ["Instruction length", "Variable, from 1 to 15 bytes", "Fixed, usually 4 bytes"],
                ["Execution time", "Many cycles per instruction", "One cycle per instruction (pipelined)"],
                ["Memory access", "Memory to memory", "Load and store only"],
                ["Complexity", "In the hardware", "In the compiler"],
                ["Pipelining", "Difficult to pipeline", "Highly amenable to pipelining"],
                ["Code size", "Smaller programs", "Larger programs but faster execution"],
                ["Examples", "Intel x86, Motorola 68000", "ARM, MIPS, SPARC, RISC-V"],
            ]
        ),

        note(
            "Modern processors such as the Intel Core series are CISC in instruction set but internally translate the complex instructions into RISC-like micro operations, so the boundary between the two philosophies has become blurred.",
            "tip",
            "Modern Trend"
        ),

        heading("Pipelining"),

        definition(
            "Pipelining",
            "A technique in which multiple instructions are overlapped in execution by dividing the work into stages such as fetch, decode, execute, memory and write back."
        ),

        table(
            ["Stage", "Function"],
            [
                ["F", "Fetch the instruction from memory."],
                ["D", "Decode the instruction and read registers."],
                ["E", "Execute the ALU operation or calculate address."],
                ["M", "Access memory if needed."],
                ["W", "Write the result back to a register."],
            ]
        ),

        code(
            `Five stage pipeline executing four instructions

Cycle  1   2   3   4   5   6   7   8   9
I1     F   D   E   M   W
I2         F   D   E   M   W
I3             F   D   E   M   W
I4                 F   D   E   M   W

Throughput: ideally one instruction per cycle after the
pipeline is filled.`,
            "text",
            "Pipeline diagram"
        ),

        heading("Pipeline Hazards"),

        table(
            ["Hazard", "Description", "Solution"],
            [
                ["Structural", "Two instructions need the same hardware at the same time", "Add more functional units"],
                ["Data", "An instruction depends on the result of a previous one", "Forwarding or stalls"],
                ["Control", "A branch changes the flow and the wrong instructions have been fetched", "Branch prediction and delay slots"],
            ]
        ),

        heading("Parallelism in Modern CPUs"),

        list([
            "Instruction level parallelism — issuing more than one instruction per cycle.",
            "Superscalar execution — multiple execution units operating in parallel.",
            "Multi core processors — two or more complete CPUs on a single chip.",
            "SIMD — single instruction operating on multiple data items at once.",
        ]),

        keyPoints([
            "CISC has a large and complex instruction set; RISC has a small and simple one.",
            "RISC relies on the compiler to schedule instructions and exploit registers.",
            "Pipelining overlaps the stages of successive instructions.",
            "Pipeline hazards are structural, data and control hazards.",
            "Modern processors combine features of both CISC and RISC.",
        ]),
    ],

    {
        summary:
            "Compare CISC and RISC philosophies and learn pipelining and modern parallel execution techniques.",
        minutes: 11,
        tags: ["risc", "cisc", "pipelining", "important"],

        mcqs: [
            mcq(
                "CISC stands for:",
                ["Complex Instruction Set Computer", "Compact Instruction Set Computer", "Common Instruction Set Computer", "Computer Instruction Set Controller"],
                0,
                "CISC means Complex Instruction Set Computer."
            ),
            mcq(
                "In RISC architecture, data processing instructions operate on:",
                ["Memory locations", "Registers only", "Cache only", "The stack only"],
                1,
                "RISC uses a load store architecture; only load and store access memory."
            ),
            mcq(
                "Pipelining improves:",
                ["Memory size", "Throughput", "Storage capacity", "Power consumption"],
                1,
                "Pipelining increases the number of instructions completed per unit time."
            ),
            mcq(
                "A data hazard occurs when:",
                ["Two instructions use the same hardware", "An instruction needs the result of a previous one", "A branch is taken", "The pipeline is empty"],
                1,
                "Data hazards are caused by true dependencies between instructions."
            ),
            mcq(
                "Which processor family is an example of RISC?",
                ["Intel x86", "ARM", "Motorola 68000", "Intel 8086"],
                1,
                "ARM is the most widely used RISC architecture."
            ),
            mcq(
                "In a five stage pipeline, the stages are:",
                ["Fetch, Decode, Execute, Memory, Write back", "Read, Write, Refresh, Hold, Release", "Add, Sub, Mul, Div, Mod", "Input, Process, Output, Store, Display"],
                0,
                "The classic five stage pipeline is F, D, E, M, W.",
            ),
        ],

        questions: [
            qa(
                "Differentiate between CISC and RISC architectures.",
                "CISC processors have a large and complex instruction set with variable length instructions, many addressing modes, and operations that may access memory directly. They were designed to reduce the semantic gap between high level languages and machine code. RISC processors have a small and regular instruction set with fixed length instructions, a load store architecture and an emphasis on pipelining. CISC moves complexity into the hardware, while RISC moves it into the compiler. Modern processors such as the Intel Core series are CISC at the instruction level but translate instructions into RISC-like micro operations internally.",
                5
            ),
            qa(
                "Explain pipelining with a five stage example.",
                "Pipelining divides instruction execution into stages and overlaps the stages of successive instructions. In the classic five stage pipeline, the stages are Fetch, Decode, Execute, Memory access and Write back. Once the pipeline is full, ideally one instruction completes in every clock cycle, which gives a much higher throughput than executing instructions one by one. For example, four instructions need nine cycles in the pipeline rather than twenty cycles if executed sequentially.",
                4
            ),
            qa(
                "What are pipeline hazards? Explain any two.",
                "Pipeline hazards are situations that prevent the next instruction from starting in the next cycle. A structural hazard occurs when two instructions need the same hardware resource at the same time, such as two instructions needing the memory unit. A data hazard occurs when an instruction depends on the result of a previous instruction that has not yet completed, for example when an ADD is followed immediately by a SUB that uses the result of the ADD; the problem is solved by forwarding or by inserting stalls. A control hazard occurs when a branch instruction is taken, because the instructions fetched after the branch may have to be discarded; the problem is solved by branch prediction or delay slots.",
                5
            ),
            qa(
                "Why has the boundary between CISC and RISC become blurred?",
                "Modern processors must deliver high performance while remaining compatible with older software. To achieve both, they expose a CISC instruction set to the programmer but internally translate each instruction into one or more RISC-like micro operations, which are then executed by a pipelined and often superscalar core. The Intel Core series is a classic example: the programmer sees a CISC x86 instruction set, but the execution engine is essentially RISC. Conversely, modern RISC processors have grown more complex to support speculation, out of order execution and SIMD, so the simple RISC ideal is no longer strictly followed.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    basicComputerOrganization,
    cpuRegistersControl,
    memoryOrganization,
    ioOrganization,
    riscCisc,
];