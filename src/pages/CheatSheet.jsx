/* =========================================================
   CHEAT SHEET PAGE — BCA Semester 1
   Path: src/pages/CheatSheet.jsx
========================================================= */

import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";

const subjects = [
    {
        id: 1,
        color: "from-emerald-500 to-teal-500",
        code: "US01AEBCA01",
        title: "Programming in C",
        formulas: [
            {
                h: "Number System Conversions",
                items: [
                    "DECIMAL → BINARY: divide by 2, read remainders bottom-up",
                    "BINARY → DECIMAL: Σ digit × 2^position",
                    "DECIMAL → OCTAL: divide by 8, read remainders bottom-up",
                    "DECIMAL → HEX: divide by 16, read remainders bottom-up",
                    "BINARY → OCTAL: group 3 bits from right",
                    "BINARY → HEX: group 4 bits from right",
                ],
                ex: "25 → 11001₂ = 31₈ = 19₁₆",
            },
            {
                h: "Data Sizes",
                items: [
                    "char = 1 byte = 8 bits",
                    "int = 2 or 4 bytes",
                    "float = 4 bytes (6-7 digits)",
                    "double = 8 bytes (15-16 digits)",
                    "sizeof returns BYTES",
                ],
            },
            {
                h: "Format Specifiers",
                items: [
                    "%d int  |  %f float  |  %lf double  |  %c char",
                    "%s string  |  %x hex  |  %o octal  |  %p pointer",
                ],
            },
            {
                h: "Pointer Math",
                items: [
                    "int *p, a=10; p = &a; *p = 20; p++;",
                    "p++ moves by sizeof(int) = 4 bytes",
                ],
            },
            {
                h: "Dynamic Memory",
                items: [
                    "ptr = (type*)malloc(n * sizeof(type));   // NOT initialised",
                    "ptr = (type*)calloc(n, sizeof(type));    // initialised to 0",
                    "free(ptr);   realloc(ptr, new_size);",
                ],
            },
            {
                h: "Storage Classes",
                items: [
                    "auto → default local",
                    "register → request CPU register, no address",
                    "static → retains value between calls",
                    "extern → global across files",
                ],
            },
            {
                h: "Struct vs Union",
                items: [
                    "struct = separate memory (sum of all members)",
                    "union = shared memory (size = largest member)",
                ],
            },
        ],
    },

    {
        id: 2,
        color: "from-blue-500 to-cyan-500",
        code: "US01AEBCA02",
        title: "Web App Development - I",
        formulas: [
            {
                h: "Common Ports",
                items: [
                    "HTTP = 80     HTTPS = 443",
                    "FTP = 21      SMTP = 25",
                    "POP3 = 110    IMAP = 143",
                ],
            },
            {
                h: "Form Methods",
                items: [
                    "GET → visible in URL, ≤2048 chars, bookmarkable",
                    "POST → hidden in body, unlimited, secure",
                ],
            },
            {
                h: "CSS Specificity (low → high)",
                items: [
                    "Element → 0,0,0,1",
                    "Class → 0,0,1,0",
                    "ID → 0,1,0,0",
                    "Inline style → 1,0,0,0",
                    "!important → overrides all",
                ],
            },
            {
                h: "Box Model",
                items: [
                    "Total width  = width + 2·padding + 2·border + 2·margin",
                    "Total height = height + 2·padding + 2·border + 2·margin",
                ],
                ex: "width=200, padding=10, border=5, margin=15 → 260",
            },
            {
                h: "Flexbox Centre",
                items: [
                    "display: flex;",
                    "justify-content: center;  /* horizontal */",
                    "align-items: center;      /* vertical */",
                ],
            },
            {
                h: "JS Data Types",
                items: [
                    "string, number, boolean, null, undefined, object, array",
                    "var (function) vs let/const (block)",
                    "=== strict (no type) ; == loose (with type conversion)",
                ],
            },
            {
                h: "Bootstrap Grid",
                items: [
                    "Total = 12 columns",
                    "col-6 = half width",
                    "col-md-6 = half on medium+ screens",
                ],
            },
        ],
    },

    {
        id: 3,
        color: "from-amber-500 to-orange-500",
        code: "US01AEBCA03",
        title: "Accounting & Office Automation",
        formulas: [
            {
                h: "Accounting Equation",
                items: [
                    "ASSETS = LIABILITIES + CAPITAL (always)",
                ],
            },
            {
                h: "Golden Rules",
                items: [
                    "PERSONAL: Dr. receiver, Cr. giver",
                    "REAL: Dr. what comes in, Cr. what goes out",
                    "NOMINAL: Dr. expenses/losses, Cr. incomes/gains",
                ],
            },
            {
                h: "Depreciation",
                items: [
                    "SLM = (Original Cost − Salvage) / Useful Life",
                    "WDV = Book Value × Rate%",
                ],
                ex: "SLM: (100000−10000)/5 = 18000/year",
            },
            {
                h: "Inventory Methods",
                items: [
                    "FIFO → ending valued at LATEST prices",
                    "LIFO → ending valued at OLDEST prices",
                    "Wt.Avg = Total Cost / Total Quantity",
                ],
                ex: "(100@10 + 50@12) / 150 = 10.67",
            },
            {
                h: "Break-Even Point",
                items: [
                    "BEP (units) = Fixed Cost / (SP − VC per unit)",
                    "BEP (₹) = Fixed Cost / P/V Ratio",
                    "Contribution = Sales − Variable Cost",
                    "P/V Ratio = (Contribution / Sales) × 100",
                ],
                ex: "FC=50000, SP=100, VC=60 → BEP = 50000/40 = 1250",
            },
            {
                h: "Final Accounts",
                items: [
                    "Gross Profit = Sales − COGS − Direct Exp.",
                    "Net Profit = GP + Indirect Income − Indirect Exp.",
                ],
            },
            {
                h: "Excel Essentials",
                items: [
                    "=SUM(A1:A10)   =AVERAGE   =MAX   =MIN   =COUNT",
                    "=IF(A1>50,\"Pass\",\"Fail\")",
                    "=VLOOKUP(value, table, col, FALSE) → 1st column",
                    "=HLOOKUP(...) → 1st row",
                ],
            },
        ],
    },

    {
        id: 4,
        color: "from-pink-500 to-rose-500",
        code: "US01AEBCA04",
        title: "Communication Skills in English - I",
        formulas: [
            {
                h: "Communication Process",
                items: [
                    "Sender → Encoding → Message → Channel →",
                    "Receiver → Decoding → Feedback",
                ],
            },
            {
                h: "7 Cs of Effective Communication",
                items: [
                    "Clear, Concise, Concrete, Correct,",
                    "Coherent, Complete, Courteous",
                ],
            },
            {
                h: "Reading Techniques",
                items: [
                    "Skimming → fast, get GENERAL IDEA",
                    "Scanning → fast, find SPECIFIC info",
                    "Intensive → slow, every detail",
                    "Extensive → long texts, pleasure",
                ],
            },
            {
                h: "SQ3R",
                items: [
                    "Survey → Question → Read → Recite → Review",
                ],
            },
            {
                h: "Hearing vs Listening",
                items: [
                    "Hearing = physical, passive, involuntary",
                    "Listening = mental, active, needs attention",
                ],
            },
            {
                h: "Sandwich Feedback",
                items: [
                    "Layer 1: APPRECIATION (what was done well)",
                    "Layer 2: CRITICISM (what to improve + how)",
                    "Layer 3: ENCOURAGEMENT",
                ],
            },
            {
                h: "Word Formation",
                items: [
                    "Prefix → before root (changes meaning)",
                    "Suffix → after root (changes part of speech)",
                    "Compound: closed | hyphenated | open",
                    "Acronym = word (RADAR)",
                    "Abbreviation = letters (CPU)",
                ],
            },
            {
                h: "Letter Rules",
                items: [
                    "Yours faithfully ← Dear Sir/Madam",
                    "Yours sincerely  ← Named person",
                ],
            },
            {
                h: "Common Confusions",
                items: [
                    "advice (N) / advise (V)",
                    "practice (N) / practise (V)",
                    "fewer (countable) / less (uncountable)",
                    "among (>2) / between (2)",
                    "affect (V) / effect (N)",
                ],
            },
            {
                h: "Speech Structure",
                items: [
                    "Introduction = 10%   |   Body = 80%   |   Conclusion = 10%",
                ],
            },
            {
                h: "4 Ps of Presentation",
                items: [
                    "Plan → Prepare → Practise → Present",
                ],
            },
        ],
    },

    {
        id: 5,
        color: "from-violet-500 to-purple-500",
        code: "US01AEBCA05",
        title: "Fundamentals of Computer Organization",
        formulas: [
            {
                h: "Number System Shortcuts",
                items: [
                    "3 binary bits = 1 octal digit",
                    "4 binary bits = 1 hex digit",
                    "Hex letters: A=10, B=11, C=12, D=13, E=14, F=15",
                ],
                ex: "Binary 1101 = 8+4+0+1 = 13 = D₁₆",
            },
            {
                h: "1's & 2's Complement",
                items: [
                    "1's complement = flip every bit",
                    "2's complement = 1's complement + 1",
                    "Subtraction A−B = A + (2's comp of B); discard carry",
                ],
                ex: "22−13: 010110+110011 = 1,001001 → 9",
            },
            {
                h: "Codes",
                items: [
                    "BCD (8421): each decimal digit → 4 bits",
                    "Excess-3: BCD + 0011",
                    "Gray: only 1 bit changes between consecutive values",
                    "ASCII: 'A'=65, 'a'=97, '0'=48",
                ],
            },
            {
                h: "Boolean Laws",
                items: [
                    "Identity: A·1=A, A+0=A",
                    "Null: A·0=0, A+1=1",
                    "Complement: A·A'=0, A+A'=1",
                    "De Morgan: (A+B)' = A'·B' ; (A·B)' = A'+B'",
                    "Absorption: A·(A+B)=A ; A+(A·B)=A",
                ],
            },
            {
                h: "Logic Gates",
                items: [
                    "NAND and NOR are UNIVERSAL gates",
                    "XOR = 1 when inputs differ",
                    "XNOR = 1 when inputs same",
                ],
            },
            {
                h: "K-Map Rules",
                items: [
                    "Group sizes = 1, 2, 4, 8 (powers of 2)",
                    "Each group as LARGE as possible",
                    "Groups may wrap around edges",
                ],
            },
            {
                h: "Half / Full Adder",
                items: [
                    "Half: Sum=A⊕B, Carry=A·B",
                    "Full: Sum=A⊕B⊕Cin, Cout=(A·B)+(Cin·(A⊕B))",
                ],
            },
            {
                h: "5 Functional Units",
                items: [
                    "Input | Memory | ALU | Control | Output",
                    "CPU = ALU + Control Unit",
                ],
            },
            {
                h: "System Bus",
                items: [
                    "Data bus → actual data",
                    "Address bus → memory address",
                    "Control bus → read/write/clock/interrupt",
                ],
            },
            {
                h: "Addressing Modes",
                items: [
                    "Immediate: operand in instruction",
                    "Direct: address of operand",
                    "Indirect: address of address",
                    "Register: operand in register",
                    "Indexed: base + index",
                ],
            },
            {
                h: "Memory Hierarchy (fast → slow)",
                items: [
                    "Registers → SRAM (cache) → DRAM (main) → SSD → HDD → Tape",
                    "SRAM = 6T, no refresh, cache",
                    "DRAM = 1T+1C, refresh, main",
                ],
            },
            {
                h: "Cache Mapping",
                items: [
                    "Direct: 1 specific line",
                    "Full: any line",
                    "Set: any line in a specific set",
                ],
            },
            {
                h: "Page Replacement",
                items: [
                    "FIFO | LRU | Optimal | LFU",
                ],
            },
            {
                h: "I/O Methods",
                items: [
                    "Programmed: CPU busy-waits",
                    "Interrupt: device signals when ready",
                    "DMA: controller transfers block, no CPU",
                ],
            },
            {
                h: "RISC vs CISC",
                items: [
                    "CISC: large, variable length, x86",
                    "RISC: small, fixed length, pipelined, ARM",
                    "Pipeline: F → D → E → M → W",
                    "Hazards: Structural, Data, Control",
                ],
            },
        ],
    },

    {
        id: 6,
        color: "from-orange-500 to-red-500",
        code: "US01AEBCA06",
        title: "Indian Knowledge Systems",
        formulas: [
            {
                h: "Branches of IKS",
                items: [
                    "Darshana (philosophy) | Yoga | Ayurveda | Jyotisha (astronomy)",
                    "Ganita (math) | Vastu (arch.) | Krishi (agri) | Sangeet (music)",
                    "Niti (gov.) | Kavya (lit.)",
                ],
            },
            {
                h: "Shruti vs Smriti",
                items: [
                    "SHRUTI = revealed, eternal → 4 Vedas, Upanishads",
                    "SMRITI = remembered → Puranas, Itihasa",
                ],
            },
            {
                h: "4 Vedas",
                items: [
                    "Rig (oldest, hymns) | Yajur (sacrifice) |",
                    "Sama (melodies) | Atharva (daily life)",
                ],
            },
            {
                h: "4 Mahavakyas",
                items: [
                    "Aham Brahmasmi = I am Brahman",
                    "Tat tvam asi = Thou art that",
                    "Prajnanam Brahma = Knowledge is Brahman",
                    "Ayam Atma Brahma = This self is Brahman",
                ],
            },
            {
                h: "3 Yogas (Gita)",
                items: [
                    "Karma → selfless action",
                    "Bhakti → loving devotion",
                    "Jnana → knowledge & discrimination",
                ],
            },
            {
                h: "6 Orthodox Schools",
                items: [
                    "Samkhya (Kapila) | Yoga (Patanjali) | Nyaya (Gautama)",
                    "Vaisheshika (Kanada) | Mimamsa (Jaimini) | Vedanta (Vyasa)",
                ],
            },
            {
                h: "3 Heterodox Schools",
                items: [
                    "Charvaka (perception only)",
                    "Buddhism (4 noble truths)",
                    "Jainism (Anekantavada)",
                ],
            },
            {
                h: "4 Noble Truths",
                items: [
                    "Dukkha | Samudaya | Nirodha | Marga",
                ],
            },
            {
                h: "8 Limbs of Yoga",
                items: [
                    "Yama | Niyama | Asana | Pranayama |",
                    "Pratyahara | Dharana | Dhyana | Samadhi",
                ],
            },
            {
                h: "3 Doshas",
                items: [
                    "VATA = air + ether → movement",
                    "PITTA = fire + water → digestion",
                    "KAPHA = water + earth → structure",
                ],
            },
            {
                h: "Panchakarma (5)",
                items: [
                    "Vamana (emesis) | Virechana (purgation) |",
                    "Basti (enema) | Nasya (nasal) | Raktamokshana (blood)",
                ],
            },
            {
                h: "AYUSH",
                items: [
                    "A-yurveda | Y-oga | U-nani | S-idha | H-omeopathy",
                ],
            },
            {
                h: "Indian Mathematicians",
                items: [
                    "ARYABHATA → pi = 3.1416",
                    "BRAHMAGUPTA → zero as a number (628 CE)",
                    "BHASKARA II → Lilavati, Bijaganita, calculus concept",
                    "MADHAVA → infinite series",
                ],
            },
            {
                h: "4 Yugas (years)",
                items: [
                    "Krita = 1,728,000 | Treta = 1,296,000",
                    "Dvapara = 864,000 | Kali = 432,000",
                    "MAHAYUGA = 4,320,000 years",
                ],
            },
            {
                h: "8 Classical Dances",
                items: [
                    "Bharatanatyam (TN) | Kathak (North) |",
                    "Kathakali (Kerala) | Odissi (Odisha) |",
                    "Manipuri (Manipur) | Kuchipudi (AP) |",
                    "Sattriya (Assam) | Mohiniyattam (Kerala)",
                ],
            },
            {
                h: "Temple Styles",
                items: [
                    "NAGARA (North, curvilinear shikhara)",
                    "DRAVIDA (South, pyramidal vimana, gopuram)",
                    "VESARA (Deccan, hybrid)",
                ],
            },
            {
                h: "Key Modern Concepts",
                items: [
                    "VASUDHAIVA KUTUMBAKAM = \"The world is one family\" (G20 2023)",
                    "TKDL = Traditional Knowledge Digital Library",
                    "DINACHARYA = daily routine",
                    "RITUCHARYA = seasonal routine",
                    "APARIGRAHA = non-hoarding",
                ],
            },
        ],
    },
];

