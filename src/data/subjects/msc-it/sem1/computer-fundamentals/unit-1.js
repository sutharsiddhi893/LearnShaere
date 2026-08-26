/* =========================================================
   MSc-IT • SEM 1 • Computer Fundamentals
   UNIT 1 — Fundamentals of Computer Organization
            and Operating Systems
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
   TOPIC 1 — Introduction to Computer Organization
========================================================= */

const introToComputerOrganization = createTopic(
    "introduction-to-computer-organization",
    "Introduction to Computer Organization",

    [
        definition(
            "Computer Organization",
            "The study of how the hardware components of a computer system are interconnected and how they operate to execute instructions. It deals with the structural relationships and operational behaviour of the major components: CPU, memory, I/O and buses."
        ),

        definition(
            "Computer Architecture",
            "The conceptual design and fundamental operational structure of a computer system as seen by the programmer. It defines the instruction set, data types, addressing modes and the interface between hardware and software."
        ),

        text(
            "Computer organization and architecture are closely related but distinct. Architecture defines what the computer does (the instruction set and programmer-visible features), while organization defines how it does it (the hardware implementation). For example, two processors may have the same x86 architecture but different internal organizations (e.g., Intel vs AMD)."
        ),

        heading("Von Neumann Architecture"),

        definition(
            "Von Neumann Architecture",
            "A computer design model proposed by John von Neumann in 1945 that stores both instructions (programs) and data in the same memory. It consists of five main components: input, output, memory, arithmetic logic unit (ALU) and control unit."
        ),

        code(
            `Von Neumann Architecture:

  ┌──────────┐     ┌──────────────────────┐     ┌──────────┐
  │  Input   │────→│                      │────→│  Output  │
  │ Devices  │     │     CPU              │     │ Devices  │
  └──────────┘     │  ┌──────┐ ┌───────┐  │     └──────────┘
                   │  │ ALU  │ │Control│  │
                   │  └──────┘ │ Unit  │  │
                   │           └───────┘  │
                   └──────────┬───────────┘
                              │ Bus
                   ┌──────────┴───────────┐
                   │     Memory           │
                   │ (Instructions + Data)│
                   └──────────────────────┘`,
            "text",
            "Von Neumann architecture diagram"
        ),

        heading("Key Features of Von Neumann Architecture"),

        list([
            "Stored Program Concept — both instructions and data are stored in the same memory.",
            "Sequential Execution — instructions are fetched and executed one at a time in sequence.",
            "Single Bus — a single bus is shared for both data and instruction transfers.",
            "Memory is addressed by location, not by content.",
            "The CPU contains the ALU (for computation) and the Control Unit (for coordination).",
        ]),

        heading("Von Neumann Bottleneck"),

        definition(
            "Von Neumann Bottleneck",
            "The performance limitation caused by the shared bus between the CPU and memory. Since both instructions and data travel over the same bus, the CPU must wait for memory transfers, creating a bottleneck that limits processing speed."
        ),

        heading("Harvard Architecture"),

        definition(
            "Harvard Architecture",
            "A computer architecture that uses physically separate memories and buses for instructions and data. This allows simultaneous access to both, eliminating the Von Neumann bottleneck."
        ),

        table(
            ["Aspect", "Von Neumann", "Harvard"],
            [
                ["Memory", "Single shared memory for instructions and data", "Separate memories for instructions and data"],
                ["Bus", "Single shared bus", "Separate buses for instructions and data"],
                ["Access", "Sequential (one at a time)", "Simultaneous (parallel)"],
                ["Speed", "Limited by bottleneck", "Faster due to parallel access"],
                ["Complexity", "Simpler design", "More complex and expensive"],
                ["Used in", "General-purpose computers", "DSPs, microcontrollers, embedded systems"],
            ]
        ),

        heading("Basic Computer Components"),

        table(
            ["Component", "Function"],
            [
                ["CPU (Central Processing Unit)", "Executes instructions; contains ALU, Control Unit and registers"],
                ["ALU (Arithmetic Logic Unit)", "Performs arithmetic (+, -, ×, ÷) and logical (AND, OR, NOT) operations"],
                ["Control Unit (CU)", "Fetches, decodes and coordinates execution of instructions"],
                ["Registers", "Small, fast storage locations inside the CPU for temporary data"],
                ["Memory (RAM)", "Stores instructions and data currently being used"],
                ["Bus", "A set of wires that carries data, addresses and control signals between components"],
                ["I/O Devices", "Input devices (keyboard, mouse) and output devices (monitor, printer)"],
            ]
        ),

        heading("System Bus"),

        table(
            ["Bus Type", "Direction", "Purpose"],
            [
                ["Data Bus", "Bidirectional", "Carries data between CPU, memory and I/O"],
                ["Address Bus", "Unidirectional (CPU → Memory)", "Carries memory addresses to specify read/write locations"],
                ["Control Bus", "Bidirectional", "Carries control signals (read, write, interrupt, clock)"],
            ]
        ),

        note(
            "The width of the data bus determines how much data can be transferred in one operation. A 64-bit data bus can transfer 8 bytes per cycle. The width of the address bus determines the maximum addressable memory: a 32-bit address bus can address 2³² = 4 GB of memory.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Computer organization deals with how hardware components are connected and operate.",
            "Von Neumann architecture stores instructions and data in the same memory with a shared bus.",
            "The Von Neumann bottleneck limits performance due to the shared bus.",
            "Harvard architecture uses separate buses for instructions and data, enabling parallel access.",
            "The system bus has three types: data bus, address bus and control bus.",
        ]),
    ],

    {
        summary:
            "Understand computer organization vs architecture, Von Neumann and Harvard architectures, basic components and the system bus.",
        minutes: 12,
        tags: ["computer-fundamentals", "organization", "von-neumann", "harvard", "bus", "important"],

        mcqs: [
            mcq(
                "The Von Neumann architecture stores instructions and data in:",
                ["Separate memories", "The same memory", "Registers only", "External storage"],
                1,
                "Von Neumann architecture uses a single shared memory for both instructions and data."
            ),
            mcq(
                "The Von Neumann bottleneck is caused by:",
                ["Slow CPU", "Shared bus between CPU and memory", "Small registers", "Too many I/O devices"],
                1,
                "The shared bus for both instructions and data creates a bottleneck limiting performance."
            ),
            mcq(
                "Harvard architecture differs from Von Neumann by having:",
                ["A faster CPU", "Separate buses for instructions and data", "No ALU", "No memory"],
                1,
                "Harvard architecture uses physically separate memories and buses for instructions and data."
            ),
            mcq(
                "The address bus is:",
                ["Bidirectional", "Unidirectional (CPU to memory)", "Not used in modern computers", "Carries data"],
                1,
                "The address bus is unidirectional, carrying addresses from the CPU to memory."
            ),
            mcq(
                "A 32-bit address bus can address a maximum of:",
                ["32 bytes", "32 KB", "4 GB", "4 MB"],
                2,
                "A 32-bit address bus can address 2³² = 4,294,967,296 bytes = 4 GB."
            ),
            mcq(
                "The ALU performs:",
                ["Memory management", "Arithmetic and logical operations", "I/O control", "Instruction fetching"],
                1,
                "The Arithmetic Logic Unit performs arithmetic (+, -, ×, ÷) and logical (AND, OR, NOT) operations."
            ),
        ],

        questions: [
            qa(
                "Differentiate between computer organization and computer architecture.",
                "Computer architecture defines the conceptual design and programmer-visible features of a computer system, including the instruction set architecture (ISA), data types, addressing modes, registers and the interface between hardware and software. It answers the question 'what does the computer do?' Computer organization deals with how the hardware components are physically interconnected and how they operate to implement the architecture. It answers the question 'how does the computer do it?' For example, Intel and AMD processors share the same x86 architecture (same instruction set) but have different internal organizations (different pipeline designs, cache structures and execution units). Architecture is the specification; organization is the implementation.",
                5
            ),
            qa(
                "Explain the Von Neumann architecture and its bottleneck.",
                "The Von Neumann architecture, proposed by John von Neumann in 1945, is based on the stored program concept where both instructions and data are stored in the same memory. It consists of five components: input devices, output devices, memory, ALU and control unit. Instructions are fetched sequentially from memory, decoded by the control unit and executed by the ALU. The Von Neumann bottleneck is the performance limitation caused by the single shared bus between the CPU and memory. Since both instructions and data must travel over the same bus, the CPU cannot fetch an instruction and read/write data simultaneously. The CPU, which is much faster than memory, must wait for memory transfers, creating a bottleneck that limits overall system performance.",
                5
            ),
            qa(
                "Explain the three types of system buses.",
                "The system bus connects the CPU, memory and I/O devices and consists of three types of buses. The data bus is bidirectional and carries actual data between the CPU, memory and I/O devices. Its width (e.g., 32-bit or 64-bit) determines how much data can be transferred in one operation. The address bus is unidirectional from the CPU to memory and carries memory addresses to specify which location the CPU wants to read from or write to. Its width determines the maximum addressable memory; a 32-bit address bus can address 4 GB. The control bus is bidirectional and carries control signals such as read, write, interrupt requests, clock signals and bus grant signals that coordinate the activities of all components.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — CPU Architecture and Instruction Cycle
========================================================= */

const cpuArchitectureAndInstructionCycle = createTopic(
    "cpu-architecture-and-instruction-cycle",
    "CPU Architecture and Instruction Cycle",

    [
        definition(
            "CPU (Central Processing Unit)",
            "The primary component of a computer that executes instructions. It consists of the Arithmetic Logic Unit (ALU), the Control Unit (CU) and a set of registers. The CPU fetches instructions from memory, decodes them and executes them."
        ),

        heading("Internal Structure of the CPU"),

        code(
            `CPU Internal Structure:

  ┌─────────────────────────────────────────┐
  │              CPU                        │
  │                                         │
  │  ┌──────────┐  ┌──────────────────┐    │
  │  │ Control  │  │   ALU            │    │
  │  │  Unit    │  │  ┌────────────┐  │    │
  │  │          │──│  │ Arithmetic │  │    │
  │  │ Fetch    │  │  │   Unit     │  │    │
  │  │ Decode   │  │  ├────────────┤  │    │
  │  │ Execute  │  │  │   Logic    │  │    │
  │  │ Control  │  │  │   Unit     │  │    │
  │  └──────────┘  │  └────────────┘  │    │
  │       │        └────────┬─────────┘    │
  │       │                 │               │
  │  ┌────┴─────────────────┴─────────┐    │
  │  │        Registers               │    │
  │  │  PC | IR | MAR | MDR | ACC    │    │
  │  │  General Purpose Registers     │    │
  │  └────────────────────────────────┘    │
  └─────────────────────────────────────────┘`,
            "text",
            "CPU internal structure"
        ),

        heading("CPU Registers"),

        table(
            ["Register", "Full Name", "Purpose"],
            [
                ["PC", "Program Counter", "Holds the address of the next instruction to be fetched"],
                ["IR", "Instruction Register", "Holds the current instruction being decoded/executed"],
                ["MAR", "Memory Address Register", "Holds the address of the memory location to be accessed"],
                ["MDR", "Memory Data Register", "Holds the data read from or to be written to memory"],
                ["ACC", "Accumulator", "Holds intermediate arithmetic and logic results"],
                ["Status/Flags", "Flag Register", "Contains condition flags (Zero, Carry, Overflow, Negative)"],
                ["General Purpose", "GPR (R0-Rn)", "Used for temporary data storage during computation"],
            ]
        ),

        heading("The Instruction Cycle (Fetch-Decode-Execute)"),

        definition(
            "Instruction Cycle",
            "The basic operational process of a computer. It is the cycle that the CPU follows from boot-up to shut down, continuously fetching, decoding and executing instructions from memory."
        ),

        steps([
            "Fetch — The CPU reads the instruction from memory at the address stored in the PC. The instruction is loaded into the IR, and the PC is incremented to point to the next instruction.",
            "Decode — The Control Unit decodes the instruction in the IR to determine what operation to perform and what operands are needed.",
            "Execute — The ALU performs the operation (arithmetic, logic, data transfer, etc.) and stores the result in a register or memory.",
            "Store (optional) — The result is written back to memory or a register if required by the instruction.",
        ]),

        code(
            `Instruction Cycle in Detail:

  FETCH Phase:
  1. MAR ← PC           (Copy PC address to MAR)
  2. MDR ← Memory[MAR]  (Read instruction from memory)
  3. IR ← MDR           (Load instruction into IR)
  4. PC ← PC + 1        (Increment PC to next instruction)

  DECODE Phase:
  5. CU decodes IR      (Determine operation and operands)

  EXECUTE Phase:
  6. ALU performs operation
  7. Result stored in ACC or memory

  ┌───────┐    ┌────────┐    ┌─────────┐    ┌───────┐
  │ Fetch │───→│ Decode │───→│ Execute │───→│ Fetch │───→ ...
  └───────┘    └────────┘    └─────────┘    └───────┘
       ↑                                      │
       └──────────────────────────────────────┘
              (Cycle repeats continuously)`,
            "text",
            "Instruction cycle"
        ),

        heading("Types of Instructions"),

        table(
            ["Category", "Examples", "Description"],
            [
                ["Data Transfer", "LOAD, STORE, MOVE", "Move data between registers and memory"],
                ["Arithmetic", "ADD, SUB, MUL, DIV", "Perform mathematical operations"],
                ["Logical", "AND, OR, NOT, XOR", "Perform bitwise logical operations"],
                ["Control Flow", "JUMP, BRANCH, CALL, RETURN", "Change the sequence of execution"],
                ["Comparison", "CMP, TEST", "Compare values and set flags"],
                ["I/O", "IN, OUT", "Transfer data between CPU and I/O devices"],
            ]
        ),

        heading("Instruction Formats"),

        code(
            `Instruction Format:

  ┌──────────┬──────────┬──────────┬──────────┐
  │ Opcode   │ Operand1 │ Operand2 │ Operand3 │
  │ (Op)     │ (Addr1)  │ (Addr2)  │ (Addr3)  │
  └──────────┴──────────┴──────────┴──────────┘

  Types by number of operands:
  - Zero-address: PUSH, POP (operands implied by stack)
  - One-address:  ACC ← ACC + Memory[Addr]
  - Two-address:  R1 ← R1 + R2
  - Three-address: R1 ← R2 + R3`,
            "text",
            "Instruction formats"
        ),

        heading("Addressing Modes"),

        table(
            ["Mode", "Description", "Example"],
            [
                ["Immediate", "Operand value is in the instruction itself", "ADD R1, #5 (add 5 to R1)"],
                ["Direct", "Operand address is in the instruction", "ADD R1, [1000] (add contents of address 1000)"],
                ["Indirect", "Instruction contains address of a pointer to the operand", "ADD R1, @[1000]"],
                ["Register", "Operand is in a register", "ADD R1, R2"],
                ["Register Indirect", "Register contains the address of the operand", "ADD R1, [R2]"],
                ["Indexed", "Address = base address + index register", "ADD R1, [1000 + R2]"],
                ["Base + Offset", "Address = base register + displacement", "ADD R1, [R2 + 8]"],
            ]
        ),

        heading("Pipelining"),

        definition(
            "Pipelining",
            "A technique where the instruction cycle is divided into stages, and multiple instructions are overlapped in execution. While one instruction is being executed, the next is being decoded and the one after that is being fetched."
        ),

        code(
            `Without Pipelining (Sequential):
  Inst 1: [Fetch][Decode][Execute]
  Inst 2:                        [Fetch][Decode][Execute]
  Inst 3:                                           [Fetch][Decode][Execute]
  Total: 9 time units for 3 instructions

  With Pipelining (3-stage):
  Time →  1      2      3      4      5
  Inst 1: [F]   [D]   [E]
  Inst 2:       [F]   [D]   [E]
  Inst 3:             [F]   [D]   [E]
  Total: 5 time units for 3 instructions (much faster!)`,
            "text",
            "Pipelining concept"
        ),

        note(
            "Modern processors use deep pipelines (10-20+ stages) and superscalar execution (multiple instructions per cycle) to achieve high performance. Pipeline hazards (data, control and structural) can reduce the effectiveness of pipelining.",
            "tip",
            "Modern CPUs"
        ),

        keyPoints([
            "The CPU consists of the ALU, Control Unit and registers.",
            "Key registers include PC (next instruction address), IR (current instruction) and ACC (results).",
            "The instruction cycle has three phases: Fetch, Decode and Execute.",
            "Addressing modes determine how operands are specified: immediate, direct, indirect, register, indexed.",
            "Pipelining overlaps instruction stages to improve throughput by executing multiple instructions concurrently.",
        ]),
    ],

    {
        summary:
            "Master CPU components, registers, the fetch-decode-execute instruction cycle, instruction formats, addressing modes and pipelining.",
        minutes: 13,
        tags: ["computer-fundamentals", "cpu", "instruction-cycle", "addressing-modes", "pipelining", "important"],

        mcqs: [
            mcq(
                "The Program Counter (PC) holds:",
                ["The current instruction", "The result of the last operation", "The address of the next instruction to fetch", "The status flags"],
                2,
                "The PC holds the memory address of the next instruction to be fetched."
            ),
            mcq(
                "The correct order of the instruction cycle is:",
                ["Execute, Decode, Fetch", "Decode, Fetch, Execute", "Fetch, Decode, Execute", "Fetch, Execute, Decode"],
                2,
                "The instruction cycle follows the order: Fetch → Decode → Execute."
            ),
            mcq(
                "In immediate addressing mode, the operand is:",
                ["In a register", "In memory at a specified address", "Part of the instruction itself", "On the stack"],
                2,
                "In immediate addressing, the operand value is embedded directly in the instruction."
            ),
            mcq(
                "Pipelining improves performance by:",
                ["Using a faster clock", "Overlapping the execution of multiple instructions", "Adding more memory", "Reducing instruction size"],
                1,
                "Pipelining divides the instruction cycle into stages and overlaps multiple instructions."
            ),
            mcq(
                "The Instruction Register (IR) holds:",
                ["The next instruction address", "The current instruction being decoded/executed", "Data from memory", "Status flags"],
                1,
                "The IR holds the instruction that is currently being decoded and executed."
            ),
            mcq(
                "In register indirect addressing, the register contains:",
                ["The operand value", "The address of the operand", "The opcode", "The instruction"],
                1,
                "In register indirect addressing, the register holds the memory address where the operand is stored."
            ),
        ],

        questions: [
            qa(
                "Explain the fetch-decode-execute instruction cycle.",
                "The instruction cycle is the basic operational process that the CPU repeats continuously. In the fetch phase, the CPU copies the Program Counter (PC) value to the Memory Address Register (MAR), reads the instruction from that memory location into the Memory Data Register (MDR), transfers it to the Instruction Register (IR), and increments the PC to point to the next instruction. In the decode phase, the Control Unit examines the instruction in the IR to determine the operation to perform (opcode) and the operands needed. In the execute phase, the ALU performs the specified operation (arithmetic, logic, data transfer, etc.) and stores the result in the accumulator or a register. If the instruction requires writing to memory, a store phase follows. This cycle repeats for every instruction in a program.",
                5
            ),
            qa(
                "Explain five addressing modes with examples.",
                "In immediate addressing, the operand value is part of the instruction itself, for example ADD R1, #5 adds the value 5 directly to R1. In direct addressing, the instruction contains the memory address of the operand, for example ADD R1, [1000] adds the contents of memory location 1000 to R1. In indirect addressing, the instruction contains the address of a pointer to the operand, requiring two memory accesses. In register addressing, the operand is in a CPU register, for example ADD R1, R2 adds the contents of R2 to R1, which is very fast. In indexed addressing, the effective address is computed by adding a base address in the instruction to the value in an index register, for example ADD R1, [1000+R2], which is useful for accessing array elements.",
                5
            ),
            qa(
                "What is pipelining? How does it improve CPU performance?",
                "Pipelining is a technique that divides the instruction cycle into stages (e.g., Fetch, Decode, Execute) and overlaps the execution of multiple instructions. While one instruction is in the Execute stage, the next instruction is in the Decode stage and the one after that is in the Fetch stage. Without pipelining, three instructions taking 3 cycles each would require 9 time units sequentially. With a 3-stage pipeline, the same three instructions complete in just 5 time units because stages are overlapped. This significantly improves instruction throughput (instructions completed per unit time) without requiring a faster clock. Modern processors use deep pipelines with 10-20+ stages and superscalar execution to process multiple instructions per cycle.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Memory Hierarchy
========================================================= */

const memoryHierarchy = createTopic(
    "memory-hierarchy",
    "Memory Hierarchy",

    [
        definition(
            "Memory Hierarchy",
            "The arrangement of different types of memory in a computer system organised by speed, cost and capacity. Faster memory is smaller and more expensive, while slower memory is larger and cheaper. The hierarchy exploits the principle of locality to provide the illusion of a large, fast memory."
        ),

        code(
            `Memory Hierarchy (Fastest to Slowest):

  ┌─────────────────────┐
  │    CPU Registers    │  ← Fastest, smallest, most expensive
  ├─────────────────────┤     (~1 ns, bytes)
  │    L1 Cache         │
  ├─────────────────────┤     (~1-2 ns, KB)
  │    L2 Cache         │
  ├─────────────────────┤     (~5-10 ns, MB)
  │    L3 Cache         │
  ├─────────────────────┤     (~10-20 ns, MB)
  │    Main Memory(RAM) │
  ├─────────────────────┤     (~50-100 ns, GB)
  │    Secondary Storage│
  │  (SSD / HDD)        │     (~μs to ms, TB)
  ├─────────────────────┤
  │  Tertiary/Offline   │  ← Slowest, largest, cheapest
  │  (Tape, Cloud)      │     (~seconds, PB)
  └─────────────────────┘`,
            "text",
            "Memory hierarchy"
        ),

        heading("Principle of Locality"),

        definition(
            "Principle of Locality",
            "The observation that programs tend to access a relatively small portion of their address space at any given time. This principle makes caching effective."
        ),

        table(
            ["Type", "Description", "Example"],
            [
                ["Temporal Locality", "If a location is accessed, it is likely to be accessed again soon", "Loop variables, frequently used functions"],
                ["Spatial Locality", "If a location is accessed, nearby locations are likely to be accessed soon", "Array elements, sequential instructions"],
            ]
        ),

        heading("Types of Memory"),

        heading("1. Registers"),

        table(
            ["Aspect", "Description"],
            [
                ["Location", "Inside the CPU"],
                ["Speed", "Fastest (~0.5-1 ns)"],
                ["Size", "Very small (a few bytes to a few hundred bytes)"],
                ["Cost", "Most expensive per bit"],
                ["Purpose", "Hold data currently being processed by the ALU"],
            ]
        ),

        heading("2. Cache Memory"),

        definition(
            "Cache Memory",
            "A small, fast memory located between the CPU and main memory that stores copies of frequently accessed data and instructions. It exploits the principle of locality to reduce average memory access time."
        ),

        table(
            ["Level", "Location", "Typical Size", "Access Time", "Description"],
            [
                ["L1 Cache", "Inside CPU core", "32-64 KB", "~1 ns", "Split into instruction and data caches"],
                ["L2 Cache", "Inside CPU (per core)", "256 KB - 1 MB", "~5-10 ns", "Unified (instructions + data)"],
                ["L3 Cache", "On CPU die (shared)", "4-64 MB", "~10-20 ns", "Shared among all cores"],
            ]
        ),

        heading("Cache Mapping Techniques"),

        table(
            ["Technique", "Description", "Advantage", "Disadvantage"],
            [
                ["Direct Mapping", "Each memory block maps to exactly one cache line", "Simple, fast lookup", "High conflict misses"],
                ["Fully Associative", "A memory block can go in any cache line", "Lowest miss rate", "Complex, slow search"],
                ["Set Associative", "Memory block maps to a set; within the set, any line", "Good balance", "Moderate complexity"],
            ]
        ),

        heading("Cache Hit and Miss"),

        definition(
            "Cache Hit",
            "When the requested data is found in the cache. The CPU reads it directly from the cache, which is much faster than accessing main memory."
        ),

        definition(
            "Cache Miss",
            "When the requested data is not in the cache. The CPU must fetch it from main memory (or a lower-level cache), which takes much longer."
        ),

        code(
            `Average Memory Access Time (AMAT):

  AMAT = Hit Time + Miss Rate × Miss Penalty

  Example:
    L1 hit time = 1 ns
    L1 miss rate = 5% (0.05)
    Miss penalty (access main memory) = 100 ns

    AMAT = 1 + 0.05 × 100 = 1 + 5 = 6 ns

  Without cache, every access would take 100 ns.
  The cache reduces average access time by 94%!`,
            "text",
            "Cache performance calculation"
        ),

        heading("3. Main Memory (RAM)"),

        table(
            ["Type", "Full Name", "Volatile?", "Speed", "Use"],
            [
                ["SRAM", "Static RAM", "Yes", "Faster", "Cache memory"],
                ["DRAM", "Dynamic RAM", "Yes", "Slower (needs refresh)", "Main memory (RAM)"],
                ["ROM", "Read-Only Memory", "No", "Moderate", "BIOS, firmware"],
                ["PROM", "Programmable ROM", "No", "—", "One-time programmable"],
                ["EPROM", "Erasable PROM", "No", "—", "Erasable with UV light"],
                ["EEPROM", "Electrically Erasable PROM", "No", "—", "Flash memory, USB drives"],
            ]
        ),

        heading("4. Secondary Storage"),

        table(
            ["Type", "Technology", "Speed", "Capacity", "Use"],
            [
                ["HDD", "Magnetic spinning platters", "~100-200 MB/s", "Up to 20 TB", "Bulk storage, servers"],
                ["SSD", "Flash memory (NAND)", "~500-7000 MB/s", "Up to 8 TB", "OS, applications, fast storage"],
                ["Optical", "Laser (CD/DVD/Blu-ray)", "~10-50 MB/s", "Up to 100 GB", "Media distribution, archival"],
                ["Magnetic Tape", "Magnetic tape", "~100-400 MB/s", "Up to 50 TB", "Backup, archival"],
            ]
        ),

        heading("Virtual Memory"),

        definition(
            "Virtual Memory",
            "A memory management technique that uses secondary storage (disk) as an extension of main memory. It gives each process the illusion of having a large, contiguous address space, even if physical RAM is smaller."
        ),

        table(
            ["Concept", "Description"],
            [
                ["Page", "A fixed-size block of virtual memory (typically 4 KB)"],
                ["Frame", "A fixed-size block of physical memory (same size as a page)"],
                ["Page Table", "A data structure that maps virtual pages to physical frames"],
                ["Page Fault", "Occurs when a requested page is not in physical memory; OS loads it from disk"],
                ["Thrashing", "Excessive paging activity where the system spends more time swapping pages than executing"],
            ]
        ),

        note(
            "Virtual memory allows a computer to run programs larger than physical RAM by swapping pages between RAM and disk. However, excessive paging (thrashing) severely degrades performance. Adding more RAM is the best solution to thrashing.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "The memory hierarchy arranges memory by speed, cost and capacity: registers → cache → RAM → disk.",
            "The principle of locality (temporal and spatial) makes caching effective.",
            "Cache memory reduces average access time by storing frequently used data close to the CPU.",
            "SRAM is faster and used for cache; DRAM is slower and used for main memory.",
            "Virtual memory extends RAM using disk storage through paging, but thrashing degrades performance.",
        ]),
    ],

    {
        summary:
            "Learn the memory hierarchy, cache memory with mapping techniques, RAM types, secondary storage and virtual memory.",
        minutes: 13,
        tags: ["computer-fundamentals", "memory", "cache", "virtual-memory", "ram", "important"],

        mcqs: [
            mcq(
                "The fastest memory in the memory hierarchy is:",
                ["L1 Cache", "Main Memory (RAM)", "CPU Registers", "SSD"],
                2,
                "CPU registers are the fastest memory, located inside the CPU."
            ),
            mcq(
                "Temporal locality means:",
                ["Nearby locations are accessed together", "Recently accessed data is likely to be accessed again soon", "Data is stored sequentially", "Memory is accessed randomly"],
                1,
                "Temporal locality states that if a location is accessed, it is likely to be accessed again soon."
            ),
            mcq(
                "DRAM is used for:",
                ["Cache memory", "Main memory (RAM)", "ROM", "Registers"],
                1,
                "DRAM (Dynamic RAM) is used for main memory because it is cheaper and denser than SRAM."
            ),
            mcq(
                "A page fault occurs when:",
                ["The CPU encounters an error", "A requested page is not in physical memory", "The disk fails", "The cache is full"],
                1,
                "A page fault occurs when a requested virtual page is not currently loaded in physical RAM."
            ),
            mcq(
                "Thrashing is:",
                ["A type of cache miss", "Excessive paging that degrades system performance", "A CPU overheating problem", "A network security attack"],
                1,
                "Thrashing occurs when the system spends more time swapping pages than executing useful work."
            ),
            mcq(
                "In direct mapping cache, each memory block maps to:",
                ["Any cache line", "Exactly one specific cache line", "A random cache line", "Multiple cache lines"],
                1,
                "In direct mapping, each memory block can be placed in exactly one predetermined cache line."
            ),
        ],

        questions: [
            qa(
                "Explain the memory hierarchy and the principle of locality.",
                "The memory hierarchy organises different types of memory by speed, cost and capacity. At the top are CPU registers, which are the fastest (sub-nanosecond) but smallest (bytes). Below are L1, L2 and L3 caches, which are progressively larger and slower. Main memory (RAM) is larger (GB) but slower (~100 ns). Secondary storage (SSD/HDD) is largest (TB) but slowest (microseconds to milliseconds). The hierarchy works because of the principle of locality. Temporal locality means that recently accessed data is likely to be accessed again soon (e.g., loop variables). Spatial locality means that data near recently accessed locations is likely to be accessed soon (e.g., array elements). These properties ensure that most memory accesses hit in the fast cache rather than going to slow main memory.",
                5
            ),
            qa(
                "Explain cache memory and the three cache mapping techniques.",
                "Cache memory is a small, fast memory between the CPU and main memory that stores copies of frequently accessed data to reduce average access time. There are three mapping techniques. Direct mapping assigns each memory block to exactly one specific cache line based on its address, making lookup simple and fast but causing high conflict misses when multiple frequently used blocks map to the same line. Fully associative mapping allows any memory block to be placed in any cache line, minimising conflict misses but requiring a complex and slow search through all lines on every access. Set associative mapping is a compromise where the cache is divided into sets, each memory block maps to a specific set, but within that set it can go in any line. For example, in 4-way set associative, each set has 4 lines. This balances hit rate and lookup complexity.",
                5
            ),
            qa(
                "What is virtual memory? Explain paging and page faults.",
                "Virtual memory is a memory management technique that uses disk storage as an extension of physical RAM, giving each process the illusion of a large, contiguous address space. The virtual address space and physical memory are divided into fixed-size blocks called pages and frames respectively, typically 4 KB each. A page table maps virtual pages to physical frames. When a process accesses a virtual address, the MMU translates it using the page table. If the page is in physical memory (a page table hit), access proceeds normally. If the page is not in physical memory, a page fault occurs. The operating system handles the page fault by finding a free frame (or evicting an existing page to disk), loading the required page from disk into that frame, updating the page table, and restarting the instruction. Excessive page faults lead to thrashing, where the system spends more time swapping pages than executing.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Input/Output Organization
========================================================= */

const inputOutputOrganization = createTopic(
    "input-output-organization",
    "Input/Output Organization",

    [
        definition(
            "I/O Organization",
            "The subsystem of a computer that manages the transfer of data between the CPU/memory and external devices (peripherals). I/O is challenging because peripherals vary widely in speed, data format and communication protocols."
        ),

        text(
            "I/O devices are much slower than the CPU. A keyboard operates at human speed (~10 characters/second), while a CPU can execute billions of instructions per second. I/O organisation must bridge this enormous speed gap efficiently without wasting CPU time."
        ),

        heading("I/O Device Categories"),

        table(
            ["Category", "Examples", "Characteristics"],
            [
                ["Human Interface", "Keyboard, mouse, monitor, printer", "Slow, interactive"],
                ["Storage", "HDD, SSD, USB drive, optical disc", "Block-oriented, high capacity"],
                ["Communication", "Network card, modem, Bluetooth", "Character/block, variable speed"],
                ["Sensors/Actuators", "Temperature sensor, motor, camera", "Real-time, varied data rates"],
            ]
        ),

        heading("I/O Techniques"),

        heading("1. Programmed I/O (Polling)"),

        definition(
            "Programmed I/O",
            "The CPU directly controls every aspect of the I/O operation by repeatedly checking (polling) the device status register until the device is ready. The CPU waits and does nothing useful during this time."
        ),

        code(
            `Programmed I/O (Polling) Loop:

  WHILE device_status != READY:
      // Do nothing — just keep checking
      WAIT

  // Device is ready
  data = READ device_data_register
  STORE data in memory

  Problem: CPU wastes time waiting.
  If the device takes 1 ms to be ready,
  the CPU (at 1 GHz) wastes 1,000,000 cycles!`,
            "text",
            "Programmed I/O polling"
        ),

        heading("2. Interrupt-Driven I/O"),

        definition(
            "Interrupt-Driven I/O",
            "The CPU issues an I/O command and continues executing other tasks. When the device is ready, it sends an interrupt signal to the CPU. The CPU suspends its current task, services the I/O (reads/writes data) and resumes the original task."
        ),

        code(
            `Interrupt-Driven I/O:

  CPU: Issue I/O command → Continue other work
       ...
       ... (doing useful work)
       ...
  Device: [Data ready] → Send INTERRUPT signal
       ...
  CPU: [Interrupt received]
       → Save current state
       → Execute Interrupt Service Routine (ISR)
       → Read data from device
       → Restore state
       → Resume original work`,
            "text",
            "Interrupt-driven I/O"
        ),

        heading("3. Direct Memory Access (DMA)"),

        definition(
            "DMA (Direct Memory Access)",
            "A technique where a special hardware controller (DMA controller) transfers data directly between an I/O device and main memory without CPU involvement. The CPU only initiates the transfer and is interrupted when it is complete."
        ),

        code(
            `DMA Transfer:

  1. CPU tells DMA controller:
     "Transfer 1000 bytes from disk to memory address 5000"
  2. CPU resumes other work
  3. DMA controller transfers data directly:
     Disk → DMA Controller → Memory
     (CPU is NOT involved in each byte transfer)
  4. DMA controller sends interrupt to CPU:
     "Transfer complete"
  5. CPU processes the data

  Advantage: CPU is free during the entire transfer.`,
            "text",
            "DMA transfer"
        ),

        heading("Comparison of I/O Techniques"),

        table(
            ["Aspect", "Programmed I/O", "Interrupt-Driven I/O", "DMA"],
            [
                ["CPU involvement", "CPU handles every byte", "CPU handles each interrupt", "CPU only initiates and receives completion"],
                ["CPU utilisation", "Very poor (busy waiting)", "Good (CPU works while waiting)", "Excellent (CPU free during transfer)"],
                ["Speed", "Slowest", "Moderate", "Fastest for bulk transfers"],
                ["Hardware needed", "None extra", "Interrupt controller", "DMA controller"],
                ["Best for", "Very simple/cheap systems", "Character devices (keyboard)", "Block devices (disk, network)"],
                ["Complexity", "Simple", "Moderate", "Complex"],
            ]
        ),

        heading("Interrupt Handling Process"),

        steps([
            "Device raises an interrupt request (IRQ) signal.",
            "CPU finishes the current instruction.",
            "CPU saves the current state (PC, registers) onto the stack.",
            "CPU identifies the interrupt source and jumps to the corresponding Interrupt Service Routine (ISR).",
            "ISR executes — services the device (reads/writes data).",
            "ISR restores the saved state.",
            "CPU resumes execution of the interrupted program.",
        ]),

        heading("I/O Interfaces and Ports"),

        table(
            ["Interface", "Type", "Speed", "Use"],
            [
                ["USB", "Serial", "Up to 40 Gbps (USB4)", "Peripherals, storage, charging"],
                ["HDMI", "Serial", "Up to 48 Gbps (HDMI 2.1)", "Video and audio output"],
                ["SATA", "Serial", "Up to 6 Gbps", "Internal HDD/SSD"],
                ["NVMe (PCIe)", "Serial", "Up to 64 Gbps (PCIe 5.0)", "High-speed SSDs"],
                ["Ethernet", "Serial", "Up to 100 Gbps", "Network connections"],
            ]
        ),

        note(
            "DMA is essential for high-speed I/O devices like disk drives and network cards. Without DMA, the CPU would need to handle every byte of a multi-gigabyte file transfer, completely halting all other processing. DMA allows the CPU to delegate bulk data transfers to dedicated hardware.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "I/O organisation bridges the speed gap between the fast CPU and slow peripherals.",
            "Programmed I/O (polling) wastes CPU time; interrupt-driven I/O lets the CPU work while waiting.",
            "DMA allows direct data transfer between device and memory without CPU involvement.",
            "Interrupt handling saves the CPU state, executes an ISR and restores the state.",
            "Modern I/O interfaces include USB, HDMI, SATA, NVMe and Ethernet.",
        ]),
    ],

    {
        summary:
            "Learn I/O techniques (programmed, interrupt-driven, DMA), interrupt handling and modern I/O interfaces.",
        minutes: 12,
        tags: ["computer-fundamentals", "io", "dma", "interrupts", "important"],

        mcqs: [
            mcq(
                "In programmed I/O (polling), the CPU:",
                ["Delegates the transfer to a DMA controller", "Repeatedly checks the device status until it is ready", "Continues other work until interrupted", "Powers down the device"],
                1,
                "In programmed I/O, the CPU continuously polls the device status register, wasting cycles while waiting."
            ),
            mcq(
                "DMA allows data transfer between:",
                ["CPU and registers", "I/O device and memory without CPU involvement", "Two CPUs", "Cache and registers"],
                1,
                "DMA transfers data directly between an I/O device and main memory, bypassing the CPU."
            ),
            mcq(
                "When an interrupt occurs, the CPU first:",
                ["Halts permanently", "Finishes the current instruction and saves its state", "Ignores it", "Restarts the computer"],
                1,
                "The CPU finishes the current instruction, saves its state and then jumps to the ISR."
            ),
            mcq(
                "Interrupt-driven I/O is better than programmed I/O because:",
                ["It uses less hardware", "The CPU can do useful work while waiting for the device", "It is simpler to implement", "It does not need an operating system"],
                1,
                "Interrupt-driven I/O allows the CPU to execute other tasks while the device prepares data."
            ),
            mcq(
                "NVMe SSDs connect via which interface?",
                ["USB", "SATA", "PCIe", "HDMI"],
                2,
                "NVMe SSDs use the PCIe (Peripheral Component Interconnect Express) bus for high-speed data transfer."
            ),
        ],

        questions: [
            qa(
                "Compare programmed I/O, interrupt-driven I/O and DMA.",
                "Programmed I/O (polling) requires the CPU to repeatedly check the device status register until the device is ready, then handle the data transfer byte by byte. This wastes enormous CPU time because the CPU does nothing useful while waiting. Interrupt-driven I/O improves on this by allowing the CPU to issue an I/O command and continue executing other tasks. When the device is ready, it sends an interrupt signal, and the CPU temporarily suspends its work to service the I/O through an Interrupt Service Routine. This provides good CPU utilisation for character devices like keyboards. DMA (Direct Memory Access) is the most efficient technique for bulk transfers. A DMA controller handles the entire data transfer between the I/O device and memory without CPU involvement. The CPU only initiates the transfer and receives an interrupt when it is complete, freeing it to perform other tasks during the transfer.",
                5
            ),
            qa(
                "Explain the interrupt handling process step by step.",
                "When an I/O device needs attention, it raises an interrupt request (IRQ) signal on the control bus. The CPU finishes executing the current instruction to maintain consistency. The CPU then saves its current state, including the Program Counter and registers, onto the stack so it can resume later. The CPU identifies the interrupt source through an interrupt vector table and jumps to the corresponding Interrupt Service Routine (ISR). The ISR executes the necessary operations to service the device, such as reading data from the device's data register or acknowledging the interrupt. After the ISR completes, the CPU restores the saved state from the stack and resumes execution of the interrupted program from where it left off. This entire process happens transparently to the interrupted program.",
                5
            ),
            qa(
                "Why is DMA important for high-speed I/O devices?",
                "DMA is critical for high-speed I/O devices like disk drives and network cards because these devices transfer large volumes of data at high speeds. Without DMA, the CPU would need to handle every byte of the transfer through programmed I/O or interrupt-driven I/O, consuming billions of CPU cycles and halting all other processing. For example, transferring a 1 GB file at 500 MB/s would take 2 seconds, during which the CPU would be completely occupied with the transfer. With DMA, the CPU simply tells the DMA controller the source, destination and size of the transfer, then continues executing other programs. The DMA controller handles the entire transfer independently, and only interrupts the CPU when the transfer is complete. This allows the CPU to remain productive during large data transfers.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Operating System Fundamentals
========================================================= */

const operatingSystemFundamentals = createTopic(
    "operating-system-fundamentals",
    "Operating System Fundamentals",

    [
        definition(
            "Operating System (OS)",
            "System software that manages computer hardware and software resources and provides common services for computer programs. It acts as an intermediary between the user/applications and the computer hardware."
        ),

        text(
            "The operating system is the most important software on a computer. It manages the CPU, memory, storage, I/O devices and network, providing a convenient and efficient environment for users and applications. Without an OS, every program would need to directly control hardware, which would be extremely complex and inefficient."
        ),

        heading("Functions of an Operating System"),

        table(
            ["Function", "Description"],
            [
                ["Process Management", "Creating, scheduling, synchronising and terminating processes"],
                ["Memory Management", "Allocating and deallocating memory, virtual memory, paging"],
                ["File System Management", "Organising, storing, retrieving and protecting files on disk"],
                ["Device Management", "Managing I/O devices through drivers and buffering"],
                ["Security and Protection", "Authentication, access control, encryption"],
                ["User Interface", "Providing CLI (command line) or GUI (graphical) for user interaction"],
                ["Networking", "Managing network connections, protocols and communication"],
            ]
        ),

        heading("Types of Operating Systems"),

        table(
            ["Type", "Description", "Examples"],
            [
                ["Batch OS", "Jobs are grouped into batches and executed without user interaction", "Early mainframe systems"],
                ["Time-Sharing / Multitasking", "Multiple users/programs share CPU time via rapid switching", "Unix, Linux, Windows, macOS"],
                ["Real-Time OS (RTOS)", "Guarantees response within strict time deadlines", "VxWorks, FreeRTOS, QNX"],
                ["Distributed OS", "Manages a group of independent computers as a single system", "Amoeba, Plan 9"],
                ["Network OS", "Manages network resources and provides services to clients", "Windows Server, Novell NetWare"],
                ["Mobile OS", "Designed for smartphones and tablets", "Android, iOS"],
                ["Embedded OS", "Designed for specific embedded devices", "Embedded Linux, RTOS variants"],
            ]
        ),

        heading("Process Management"),

        definition(
            "Process",
            "A program in execution. A process includes the program code, current activity (PC value), registers, memory and open files. It is the basic unit of work in an operating system."
        ),

        heading("Process States"),

        code(
            `Process State Diagram:

           ┌──────────┐
     ─────→│   New    │
           └────┬─────┘
                │ Admitted
           ┌────▼─────┐
     ┌─────│  Ready   │◄────────────┐
     │     └────┬─────┘             │
     │          │ Scheduler         │ Interrupt /
     │          │ dispatches        │ Preemption
     │     ┌────▼──────┐           │
     │     │ Running   ├───────────┘
     │     └────┬──────┘
     │          │ I/O request or
     │          │ wait for event
     │     ┌────▼──────┐
     │     │  Waiting  │──── I/O completion ──→ Ready
     │     │ (Blocked) │
     │     └───────────┘
     │
     │     ┌───────────┐
     └────→│ Terminated│
           └───────────┘`,
            "text",
            "Process state diagram"
        ),

        table(
            ["State", "Description"],
            [
                ["New", "Process is being created"],
                ["Ready", "Process is loaded in memory and waiting for CPU"],
                ["Running", "Process is currently executing on the CPU"],
                ["Waiting (Blocked)", "Process is waiting for an event (I/O completion, signal)"],
                ["Terminated", "Process has finished execution"],
            ]
        ),

        heading("CPU Scheduling Algorithms"),

        table(
            ["Algorithm", "Description", "Preemptive?", "Advantage", "Disadvantage"],
            [
                ["FCFS", "First Come First Served — executes in arrival order", "No", "Simple, fair", "Convoy effect (short jobs wait behind long ones)"],
                ["SJF", "Shortest Job First — executes shortest job next", "No", "Minimum average waiting time", "Starvation of long jobs"],
                ["SRTF", "Shortest Remaining Time First — preemptive SJF", "Yes", "Optimal average waiting time", "Complex, starvation"],
                ["Round Robin", "Each process gets a fixed time quantum in turn", "Yes", "Fair, good response time", "Performance depends on quantum size"],
                ["Priority", "Highest priority process runs first", "Both", "Important tasks run first", "Starvation of low-priority tasks"],
                ["Multilevel Queue", "Multiple queues with different priorities and algorithms", "Both", "Flexible", "Complex"],
            ]
        ),

        heading("Deadlock"),

        definition(
            "Deadlock",
            "A situation where two or more processes are permanently blocked, each waiting for a resource held by another process in the set. None of the processes can proceed."
        ),

        heading("Four Necessary Conditions for Deadlock (Coffman Conditions)"),

        table(
            ["Condition", "Description"],
            [
                ["Mutual Exclusion", "At least one resource must be held in a non-sharable mode"],
                ["Hold and Wait", "A process holds at least one resource while waiting for additional resources"],
                ["No Preemption", "Resources cannot be forcibly taken from a process; they must be released voluntarily"],
                ["Circular Wait", "A circular chain of processes exists, each waiting for a resource held by the next"],
            ]
        ),

        note(
            "Deadlock can be handled by prevention (ensuring at least one Coffman condition cannot hold), avoidance (using algorithms like Banker's Algorithm to ensure safe states), detection and recovery (allowing deadlock and then resolving it), or ignorance (pretending it never happens, as many general-purpose OSes do).",
            "exam",
            "Frequently Asked"
        ),

        heading("Memory Management Techniques"),

        table(
            ["Technique", "Description"],
            [
                ["Contiguous Allocation", "Each process gets a single contiguous block of memory (fixed or variable partitions)"],
                ["Paging", "Memory divided into fixed-size pages (virtual) and frames (physical); no external fragmentation"],
                ["Segmentation", "Memory divided into variable-size segments based on logical divisions (code, data, stack)"],
                ["Virtual Memory", "Uses disk as extension of RAM through demand paging"],
            ]
        ),

        heading("Popular Operating Systems"),

        table(
            ["OS", "Type", "Developer", "Key Feature"],
            [
                ["Windows", "GUI, multitasking", "Microsoft", "Dominant desktop OS"],
                ["Linux", "Open-source, multitasking", "Community (Linus Torvalds)", "Servers, embedded, supercomputers"],
                ["macOS", "GUI, Unix-based", "Apple", "Apple hardware, developer-friendly"],
                ["Android", "Mobile, Linux-based", "Google", "Dominant mobile OS"],
                ["iOS", "Mobile, Unix-based", "Apple", "iPhone/iPad exclusive"],
            ]
        ),

        keyPoints([
            "An OS manages hardware resources and provides services to applications and users.",
            "Key OS functions include process management, memory management, file systems and device management.",
            "A process has states: New, Ready, Running, Waiting and Terminated.",
            "CPU scheduling algorithms include FCFS, SJF, Round Robin and Priority scheduling.",
            "Deadlock requires four conditions: mutual exclusion, hold and wait, no preemption and circular wait.",
        ]),
    ],

    {
        summary:
            "Learn OS functions, types, process management, CPU scheduling algorithms, deadlock and memory management techniques.",
        minutes: 14,
        tags: ["computer-fundamentals", "os", "process", "scheduling", "deadlock", "important"],

        mcqs: [
            mcq(
                "The primary function of an operating system is to:",
                ["Compile programs", "Manage hardware and software resources", "Design hardware", "Browse the Internet"],
                1,
                "An OS manages computer hardware and software resources and provides services to applications."
            ),
            mcq(
                "A process in the 'Ready' state is:",
                ["Currently executing on the CPU", "Waiting for I/O completion", "Loaded in memory and waiting for the CPU", "Being created"],
                2,
                "A ready process is loaded in memory and waiting for the scheduler to assign it the CPU."
            ),
            mcq(
                "Round Robin scheduling uses:",
                ["Priority levels", "A fixed time quantum for each process", "Shortest job first", "Arrival order only"],
                1,
                "Round Robin gives each process a fixed time quantum (time slice) in a circular order."
            ),
            mcq(
                "Deadlock requires all of the following EXCEPT:",
                ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"],
                2,
                "Deadlock requires NO preemption (resources cannot be forcibly taken). Preemption would prevent deadlock."
            ),
            mcq(
                "Paging eliminates:",
                ["Internal fragmentation", "External fragmentation", "All fragmentation", "Page faults"],
                1,
                "Paging eliminates external fragmentation by dividing memory into fixed-size frames."
            ),
            mcq(
                "A real-time operating system (RTOS) is characterised by:",
                ["Beautiful GUI", "Guaranteed response within strict time deadlines", "Support for gaming", "Large file system"],
                1,
                "An RTOS guarantees that critical operations complete within specified time deadlines."
            ),
        ],

        questions: [
            qa(
                "Explain the main functions of an operating system.",
                "An operating system performs several critical functions. Process management involves creating, scheduling, synchronising and terminating processes, deciding which process gets the CPU and for how long. Memory management allocates and deallocates memory to processes, implements virtual memory through paging and ensures processes do not interfere with each other's memory. File system management organises data on storage devices into files and directories, handling creation, deletion, reading, writing and access control. Device management controls I/O devices through device drivers, buffering and spooling to bridge the speed gap between the CPU and peripherals. Security and protection mechanisms authenticate users, enforce access controls and protect data from unauthorised access. The OS also provides a user interface (CLI or GUI) and networking capabilities.",
                5
            ),
            qa(
                "Explain the process state diagram with all states.",
                "A process goes through several states during its lifetime. When first created, it is in the New state. Once admitted by the OS, it moves to the Ready state, where it is loaded in memory and waiting for the CPU. When the scheduler selects it, it moves to the Running state and executes on the CPU. If the process needs to wait for an event such as I/O completion or a signal, it moves to the Waiting (Blocked) state. When the event occurs, it returns to the Ready state. If a higher-priority process arrives or the time quantum expires (in preemptive scheduling), the running process is preempted and returns to Ready. When the process completes execution, it moves to the Terminated state and its resources are released by the OS.",
                5
            ),
            qa(
                "What is deadlock? Explain the four necessary conditions.",
                "Deadlock is a situation where two or more processes are permanently blocked, each waiting for a resource held by another process in the set, so none can proceed. Four conditions must hold simultaneously for deadlock to occur (Coffman conditions). Mutual exclusion means at least one resource is held in a non-sharable mode, so only one process can use it at a time. Hold and wait means a process is holding at least one resource while waiting to acquire additional resources held by other processes. No preemption means resources cannot be forcibly taken away from a process; they must be released voluntarily. Circular wait means there is a circular chain of processes where each process is waiting for a resource held by the next process in the chain. Deadlock can be handled by prevention (breaking one condition), avoidance (Banker's Algorithm), detection and recovery, or ignorance.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introToComputerOrganization,
    cpuArchitectureAndInstructionCycle,
    memoryHierarchy,
    inputOutputOrganization,
    operatingSystemFundamentals,
];