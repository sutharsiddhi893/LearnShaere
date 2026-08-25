/* =========================================================
   BCA • SEM 4 • Operating System
   UNIT 1 — Introduction, Process Management and CPU Scheduling
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
   TOPIC 1 — Introduction to Operating System
========================================================= */

const introOS = createTopic(
    "introduction-to-operating-system",
    "Introduction to Operating System",

    [
        definition(
            "Operating System",
            "An Operating System (OS) is system software that acts as an interface between the user and computer hardware. It manages hardware resources, provides services to applications and controls the execution of programs."
        ),

        text(
            "Without an operating system, users would have to write low-level programs to communicate with hardware. The OS simplifies this by providing a user-friendly environment and efficient resource management."
        ),

        heading("Goals of Operating System"),

        list([
            "Convenience — Make the computer easy to use.",
            "Efficiency — Utilize resources optimally.",
            "Ability to evolve — Support new hardware and software.",
            "Throughput — Complete maximum work in minimum time.",
            "Reliability — Ensure smooth and error-free operation.",
        ]),

        heading("Functions of Operating System"),

        table(
            ["Function", "Description"],
            [
                ["Process Management", "Create, schedule, terminate processes"],
                ["Memory Management", "Allocate and deallocate memory"],
                ["File Management", "Create, read, write, delete files"],
                ["Device Management", "Control input/output devices"],
                ["Security", "Protect data and system from threats"],
                ["User Interface", "Provide CLI or GUI"],
                ["Networking", "Enable communication between computers"],
                ["Error Detection", "Monitor and handle errors"],
            ]
        ),

        heading("Types of Operating Systems"),

        table(
            ["Type", "Description", "Example"],
            [
                ["Batch OS", "Executes batches of jobs without user interaction", "Early IBM systems"],
                ["Multi-Programming OS", "Multiple programs share CPU", "UNIX"],
                ["Multi-Tasking OS", "Multiple tasks appear to run simultaneously", "Windows, Linux"],
                ["Multi-Processing OS", "Uses multiple CPUs", "Windows Server, Linux"],
                ["Real-Time OS", "Responds within strict time limits", "VxWorks, RTLinux"],
                ["Distributed OS", "Manages network of computers", "LOCUS, Amoeba"],
                ["Network OS", "Provides network services", "Windows Server, Novell"],
                ["Mobile OS", "For smartphones and tablets", "Android, iOS"],
                ["Embedded OS", "For embedded systems", "Embedded Linux, RTOS"],
            ]
        ),

        heading("Batch Operating System"),

        text(
            "In batch OS, similar jobs are grouped together and executed in batches without user interaction. The OS controls job flow through the system."
        ),

        heading("Multi-Programming System"),

        text(
            "Multiple programs reside in memory simultaneously. When one program is waiting for I/O, the CPU executes another program, keeping the CPU busy at all times."
        ),

        heading("Time-Sharing System"),

        text(
            "Also called multi-tasking, each user gets a small time slice (quantum) of CPU. The CPU switches so fast that each user feels they have exclusive access."
        ),

        heading("Real-Time Operating System"),

        definition(
            "RTOS",
            "A Real-Time OS is designed to serve requests within strict time constraints. It guarantees deterministic response times."
        ),

        list([
            "Hard Real-Time — Missed deadline causes system failure (e.g., missile control).",
            "Soft Real-Time — Missed deadline degrades performance but system continues (e.g., video streaming).",
        ]),

        heading("System Calls"),

        definition(
            "System Call",
            "A system call is a programming interface that allows user programs to request services from the operating system kernel."
        ),

        heading("Types of System Calls"),

        table(
            ["Category", "Examples"],
            [
                ["Process Control", "fork(), exec(), exit(), wait()"],
                ["File Management", "open(), read(), write(), close()"],
                ["Device Management", "ioctl(), read(), write()"],
                ["Information", "getpid(), alarm(), sleep()"],
                ["Communication", "pipe(), shmget(), mmap()"],
            ]
        ),

        heading("Operating System Architecture"),

        table(
            ["Architecture", "Description"],
            [
                ["Monolithic", "All OS components in single large program (Linux)"],
                ["Layered", "OS divided into layers with specific functions"],
                ["Microkernel", "Minimal kernel with services as user processes"],
                ["Hybrid", "Combination of monolithic and microkernel"],
                ["Virtual Machine", "OS creates illusion of multiple machines"],
            ]
        ),

        heading("Popular Operating Systems"),

        list([
            "Windows — Microsoft's OS for personal computers.",
            "Linux — Open-source, used on servers and desktops.",
            "macOS — Apple's OS for Mac computers.",
            "UNIX — Multi-user OS used in servers.",
            "Android — Google's mobile OS.",
            "iOS — Apple's mobile OS.",
            "Chrome OS — Google's cloud-based OS.",
        ]),

        note(
            "The operating system is the most important software on any computer. It manages all hardware and software resources and provides services that make everything else work.",
            "tip",
            "Importance"
        ),

        keyPoints([
            "OS is an interface between user and hardware.",
            "Main functions include process, memory, file and device management.",
            "Types include batch, time-sharing, real-time, distributed OS.",
            "System calls allow programs to request OS services.",
            "Common OS: Windows, Linux, macOS, Android, iOS.",
        ]),
    ],

    {
        summary:
            "Introduction to operating systems — their goals, functions, types and architecture.",
        minutes: 12,
        tags: ["os", "introduction", "types", "system-calls", "important"],

        mcqs: [
            mcq(
                "OS is an interface between:",
                ["User and hardware", "Hardware and printer", "Files and disk", "CPU and RAM"],
                0,
                "OS acts as an interface between user and hardware."
            ),
            mcq(
                "Which is NOT a function of OS?",
                ["Process management", "Memory management", "Compilation", "File management"],
                2,
                "Compilation is done by compiler, not OS."
            ),
            mcq(
                "Real-Time OS is used in:",
                ["Word processing", "Missile control", "Web browsing", "Games"],
                1,
                "RTOS is used where strict timing is critical, like missile control."
            ),
            mcq(
                "System call is used to:",
                ["Start OS", "Request OS services", "Compile code", "Close browser"],
                1,
                "System calls request services from OS kernel."
            ),
        ],

        questions: [
            qa(
                "What is an Operating System? Explain its functions.",
                "An Operating System (OS) is system software that acts as an interface between the user and computer hardware. It manages hardware resources, provides services to applications and controls program execution. Main functions include: (1) Process Management — creating, scheduling and terminating processes; (2) Memory Management — allocating and deallocating memory to processes; (3) File Management — creating, reading, writing and deleting files; (4) Device Management — controlling I/O devices; (5) Security — protecting data from unauthorized access; (6) User Interface — providing CLI or GUI; (7) Networking — enabling communication; (8) Error Detection — monitoring and handling errors. Popular OSes include Windows, Linux, macOS, Android and iOS.",
                4
            ),
            qa(
                "Explain different types of operating systems.",
                "Operating systems are classified into several types based on their capabilities and use cases: (1) Batch OS — executes similar jobs in batches without user interaction; (2) Multi-Programming OS — multiple programs share CPU by switching when one waits for I/O; (3) Time-Sharing OS — CPU is shared among users through time slices, giving each user an illusion of exclusive access; (4) Multi-Processing OS — uses multiple CPUs simultaneously; (5) Real-Time OS — responds within strict time limits (hard RTOS for critical systems, soft RTOS for non-critical); (6) Distributed OS — manages a network of interconnected computers; (7) Network OS — provides network services; (8) Mobile OS — for smartphones and tablets like Android and iOS; (9) Embedded OS — designed for embedded systems in devices like washing machines and cars.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Process Management
========================================================= */

const processManagement = createTopic(
    "process-management",
    "Process Management",

    [
        definition(
            "Process",
            "A process is a program in execution. It is an instance of a running program that requires resources such as CPU time, memory, files and I/O devices to perform its task."
        ),

        heading("Program vs Process"),

        table(
            ["Program", "Process"],
            [
                ["Static entity", "Dynamic entity"],
                ["Stored on disk", "Runs in memory"],
                ["Passive", "Active"],
                ["No PID", "Has unique PID"],
                ["Occupies less space", "Requires more resources"],
                ["Example: file.exe", "Example: running Word"],
            ]
        ),

        heading("Process States"),

        table(
            ["State", "Description"],
            [
                ["New", "Process is being created"],
                ["Ready", "Waiting for CPU"],
                ["Running", "Instructions being executed"],
                ["Waiting/Blocked", "Waiting for I/O or event"],
                ["Terminated", "Process finished execution"],
            ]
        ),

        heading("Process State Transitions"),

        steps([
            "New → Ready: When process is admitted to system.",
            "Ready → Running: When CPU is assigned (dispatch).",
            "Running → Ready: When time slice expires (preemption).",
            "Running → Waiting: When process requests I/O.",
            "Waiting → Ready: When I/O completes.",
            "Running → Terminated: When process completes.",
        ]),

        heading("Process Control Block (PCB)"),

        definition(
            "PCB",
            "PCB is a data structure maintained by the OS for every process. It contains all information needed to manage and control the process."
        ),

        heading("Information in PCB"),

        list([
            "Process ID (PID) — Unique identifier.",
            "Process State — Current state (Ready, Running, etc.).",
            "Program Counter — Address of next instruction.",
            "CPU Registers — Current register values.",
            "CPU Scheduling Info — Priority, queue pointers.",
            "Memory Management Info — Page tables, segments.",
            "Accounting Info — CPU time used, time limits.",
            "I/O Status — Devices allocated, open files.",
            "Parent Process ID.",
            "Priority level.",
        ]),

        heading("Process Operations"),

        heading("Process Creation"),

        text(
            "The OS creates processes using system calls like fork() in UNIX. The new process is called child, and the creator is called parent."
        ),

        code(
            `// UNIX/Linux fork() example
#include <stdio.h>
#include <unistd.h>

int main() {
    int pid = fork();
    
    if (pid == 0) {
        printf("Child process\\n");
    } else if (pid > 0) {
        printf("Parent process\\n");
    } else {
        printf("Fork failed\\n");
    }
    
    return 0;
}`,
            "c",
            "fork() system call"
        ),

        heading("Process Termination"),

        text(
            "A process can terminate normally (exit) or abnormally (killed). When a process terminates, the OS releases all its resources."
        ),

        heading("Context Switching"),

        definition(
            "Context Switch",
            "Context switching is the process of saving the state of a currently running process and loading the state of another process, allowing the CPU to switch between processes."
        ),

        heading("Steps in Context Switching"),

        steps([
            "Save context of current process in its PCB.",
            "Update PCB with new state (usually Ready).",
            "Move PCB to appropriate queue.",
            "Select another process from Ready queue.",
            "Load context of selected process from its PCB.",
            "Update PCB state to Running.",
            "Transfer control to the new process.",
        ]),

        note(
            "Context switching is pure overhead — no useful work is done during switching. Modern OS try to minimize context switches while ensuring fair CPU distribution.",
            "warning",
            "Overhead"
        ),

        heading("Threads"),

        definition(
            "Thread",
            "A thread is a lightweight process — a single sequence of execution within a process. Multiple threads can exist within a single process and share resources."
        ),

        heading("Process vs Thread"),

        table(
            ["Basis", "Process", "Thread"],
            [
                ["Weight", "Heavy", "Lightweight"],
                ["Memory", "Separate memory", "Shares process memory"],
                ["Creation time", "Slow", "Fast"],
                ["Communication", "Complex (IPC)", "Easy (shared memory)"],
                ["Context switch", "Slow", "Fast"],
                ["Failure impact", "Doesn't affect others", "Affects other threads"],
            ]
        ),

        heading("Types of Threads"),

        table(
            ["Type", "Description"],
            [
                ["User-level Threads (ULT)", "Managed by user library, OS unaware"],
                ["Kernel-level Threads (KLT)", "Managed by OS kernel"],
            ]
        ),

        heading("Multithreading Models"),

        list([
            "Many-to-One — Many ULT map to one KLT.",
            "One-to-One — Each ULT maps to one KLT.",
            "Many-to-Many — Many ULT map to many KLT.",
        ]),

        heading("Benefits of Multithreading"),

        list([
            "Responsiveness — App remains active while performing tasks.",
            "Resource sharing — Threads share resources easily.",
            "Economy — Cheaper than creating processes.",
            "Scalability — Uses multiple processors effectively.",
        ]),

        keyPoints([
            "Process is a program in execution.",
            "PCB contains all process information.",
            "Process has 5 states: New, Ready, Running, Waiting, Terminated.",
            "Context switching saves and loads process states.",
            "Threads are lightweight processes sharing memory.",
        ]),
    ],

    {
        summary:
            "Learn process concept, PCB, process states, context switching and threading models.",
        minutes: 13,
        tags: ["process", "pcb", "thread", "context-switch", "important"],

        mcqs: [
            mcq(
                "Which is NOT a process state?",
                ["New", "Ready", "Running", "Compiled"],
                3,
                "Compiled is not a process state."
            ),
            mcq(
                "PCB stands for:",
                ["Process Control Block", "Program Control Block", "Process Code Block", "Program Code Base"],
                0,
                "PCB is Process Control Block."
            ),
            mcq(
                "Thread is:",
                ["Heavy process", "Lightweight process", "Program", "File"],
                1,
                "Thread is a lightweight process."
            ),
            mcq(
                "fork() creates:",
                ["Thread", "New process", "File", "Directory"],
                1,
                "fork() creates a new child process."
            ),
        ],

        questions: [
            qa(
                "What is a process? Explain process states.",
                "A process is a program in execution. It is a dynamic entity that requires resources like CPU time, memory, files and I/O devices. A process has five main states: (1) New — process is being created; (2) Ready — process is loaded in memory and waiting for CPU; (3) Running — instructions are being executed on CPU; (4) Waiting/Blocked — process is waiting for I/O or event; (5) Terminated — process has finished execution. Processes move between states based on events: dispatch (Ready→Running), preemption (Running→Ready), I/O request (Running→Waiting), I/O complete (Waiting→Ready) and exit (Running→Terminated). The OS uses Process Control Block (PCB) to store all information about each process.",
                4
            ),
            qa(
                "Differentiate between process and thread.",
                "A process is an independent program in execution with its own memory space, while a thread is a lightweight sub-unit of a process that shares the process's memory. Key differences: (1) Weight — process is heavy, thread is lightweight; (2) Memory — processes have separate memory, threads share process memory; (3) Creation time — processes take longer to create; (4) Communication — inter-process communication is complex (needs IPC mechanisms), while thread communication is easy through shared memory; (5) Context switching — process switching is slower than thread switching; (6) Failure — process failure doesn't affect others, but thread failure can crash the entire process. Threads are ideal for tasks that need concurrent execution within the same application.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — CPU Scheduling
========================================================= */

const cpuScheduling = createTopic(
    "cpu-scheduling",
    "CPU Scheduling",

    [
        definition(
            "CPU Scheduling",
            "CPU Scheduling is the process of selecting which process from the ready queue will be executed by the CPU. The goal is to maximize CPU utilization and system throughput."
        ),

        heading("Types of Schedulers"),

        table(
            ["Scheduler", "Function"],
            [
                ["Long-term (Job)", "Selects processes from disk to memory"],
                ["Short-term (CPU)", "Selects processes from ready queue for CPU"],
                ["Medium-term", "Swaps processes in/out of memory"],
            ]
        ),

        heading("Preemptive vs Non-Preemptive"),

        table(
            ["Basis", "Preemptive", "Non-Preemptive"],
            [
                ["CPU release", "Can be forced", "Only voluntary"],
                ["Context switch", "Frequent", "Rare"],
                ["Response time", "Better", "Worse"],
                ["Overhead", "More", "Less"],
                ["Examples", "Round Robin, SRTF", "FCFS, SJF"],
            ]
        ),

        heading("Scheduling Criteria"),

        list([
            "CPU Utilization — Keep CPU as busy as possible.",
            "Throughput — Number of processes completed per unit time.",
            "Turnaround Time — Total time from submission to completion.",
            "Waiting Time — Time spent in ready queue.",
            "Response Time — Time from submission to first response.",
        ]),

        heading("Important Formulas"),

        table(
            ["Metric", "Formula"],
            [
                ["Turnaround Time", "Completion Time − Arrival Time"],
                ["Waiting Time", "Turnaround Time − Burst Time"],
                ["Response Time", "First Response Time − Arrival Time"],
            ]
        ),

        heading("1. First Come First Served (FCFS)"),

        definition(
            "FCFS",
            "FCFS is the simplest scheduling algorithm where processes are executed in the order they arrive in the ready queue."
        ),

        text("Example: Processes with arrival time 0 and burst times:"),

        table(
            ["Process", "Burst Time", "Completion", "Turnaround", "Waiting"],
            [
                ["P1", "5", "5", "5", "0"],
                ["P2", "3", "8", "8", "5"],
                ["P3", "8", "16", "16", "8"],
                ["P4", "6", "22", "22", "16"],
            ]
        ),

        text("Average Waiting Time = (0+5+8+16)/4 = 7.25"),

        heading("FCFS Characteristics"),

        list([
            "Simple to implement.",
            "Non-preemptive.",
            "Suffers from Convoy Effect (small processes wait for big ones).",
            "Poor average waiting time.",
            "Not suitable for time-sharing systems.",
        ]),

        heading("2. Shortest Job First (SJF)"),

        definition(
            "SJF",
            "SJF selects the process with the shortest burst time. It gives minimum average waiting time and can be preemptive or non-preemptive."
        ),

        text("Example (Non-preemptive):"),

        table(
            ["Process", "Burst", "Completion", "Turnaround", "Waiting"],
            [
                ["P1", "6", "9", "9", "3"],
                ["P2", "3", "3", "3", "0"],
                ["P3", "8", "17", "17", "9"],
                ["P4", "7", "24", "24", "17"],
            ]
        ),

        heading("SJF Characteristics"),

        list([
            "Optimal — Minimum average waiting time.",
            "Difficult to predict burst time.",
            "May cause starvation of long processes.",
            "Preemptive version is called SRTF (Shortest Remaining Time First).",
        ]),

        heading("3. Shortest Remaining Time First (SRTF)"),

        text(
            "SRTF is the preemptive version of SJF. When a new process arrives, if its burst time is shorter than the remaining time of the current process, the CPU preempts and runs the new process."
        ),

        heading("4. Priority Scheduling"),

        text(
            "Each process is assigned a priority. The CPU is allocated to the process with the highest priority. Can be preemptive or non-preemptive."
        ),

        table(
            ["Process", "Burst", "Priority", "Completion", "Waiting"],
            [
                ["P1", "10", "3", "16", "6"],
                ["P2", "1", "1", "1", "0"],
                ["P3", "2", "4", "18", "16"],
                ["P4", "1", "5", "19", "18"],
                ["P5", "5", "2", "6", "1"],
            ]
        ),

        text("Lower number = Higher priority. Average Waiting = (6+0+16+18+1)/5 = 8.2"),

        heading("Priority Scheduling Issues"),

        list([
            "Starvation — Low priority processes may wait forever.",
            "Solution: Aging — Gradually increase priority of waiting processes.",
        ]),

        heading("5. Round Robin (RR)"),

        definition(
            "Round Robin",
            "Round Robin assigns each process a fixed time quantum. When the quantum expires, the process is preempted and moved to the end of the ready queue."
        ),

        text("Example with Time Quantum = 4:"),

        table(
            ["Process", "Burst", "Completion", "Turnaround", "Waiting"],
            [
                ["P1", "10", "24", "24", "14"],
                ["P2", "4", "8", "8", "4"],
                ["P3", "5", "22", "22", "17"],
                ["P4", "3", "15", "15", "12"],
            ]
        ),

        heading("Round Robin Characteristics"),

        list([
            "Preemptive scheduling.",
            "Fair — Each process gets equal CPU time.",
            "Good for time-sharing systems.",
            "No starvation.",
            "Performance depends on time quantum:",
            "  - Too large: Behaves like FCFS.",
            "  - Too small: Too many context switches.",
        ]),

        heading("6. Multilevel Queue Scheduling"),

        text(
            "Processes are divided into different queues based on properties like priority, memory size or process type. Each queue has its own scheduling algorithm."
        ),

        list([
            "System processes queue (highest priority).",
            "Interactive processes queue.",
            "Batch processes queue.",
            "Student processes queue (lowest priority).",
        ]),

        heading("7. Multilevel Feedback Queue"),

        text(
            "Similar to multilevel queue, but processes can move between queues based on their behavior. This allows adaptive scheduling."
        ),

        heading("Comparison of Scheduling Algorithms"),

        table(
            ["Algorithm", "Preemptive", "Best For", "Issue"],
            [
                ["FCFS", "No", "Simple systems", "Convoy effect"],
                ["SJF", "No", "Minimum wait time", "Starvation"],
                ["SRTF", "Yes", "Short jobs", "Starvation"],
                ["Priority", "Both", "Priority tasks", "Starvation"],
                ["Round Robin", "Yes", "Time sharing", "Overhead"],
                ["Multilevel", "Both", "Different job types", "Complex"],
            ]
        ),

        note(
            "There is no single best scheduling algorithm. The choice depends on system goals: throughput, fairness, response time or turnaround time. Most modern OSes use complex hybrid algorithms.",
            "tip",
            "Choosing Algorithm"
        ),

        keyPoints([
            "CPU scheduling selects next process for CPU.",
            "Preemptive vs Non-preemptive scheduling.",
            "FCFS is simple but has convoy effect.",
            "SJF gives optimal waiting time.",
            "Round Robin is fair for time-sharing.",
            "Priority scheduling can cause starvation.",
        ]),
    ],

    {
        summary:
            "Learn CPU scheduling algorithms: FCFS, SJF, SRTF, Priority, Round Robin and Multilevel Queue.",
        minutes: 15,
        tags: ["scheduling", "fcfs", "sjf", "round-robin", "priority", "important"],

        mcqs: [
            mcq(
                "Which scheduling algorithm gives minimum average waiting time?",
                ["FCFS", "SJF", "Round Robin", "Priority"],
                1,
                "SJF gives optimal (minimum) average waiting time."
            ),
            mcq(
                "Round Robin uses:",
                ["Priority", "Time quantum", "Burst time", "Arrival time"],
                1,
                "Round Robin uses time quantum."
            ),
            mcq(
                "Starvation is a problem in:",
                ["FCFS", "Round Robin", "Priority scheduling", "SRTF only"],
                2,
                "Priority scheduling can cause starvation."
            ),
            mcq(
                "Turnaround Time =",
                ["CT - AT", "AT - CT", "CT + BT", "BT - WT"],
                0,
                "Turnaround Time = Completion Time - Arrival Time."
            ),
        ],

        questions: [
            qa(
                "Explain FCFS scheduling with example.",
                "First Come First Served (FCFS) is the simplest CPU scheduling algorithm where processes are executed in the order they arrive in the ready queue. It is non-preemptive, meaning once a process starts, it runs to completion. Example: For processes P1(burst=5), P2(burst=3), P3(burst=8), P4(burst=6) all arriving at time 0, execution order is P1→P2→P3→P4. Completion times: 5, 8, 16, 22. Waiting times: 0, 5, 8, 16. Average waiting time = (0+5+8+16)/4 = 7.25. FCFS is simple to implement but suffers from the convoy effect where small processes wait for long ones, resulting in poor average waiting time. It is not suitable for time-sharing systems.",
                4
            ),
            qa(
                "Explain Round Robin scheduling and its characteristics.",
                "Round Robin (RR) is a preemptive CPU scheduling algorithm where each process is given a fixed time quantum (time slice). When the quantum expires, the process is preempted and moved to the end of the ready queue, and the next process is scheduled. Example: For processes P1(10), P2(4), P3(5), P4(3) with quantum=4, they are executed cyclically until completion. Characteristics: (1) Fair — each process gets equal CPU time; (2) Good for time-sharing systems; (3) No starvation as every process eventually gets CPU; (4) Performance depends heavily on quantum size — too large behaves like FCFS, too small causes excessive context switching overhead. RR is widely used in interactive systems where fairness and responsiveness are important.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Process Synchronization
========================================================= */

const processSynchronization = createTopic(
    "process-synchronization",
    "Process Synchronization",

    [
        definition(
            "Process Synchronization",
            "Process synchronization is the coordination of multiple processes to ensure that they access shared resources in a controlled manner without conflicts."
        ),

        heading("Why Synchronization?"),

        text(
            "When multiple processes access shared data concurrently, the final result depends on the order of execution. This can lead to inconsistent data, which is called a race condition."
        ),

        heading("Race Condition"),

        definition(
            "Race Condition",
            "A race condition occurs when multiple processes access and modify shared data concurrently, and the outcome depends on the timing of their execution."
        ),

        text("Example: Two processes incrementing the same counter:"),

        code(
            `// Shared variable
int counter = 5;

// Process P1                  // Process P2
temp1 = counter;                temp2 = counter;
temp1 = temp1 + 1;              temp2 = temp2 + 1;
counter = temp1;                counter = temp2;

// Expected: counter = 7
// Actual: counter could be 6 (race condition!)`,
            "c",
            "Race condition example"
        ),

        heading("Critical Section Problem"),

        definition(
            "Critical Section",
            "A critical section is a code segment where shared resources are accessed. Only one process should execute in its critical section at a time."
        ),

        heading("Structure of Process"),

        code(
            `do {
    entry section       // Request to enter CS
    
    critical section    // Access shared resource
    
    exit section        // Release CS
    
    remainder section   // Other code
} while (true);`,
            "c",
            "Process structure with CS"
        ),

        heading("Requirements for Critical Section Solution"),

        list([
            "Mutual Exclusion — Only one process in CS at a time.",
            "Progress — If no process is in CS, one waiting must enter.",
            "Bounded Waiting — Limit on how long a process waits.",
        ]),

        heading("Solutions to Critical Section"),

        heading("1. Peterson's Solution"),

        text(
            "A software-based solution for two processes. Uses two variables: turn and flag[]."
        ),

        code(
            `// Shared variables
int turn;
boolean flag[2] = {false, false};

// Process Pi
do {
    flag[i] = true;
    turn = j;
    while (flag[j] && turn == j);  // Wait
    
    critical section
    
    flag[i] = false;
    
    remainder section
} while (true);`,
            "c",
            "Peterson's solution"
        ),

        heading("2. Semaphores"),

        definition(
            "Semaphore",
            "A semaphore is an integer variable used for synchronization, accessed only through two atomic operations: wait() and signal()."
        ),

        heading("Types of Semaphores"),

        table(
            ["Type", "Values", "Use"],
            [
                ["Binary Semaphore", "0 or 1", "Mutual exclusion (like mutex)"],
                ["Counting Semaphore", "Any non-negative", "Resource counting"],
            ]
        ),

        code(
            `// Semaphore operations
wait(S) {
    while (S <= 0);  // Busy wait
    S--;
}

signal(S) {
    S++;
}

// Using semaphore for CS
semaphore mutex = 1;

do {
    wait(mutex);
    
    critical section
    
    signal(mutex);
    
    remainder section
} while (true);`,
            "c",
            "Semaphore implementation"
        ),

        heading("3. Mutex Locks"),

        definition(
            "Mutex",
            "A mutex (mutual exclusion) lock is a synchronization primitive that provides exclusive access to a shared resource. Only the process that locks it can unlock it."
        ),

        code(
            `mutex lock;

acquire(lock);        // Lock the mutex
    critical section
release(lock);        // Unlock the mutex`,
            "c",
            "Mutex usage"
        ),

        heading("4. Monitors"),

        definition(
            "Monitor",
            "A monitor is a high-level synchronization construct that encapsulates shared data with the procedures that operate on it. Only one process can be active in the monitor at a time."
        ),

        heading("Classic Synchronization Problems"),

        heading("1. Producer-Consumer Problem"),

        text(
            "Producer produces items and puts them in a buffer. Consumer takes items from the buffer. Both must not access buffer simultaneously."
        ),

        code(
            `// Solution using semaphores
semaphore mutex = 1;
semaphore empty = N;    // Empty slots
semaphore full = 0;     // Full slots

// Producer
do {
    produce item
    wait(empty);
    wait(mutex);
    add item to buffer
    signal(mutex);
    signal(full);
} while (true);

// Consumer
do {
    wait(full);
    wait(mutex);
    remove item from buffer
    signal(mutex);
    signal(empty);
    consume item
} while (true);`,
            "c",
            "Producer-Consumer"
        ),

        heading("2. Readers-Writers Problem"),

        text(
            "Multiple readers can read shared data simultaneously, but only one writer can write at a time, and no reader can read while writer is writing."
        ),

        heading("3. Dining Philosophers Problem"),

        text(
            "Five philosophers sit around a table with one fork between each pair. Each philosopher needs both left and right forks to eat. The challenge is to prevent deadlock and starvation."
        ),

        heading("Deadlock"),

        definition(
            "Deadlock",
            "Deadlock is a situation where two or more processes are waiting indefinitely for resources held by each other, and none can proceed."
        ),

        heading("Necessary Conditions for Deadlock"),

        table(
            ["Condition", "Description"],
            [
                ["Mutual Exclusion", "Resources cannot be shared"],
                ["Hold and Wait", "Process holds one resource and waits for another"],
                ["No Preemption", "Resources cannot be forcibly taken"],
                ["Circular Wait", "Circular chain of waiting processes"],
            ]
        ),

        heading("Deadlock Handling"),

        list([
            "Prevention — Ensure at least one condition doesn't hold.",
            "Avoidance — Use algorithms like Banker's Algorithm.",
            "Detection & Recovery — Allow deadlock, detect and recover.",
            "Ignore — Assume deadlocks don't occur (ostrich algorithm).",
        ]),

        heading("Banker's Algorithm"),

        text(
            "The Banker's Algorithm is a deadlock avoidance algorithm that checks whether allocating a resource will leave the system in a safe state before granting it."
        ),

        note(
            "Race conditions and deadlocks are among the most difficult bugs to find and fix in concurrent programs. Always use proper synchronization mechanisms when accessing shared data.",
            "warning",
            "Concurrency Bugs"
        ),

        keyPoints([
            "Race condition occurs when processes access shared data concurrently.",
            "Critical section requires mutual exclusion.",
            "Semaphores use wait() and signal() operations.",
            "Deadlock requires all 4 conditions to hold.",
            "Banker's algorithm prevents deadlock through safe state check.",
        ]),
    ],

    {
        summary:
            "Learn process synchronization, critical section, semaphores, mutex, deadlock and classical problems.",
        minutes: 14,
        tags: ["synchronization", "semaphore", "deadlock", "mutex", "important"],

        mcqs: [
            mcq(
                "A semaphore has how many atomic operations?",
                ["1", "2", "3", "4"],
                1,
                "Semaphore has 2 atomic operations: wait() and signal()."
            ),
            mcq(
                "Which is NOT required for deadlock?",
                ["Mutual exclusion", "Hold and wait", "Preemption", "Circular wait"],
                2,
                "No Preemption is required for deadlock, not preemption."
            ),
            mcq(
                "Binary semaphore has values:",
                ["0 or 1", "-1 or 1", "Any integer", "0 to 10"],
                0,
                "Binary semaphore takes values 0 or 1."
            ),
            mcq(
                "Race condition occurs due to:",
                ["Slow CPU", "Concurrent access to shared data", "Full memory", "Old OS"],
                1,
                "Race condition happens due to concurrent access to shared data."
            ),
        ],

        questions: [
            qa(
                "What is critical section problem? State its requirements.",
                "The critical section problem occurs when multiple processes access shared resources concurrently. A critical section is a code segment where shared data is accessed, and only one process should execute in its critical section at a time. A valid solution must satisfy three requirements: (1) Mutual Exclusion — only one process can be in the critical section at any time; (2) Progress — if no process is in the critical section and some processes want to enter, only those not in the remainder section can decide who enters next, and this decision cannot be postponed indefinitely; (3) Bounded Waiting — there must be a limit on how many times other processes can enter their critical section after a process has requested entry. Solutions include Peterson's algorithm, semaphores, mutex locks and monitors.",
                4
            ),
            qa(
                "What is deadlock? Explain necessary conditions and handling techniques.",
                "Deadlock is a situation where two or more processes are waiting indefinitely for resources held by each other, and none can proceed. Four necessary conditions must hold simultaneously for deadlock: (1) Mutual Exclusion — resources cannot be shared; (2) Hold and Wait — a process holds one resource while waiting for another; (3) No Preemption — resources cannot be forcibly taken away; (4) Circular Wait — a circular chain of processes exists where each waits for the next's resource. Handling techniques include: (a) Prevention — ensure at least one condition never holds; (b) Avoidance — use algorithms like Banker's Algorithm to check safe states; (c) Detection and Recovery — allow deadlocks but detect and recover; (d) Ignore — assume deadlocks are rare (Ostrich algorithm used in Windows and UNIX).",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Inter-Process Communication (IPC)
========================================================= */

const ipc = createTopic(
    "inter-process-communication",
    "Inter-Process Communication (IPC)",

    [
        definition(
            "IPC",
            "Inter-Process Communication (IPC) refers to mechanisms provided by the operating system for processes to communicate with each other and synchronize their actions."
        ),

        heading("Why IPC is Needed"),

        list([
            "Information sharing among processes.",
            "Computation speedup through parallel execution.",
            "Modularity — divide functions among processes.",
            "Convenience — user can work on multiple tasks.",
        ]),

        heading("Types of IPC"),

        table(
            ["Type", "Description"],
            [
                ["Shared Memory", "Processes share a memory region"],
                ["Message Passing", "Processes exchange messages"],
            ]
        ),

        heading("Shared Memory"),

        text(
            "In shared memory, a region of memory is shared by cooperating processes. Processes can read and write data in this shared region."
        ),

        code(
            `#include <sys/shm.h>
#include <sys/stat.h>

int main() {
    // Create shared memory
    int shmid = shmget(IPC_PRIVATE, 1024, IPC_CREAT | 0666);
    
    // Attach to process
    char *data = (char*)shmat(shmid, NULL, 0);
    
    // Use shared memory
    strcpy(data, "Hello from Process");
    
    // Detach
    shmdt(data);
    
    // Remove
    shmctl(shmid, IPC_RMID, NULL);
    
    return 0;
}`,
            "c",
            "Shared memory in UNIX"
        ),

        heading("Message Passing"),

        text(
            "In message passing, processes communicate by sending and receiving messages without sharing memory."
        ),

        heading("Message Passing Operations"),

        table(
            ["Operation", "Description"],
            [
                ["send(message)", "Send message to another process"],
                ["receive(message)", "Receive a message"],
            ]
        ),

        heading("Direct vs Indirect Communication"),

        table(
            ["Type", "Description"],
            [
                ["Direct", "Processes name each other explicitly"],
                ["Indirect", "Messages sent/received via mailboxes"],
            ]
        ),

        heading("Synchronous vs Asynchronous"),

        table(
            ["Type", "Behavior"],
            [
                ["Blocking send", "Sender blocks until message received"],
                ["Non-blocking send", "Sender sends and continues"],
                ["Blocking receive", "Receiver blocks until message arrives"],
                ["Non-blocking receive", "Receiver returns immediately"],
            ]
        ),

        heading("IPC Mechanisms in UNIX/Linux"),

        heading("1. Pipes"),

        definition(
            "Pipe",
            "A pipe is a unidirectional communication channel between two related processes. Data written to one end can be read from the other end."
        ),

        code(
            `#include <unistd.h>

int main() {
    int fd[2];
    char buffer[100];
    
    // Create pipe
    pipe(fd);
    
    if (fork() == 0) {
        // Child - writes to pipe
        close(fd[0]);
        write(fd[1], "Hello", 6);
        close(fd[1]);
    } else {
        // Parent - reads from pipe
        close(fd[1]);
        read(fd[0], buffer, 100);
        printf("Received: %s\\n", buffer);
        close(fd[0]);
    }
    
    return 0;
}`,
            "c",
            "Pipe example"
        ),

        heading("Types of Pipes"),

        list([
            "Unnamed Pipe — Between related processes (parent-child).",
            "Named Pipe (FIFO) — Between any processes on same system.",
        ]),

        heading("2. Message Queues"),

        definition(
            "Message Queue",
            "A message queue is a linked list of messages stored in the kernel. Processes can send and receive messages by identifier."
        ),

        code(
            `#include <sys/msg.h>

struct msg_buffer {
    long msg_type;
    char msg_text[100];
};

// Create message queue
int msgid = msgget(IPC_PRIVATE, IPC_CREAT | 0666);

struct msg_buffer message;
message.msg_type = 1;
strcpy(message.msg_text, "Hello");

// Send message
msgsnd(msgid, &message, sizeof(message), 0);

// Receive message
msgrcv(msgid, &message, sizeof(message), 1, 0);`,
            "c",
            "Message queue"
        ),

        heading("3. Signals"),

        definition(
            "Signal",
            "A signal is a software interrupt sent to a process to notify it of an event. Signals can be used for simple communication and control."
        ),

        heading("Common Signals"),

        table(
            ["Signal", "Meaning"],
            [
                ["SIGKILL", "Terminate process immediately"],
                ["SIGTERM", "Request termination"],
                ["SIGSTOP", "Stop process"],
                ["SIGCONT", "Continue process"],
                ["SIGINT", "Interrupt (Ctrl+C)"],
                ["SIGSEGV", "Segmentation fault"],
                ["SIGCHLD", "Child status changed"],
            ]
        ),

        code(
            `#include <signal.h>

void handler(int sig) {
    printf("Signal received: %d\\n", sig);
}

int main() {
    signal(SIGINT, handler);
    while(1);
    return 0;
}`,
            "c",
            "Signal handling"
        ),

        heading("4. Sockets"),

        definition(
            "Socket",
            "A socket is an endpoint for communication between processes, especially over a network. Sockets enable IPC between processes on different machines."
        ),

        heading("Socket Types"),

        table(
            ["Type", "Protocol", "Use"],
            [
                ["Stream Socket", "TCP", "Reliable, ordered"],
                ["Datagram Socket", "UDP", "Fast, unreliable"],
                ["Raw Socket", "IP", "Low-level access"],
            ]
        ),

        heading("5. Remote Procedure Call (RPC)"),

        definition(
            "RPC",
            "RPC allows a program to execute a procedure on another computer as if it were a local procedure call, hiding the complexity of network communication."
        ),

        heading("Comparison of IPC Mechanisms"),

        table(
            ["Mechanism", "Speed", "Complexity", "Scope"],
            [
                ["Shared Memory", "Fastest", "Medium", "Same machine"],
                ["Pipes", "Fast", "Simple", "Related processes"],
                ["Named Pipes", "Fast", "Simple", "Same machine"],
                ["Message Queue", "Medium", "Medium", "Same machine"],
                ["Signals", "Fast", "Simple", "Same machine"],
                ["Sockets", "Slower", "Complex", "Network"],
                ["RPC", "Slower", "Complex", "Network"],
            ]
        ),

        heading("Advantages and Disadvantages"),

        table(
            ["IPC Method", "Advantage", "Disadvantage"],
            [
                ["Shared Memory", "Very fast", "Needs synchronization"],
                ["Message Passing", "Simple, safe", "Slower"],
                ["Pipes", "Easy to use", "Only related processes"],
                ["Sockets", "Works over network", "Complex programming"],
            ]
        ),

        note(
            "Shared memory is the fastest IPC method but requires careful synchronization. Message passing is safer but slower. Choose based on your application's performance and safety requirements.",
            "tip",
            "IPC Selection"
        ),

        keyPoints([
            "IPC allows processes to communicate and coordinate.",
            "Shared memory is fastest but needs synchronization.",
            "Message passing is safer but slower.",
            "Pipes enable simple communication between related processes.",
            "Sockets enable network-based IPC.",
            "Signals provide simple event notification.",
        ]),
    ],

    {
        summary:
            "Learn Inter-Process Communication (IPC) mechanisms: shared memory, pipes, message queues, signals and sockets.",
        minutes: 13,
        tags: ["ipc", "shared-memory", "pipes", "sockets", "signals"],

        mcqs: [
            mcq(
                "Fastest IPC mechanism is:",
                ["Pipes", "Shared memory", "Message queue", "Sockets"],
                1,
                "Shared memory is the fastest IPC."
            ),
            mcq(
                "Pipes are used between:",
                ["Any processes", "Related processes", "Different machines", "OS and hardware"],
                1,
                "Unnamed pipes work between related processes."
            ),
            mcq(
                "SIGKILL signal:",
                ["Pauses process", "Terminates process immediately", "Restarts process", "Ignores"],
                1,
                "SIGKILL terminates the process immediately."
            ),
            mcq(
                "Sockets are used for:",
                ["Same-machine IPC only", "Network IPC", "File access", "Memory access"],
                1,
                "Sockets enable IPC over networks."
            ),
        ],

        questions: [
            qa(
                "What is IPC? Explain shared memory and message passing.",
                "Inter-Process Communication (IPC) refers to mechanisms that allow processes to communicate and synchronize their actions. Two main types are: (1) Shared Memory — a region of memory is shared by cooperating processes. Processes can read and write directly to this memory area, making it very fast. However, synchronization mechanisms like semaphores must be used to prevent race conditions. In UNIX, functions like shmget(), shmat() and shmdt() manage shared memory. (2) Message Passing — processes exchange messages through OS-provided send() and receive() operations without sharing memory. It is safer as no synchronization is needed for the communication itself, but slower than shared memory. Message passing can be direct (naming processes) or indirect (via mailboxes), and blocking or non-blocking. Message passing is preferred in distributed systems, while shared memory is better for high-speed communication on the same machine.",
                4
            ),
            qa(
                "Explain different IPC mechanisms in UNIX/Linux.",
                "UNIX/Linux provides several IPC mechanisms: (1) Pipes — unidirectional channels between related processes (parent-child); unnamed pipes use pipe() system call, named pipes (FIFO) work between unrelated processes on the same system; (2) Message Queues — linked lists of messages stored in the kernel that processes can send/receive using msgget(), msgsnd() and msgrcv(); (3) Shared Memory — a region of memory accessed by multiple processes using shmget(), shmat() functions; fastest IPC method; (4) Signals — software interrupts sent to notify processes of events like SIGKILL (terminate), SIGINT (Ctrl+C), SIGCHLD (child status change); (5) Sockets — endpoints for communication between processes, especially over networks, supporting TCP and UDP protocols; (6) RPC — Remote Procedure Call allows executing procedures on remote machines transparently. Each mechanism suits different needs: shared memory for speed, pipes for simplicity, sockets for network communication.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introOS,
    processManagement,
    cpuScheduling,
    processSynchronization,
    ipc,
];