const traps = [
    ["1 KB = 1000 bytes", "1 KB = 1024 bytes"],
    ["`=` compares in C", "`==` compares ; `=` assigns"],
    ["`malloc` zeroes memory", "Only `calloc` zeroes"],
    ["\"Yours sincerely\" with Dear Sir", "\"Yours faithfully\" with Dear Sir"],
    ["`less books`", "`fewer books` (countable)"],
    ["HTML is a programming language", "HTML is a MARKUP language"],
    ["Java and JavaScript are same", "Completely different languages"],
    ["CISC example = ARM", "ARM = RISC ; x86 = CISC"],
    ["Father of surgery = Charaka", "Sushruta is father of surgery"],
    ["Yoga Day = 1 May", "21 June (summer solstice)"],
    ["`id` selector = `.` in CSS", "`#` = id ; `.` = class"],
    ["Trial Balance is an account", "Trial Balance is a STATEMENT"],
    ["BCD for 9 = 1111", "1001 (8421 code)"],
    ["HTTP port = 8080", "80 (HTTPS = 443)"],
    ["ASCII 'A' = 97", "'A' = 65 ; 'a' = 97"],
    ["`strlen` includes '\\0'", "Excludes '\\0' from count"],
    ["Resume = 3+ pages", "Resume = 1-2 ; CV = 3+"],
    ["2's comp of 0 = -0", "Only ONE zero in 2's complement"],
    ["VLOOKUP looks in any column", "VLOOKUP looks in the 1st COLUMN"],
    ["Depreciation is cash expense", "Depreciation is NON-CASH expense"],
];

