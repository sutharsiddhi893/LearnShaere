/* =========================================================
   BCA • SEM 1 • Accounting and Office Automation
   UNIT 1 — Conceptual Framework of Accounting and Spreadsheets
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
   TOPIC 1 — Introduction to Accounting
========================================================= */

const introductionToAccounting = createTopic(
    "introduction-to-accounting",
    "Introduction to Accounting",

    [
        definition(
            "Accounting",
            "The process of identifying, recording, classifying, summarising and interpreting financial transactions of a business and communicating the results to interested users."
        ),

        text(
            "Every business, however small, deals with money. Accounting provides a systematic way of keeping track of that money so that the owner knows how much has been earned, how much has been spent and what the business owns and owes."
        ),

        heading("Objectives of Accounting"),

        list([
            "To maintain a systematic and permanent record of all financial transactions.",
            "To determine the profit earned or loss suffered during a period.",
            "To ascertain the financial position of the business on a given date.",
            "To provide information to owners, investors, lenders and the government.",
            "To help the management in planning, controlling and decision making.",
            "To meet the legal requirements of taxation and company law.",
        ]),

        heading("Functions of Accounting"),

        steps([
            "Identifying — selecting the transactions that are financial in nature",
            "Recording — entering those transactions in the books of original entry",
            "Classifying — grouping similar transactions into ledger accounts",
            "Summarising — preparing the trial balance and final accounts",
            "Analysing and interpreting — examining the results to draw conclusions",
            "Communicating — presenting the information to the users",
        ]),

        heading("Branches of Accounting"),

        table(
            ["Branch", "Purpose"],
            [
                ["Financial Accounting", "Records transactions and prepares final accounts for external users."],
                ["Cost Accounting", "Determines the cost of a product or service and controls it."],
                ["Management Accounting", "Provides information to management for planning and decision making."],
                ["Tax Accounting", "Deals with income tax, GST and other statutory requirements."],
                ["Auditing", "Independently verifies the accuracy of the accounting records."],
            ]
        ),

        heading("Users of Accounting Information"),

        table(
            ["Category", "Users", "Interest"],
            [
                ["Internal", "Owners and partners", "Profitability and growth of the business."],
                ["Internal", "Management", "Planning, controlling and decision making."],
                ["Internal", "Employees", "Job security, salary and bonus."],
                ["External", "Investors", "Safety of investment and expected return."],
                ["External", "Banks and lenders", "Ability of the business to repay loans."],
                ["External", "Government", "Correct payment of taxes."],
                ["External", "Customers and suppliers", "Continuity and reliability of the business."],
            ]
        ),

        heading("Basic Accounting Terms"),

        table(
            ["Term", "Meaning"],
            [
                ["Capital", "The amount invested in the business by the owner."],
                ["Drawings", "Cash or goods withdrawn by the owner for personal use."],
                ["Assets", "Resources owned by the business such as cash, stock and machinery."],
                ["Liabilities", "Amounts owed by the business to outsiders."],
                ["Debtor", "A person who owes money to the business."],
                ["Creditor", "A person to whom the business owes money."],
                ["Revenue", "Income earned from the sale of goods or services."],
                ["Expenses", "Costs incurred in earning that revenue."],
                ["Purchases", "Goods bought for the purpose of resale."],
                ["Sales", "Goods sold in the ordinary course of business."],
                ["Discount", "A reduction allowed in the price or the amount due."],
                ["Goodwill", "The reputation of a business expressed in money terms."],
            ]
        ),

        heading("Advantages of Accounting"),

        list([
            "It provides a complete and permanent record of all transactions.",
            "It helps in comparing the performance of one year with another.",
            "It provides evidence that is acceptable in a court of law.",
            "It assists in the valuation of the business at the time of sale.",
            "It helps in the assessment of income tax and other taxes.",
        ]),

        heading("Limitations of Accounting"),

        list([
            "It records only those transactions that can be measured in money.",
            "It ignores qualitative factors such as employee morale and reputation.",
            "It is based on historical cost and ignores changes in price levels.",
            "It may be influenced by the personal judgement of the accountant.",
            "Window dressing can present a misleading picture of the business.",
        ]),

        note(
            "Book keeping and accounting are not the same. Book keeping is only the recording part, whereas accounting includes recording, classifying, summarising, analysing and communicating.",
            "exam",
            "Frequently Asked"
        ),

        keyPoints([
            "Accounting identifies, records, classifies, summarises and communicates financial information.",
            "Its main branches are financial, cost, management and tax accounting along with auditing.",
            "Users are classified as internal such as owners and management, and external such as investors and government.",
            "Accounting records only transactions that can be measured in money.",
            "Book keeping is a part of accounting, not a synonym for it.",
        ]),
    ],

    {
        summary:
            "Understand what accounting is, its objectives, functions, branches, users and basic terminology.",
        minutes: 11,
        tags: ["accounting", "theory", "important"],

        mcqs: [
            mcq(
                "Accounting records only those transactions which are:",
                [
                    "Important to the owner",
                    "Measurable in money terms",
                    "Approved by the government",
                    "Above a certain value",
                ],
                1,
                "Only transactions that can be expressed in money are recorded in accounting."
            ),
            mcq(
                "The amount invested in the business by the owner is called:",
                ["Drawings", "Capital", "Liability", "Revenue"],
                1,
                "Capital is the amount contributed by the owner."
            ),
            mcq(
                "A person who owes money to the business is called a:",
                ["Creditor", "Debtor", "Investor", "Supplier"],
                1,
                "A debtor is a person who owes money to the business."
            ),
            mcq(
                "Which of the following is an external user of accounting information?",
                ["Management", "Employees", "Bank", "Owner"],
                2,
                "Banks are external users interested in the repayment capacity of the business."
            ),
            mcq(
                "Goods withdrawn by the owner for personal use are called:",
                ["Purchases", "Sales", "Drawings", "Expenses"],
                2,
                "Such withdrawals are recorded as drawings."
            ),
            mcq(
                "Which branch of accounting determines the cost of a product?",
                ["Financial Accounting", "Cost Accounting", "Tax Accounting", "Auditing"],
                1,
                "Cost accounting deals with the determination and control of cost."
            ),
        ],

        questions: [
            qa(
                "Define accounting and explain its objectives.",
                "Accounting is the process of identifying, recording, classifying, summarising and interpreting the financial transactions of a business and communicating the results to interested users. Its objectives are to maintain a systematic record of transactions, to determine the profit or loss for a period, to ascertain the financial position on a given date, to provide information to various users, to help management in planning and decision making, and to satisfy legal requirements.",
                5
            ),
            qa(
                "Explain the branches of accounting.",
                "Financial accounting records transactions and prepares final accounts for external users. Cost accounting determines and controls the cost of products or services. Management accounting supplies information that helps management in planning and decision making. Tax accounting deals with income tax, goods and services tax and other statutory matters. Auditing independently verifies the accuracy and fairness of the accounting records.",
                5
            ),
            qa(
                "Who are the users of accounting information?",
                "Users are classified as internal and external. Internal users include owners who want to know profitability, management which needs information for planning and control, and employees who are concerned with job security and bonus. External users include investors assessing the safety of their investment, banks and lenders judging repayment capacity, the government verifying tax payments, and customers and suppliers assessing the continuity of the business.",
                4
            ),
            qa(
                "State the limitations of accounting.",
                "Accounting records only transactions that can be measured in money and therefore ignores qualitative factors such as employee morale and business reputation. It is based on historical cost and does not reflect changes in price levels. It may be affected by the personal judgement of the accountant in matters such as depreciation. Finally, window dressing may be used to present a misleading picture of the financial position.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Accounting Concepts and Conventions
========================================================= */

const accountingConcepts = createTopic(
    "accounting-concepts-and-conventions",
    "Accounting Concepts and Conventions",

    [
        text(
            "Accounting is prepared by different people in different organisations, yet the results must be comparable. This is possible only because everyone follows the same set of basic assumptions known as concepts and conventions, collectively called Generally Accepted Accounting Principles."
        ),

        heading("Accounting Concepts"),

        table(
            ["Concept", "Meaning"],
            [
                ["Business Entity", "The business and its owner are treated as two separate persons."],
                ["Money Measurement", "Only transactions measurable in money are recorded."],
                ["Going Concern", "The business is assumed to continue operating indefinitely."],
                ["Cost Concept", "Assets are recorded at their purchase price, not market value."],
                ["Dual Aspect", "Every transaction has two aspects, a debit and a credit."],
                ["Accounting Period", "The life of the business is divided into fixed periods, usually one year."],
                ["Matching", "Expenses of a period are matched against the revenue of the same period."],
                ["Realisation", "Revenue is recorded only when it is actually earned."],
                ["Accrual", "Income and expenses are recorded when they arise, not when cash moves."],
            ]
        ),

        heading("The Business Entity Concept Explained"),

        text(
            "When the owner invests fifty thousand rupees in the business, the business treats this as capital, which is a liability owed to the owner. Similarly, when the owner withdraws money, it is recorded as drawings and reduces the capital. The personal expenses of the owner never appear in the books of the business."
        ),

        heading("The Dual Aspect Concept and the Accounting Equation"),

        code(
            `Assets = Liabilities + Capital

Example
Owner invests 100000 in cash

Assets (Cash)  100000  =  Liabilities 0  +  Capital 100000`,
            "text",
            "The fundamental accounting equation"
        ),

        text(
            "Every transaction affects at least two accounts in such a way that the accounting equation always remains balanced. This is the foundation of the double entry system."
        ),

        heading("Accounting Conventions"),

        table(
            ["Convention", "Meaning"],
            [
                ["Consistency", "The same accounting methods should be followed year after year."],
                ["Conservatism or Prudence", "Anticipate all losses but never anticipate profits."],
                ["Materiality", "Only items significant enough to influence decisions need detailed treatment."],
                ["Full Disclosure", "All information relevant to the users must be disclosed."],
            ]
        ),

        heading("Concepts versus Conventions"),

        table(
            ["Basis", "Concepts", "Conventions"],
            [
                ["Meaning", "Basic assumptions on which accounting rests", "Customs and practices followed by accountants"],
                ["Nature", "Theoretical and compulsory", "Practical and flexible"],
                ["Uniformity", "Followed uniformly by all", "May vary from firm to firm"],
                ["Example", "Going concern and dual aspect", "Consistency and conservatism"],
            ]
        ),

        heading("The Double Entry System"),

        definition(
            "Double Entry System",
            "A method of recording transactions in which every transaction is entered twice, once as a debit and once as an equal credit."
        ),

        heading("Golden Rules of Accounting"),

        table(
            ["Type of Account", "Debit", "Credit"],
            [
                ["Personal Account", "The receiver", "The giver"],
                ["Real Account", "What comes in", "What goes out"],
                ["Nominal Account", "All expenses and losses", "All incomes and gains"],
            ]
        ),

        heading("Classification of Accounts"),

        table(
            ["Account Type", "Relates To", "Examples"],
            [
                ["Personal", "Persons, firms and institutions", "Ramesh account, State Bank account"],
                ["Real", "Assets and properties", "Cash, machinery, furniture"],
                ["Nominal", "Expenses, losses, incomes and gains", "Salary, rent, commission received"],
            ]
        ),

        heading("Applying the Golden Rules"),

        table(
            ["Transaction", "Accounts Involved", "Debit", "Credit"],
            [
                ["Started business with cash 50000", "Cash and Capital", "Cash", "Capital"],
                ["Purchased goods for cash 10000", "Purchases and Cash", "Purchases", "Cash"],
                ["Sold goods for cash 15000", "Cash and Sales", "Cash", "Sales"],
                ["Paid salary 5000", "Salary and Cash", "Salary", "Cash"],
                ["Received commission 2000", "Cash and Commission", "Cash", "Commission"],
            ]
        ),

        note(
            "A simple way to remember the golden rules is: Debit the receiver, credit the giver for personal accounts; debit what comes in, credit what goes out for real accounts; and debit all expenses and losses, credit all incomes and gains for nominal accounts.",
            "tip",
            "Memory Aid"
        ),

        keyPoints([
            "Concepts are basic assumptions while conventions are customary practices.",
            "The business entity concept separates the business from its owner.",
            "The accounting equation states that assets equal liabilities plus capital.",
            "Accounts are classified as personal, real and nominal.",
            "Every transaction has an equal debit and credit under the double entry system.",
        ]),
    ],

    {
        summary:
            "Learn the accounting concepts and conventions, the accounting equation, account classification and the golden rules.",
        minutes: 12,
        tags: ["accounting", "principles", "important"],

        mcqs: [
            mcq(
                "Which concept treats the business and the owner as separate?",
                ["Going Concern", "Business Entity", "Cost Concept", "Matching"],
                1,
                "The business entity concept treats the business as distinct from its owner."
            ),
            mcq(
                "The accounting equation is:",
                [
                    "Assets = Liabilities - Capital",
                    "Assets = Liabilities + Capital",
                    "Capital = Assets + Liabilities",
                    "Liabilities = Assets + Capital",
                ],
                1,
                "Assets always equal liabilities plus capital."
            ),
            mcq(
                "Cash account is which type of account?",
                ["Personal", "Real", "Nominal", "Fictitious"],
                1,
                "Cash is an asset and therefore a real account."
            ),
            mcq(
                "According to the golden rules, salary paid should be:",
                ["Credited", "Debited", "Ignored", "Adjusted"],
                1,
                "Salary is an expense and all expenses are debited."
            ),
            mcq(
                "Which convention says anticipate all losses but no profits?",
                ["Consistency", "Materiality", "Conservatism", "Full Disclosure"],
                2,
                "The convention of conservatism or prudence requires losses to be anticipated but not profits."
            ),
            mcq(
                "Recording income when it is earned rather than received follows which concept?",
                ["Cash", "Accrual", "Cost", "Realisation"],
                1,
                "The accrual concept records income and expenses when they arise."
            ),
        ],

        questions: [
            qa(
                "Explain any five accounting concepts.",
                "The business entity concept treats the business and its owner as two separate persons. The money measurement concept records only those transactions that can be expressed in money. The going concern concept assumes the business will continue indefinitely. The cost concept records assets at their purchase price rather than market value. The dual aspect concept states that every transaction has two equal and opposite effects, giving rise to the accounting equation.",
                5
            ),
            qa(
                "Explain the golden rules of accounting with examples.",
                "For personal accounts the rule is debit the receiver and credit the giver, so when goods are sold to Ramesh his account is debited. For real accounts the rule is debit what comes in and credit what goes out, so when cash is received the cash account is debited. For nominal accounts the rule is debit all expenses and losses and credit all incomes and gains, so salary paid is debited while commission received is credited.",
                5
            ),
            qa(
                "Differentiate between accounting concepts and conventions.",
                "Concepts are the basic theoretical assumptions on which accounting is founded and they must be followed uniformly by everyone, examples being the going concern and dual aspect concepts. Conventions are customs and practices that accountants have developed over time; they are practical and flexible and may vary from one firm to another, examples being consistency and conservatism.",
                4
            ),
            qa(
                "What is the double entry system? State its advantages.",
                "The double entry system is a method of recording transactions in which every transaction is entered twice, once as a debit and once as an equal credit, so that the accounting equation always remains balanced. Its advantages are that it provides a complete record of every transaction, arithmetical accuracy can be checked through the trial balance, profit or loss and financial position can be ascertained accurately, and errors and frauds are easier to detect.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Journal, Ledger and Trial Balance
========================================================= */

const journalLedgerTrialBalance = createTopic(
    "journal-ledger-and-trial-balance",
    "Journal, Ledger and Trial Balance",

    [
        text(
            "Financial transactions pass through a fixed sequence known as the accounting cycle. They are first recorded in the journal, then posted to the ledger, and finally summarised in the trial balance before the final accounts are prepared."
        ),

        heading("The Accounting Cycle"),

        steps([
            "Identify the financial transaction from the source document",
            "Record it in the journal as a journal entry",
            "Post the entry to the relevant ledger accounts",
            "Balance each ledger account",
            "Prepare the trial balance to check arithmetical accuracy",
            "Prepare the trading and profit and loss account",
            "Prepare the balance sheet",
        ]),

        heading("1. Journal"),

        definition(
            "Journal",
            "The book of original entry in which transactions are recorded for the first time in chronological order."
        ),

        heading("Format of a Journal"),

        table(
            ["Date", "Particulars", "L.F.", "Debit", "Credit"],
            [
                ["2025 Apr 1", "Cash A/c ... Dr.", "1", "50000", ""],
                ["", "  To Capital A/c", "2", "", "50000"],
                ["", "(Being business started with cash)", "", "", ""],
            ]
        ),

        heading("Sample Journal Entries"),

        code(
            `1 Apr   Cash A/c                    Dr.   50000
             To Capital A/c                          50000
        (Being business started with cash)

5 Apr   Purchases A/c               Dr.   15000
             To Cash A/c                             15000
        (Being goods purchased for cash)

8 Apr   Cash A/c                    Dr.   20000
             To Sales A/c                            20000
        (Being goods sold for cash)

12 Apr  Rent A/c                    Dr.    3000
             To Cash A/c                              3000
        (Being rent paid)

15 Apr  Furniture A/c               Dr.   10000
             To Cash A/c                             10000
        (Being furniture purchased)`,
            "text",
            "Journal entries with narration"
        ),

        note(
            "Every journal entry must be followed by a short explanation written in brackets called the narration. An entry without narration is considered incomplete.",
            "warning",
            "Important"
        ),

        heading("2. Ledger"),

        definition(
            "Ledger",
            "The principal book of accounts in which all transactions relating to a particular account are collected together."
        ),

        text(
            "The process of transferring entries from the journal to the ledger is called posting. Each ledger account is prepared in the shape of the letter T, with debits on the left side and credits on the right side."
        ),

        code(
            `                        Cash Account
Dr.                                                        Cr.
-----------------------------------------------------------------
Date    Particulars    Amount  | Date    Particulars    Amount
-----------------------------------------------------------------
Apr 1   To Capital      50000  | Apr 5   By Purchases    15000
Apr 8   To Sales        20000  | Apr 12  By Rent          3000
                               | Apr 15  By Furniture    10000
                               | Apr 30  By Balance c/d  42000
-----------------------------------------------------------------
                        70000  |                         70000
-----------------------------------------------------------------
May 1   To Balance b/d  42000  |`,
            "text",
            "A ledger account in T format"
        ),

        heading("Journal versus Ledger"),

        table(
            ["Basis", "Journal", "Ledger"],
            [
                ["Nature", "Book of original entry", "Book of final entry"],
                ["Order", "Chronological by date", "Grouped by account"],
                ["Process", "Journalising", "Posting"],
                ["Narration", "Compulsory", "Not required"],
                ["Balancing", "Not balanced", "Balanced periodically"],
                ["Purpose", "Records transactions", "Classifies transactions"],
            ]
        ),

        heading("3. Trial Balance"),

        definition(
            "Trial Balance",
            "A statement showing the debit and credit balances of all ledger accounts on a particular date, prepared to verify the arithmetical accuracy of the books."
        ),

        code(
            `                Trial Balance as on 30 April 2025

Particulars                   Debit        Credit
------------------------------------------------------
Cash A/c                      42000
Purchases A/c                 15000
Furniture A/c                 10000
Rent A/c                       3000
Capital A/c                                  50000
Sales A/c                                    20000
------------------------------------------------------
Total                         70000          70000
------------------------------------------------------`,
            "text",
            "A completed trial balance"
        ),

        heading("Rules for Preparing a Trial Balance"),

        table(
            ["Item", "Appears In"],
            [
                ["Assets", "Debit column"],
                ["Expenses and losses", "Debit column"],
                ["Drawings", "Debit column"],
                ["Purchases", "Debit column"],
                ["Liabilities", "Credit column"],
                ["Capital", "Credit column"],
                ["Incomes and gains", "Credit column"],
                ["Sales", "Credit column"],
            ]
        ),

        heading("Errors Not Disclosed by the Trial Balance"),

        list([
            "Error of omission where a transaction is completely left out.",
            "Error of commission where the correct amount is posted to a wrong account of the same class.",
            "Error of principle where an expense is treated as an asset or the reverse.",
            "Compensating errors where two errors cancel each other out.",
            "Recording the wrong amount in both the debit and the credit side.",
        ]),

        note(
            "A tallied trial balance proves only arithmetical accuracy. It does not prove that the books are free from all errors, because several types of error affect both sides equally.",
            "exam",
            "Frequently Asked"
        ),

        heading("Final Accounts"),

        table(
            ["Statement", "Purpose"],
            [
                ["Trading Account", "Finds the gross profit or gross loss."],
                ["Profit and Loss Account", "Finds the net profit or net loss."],
                ["Balance Sheet", "Shows the financial position on a particular date."],
            ]
        ),

        keyPoints([
            "The journal is the book of original entry and the ledger is the book of final entry.",
            "Transferring entries from the journal to the ledger is called posting.",
            "The trial balance verifies arithmetical accuracy only.",
            "Assets, expenses and drawings appear on the debit side of the trial balance.",
            "Some errors such as omission and principle are not revealed by the trial balance.",
        ]),
    ],

    {
        summary:
            "Follow the accounting cycle from journal entries through ledger posting to the trial balance and final accounts.",
        minutes: 13,
        tags: ["accounting", "journal", "ledger", "important"],

        mcqs: [
            mcq(
                "The journal is known as the book of:",
                ["Final entry", "Original entry", "Secondary entry", "Balance"],
                1,
                "The journal is the book of original entry."
            ),
            mcq(
                "The process of transferring entries from the journal to the ledger is called:",
                ["Journalising", "Posting", "Balancing", "Casting"],
                1,
                "Posting is the transfer of entries to the ledger."
            ),
            mcq(
                "The short explanation written below a journal entry is called:",
                ["Caption", "Narration", "Remark", "Note"],
                1,
                "The explanation in brackets is called the narration."
            ),
            mcq(
                "In the trial balance, drawings appear on the:",
                ["Debit side", "Credit side", "Both sides", "Neither side"],
                0,
                "Drawings reduce capital and appear on the debit side."
            ),
            mcq(
                "Which error is NOT disclosed by the trial balance?",
                [
                    "Posting to the wrong side",
                    "Error of complete omission",
                    "Wrong total of a column",
                    "Posting only one side",
                ],
                1,
                "A completely omitted transaction affects neither side and is therefore not revealed."
            ),
            mcq(
                "The trading account is prepared to find:",
                ["Net profit", "Gross profit", "Capital", "Total assets"],
                1,
                "The trading account determines gross profit or gross loss."
            ),
        ],

        questions: [
            qa(
                "What is a journal? Explain its format with an example.",
                "A journal is the book of original entry in which transactions are recorded for the first time in chronological order. Its format has five columns for the date, the particulars, the ledger folio, the debit amount and the credit amount. The account to be debited is written first with the abbreviation Dr., the account to be credited is written below it beginning with the word To, and a short narration explaining the transaction is written in brackets underneath.",
                5
            ),
            qa(
                "Differentiate between journal and ledger.",
                "The journal is the book of original entry where transactions are recorded first in date order, and the process is called journalising. The ledger is the book of final entry where transactions are grouped account wise, and the process is called posting. Narration is compulsory in the journal but not in the ledger. Ledger accounts are balanced periodically whereas journal entries are not.",
                4
            ),
            qa(
                "What is a trial balance? State its objectives.",
                "A trial balance is a statement showing the debit and credit balances of all ledger accounts on a particular date. Its objectives are to verify the arithmetical accuracy of the ledger, to provide a summary of all account balances in one place, to help in locating errors, and to serve as the basis for preparing the trading account, profit and loss account and balance sheet.",
                4
            ),
            qa(
                "Explain the errors that are not disclosed by the trial balance.",
                "An error of omission occurs when a transaction is completely left out of the books, so both sides remain unaffected. An error of commission occurs when the correct amount is posted to a wrong account of the same class. An error of principle occurs when a capital item is treated as revenue or the reverse. Compensating errors occur when two or more errors cancel each other. Recording a wrong amount on both sides also leaves the trial balance tallied.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Introduction to Spreadsheets
========================================================= */

const introductionToSpreadsheets = createTopic(
    "introduction-to-spreadsheets",
    "Introduction to Spreadsheets",

    [
        definition(
            "Spreadsheet",
            "An application that organises data in a grid of rows and columns and allows calculations, analysis and charting to be performed on that data."
        ),

        text(
            "Microsoft Excel, Google Sheets and LibreOffice Calc are the most widely used spreadsheet programs. They are extensively used in accounting for preparing budgets, ledgers, invoices and financial statements."
        ),

        heading("Basic Terminology"),

        table(
            ["Term", "Meaning"],
            [
                ["Workbook", "The entire spreadsheet file, saved with the extension xlsx."],
                ["Worksheet", "A single sheet within a workbook."],
                ["Row", "A horizontal line of cells identified by a number."],
                ["Column", "A vertical line of cells identified by a letter."],
                ["Cell", "The intersection of a row and a column."],
                ["Cell Address", "The reference of a cell such as B7."],
                ["Range", "A group of adjacent cells such as A1 to A10."],
                ["Active Cell", "The currently selected cell shown with a thick border."],
                ["Name Box", "Displays the address of the active cell."],
                ["Formula Bar", "Displays and allows editing of the cell contents."],
            ]
        ),

        heading("Capacity of a Modern Worksheet"),

        table(
            ["Item", "Limit"],
            [
                ["Rows", "1,048,576"],
                ["Columns", "16,384 from A to XFD"],
                ["Characters in a cell", "32,767"],
                ["Worksheets in a workbook", "Limited only by available memory"],
            ]
        ),

        heading("Types of Data in a Cell"),

        table(
            ["Type", "Description", "Default Alignment"],
            [
                ["Label or Text", "Any combination of letters and symbols", "Left"],
                ["Value or Number", "Numeric data used in calculations", "Right"],
                ["Date and Time", "Recognised date or time values", "Right"],
                ["Formula", "An expression beginning with an equals sign", "Result aligned by type"],
            ]
        ),

        note(
            "Every formula in a spreadsheet must begin with an equals sign. Without it the entry is treated as ordinary text and no calculation takes place.",
            "warning",
            "Important"
        ),

        heading("Cell Referencing"),

        table(
            ["Type", "Written As", "Behaviour When Copied"],
            [
                ["Relative", "A1", "Both the row and column change."],
                ["Absolute", "$A$1", "Neither the row nor the column changes."],
                ["Mixed column", "$A1", "The column is fixed but the row changes."],
                ["Mixed row", "A$1", "The row is fixed but the column changes."],
            ]
        ),

        code(
            `Suppose C1 contains the formula  =A1+B1

Copying C1 to C2 gives            =A2+B2      relative reference

Suppose C1 contains               =A1*$B$1

Copying C1 to C2 gives            =A2*$B$1    B1 stays fixed`,
            "text",
            "How references behave when copied"
        ),

        text(
            "Pressing the F4 key while editing a formula cycles a reference through the absolute, mixed and relative forms."
        ),

        heading("Operators Used in Formulas"),

        table(
            ["Category", "Operators", "Example"],
            [
                ["Arithmetic", "+  -  *  /  %  ^", "=A1^2"],
                ["Comparison", "=  <>  >  <  >=  <=", "=A1>B1"],
                ["Text", "&", '=A1&" "&B1'],
                ["Reference", ": (range)  , (union)", "=SUM(A1:A10)"],
            ]
        ),

        heading("Order of Evaluation"),

        steps([
            "Brackets are evaluated first",
            "Percentage",
            "Exponentiation using the caret symbol",
            "Multiplication and division from left to right",
            "Addition and subtraction from left to right",
            "Text joining using the ampersand",
            "Comparison operators",
        ]),

        heading("Common Error Values"),

        table(
            ["Error", "Cause"],
            [
                ["#DIV/0!", "An attempt has been made to divide by zero."],
                ["#VALUE!", "The wrong type of data has been used in a formula."],
                ["#REF!", "The formula refers to a cell that has been deleted."],
                ["#NAME?", "A function name has been spelt incorrectly."],
                ["#N/A", "A lookup function could not find the value."],
                ["#NUM!", "The number produced is too large or invalid."],
                ["#####", "The column is too narrow to display the value."],
            ]
        ),

        heading("Useful Keyboard Shortcuts"),

        table(
            ["Shortcut", "Action"],
            [
                ["Ctrl + N", "Create a new workbook"],
                ["Ctrl + S", "Save the workbook"],
                ["Ctrl + Z", "Undo the last action"],
                ["Ctrl + C and Ctrl + V", "Copy and paste"],
                ["Ctrl + Home", "Move to cell A1"],
                ["Ctrl + Arrow key", "Jump to the edge of the data region"],
                ["F2", "Edit the active cell"],
                ["F4", "Toggle the reference type"],
                ["Alt + =", "Insert the AutoSum function"],
                ["Ctrl + Shift + L", "Apply or remove a filter"],
            ]
        ),

        keyPoints([
            "A workbook is the file while a worksheet is a single sheet inside it.",
            "A cell address is formed by the column letter followed by the row number.",
            "Every formula must begin with an equals sign.",
            "Relative references change when copied while absolute references do not.",
            "Error values such as div zero and value indicate specific problems in a formula.",
        ]),
    ],

    {
        summary:
            "Learn spreadsheet terminology, data types, cell referencing, operators, error values and shortcuts.",
        minutes: 11,
        tags: ["spreadsheet", "excel", "important"],

        mcqs: [
            mcq(
                "The intersection of a row and a column is called a:",
                ["Range", "Cell", "Sheet", "Field"],
                1,
                "A cell is formed where a row and a column intersect."
            ),
            mcq(
                "Every formula in a spreadsheet must begin with:",
                ["+", "=", "@", "#"],
                1,
                "A formula always begins with an equals sign."
            ),
            mcq(
                "Which reference remains unchanged when a formula is copied?",
                ["A1", "$A$1", "A$1", "$A1"],
                1,
                "A fully absolute reference with dollar signs before both parts never changes."
            ),
            mcq(
                "The error #DIV/0! occurs when:",
                [
                    "A function name is misspelt",
                    "A number is divided by zero",
                    "A cell is deleted",
                    "The column is too narrow",
                ],
                1,
                "This error appears when a formula attempts division by zero."
            ),
            mcq(
                "Text entered in a cell is aligned by default to the:",
                ["Right", "Centre", "Left", "Top"],
                2,
                "Text is left aligned while numbers are right aligned by default."
            ),
            mcq(
                "Which key toggles between relative and absolute references?",
                ["F2", "F4", "F5", "F9"],
                1,
                "Pressing F4 cycles a reference through its different forms."
            ),
        ],

        questions: [
            qa(
                "What is a spreadsheet? Explain its basic terminology.",
                "A spreadsheet is an application that organises data in a grid of rows and columns and allows calculations, analysis and charting. A workbook is the complete file while a worksheet is one sheet inside it. Rows run horizontally and are numbered, columns run vertically and are lettered, and their intersection forms a cell. The cell address combines the column letter with the row number, a group of adjacent cells is called a range, and the currently selected cell is the active cell.",
                5
            ),
            qa(
                "Explain the types of cell referencing with examples.",
                "A relative reference such as A1 changes both its column and row when the formula is copied to another cell. An absolute reference such as dollar A dollar one remains completely unchanged when copied. A mixed reference fixes only one part, so dollar A one keeps the column fixed while the row changes, and A dollar one keeps the row fixed while the column changes. The F4 key is used to switch between these forms.",
                4
            ),
            qa(
                "Explain any five error values in a spreadsheet.",
                "The division error appears when a formula divides by zero. The value error appears when the wrong type of data is used in a calculation. The reference error appears when a formula points to a cell that has been deleted. The name error appears when a function name is spelt incorrectly. The hash marks error appears when the column is too narrow to display the complete value.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Formulas and Functions
========================================================= */

const formulasAndFunctions = createTopic(
    "formulas-and-functions",
    "Formulas and Functions",

    [
        definition(
            "Function",
            "A predefined formula built into the spreadsheet that performs a specific calculation using the arguments supplied to it."
        ),

        code(
            `=FUNCTIONNAME(argument1, argument2, ...)

=SUM(A1:A10)
=AVERAGE(B2:B20)
=IF(C5>=35, "Pass", "Fail")`,
            "text",
            "General syntax of a function"
        ),

        heading("Mathematical Functions"),

        table(
            ["Function", "Purpose", "Example", "Result"],
            [
                ["SUM", "Adds all the numbers in a range", "=SUM(A1:A5)", "Total"],
                ["PRODUCT", "Multiplies the numbers", "=PRODUCT(A1:A3)", "Product"],
                ["POWER", "Raises a number to a power", "=POWER(2,3)", "8"],
                ["SQRT", "Returns the square root", "=SQRT(25)", "5"],
                ["ABS", "Returns the absolute value", "=ABS(-7)", "7"],
                ["ROUND", "Rounds to given decimal places", "=ROUND(3.567,2)", "3.57"],
                ["INT", "Removes the decimal part", "=INT(7.9)", "7"],
                ["MOD", "Returns the remainder", "=MOD(10,3)", "1"],
            ]
        ),

        heading("Statistical Functions"),

        table(
            ["Function", "Purpose", "Example"],
            [
                ["AVERAGE", "Arithmetic mean of the range", "=AVERAGE(B2:B10)"],
                ["MAX", "Largest value", "=MAX(B2:B10)"],
                ["MIN", "Smallest value", "=MIN(B2:B10)"],
                ["COUNT", "Counts cells containing numbers", "=COUNT(B2:B10)"],
                ["COUNTA", "Counts all non empty cells", "=COUNTA(A2:A10)"],
                ["COUNTBLANK", "Counts empty cells", "=COUNTBLANK(A2:A10)"],
                ["COUNTIF", "Counts cells meeting a condition", '=COUNTIF(C2:C10,">50")'],
                ["SUMIF", "Adds cells meeting a condition", '=SUMIF(A2:A10,"Sales",B2:B10)'],
                ["MEDIAN", "Middle value of the range", "=MEDIAN(B2:B10)"],
            ]
        ),

        heading("Logical Functions"),

        code(
            `=IF(condition, value_if_true, value_if_false)

=IF(B2>=35, "Pass", "Fail")

Nested IF for grading
=IF(B2>=70,"Distinction",
   IF(B2>=60,"First Class",
   IF(B2>=50,"Second Class",
   IF(B2>=35,"Pass","Fail"),),

=AND(B2>=35, C2>=35)      returns TRUE only when both are true
=OR(B2>=35, C2>=35)       returns TRUE when either is true
=NOT(B2>=35)              reverses the result`,
            "text",
            "Logical functions in use"
        ),

        heading("Text Functions"),

        table(
            ["Function", "Purpose", "Example", "Result"],
            [
                ["UPPER", "Converts to uppercase", '=UPPER("amit")', "AMIT"],
                ["LOWER", "Converts to lowercase", '=LOWER("AMIT")', "amit"],
                ["PROPER", "Capitalises each word", '=PROPER("amit shah")', "Amit Shah"],
                ["LEN", "Counts characters", '=LEN("Hello")', "5"],
                ["LEFT", "Extracts characters from the left", '=LEFT("Sphere",3)', "Sph"],
                ["RIGHT", "Extracts characters from the right", '=RIGHT("Sphere",3)', "ere"],
                ["MID", "Extracts from the middle", '=MID("LearnSphere",6,6)', "Sphere"],
                ["TRIM", "Removes extra spaces", '=TRIM("  hi  ")', "hi"],
                ["CONCATENATE", "Joins text values", '=CONCATENATE(A1," ",B1)', "Joined text"],
            ]
        ),

        heading("Date and Time Functions"),

        table(
            ["Function", "Purpose"],
            [
                ["TODAY()", "Returns the current date."],
                ["NOW()", "Returns the current date and time."],
                ["DAY(date)", "Extracts the day number."],
                ["MONTH(date)", "Extracts the month number."],
                ["YEAR(date)", "Extracts the year."],
                ["DAYS(end, start)", "Returns the number of days between two dates."],
            ]
        ),

        heading("Lookup Functions"),

        code(
            `=VLOOKUP(lookup_value, table_range, column_number, FALSE)

Example
=VLOOKUP(101, A2:C20, 2, FALSE)

Searches for 101 in the first column of the range
and returns the value from the second column of the matching row.
FALSE requests an exact match.`,
            "text",
            "The VLOOKUP function"
        ),

        heading("Financial Functions"),

        table(
            ["Function", "Purpose"],
            [
                ["PMT", "Calculates the periodic payment of a loan."],
                ["FV", "Calculates the future value of an investment."],
                ["PV", "Calculates the present value of an investment."],
                ["RATE", "Calculates the interest rate per period."],
                ["SLN", "Calculates straight line depreciation."],
            ]
        ),

        heading("A Practical Example — Student Result Sheet"),

        table(
            ["", "A", "B", "C", "D", "E", "F"],
            [
                ["1", "Roll No", "Name", "Sub 1", "Sub 2", "Total", "Result"],
                ["2", "101", "Amit", "78", "82", "=SUM(C2:D2)", '=IF(AND(C2>=35,D2>=35),"Pass","Fail")'],
                ["3", "102", "Riya", "92", "88", "=SUM(C3:D3)", '=IF(AND(C3>=35,D3>=35),"Pass","Fail")'],
                ["4", "", "Highest", "=MAX(C2:C3)", "=MAX(D2:D3)", "", ""],
                ["5", "", "Average", "=AVERAGE(C2:C3)", "=AVERAGE(D2:D3)", "", ""],
            ]
        ),

        note(
            "When a formula contains several nested functions, always count the opening and closing brackets carefully. A mismatch is the most common cause of formula errors.",
            "tip"
        ),

        keyPoints([
            "A function is a predefined formula that performs a specific calculation.",
            "The SUM, AVERAGE, MAX, MIN and COUNT functions are the most commonly used.",
            "The IF function returns one value when a condition is true and another when it is false.",
            "Text functions such as UPPER, LEFT and LEN manipulate strings.",
            "The VLOOKUP function searches a table vertically and returns a matching value.",
        ]),
    ],

    {
        summary:
            "Master the mathematical, statistical, logical, text, date and lookup functions of a spreadsheet.",
        minutes: 13,
        tags: ["spreadsheet", "excel", "functions", "important"],

        mcqs: [
            mcq(
                "Which function adds all the numbers in a range?",
                ["TOTAL", "SUM", "ADD", "PLUS"],
                1,
                "The SUM function adds all the numbers in the given range."
            ),
            mcq(
                "Which function counts only the cells that contain numbers?",
                ["COUNTA", "COUNT", "COUNTIF", "COUNTBLANK"],
                1,
                "The COUNT function counts numeric entries only."
            ),
            mcq(
                "What does =MOD(10,3) return?",
                ["3", "1", "0", "3.33"],
                1,
                "The MOD function returns the remainder, which is one."
            ),
            mcq(
                "Which function converts text to uppercase?",
                ["PROPER", "UPPER", "CAPS", "LARGE"],
                1,
                "The UPPER function converts all letters to uppercase."
            ),
            mcq(
                'What does =LEFT("Sphere",3) return?',
                ["Sph", "ere", "phe", "Sphere"],
                0,
                "The LEFT function extracts the first three characters."
            ),
            mcq(
                "Which function searches for a value in the first column of a table?",
                ["HLOOKUP", "VLOOKUP", "SEARCH", "FIND"],
                1,
                "VLOOKUP searches vertically in the first column of the table."
            ),
            mcq(
                "The IF function requires how many arguments?",
                ["One", "Two", "Three", "Four"],
                2,
                "IF takes the condition, the value if true and the value if false."
            ),
        ],

        questions: [
            qa(
                "Explain any five mathematical and statistical functions with syntax.",
                "The SUM function adds all numbers in a range and is written as SUM followed by the range in brackets. The AVERAGE function returns the arithmetic mean of the range. The MAX and MIN functions return the largest and smallest values respectively. The COUNT function counts how many cells in the range contain numbers. The ROUND function rounds a number to the specified number of decimal places.",
                5
            ),
            qa(
                "Explain the IF function with syntax and example.",
                "The IF function performs a logical test and returns one value when the test is true and another when it is false. Its syntax consists of three arguments, namely the condition, the value to return if the condition is true, and the value to return if it is false. For example a formula testing whether the marks in cell B2 are greater than or equal to thirty five will display Pass when true and Fail when false. Several IF functions may be nested to handle multiple grades.",
                4
            ),
            qa(
                "Explain any five text functions with examples.",
                "The UPPER function converts text to capital letters while LOWER converts it to small letters. The PROPER function capitalises the first letter of each word. The LEN function counts the number of characters in the text. The LEFT and RIGHT functions extract a given number of characters from the beginning and the end respectively, and the MID function extracts characters from a specified position in the middle.",
                5
            ),
            qa(
                "What is VLOOKUP? Explain with an example.",
                "VLOOKUP is a lookup function that searches for a value in the first column of a table and returns a corresponding value from another column of the same row. It takes four arguments, namely the value to look for, the range of the table, the column number from which the result should be returned, and a logical value where FALSE requests an exact match. For example searching for a roll number in a student table and returning the name from the second column.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 6 — Charts and Data Analysis
========================================================= */

const chartsAndDataAnalysis = createTopic(
    "charts-and-data-analysis",
    "Charts and Data Analysis",

    [
        text(
            "Numbers arranged in rows and columns are difficult to interpret at a glance. Charts present the same data visually so that trends, comparisons and proportions become immediately clear."
        ),

        heading("Types of Charts"),

        table(
            ["Chart", "Best Used For"],
            [
                ["Column chart", "Comparing values across categories vertically."],
                ["Bar chart", "The same comparison shown horizontally."],
                ["Line chart", "Showing a trend over a period of time."],
                ["Pie chart", "Showing the proportion of each part in a whole."],
                ["Area chart", "Showing cumulative totals over time."],
                ["Scatter chart", "Showing the relationship between two variables."],
                ["Combo chart", "Comparing two different types of data together."],
            ]
        ),

        heading("Parts of a Chart"),

        table(
            ["Element", "Description"],
            [
                ["Chart title", "The heading describing what the chart shows."],
                ["X axis", "The horizontal axis, usually holding categories."],
                ["Y axis", "The vertical axis, usually holding values."],
                ["Data series", "A set of related data points plotted together."],
                ["Legend", "The key explaining what each colour represents."],
                ["Data labels", "The actual values displayed on the chart."],
                ["Gridlines", "Light lines that help in reading values."],
                ["Plot area", "The region in which the data is drawn."],
            ]
        ),

        heading("Creating a Chart"),

        steps([
            "Select the range of cells including the headings",
            "Open the Insert tab on the ribbon",
            "Choose the appropriate chart type from the Charts group",
            "Add a chart title and axis titles",
            "Add data labels and a legend if required",
            "Move or resize the chart as needed",
        ]),

        heading("Sorting Data"),

        definition(
            "Sorting",
            "Arranging the rows of a data range in ascending or descending order based on the values in one or more columns."
        ),

        table(
            ["Type", "Meaning"],
            [
                ["Ascending", "Smallest to largest, or A to Z."],
                ["Descending", "Largest to smallest, or Z to A."],
                ["Multi level sort", "Sorting by one column and then by another within it."],
            ]
        ),

        heading("Filtering Data"),

        definition(
            "Filtering",
            "Temporarily hiding the rows that do not satisfy a given condition so that only the required data remains visible."
        ),

        table(
            ["Filter Type", "Purpose"],
            [
                ["AutoFilter", "Adds a dropdown to each heading for quick selection."],
                ["Number filter", "Conditions such as greater than or between."],
                ["Text filter", "Conditions such as begins with or contains."],
                ["Date filter", "Conditions such as this month or last year."],
                ["Advanced filter", "Applies complex criteria written in a separate range."],
            ]
        ),

        note(
            "Filtering does not delete any data. The hidden rows return as soon as the filter is cleared, unlike sorting which permanently rearranges the rows.",
            "tip"
        ),

        heading("Conditional Formatting"),

        text(
            "Conditional formatting changes the appearance of a cell automatically when its value satisfies a specified rule, for example showing all failing marks in red."
        ),

        table(
            ["Rule Type", "Effect"],
            [
                ["Highlight cell rules", "Colours cells greater than, less than or between values."],
                ["Top and bottom rules", "Highlights the top ten or the bottom ten percent."],
                ["Data bars", "Draws a small bar inside the cell proportional to its value."],
                ["Colour scales", "Applies a colour gradient across a range."],
                ["Icon sets", "Displays arrows or traffic lights based on the value."],
            ]
        ),

        heading("Pivot Tables"),

        definition(
            "Pivot Table",
            "An interactive summary table that groups and aggregates large amounts of data without altering the original data."
        ),

        table(
            ["Area", "Purpose"],
            [
                ["Rows", "The field whose values become the row headings."],
                ["Columns", "The field whose values become the column headings."],
                ["Values", "The field that is summarised using sum, count or average."],
                ["Filters", "The field used to restrict the whole table."],
            ]
        ),

        heading("Other Useful Features"),

        table(
            ["Feature", "Purpose"],
            [
                ["Freeze Panes", "Keeps the heading row visible while scrolling."],
                ["Data Validation", "Restricts the values that may be typed into a cell."],
                ["Goal Seek", "Finds the input value needed to reach a desired result."],
                ["Subtotal", "Inserts automatic totals for each group of data."],
                ["Protect Sheet", "Prevents unauthorised changes to the worksheet."],
                ["Print Titles", "Repeats the heading row on every printed page."],
            ]
        ),

        heading("Application in Accounting"),

        list([
            "Preparing cash books, ledgers and trial balances.",
            "Creating invoices and quotations with automatic totals.",
            "Preparing budgets and comparing them with actual figures.",
            "Calculating depreciation using built in financial functions.",
            "Preparing payroll sheets with automatic deductions.",
            "Analysing sales trends through charts and pivot tables.",
        ]),

        keyPoints([
            "Charts convert numeric data into a visual form that is easier to interpret.",
            "Pie charts show proportions while line charts show trends over time.",
            "Sorting permanently rearranges rows whereas filtering only hides them temporarily.",
            "Conditional formatting changes cell appearance automatically based on rules.",
            "A pivot table summarises large data sets without changing the original data.",
        ]),
    ],

    {
        summary:
            "Learn to create charts, sort and filter data, apply conditional formatting and summarise data using pivot tables.",
        minutes: 10,
        tags: ["spreadsheet", "excel", "charts"],

        mcqs: [
            mcq(
                "Which chart is best for showing the proportion of parts in a whole?",
                ["Line chart", "Pie chart", "Scatter chart", "Bar chart"],
                1,
                "A pie chart displays each value as a slice of the whole."
            ),
            mcq(
                "Which chart is most suitable for showing a trend over time?",
                ["Pie chart", "Line chart", "Column chart", "Doughnut chart"],
                1,
                "A line chart shows how values change over a period."
            ),
            mcq(
                "Filtering data in a spreadsheet:",
                [
                    "Deletes the unwanted rows",
                    "Temporarily hides the unwanted rows",
                    "Sorts the rows",
                    "Copies the rows",
                ],
                1,
                "Filtering only hides rows; the data remains intact."
            ),
            mcq(
                "Which feature keeps the heading row visible while scrolling?",
                ["Split", "Freeze Panes", "Lock Cells", "Protect Sheet"],
                1,
                "Freeze Panes keeps selected rows or columns fixed on screen."
            ),
            mcq(
                "Which tool summarises large data sets interactively?",
                ["Goal Seek", "Pivot Table", "Data Validation", "Subtotal"],
                1,
                "A pivot table groups and aggregates large amounts of data."
            ),
            mcq(
                "The key that explains the colours used in a chart is called the:",
                ["Title", "Axis", "Legend", "Label"],
                2,
                "The legend explains what each colour or series represents."
            ),
        ],

        questions: [
            qa(
                "Explain any five types of charts and their uses.",
                "A column chart compares values across categories using vertical bars while a bar chart does the same horizontally. A line chart is used to display a trend over a period of time. A pie chart shows the proportion that each part contributes to the whole. A scatter chart displays the relationship between two numeric variables. A combo chart combines two chart types so that different kinds of data can be compared together.",
                5
            ),
            qa(
                "Differentiate between sorting and filtering.",
                "Sorting arranges the rows of a data range in ascending or descending order based on one or more columns, and it permanently changes the order in which the rows appear. Filtering temporarily hides the rows that do not meet a specified condition so that only the required records remain visible, and the hidden rows reappear as soon as the filter is removed. Sorting rearranges data while filtering restricts what is displayed.",
                4
            ),
            qa(
                "What is conditional formatting? Explain its types.",
                "Conditional formatting automatically changes the appearance of a cell when its value satisfies a defined rule. Highlight cell rules colour cells that are greater than, less than or between given values. Top and bottom rules highlight the highest or lowest items. Data bars draw a bar inside the cell in proportion to its value. Colour scales apply a gradient across the range, and icon sets display symbols such as arrows based on the value.",
                4
            ),
            qa(
                "How are spreadsheets useful in accounting?",
                "Spreadsheets are used to prepare cash books, ledgers and trial balances with automatic totals. They generate invoices and quotations in which the amounts are calculated by formulas. They help in preparing budgets and comparing them with actual results. Built in financial functions calculate depreciation, loan instalments and present values. Payroll sheets with automatic deductions can be maintained, and charts and pivot tables help in analysing sales and expenditure trends.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToAccounting,
    accountingConcepts,
    journalLedgerTrialBalance,
    introductionToSpreadsheets,
    formulasAndFunctions,
    chartsAndDataAnalysis,
];