export default function CheatSheet() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            {/* HEADER */}
            <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-slate-300 hover:text-white transition"
                    >
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <BookOpen className="text-amber-400" size={22} />
                        <h1 className="text-lg sm:text-xl font-bold">
                            BCA Semester 1 — Cheat Sheet
                        </h1>
                    </div>
                    <div className="w-16" />
                </div>
            </div>

            {/* HERO */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-2xl p-6 sm:p-8 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        🎯 All 6 Subjects at a Glance
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base">
                        Every formula, every rule, every trap — in one page.
                        Tap any section to read the details.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 text-center">
                        <div className="bg-slate-900/60 rounded-lg p-3">
                            <div className="text-2xl font-bold text-amber-400">6</div>
                            <div className="text-xs text-slate-400">Subjects</div>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-3">
                            <div className="text-2xl font-bold text-amber-400">100+</div>
                            <div className="text-xs text-slate-400">Formulas</div>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-3">
                            <div className="text-2xl font-bold text-amber-400">20</div>
                            <div className="text-xs text-slate-400">Common Traps</div>
                        </div>
                        <div className="bg-slate-900/60 rounded-lg p-3">
                            <div className="text-2xl font-bold text-amber-400">10 min</div>
                            <div className="text-xs text-slate-400">Read Time</div>
                        </div>
                    </div>
                </div>

                {/* QUICK JUMP NAV */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {subjects.map((s) => (
                        <a
                            key={s.id}
                            href={`#subject-${s.id}`}
                            className={`px-3 py-2 rounded-lg bg-gradient-to-r ${s.color} text-white text-xs sm:text-sm font-semibold shadow hover:scale-105 transition`}
                        >
                            {s.title.split(" ").slice(0, 2).join(" ")}
                        </a>
                    ))}
                    <a
                        href="#traps"
                        className="px-3 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs sm:text-sm font-semibold shadow hover:scale-105 transition"
                    >
                        ⚠️ Traps
                    </a>
                </div>

                {/* SUBJECTS */}
                {subjects.map((s) => (
                    <section
                        key={s.id}
                        id={`subject-${s.id}`}
                        className="mb-10 scroll-mt-20"
                    >
                        <div
                            className={`bg-gradient-to-r ${s.color} rounded-t-2xl p-4 sm:p-5`}
                        >
                            <div className="flex items-baseline justify-between flex-wrap gap-2">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">
                                    Subject {s.id} — {s.title}
                                </h2>
                                <span className="text-xs sm:text-sm text-white/80 font-mono">
                                    {s.code}
                                </span>
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-b-2xl p-4 sm:p-6 space-y-5">
                            {s.formulas.map((f, i) => (
                                <div
                                    key={i}
                                    className="border-l-4 border-amber-500/60 pl-4 py-1"
                                >
                                    <h3 className="font-bold text-amber-300 mb-2 text-sm sm:text-base">
                                        {f.h}
                                    </h3>
                                    <ul className="space-y-1">
                                        {f.items.map((it, j) => (
                                            <li
                                                key={j}
                                                className="text-slate-200 text-xs sm:text-sm font-mono leading-relaxed flex gap-2"
                                            >
                                                <span className="text-amber-400/70">▸</span>
                                                <span>{it}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {f.ex && (
                                        <div className="mt-2 px-3 py-2 bg-slate-800/60 border border-slate-700 rounded-md text-emerald-300 text-xs font-mono">
                                            <span className="text-slate-500">ex: </span>
                                            {f.ex}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                ))}

                {/* TRAPS */}
                <section id="traps" className="mb-10 scroll-mt-20">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-t-2xl p-4 sm:p-5">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">
                            ⚠️ Top 20 Exam Traps
                        </h2>
                        <p className="text-white/80 text-sm mt-1">
                            The questions most students get wrong. Memorise these!
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-b-2xl p-4 sm:p-6">
                        <div className="overflow-x-auto">
                            <table className="w-full text-xs sm:text-sm">
                                <thead>
                                    <tr className="text-left text-slate-400 border-b border-slate-700">
                                        <th className="py-2 pr-3">❌ Common Wrong</th>
                                        <th className="py-2">✅ Correct Answer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {traps.map(([wrong, right], i) => (
                                        <tr
                                            key={i}
                                            className="border-b border-slate-800 hover:bg-slate-800/40"
                                        >
                                            <td className="py-2 pr-3 text-red-300 font-mono">
                                                {wrong}
                                            </td>
                                            <td className="py-2 text-emerald-300 font-mono">
                                                {right}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* MASTER FORMULA BANK */}
                <section className="mb-10">
                    <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-t-2xl p-4 sm:p-5">
                        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                            🏆 Master Formula Bank
                        </h2>
                        <p className="text-slate-800 text-sm mt-1">
                            One-line recall of every key formula
                        </p>
                    </div>
                    <div className="bg-slate-900 rounded-b-2xl p-4 sm:p-6 space-y-3 font-mono text-xs sm:text-sm">
                        <div>
                            <span className="text-amber-400">NUMBER SYSTEMS:</span>{" "}
                            <span className="text-slate-200">
                                Decimal value = Σ digit × base^position · 3 bits = 1 octal ·
                                4 bits = 1 hex
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">C PROGRAMMING:</span>{" "}
                            <span className="text-slate-200">
                                Bubble sort = O(n²) · Binary search = O(log n) · struct =
                                separate memory · union = shared
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">WEB:</span>{" "}
                            <span className="text-slate-200">
                                Box width = content + 2·padding + 2·border + 2·margin · CSS
                                specificity: inline &gt; id &gt; class &gt; element
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">ACCOUNTING:</span>{" "}
                            <span className="text-slate-200">
                                Assets = Liabilities + Capital · SLM = (Cost − Salvage) / Life
                                · BEP (units) = FC / (SP − VC)
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">ENGLISH:</span>{" "}
                            <span className="text-slate-200">
                                Yours faithfully ← Dear Sir · 7 Cs: Clear Concise Concrete
                                Correct Coherent Complete Courteous
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">COMPUTER ORG:</span>{" "}
                            <span className="text-slate-200">
                                2's comp = 1's comp + 1 · SRAM = cache · DRAM = main · Pipeline:
                                F D E M W
                            </span>
                        </div>
                        <div>
                            <span className="text-amber-400">IKS:</span>{" "}
                            <span className="text-slate-200">
                                4 Vedas · 6 Schools · 3 Doshas · 3 Yogas · 8 limbs Yoga · 8
                                Classical Dances · 5 Panchakarma · 5 AYUSH
                            </span>
                        </div>
                    </div>
                </section>

                {/* EXAM DAY TIPS */}
                <section className="mb-10">
                    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 sm:p-7">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-emerald-300">
                            🎯 Exam-Day Quick-Fire
                        </h2>
                        <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm font-mono text-slate-200">
                            <li>Q: Full form of CPU? → <b className="text-emerald-300">Central Processing Unit</b></li>
                            <li>Q: 1 MB = ? → <b className="text-emerald-300">1024 KB</b></li>
                            <li>Q: ASCII of 'A'? → <b className="text-emerald-300">65</b></li>
                            <li>Q: 2's comp of 0110? → <b className="text-emerald-300">1010</b></li>
                            <li>Q: Yours ? for Dear Sir → <b className="text-emerald-300">faithfully</b></li>
                            <li>Q: 8 limbs of Yoga? → <b className="text-emerald-300">Y,N,A,P,Pr,Dh,Dhy,Sa</b></li>
                            <li>Q: 3 doshas? → <b className="text-emerald-300">Vata, Pitta, Kapha</b></li>
                            <li>Q: Panchakarma = ? → <b className="text-emerald-300">5 procedures</b></li>
                            <li>Q: Hex of 1111 binary? → <b className="text-emerald-300">F</b></li>
                            <li>Q: Stored program? → <b className="text-emerald-300">Von Neumann</b></li>
                            <li>Q: Cache memory uses? → <b className="text-emerald-300">SRAM</b></li>
                            <li>Q: IKS = ? → <b className="text-emerald-300">Indian Knowledge System</b></li>
                            <li>Q: malloc vs calloc? → <b className="text-emerald-300">calloc zeroes</b></li>
                            <li>Q: VLOOKUP looks in? → <b className="text-emerald-300">1st column</b></li>
                            <li>Q: BEP formula? → <b className="text-emerald-300">FC / (SP − VC)</b></li>
                            <li>Q: Largest sundial? → <b className="text-emerald-300">Jantar Mantar, Jaipur</b></li>
                            <li>Q: 4 Noble Truths? → <b className="text-emerald-300">Dukkha, Samudaya, Nirodha, Marga</b></li>
                            <li>Q: Father of surgery? → <b className="text-emerald-300">Sushruta</b></li>
                            <li>Q: G20 2023 theme? → <b className="text-emerald-300">Vasudhaiva Kutumbakam</b></li>
                            <li>Q: Format specifier %lf? → <b className="text-emerald-300">double</b></li>
                        </ul>
                    </div>
                </section>

                {/* FOOTER */}
                <div className="text-center text-slate-500 text-xs py-6 border-t border-slate-800">
                    BCA Semester 1 · Cheat Sheet · 6 subjects · 100+ formulas · Print or save for last-minute revision 🎓
                </div>
            </div>
        </div>
    );
}