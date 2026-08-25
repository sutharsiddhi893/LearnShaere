/* =========================================================
   BCA � SEM 3 � E-Commerce
   UNIT 2 � Security, Legal Issues, Strategy and Emerging Trends
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
   TOPIC 1 � E-Commerce Security
========================================================= */

const ecomSecurity = createTopic(
    "ecommerce-security",
    "E-Commerce Security",

    [
        definition(
            "E-Commerce Security",
            "The set of measures, technologies and practices that protect the data, transactions and privacy of customers and businesses in an online environment."
        ),

        heading("Why Security is Critical"),

    list([
        "Customers share sensitive data: name, address, card number, phone.",
        "A single breach can lose millions of rupees and the trust of customers.",
        "Companies face legal action, fines and damage to brand.",
        "Examples: Equifax 2017, Marriott 2018, BigBasket 2020.",
    ]),


table(
    ["Threat", "Description"],
    [
        ["Phishing", "Fake email or site to steal credentials"],
        ["Malware", "Virus, ransomware, keylogger"],
        ["SQL injection", "Insert malicious code into a query"],
        ["XSS", "Inject script into a webpage viewed by others"],
        ["CSRF", "Trick a logged in user into making an unwanted action"],
        ["Man in the middle", "Intercept traffic between user and server"],
        ["DDoS", "Flood the site with traffic to make it unavailable"],
        ["Credential stuffing", "Try stolen passwords on many sites"],
    ]
),

    note(
        "According to the IBM Cost of a Data Breach Report 2023, the average cost of a data breach worldwide reached 4.45 million US dollars, the highest ever. For Indian companies the average is about 2.18 million dollars, which is still a huge sum. Prevention is always cheaper than cure.",
        "tip",
        "Cost of a Breach"
    ),


list([
    "Confidentiality � only authorised people can read the data.",
    "Integrity � the data is not modified by unauthorised people.",
    "Availability � the system is up and running when needed.",
    "Authentication � the user is who they claim to be.",
    "Authorisation � the user can do only what they are allowed to.",
    "Non repudiation � the user cannot deny having done an action.",
]),


definition(
    "Encryption",
    "The process of converting readable plaintext into unreadable ciphertext using a key, so that only someone with the correct key can read it."
),

    list([
        "Symmetric key: same key for encryption and decryption, e.g. AES, DES.",
        "Asymmetric key: pair of public and private key, e.g. RSA, ECC.",
        "Hashing: one way, used for passwords, e.g. SHA 256, bcrypt.",
        "SSL or TLS: protocol for secure HTTP (HTTPS) using both symmetric and asymmetric.",
        "End to end: only sender and receiver can read, e.g. WhatsApp, Signal.",
    ]),


list([
    "A mathematical scheme to prove the authenticity of a digital message.",
    "Uses asymmetric cryptography: sender signs with private key, receiver verifies with public key.",
    "Provides authentication, integrity and non repudiation.",
    "Foundation of SSL certificates, e-sign and document signing.",
]),


list([
    "An electronic document that binds the identity of a person or organisation to a public key.",
    "Issued by a trusted Certificate Authority (CA) such as DigiCert, Let's Encrypt or eMudhra.",
    "Used in HTTPS, S/MIME email, code signing and e-sign.",
    "Contains the public key, the owner's name, the CA, the validity dates and the signature of the CA.",
]),


list([
    "A device or software that filters traffic between two networks based on a set of rules.",
    "Blocks unauthorised access and permits legitimate traffic.",
    "Types: packet filter, stateful inspection, application layer, next generation.",
    "Examples: iptables, pfSense, Cisco ASA, AWS WAF.",
]),


list([
    "Always use HTTPS and renew certificates on time.",
    "Store passwords as salted hashes, never as plain text.",
    "Enable multi factor authentication for admin accounts.",
    "Validate and sanitise all user input to prevent SQLi and XSS.",
    "Use tokenisation for card data; never store real card numbers.",
    "Keep all software and libraries up to date.",
    "Run regular security audits and penetration tests.",
    "Back up data daily and test the restore process.",
]),

    keyPoints([
        "E-commerce security is critical for customer trust and legal compliance.",
        "Common threats: phishing, SQLi, XSS, DDoS, credential stuffing.",
        "CIA triad: confidentiality, integrity, availability.",
        "Symmetric uses one key, asymmetric uses a key pair.",
        "Always use HTTPS, MFA, hashing and tokenisation.",
        ]),
    ],

    {
        summary:
    "Master the threats, principles, encryption, digital signature, certificate, firewall and best practices of e-commerce security.",
        minutes: 12,
            tags: ["security", "encryption", "https", "firewall", "important"],

                mcqs: [
                    mcq(
                        "CIA triad stands for:",
                        ["Confidentiality Integrity Availability", "Computer Internet Access", "Centralised Internet Authority", "Code Internet Application"],
                        0,
                        "CIA is confidentiality, integrity and availability."
                    ),
                    mcq(
                        "Which is a symmetric algorithm?",
                        ["RSA", "AES", "ECC", "DSA"],
                        1,
                        "AES is symmetric; RSA, ECC and DSA are asymmetric."
                    ),
                    mcq(
                        "XSS stands for:",
                        ["Cross Site Scripting", "Cross System Security", "Central Secure System", "Cross Server Sync"],
                        0,
                        "XSS is Cross Site Scripting, where attacker injects script into a page."
                    ),
                    mcq(
                        "HTTPS uses:",
                        ["TLS", "FTP", "UDP", "ICMP"],
                        0,
                        "HTTPS is HTTP over TLS."
                    ),
                    mcq(
                        "Hashing is:",
                        ["Two way", "One way", "Reversible", "Encryptable"],
                        1,
                        "A hash cannot be reversed back to the original input."
                    ),
                    mcq(
                        "A digital certificate is issued by:",
                        ["ISP", "CA", "DNS", "FTP"],
                        1,
                        "A Certificate Authority (CA) issues digital certificates."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the CIA triad of security.",
                            "The CIA triad is the foundation of information security. Confidentiality means that data is accessible only to those who are authorised to see it, and is protected from disclosure to unauthorised people. Integrity means that data is accurate and has not been modified or deleted by anyone who is not allowed to. Availability means that the system and the data are accessible to authorised users when they need it, without undue delay. These three principles guide every security decision. For example, encryption protects confidentiality, hashing protects integrity, and backups plus redundant servers protect availability. Authentication, authorisation and non repudiation are additional principles that support the CIA triad.",
                            4
                        ),
                        qa(
                            "Differentiate between symmetric and asymmetric encryption.",
                            "Symmetric encryption uses the same key for encryption and decryption, so both the sender and the receiver must share the secret key. It is very fast and is used for bulk data, e.g. AES, DES. The challenge is securely sharing the key. Asymmetric encryption uses a pair of keys: a public key that anyone can have, and a private key that only the owner has. Data encrypted with the public key can only be decrypted with the private key, and vice versa. It is used to exchange the symmetric key securely, to sign digital documents, and to provide the basis of SSL or TLS. Examples are RSA and ECC. In practice, HTTPS uses both: asymmetric to exchange a symmetric session key, then symmetric for the actual data.",
                            4
                        ),
                        qa(
                            "What is a digital signature? How does it work?",
                            "A digital signature is a mathematical scheme to prove the authenticity of a digital message or document. It provides three guarantees: that the message was sent by the claimed sender (authentication), that the message was not modified in transit (integrity), and that the sender cannot later deny having sent it (non repudiation). To create a signature, the sender first computes a hash of the message, then encrypts the hash with their private key. The encrypted hash is the signature, which is sent along with the message. The receiver decrypts the signature using the sender's public key, recomputes the hash of the message, and compares the two hashes. If they match, the signature is valid. Digital signatures are used in SSL certificates, e-sign documents and blockchain.",
                            4
                        ),
                        qa(
                            "Explain SQL injection and how to prevent it.",
                            "SQL injection is a common attack in which the attacker inserts malicious SQL code into an input field, such as a login form or a search box, which is then passed to the database. If the application concatenates the input directly into the SQL query, the attacker can read, modify or delete data, or even take control of the server. For example, the input ' OR '1'='1 in a password field may bypass authentication. The standard prevention is to use parameterised queries or prepared statements, where the SQL is fixed and the user input is passed as a parameter, so it is always treated as data, never as code. Additional measures are input validation, the principle of least privilege for the database user, and regular security testing.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Legal and Regulatory Framework
========================================================= */

const legalFramework = createTopic(
    "legal-and-regulatory-framework",
    "Legal and Regulatory Framework",

    [

    list([
        "Protects consumers from fraud and unfair trade.",
        "Provides a level playing field for businesses.",
        "Defines what is allowed and what is not in cyberspace.",
        "Builds trust in digital transactions.",
    ]),


list([
    "India's primary law for e-commerce, cybercrime and digital signatures.",
    "Gives legal recognition to electronic records and digital signatures.",
    "Defines offences such as hacking (Section 66), publishing obscene material (67), identity theft (66C) and cheating using computer (66D).",
    "Sets penalties up to several years of imprisonment.",
    "Amended in 2008 to add sections on data privacy, child pornography and cyber terrorism.",
]),

    heading("Consumer Protection (E-Commerce) Rules, 2020"),

list([
    "Notified under the Consumer Protection Act 2019.",
    "Apply to all e-commerce entities, both inventory and marketplace.",
    "Require disclosure of seller name, address, contact, country of origin, and return policy.",
    "Ban of fake reviews and misleading ads.",
    "No unfair trade practice such as denying equal treatment to different consumers.",
    "Grievance officer must be appointed within 48 hours of complaint.",
]),

    heading("Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021"),

list([
    "Also called the IT Rules 2021.",
    "Cover social media, news publishers, OTT platforms and intermediaries.",
    "Require grievance officer, monthly compliance report and traceability of first originator for messaging apps.",
    "Significant social media intermediary must enable identification of the first originator on court order.",
]),


list([
    "Personal Data Protection Bill, 2019, was withdrawn in 2022.",
    "Digital Personal Data Protection Act, 2023 (DPDP Act) was passed by Parliament in August 2023.",
    "Covers processing of digital personal data of individuals in India.",
    "Requires consent for collection, purpose limitation, data minimisation, storage limitation.",
    "Right to access, correct and erase personal data.",
    "Significant data fiduciaries must appoint a Data Protection Officer (DPO) based in India.",
]),

    heading("Other Important Laws"),

    list([
        "Indian Contract Act, 1872 � governs online contracts.",
        "Sale of Goods Act, 1930 � sale of goods, warranties.",
        "Indian Penal Code (now Bharatiya Nyaya Sanhita) � cheating, mischief, forgery.",
        "Copyright Act, 1957 � protects original content from being copied.",
        "Trademarks Act, 1999 � protects brand names, logos, slogans.",
        "Competition Act, 2002 � prevents anti competitive agreements and abuse of dominance.",
    ]),

    heading("International Considerations"),

    list([
        "GDPR � General Data Protection Regulation of the European Union, applies to any business that handles data of EU residents.",
        "California Consumer Privacy Act (CCPA) � California state law for consumer privacy.",
        "Cross border data flow is becoming a major issue in trade negotiations.",
        "Many Indian companies must comply with GDPR if they serve European customers.",
    ]),


list([
    "GST applies to most goods and services sold online.",
    "Threshold limit for GST registration is Rs 40 lakh for goods and Rs 20 lakh for services.",
    "E-commerce operators must collect Tax Collected at Source (TCS) at 1 percent under Section 52 of the CGST Act.",
    "Marketplaces must file monthly returns and provide seller information.",
]),

    keyPoints([
        "IT Act 2000 is the primary cyber law of India.",
        "Consumer Protection E Commerce Rules 2020 protect online shoppers.",
        "DPDP Act 2023 is the new personal data protection law.",
        "GDPR applies to any business handling data of EU residents.",
        "Marketplaces must collect 1 percent TCS on sales.",
        ]),
    ],

    {
        summary:
    "Master the legal and regulatory framework for e-commerce in India, including IT Act, Consumer Rules, DPDP Act, taxes and international laws.",
        minutes: 11,
            tags: ["law", "IT-Act", "DPDP", "GDPR", "important"],

                mcqs: [
                    mcq(
                        "IT Act was passed in:",
                        ["1996", "2000", "2008", "2019"],
                        1,
                        "Information Technology Act was passed in 2000."
                    ),
                    mcq(
                        "DPDP Act was passed in:",
                        ["2019", "2021", "2023", "2025"],
                        2,
                        "The Digital Personal Data Protection Act was passed in August 2023."
                    ),
                    mcq(
                        "GDPR is from:",
                        ["USA", "European Union", "India", "UK"],
                        1,
                        "GDPR is the General Data Protection Regulation of the European Union."
                    ),
                    mcq(
                        "TCS under Section 52 is:",
                        ["0.5 percent", "1 percent", "2 percent", "5 percent"],
                        1,
                        "E-commerce marketplaces must collect 1 percent TCS on sales."
                    ),
                    mcq(
                        "E-Commerce Rules 2020 fall under:",
                        ["IT Act", "Consumer Protection Act", "DPDP Act", "GST Act"],
                        1,
                        "The E-Commerce Rules 2020 are notified under the Consumer Protection Act 2019."
                    ),
                    mcq(
                        "A digital signature is verified using:",
                        ["Private key", "Public key", "Password", "PIN"],
                        1,
                        "A digital signature is verified using the sender's public key."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the Information Technology Act 2000.",
                            "The Information Technology Act 2000 is the primary law in India that deals with cybercrime, e-commerce, digital signatures and data. It was amended in 2008 to add sections on data privacy, child pornography and cyber terrorism. The Act gives legal recognition to electronic records and digital signatures, so they are treated as equivalent to paper records and handwritten signatures. It defines offences such as hacking under Section 66, publishing obscene material under Section 67, identity theft under Section 66C and cheating by personation using a computer resource under Section 66D, with penalties up to several years of imprisonment. It also set up the office of the Controller of Certifying Authorities and empowered the police to investigate cyber offences.",
                            4
                        ),
                        qa(
                            "What are the Consumer Protection E Commerce Rules 2020?",
                            "The Consumer Protection (E-Commerce) Rules 2020 were notified by the Central Government under the Consumer Protection Act 2019. They apply to all e-commerce entities, both inventory based models and marketplace models, and to all goods and services sold online. The rules require every seller to disclose their legal name, address, contact details, country of origin, and the terms of sale, return and refund. They ban the practice of manipulating reviews and misleading advertisements, and they prohibit unfair trade practices such as denying equal treatment to different consumers. The e-commerce entity must appoint a grievance officer and acknowledge every complaint within 48 hours. Violations are punishable with penalties up to Rs 1 crore for the first offence and up to Rs 5 crore for repeat offences.",
                            4
                        ),
                        qa(
                            "Explain the key features of the Digital Personal Data Protection Act 2023.",
                            "The Digital Personal Data Protection Act, or DPDP Act, was passed by the Indian Parliament in August 2023 as the country's first comprehensive privacy law. It applies to the processing of digital personal data of individuals located in India, and to data processed outside India if it offers goods or services to individuals in India. The Act requires consent for the collection and use of personal data, and the data may be used only for the purpose for which consent was given. Individuals have the right to access a summary of their data, to correct it and to erase it. Significant data fiduciaries must appoint a Data Protection Officer based in India, conduct periodic audits and undertake data protection impact assessments. The Data Protection Board of India is the adjudicating authority, with powers to impose penalties up to Rs 250 crore for each instance of non compliance.",
                            4
                        ),
                        qa(
                            "Explain the role of GST and TCS in e-commerce.",
                            "Goods and Services Tax, or GST, applies to most transactions in India, including those on e-commerce platforms, and replaced multiple central and state taxes. The threshold for mandatory GST registration is Rs 40 lakh for suppliers of goods and Rs 20 lakh for suppliers of services, but all e-commerce operators must register regardless of turnover. Section 52 of the CGST Act requires every e-commerce operator to collect Tax Collected at Source, or TCS, at the rate of 1 percent of the net value of taxable supplies made through the platform by other sellers. The collected TCS is to be paid to the government by the 10th of the next month, and the details are reported in GSTR 8. TCS ensures that tax is collected even when small sellers do not file their returns properly, and provides the government with data on the rapidly growing online economy.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Building an E-Commerce Website
========================================================= */

const buildingWebsite = createTopic(
    "building-an-ecommerce-website",
    "Building an E-Commerce Website",

    [
        definition(
            "E-Commerce Website",
            "A website that allows customers to browse a catalogue, place orders, make payment and arrange delivery of goods or services through the internet."
        ),


    list([
        "Home page � brand, search bar, featured categories, offers.",
        "Category and product listing pages (PLP).",
        "Product detail page (PDP) � images, price, description, reviews, add to cart.",
        "Cart and checkout page.",
        "Login, sign up, my account, order history, wishlist.",
        "About us, contact us, FAQ, returns policy, terms of service.",
        "Blog and content for SEO.",
    ]),


list([
    "Powerful search with autocomplete and filters.",
    "Personalised recommendations based on browsing and purchase history.",
    "Customer reviews and ratings.",
    "Wishlist and recently viewed items.",
    "Multiple payment options: UPI, cards, wallets, COD, BNPL.",
    "Guest checkout without forced registration.",
    "Order tracking and easy returns.",
    "Mobile responsive and fast loading.",
]),


list([
    "Front end (client side): HTML, CSS, JavaScript, React, Vue, Angular.",
    "Back end (server side): Node.js with Express, Python with Django, Java with Spring, PHP with Laravel.",
    "Database: PostgreSQL or MySQL for transactional data, MongoDB for product catalogue, Redis for cache and session.",
    "Search: Elasticsearch.",
    "Image storage and CDN: S3 and CloudFront, or Cloudinary.",
    "Email and SMS: SendGrid, Twilio.",
    "Analytics: Google Analytics, Mixpanel, internal dashboards.",
]),


list([
    "Open source platforms: WooCommerce (WordPress), Magento (Adobe Commerce), PrestaShop, OpenCart.",
    "Hosted platforms: Shopify, BigCommerce, Wix, Squarespace.",
    "Headless commerce: Best suited for large or custom needs, decoupled front end and back end.",
    "Marketplace platforms: Sharetribe, CS-Cart Multi Vendor.",
    "Custom built: full control, but high cost and time.",
]),


steps([
    "Define the business model and target audience.",
    "Choose the right platform or tech stack.",
    "Register a domain name and choose a hosting provider.",
    "Design the user experience: wireframes, mockups, prototype.",
    "Build the product catalogue with categories, attributes and images.",
    "Integrate the payment gateway and shipping providers.",
    "Add legal pages, terms, privacy, returns and refund policy.",
    "Test on desktop and mobile, multiple browsers and devices.",
    "Set up analytics, search console and tracking pixels.",
    "Launch with a soft launch, gather feedback, fix bugs, then go public.",
    "Plan marketing, SEO, social media and email campaigns.",
]),


list([
    "More than 70 percent of e-commerce traffic in India is on mobile.",
    "Need a mobile first design that is fast and easy to use on small screens.",
    "Progressive Web App (PWA) gives an app like experience from a website.",
    "Native apps give the best performance and access to device features.",
    "Mobile specific features: fingerprint login, mobile wallet, push notifications.",
]),

    note(
        "Amazon's mobile app is installed on more than 200 million phones in India. The biggest opportunity for any new e-commerce business is to nail the mobile experience from day one, because a slow or clunky mobile site will lose more than half the visitors.",
        "tip",
        "Mobile First"
    ),


list([
    "Compress images and use modern formats like WebP.",
    "Lazy load images and below the fold content.",
    "Use a CDN to serve content from the nearest location.",
    "Minify CSS, JavaScript and HTML.",
    "Use caching at the browser, server and database levels.",
    "Measure with Google Lighthouse and Core Web Vitals.",
]),

    keyPoints([
        "Key pages: home, listing, product, cart, checkout, account.",
        "Front end: HTML, CSS, JS, React. Back end: Node, Python, Java, PHP.",
        "Choose between open source, hosted or custom built platform.",
        "Mobile first design is essential in India.",
        "Optimise performance with CDN, lazy loading and caching.",
        ]),
    ],

    {
        summary:
    "Master the key pages, features, tech stack, platforms and steps to build a modern e-commerce website.",
        minutes: 11,
            tags: ["website", "platform", "mobile", "performance", "important"],

                mcqs: [
                    mcq(
                        "Which is an open source e-commerce platform?",
                        ["Shopify", "WooCommerce", "BigCommerce", "Wix"],
                        1,
                        "WooCommerce is the open source e-commerce plugin for WordPress."
                    ),
                    mcq(
                        "PDP stands for:",
                        ["Product Display Page", "Product Detail Page", "Payment Data Protocol", "Price Display Page"],
                        1,
                        "PDP is the Product Detail Page."
                    ),
                    mcq(
                        "Most e-commerce traffic in India is on:",
                        ["Desktop", "Mobile", "Tablet", "TV"],
                        1,
                        "More than 70 percent of e-commerce traffic in India is on mobile."
                    ),
                    mcq(
                        "Which is a JavaScript framework?",
                        ["Django", "Laravel", "React", "Spring"],
                        2,
                        "React is a popular JavaScript framework for front end."
                    ),
                    mcq(
                        "What is a PWA?",
                        ["A type of payment", "Progressive Web App", "A database", "A CDN"],
                        1,
                        "PWA is a Progressive Web App, a website that behaves like an app."
                    ),
                    mcq(
                        "Which tool measures page speed?",
                        ["Google Docs", "Google Lighthouse", "Google Sheets", "Google Drive"],
                        1,
                        "Google Lighthouse measures performance, SEO and accessibility."
                    ),
                ],

                    questions: [
                        qa(
                            "List the key features of a modern e-commerce website.",
                            "A modern e-commerce website must offer a fast, mobile friendly experience with powerful search, filters and personalisation. Key features are a smart search bar with autocomplete and suggestions, faceted filters on category pages, a clean product detail page with high quality images, zoom, videos, specifications, customer reviews and ratings, an add to cart button, a wishlist and a recently viewed section. The cart and checkout should support guest checkout, multiple payment methods such as UPI, cards, wallets and cash on delivery, and saved addresses. After the order, the customer should be able to track the shipment, return products easily and contact support through chat, phone or email. The site should be fast, accessible and secure at all times.",
                            4
                        ),
                        qa(
                            "Differentiate between open source and hosted e-commerce platforms.",
                            "An open source platform such as WooCommerce, Magento or PrestaShop gives full control of the code and the data, is free to download, and can be customised in any way. However, the merchant is responsible for hosting, security, updates, backups and development, which requires technical skills or a developer. A hosted platform such as Shopify, BigCommerce or Wix is a subscription service where the provider runs the software, security and updates, and the merchant just logs in to manage products and orders. Hosted platforms are easier to use and faster to launch, but have less flexibility, monthly fees, and the data is held by the provider. The choice depends on budget, technical skill, customisation needs and expected scale.",
                            4
                        ),
                        qa(
                            "Explain the steps to build an e-commerce website from scratch.",
                            "Building an e-commerce website from scratch follows a clear sequence of steps. First, define the business model, the target audience and the unique value proposition. Second, choose the right tech stack or platform, considering budget, scale and skills. Third, register a memorable domain name and choose a reliable hosting provider or cloud account. Fourth, design the user experience with wireframes, mockups and an interactive prototype. Fifth, build the product catalogue with categories, attributes, images and descriptions. Sixth, integrate the payment gateway and shipping providers, and add the legal pages such as terms, privacy and returns. Seventh, test the site on multiple devices, browsers and payment methods, and run a security audit. Eighth, set up analytics, search console and tracking pixels. Ninth, launch with a soft launch to a small audience, gather feedback and fix issues, then go public with a marketing campaign.",
                            4
                        ),
                        qa(
                            "Why is mobile commerce so important in India?",
                            "Mobile commerce, or m-commerce, is the practice of buying and selling through a mobile device. It is important in India because more than 70 percent of internet traffic and an even higher share of e-commerce traffic come from mobile phones, because the cost of smartphones has fallen, because data plans are among the cheapest in the world, and because the UPI revolution has made payments from a phone seamless. Customers expect to browse, search, compare, pay and track their orders entirely on the phone. A site that is not fast, easy to use and visually clear on a small screen will lose most of its potential customers. A Progressive Web App, or PWA, can give an app like experience from a website, while a native app gives the best performance and access to features like push notifications, fingerprint login and the camera.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � E-Commerce Strategy and Logistics
========================================================= */

const strategyLogistics = createTopic(
    "ecommerce-strategy-and-logistics",
    "E-Commerce Strategy and Logistics",

    [
        definition(
            "E-Commerce Strategy",
            "A long term plan that defines how an online business will create value for customers, achieve competitive advantage, and achieve its financial and operational goals."
        ),


    list([
        "Vision and mission.",
        "Target market and customer persona.",
        "Value proposition and differentiator.",
        "Product and pricing strategy.",
        "Marketing and customer acquisition strategy.",
        "Technology and platform strategy.",
        "Logistics and fulfilment strategy.",
        "Financial plan and key metrics.",
    ]),


table(
    ["Type", "Examples"],
    [
        ["Strengths", "Strong brand, wide catalogue, fast delivery, low cost"],
        ["Weaknesses", "Limited budget, no brand, no warehouse"],
        ["Opportunities", "New category, new geography, mobile first users"],
        ["Threats", "Big competitors, regulation, supply chain disruption"],
    ]
),


list([
    "Cost leadership � being the cheapest in the market, e.g. Meesho, DealShare.",
    "Differentiation � being unique in some way, e.g. Nykaa in beauty, Mamaearth in clean beauty.",
    "Focus � serving a specific niche very well, e.g. Lenskart in eyewear, Boat in audio.",
    "Network effects � becoming more valuable as more people use it, e.g. Amazon, Flipkart.",
    "Data and AI � using customer data to personalise and predict, e.g. Netflix, Spotify.",
]),


definition(
    "Logistics",
    "The planning, implementation and control of the efficient flow and storage of goods, services and information from origin to consumption."
),


list([
    "Inbound logistics: receiving goods from suppliers, quality check, put away.",
    "Warehousing: storing goods in a structured way for fast pick.",
    "Inventory management: real time tracking of stock with barcode or RFID.",
    "Order processing: pick, pack and label the order.",
    "Outbound logistics: shipping from warehouse to customer.",
    "Last mile delivery: from local hub to customer's door.",
    "Reverse logistics: receiving returns, inspecting, refunding or restocking.",
]),


list([
    "Self fulfilment: seller packs and ships every order, common for small sellers.",
    "3PL: third party logistics partner handles warehousing and delivery, e.g. Delhivery, BlueDart, Ecom Express.",
    "Marketplace fulfilment: seller uses the platform's warehouse and delivery, e.g. FBA, FBF.",
    "Drop shipping: seller does not hold stock, the supplier ships directly to the customer.",
    "Hyperlocal: delivery within hours from a nearby store, e.g. Blinkit, Swiggy Instamart.",
]),


list([
    "Just in time: stock arrives just before it is needed, low storage cost but risk of stockout.",
    "Economic order quantity: optimal order size that minimises total cost.",
    "ABC analysis: A items are high value, B medium, C low; manage them differently.",
    "Safety stock: extra stock to handle sudden demand or supply delay.",
    "Reorder point: stock level at which a new order should be placed.",
]),


list([
    "High return rate, especially in fashion (often 15 to 30 percent).",
    "Last mile delivery is expensive in remote and rural areas.",
    "Cash on delivery adds complexity, fake orders and reverse shipping cost.",
    "Packaging waste and carbon footprint of fast delivery.",
    "Stockouts and overselling in a multi channel environment.",
]),


list([
    "Use eco friendly packaging: recycled paper, no plastic.",
    "Consolidate orders to reduce trips.",
    "Use electric vehicles for last mile delivery.",
    "Offer slow shipping as a greener option.",
    "Take back and recycle old products.",
]),

    keyPoints([
        "E-commerce strategy covers vision, market, value and execution.",
        "Competitive advantage can be cost, focus, differentiation or network effects.",
        "Logistics covers inbound, warehouse, inventory, pick, pack, ship, returns.",
        "Fulfilment can be self, 3PL, marketplace, dropshipping or hyperlocal.",
        "Sustainable e-commerce is the future of the industry.",
        ]),
    ],

    {
        summary:
    "Master e-commerce strategy, SWOT analysis, competitive advantage, logistics, fulfilment models and inventory management.",
        minutes: 12,
            tags: ["strategy", "logistics", "fulfilment", "inventory", "important"],

                mcqs: [
                    mcq(
                        "SWOT stands for:",
                        ["Strengths Weaknesses Options Threats", "Strengths Weaknesses Opportunities Threats", "Sales Web Operations Tech", "System Web Online Trade"],
                        1,
                        "SWOT is Strengths, Weaknesses, Opportunities, Threats."
                    ),
                    mcq(
                        "3PL means:",
                        ["3rd Party Logistics", "3 Product Level", "3 Phase Logistics", "3rd Party Listing"],
                        0,
                        "3PL is a third party logistics provider."
                    ),
                    mcq(
                        "FBA stands for:",
                        ["Fulfilment by Amazon", "Free Bulk Auction", "Fast Build App", "First Buy Always"],
                        0,
                        "FBA is Fulfilment by Amazon, where Amazon stores and ships the seller's products."
                    ),
                    mcq(
                        "ABC analysis classifies inventory by:",
                        ["Colour", "Value and volume", "Name", "Date"],
                        1,
                        "ABC analysis groups items by annual consumption value, A being the most valuable."
                    ),
                    mcq(
                        "Dropshipping means:",
                        ["Holding large stock", "Supplier ships directly to customer", "Self delivery", "Wholesale buying"],
                        1,
                        "In dropshipping, the seller does not hold stock; the supplier ships directly."
                    ),
                    mcq(
                        "Average return rate in fashion e-commerce is:",
                        ["1 percent", "5 percent", "15 to 30 percent", "60 percent"],
                        2,
                        "Fashion typically has a return rate of 15 to 30 percent."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the components of an e-commerce strategy.",
                            "An e-commerce strategy is a long term plan that aligns every part of the online business toward a common goal. Its components are the vision and mission, which state the purpose; the target market and customer persona, which define who is being served; the value proposition, which explains why the customer should choose this business over alternatives; the product and pricing strategy, which decide what is sold and at what margin; the marketing and customer acquisition strategy, which plans how to reach and convert; the technology and platform strategy, which plans the website, app and data; the logistics and fulfilment strategy, which plans how orders reach customers; and the financial plan with key metrics such as GMV, AOV, CAC, LTV and contribution margin. The strategy must be reviewed every quarter and adjusted based on data and feedback.",
                            4
                        ),
                        qa(
                            "Differentiate between self fulfilment, 3PL and marketplace fulfilment.",
                            "In self fulfilment, the seller stores the goods, picks and packs each order, and arranges the shipping, often using local couriers. It gives full control but requires investment in space, staff and technology, and is hard to scale. In 3PL, the seller partners with a third party logistics provider such as Delhivery, Ecom Express or BlueDart, which handles warehousing, packing and delivery. It is flexible and scalable, but the seller pays per order and has less control over the customer experience. In marketplace fulfilment, the seller uses the platform's own warehouse and delivery network, such as Fulfilment by Amazon or Flipkart Fulfilment. It gives fast delivery, easy returns and Prime eligibility, but the fees are higher and the seller has the least control. The choice depends on order volume, geography and the desired delivery promise.",
                            4
                        ),
                        qa(
                            "What is ABC analysis in inventory management?",
                            "ABC analysis is a method of classifying inventory items based on their annual consumption value, so that the most important items receive the most attention. Class A items are the top 10 to 20 percent of SKUs that account for about 70 to 80 percent of the total value. They are managed very tightly, with frequent counts, accurate forecasts and close tracking. Class B items are the next 20 to 30 percent of SKUs, accounting for about 15 to 25 percent of the value; they are managed with moderate control. Class C items are the remaining 50 to 70 percent of SKUs, accounting for only 5 to 10 percent of the value; they are managed loosely, with larger order quantities and less frequent counts. ABC analysis helps focus effort where it matters most.",
                            4
                        ),
                        qa(
                            "Explain the challenges of e-commerce logistics in India.",
                            "E-commerce logistics in India faces several challenges. The first is the high return rate, especially in fashion, where it can be 15 to 30 percent, because customers cannot try the product before buying. Returns are expensive because the reverse journey costs money too. The second is the cost and complexity of last mile delivery in remote and rural areas, where addresses are vague and volumes are low. The third is cash on delivery, which is still popular in India and adds the risk of fake orders, the cost of handling cash, and slow cash flow. The fourth is the carbon footprint of fast delivery, with millions of cardboard boxes and last mile trips. The fifth is managing inventory across multiple channels and warehouses without overselling. Solving these challenges is a key competitive advantage for any e-commerce business.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Emerging Trends in E-Commerce
========================================================= */

const emergingTrends = createTopic(
    "emerging-trends-in-ecommerce",
    "Emerging Trends in E-Commerce",

    [

    list([
        "Buying and selling directly through social media platforms.",
        "Instagram Shopping, Facebook Marketplace, WhatsApp Business.",
        "Popular among small sellers and direct to consumer brands.",
        "Live shopping with real time video and chat is exploding in India.",
    ]),


list([
    "Buying through smart speakers and voice assistants.",
    "Alexa, Google Assistant, Siri.",
    "Hands free, ideal for reordering everyday items.",
    "Still small in India but growing fast with smart speakers.",
]),


list([
    "Recommendation engine based on browsing and purchase history.",
    "Visual search: upload a photo and find similar products.",
    "Chat bots for 24x7 customer support.",
    "Dynamic pricing based on demand, competition and inventory.",
    "Fraud detection using machine learning.",
]),


list([
    "AR try on for fashion, makeup, eyewear, furniture.",
    "Helps the customer visualise the product and reduces return rate.",
    "VR store walkthroughs for an immersive experience.",
    "IKEA, Lenskart, Nykaa and Amazon have AR features.",
]),


list([
    "Delivery in 10 to 30 minutes from a nearby dark store.",
    "Zepto, Blinkit, Swiggy Instamart, Dunzo, Bigbasket Now.",
    "Limited assortment, mostly groceries, snacks and essentials.",
    "High burn rate, profitability still a challenge.",
]),


list([
    "Brands sell directly to consumers through their own website or app.",
    "Avoids marketplace commissions, gives full control of data and brand.",
    "Examples: boAt, Mamaearth, Lenskart, Sugar Cosmetics.",
    "Use marketplaces only for discovery, and bring customers to their own site.",
]),


list([
    "Consumers, especially Gen Z, prefer brands that are sustainable and ethical.",
    "Eco friendly packaging, carbon neutral shipping, fair trade.",
    "Resale and rental: OLX, Rent the Runway, Zilingo, The Story of Stuff.",
    "Transparency: clear information on materials, labour and origin.",
]),


list([
    "Virtual stores and experiences in the metaverse.",
    "NFTs as proof of ownership for digital and physical goods.",
    "Decentralised marketplaces on the blockchain.",
    "Still experimental, but big brands are testing it.",
]),


list([
    "AI will drive personalisation, pricing and supply chain.",
    "Voice, AR and live shopping will become mainstream.",
    "Quick commerce will expand beyond groceries.",
    "D2C brands will grow alongside marketplaces.",
    "Sustainability will become a key differentiator.",
    "Cross border e-commerce will be easier with better logistics and payments.",
]),

    keyPoints([
        "Social commerce is the fastest growing channel.",
        "Voice, AR and AI are transforming the shopping experience.",
        "Quick commerce delivers in minutes from a local dark store.",
        "D2C brands are growing fast by owning the customer relationship.",
        "Sustainability is a key future differentiator.",
        ]),
    ],

    {
        summary:
    "Survey the emerging trends reshaping e-commerce: social, voice, AI, AR, quick commerce, D2C, sustainability and the metaverse.",
        minutes: 10,
            tags: ["trends", "social-commerce", "AI", "D2C", "important"],

                mcqs: [
                    mcq(
                        "Quick commerce delivers in:",
                        ["1 hour", "10 to 30 minutes", "1 day", "3 days"],
                        1,
                        "Quick commerce delivers in 10 to 30 minutes from a local dark store."
                    ),
                    mcq(
                        "D2C stands for:",
                        ["Digital to Customer", "Direct to Consumer", "Direct to Company", "Display to Customer"],
                        1,
                        "D2C is Direct to Consumer, where a brand sells through its own channels."
                    ),
                    mcq(
                        "Visual search is powered by:",
                        ["Blockchain", "AI and computer vision", "Manual review", "Spreadsheets"],
                        1,
                        "Visual search uses AI and computer vision to find similar products from a photo."
                    ),
                    mcq(
                        "Which is a quick commerce player?",
                        ["Zepto", "Shopify", "Wix", "Magento"],
                        0,
                        "Zepto is one of the leading quick commerce companies in India."
                    ),
                    mcq(
                        "Live commerce is popular on:",
                        ["Amazon", "Instagram and TikTok", "Yahoo", "Bing"],
                        1,
                        "Live commerce is popular on Instagram, TikTok and other social platforms."
                    ),
                    mcq(
                        "AR try on helps to:",
                        ["Lower price", "Reduce returns", "Speed up shipping", "Increase tax"],
                        1,
                        "AR try on helps the customer see the product before buying, reducing returns."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain social commerce and its importance in India.",
                            "Social commerce is the practice of buying and selling goods and services directly through social media platforms such as Instagram, Facebook, YouTube, WhatsApp and TikTok. It combines the social experience of following influencers and friends with the convenience of one click purchase. India has become one of the largest social commerce markets in the world, driven by the penetration of low cost smartphones, cheap data, UPI payments and a young population that spends hours on social media every day. Social commerce is especially powerful for small sellers and direct to consumer brands, who can build a following and convert it into sales without owning a website. Live shopping, where a host demonstrates products in real time and viewers can buy with one click, is the fastest growing format and is already a multibillion dollar trend in China.",
                            4
                        ),
                        qa(
                            "What is quick commerce and how does it work?",
                            "Quick commerce, also called q commerce, is the delivery of orders to customers in 10 to 30 minutes from a nearby dark store or micro warehouse. It began with groceries and daily essentials, but now covers snacks, personal care and even small electronics. The model relies on a network of small warehouses, called dark stores, located in dense urban neighbourhoods, each holding a few thousand SKUs. When an order is placed on the app, the nearest dark store is selected, the items are picked and packed in a few minutes, and a delivery partner on a bike or scooter drops it at the door. Examples in India are Zepto, Blinkit, Swiggy Instamart and Dunzo. Quick commerce is changing urban shopping habits, but it is capital intensive, with thin margins and high burn.",
                            4
                        ),
                        qa(
                            "Explain the role of AI in modern e-commerce.",
                            "Artificial intelligence has become the engine of modern e-commerce. It powers the recommendation engine that suggests products based on the customer's browsing, purchase and search history, which can lift conversion rates by 20 to 30 percent. It drives visual search, where the customer can upload a photo and find similar products. It powers the chat bots that provide 24x7 customer support, and the natural language search that understands queries written in everyday language. It is used in dynamic pricing, where the price is adjusted in real time based on demand, competition and inventory. It is used in fraud detection, where models flag suspicious transactions based on hundreds of signals. It is used in demand forecasting, which predicts what the customer will buy next, and in warehouse robotics, which speeds up pick and pack. AI is no longer optional in e-commerce; it is a competitive necessity.",
                            4
                        ),
                        qa(
                            "What is the D2C model and why is it growing?",
                            "The Direct to Consumer, or D2C, model is one in which a brand sells its products directly to consumers through its own website, app and social channels, without depending on marketplaces such as Amazon or Flipkart. Examples in India are boAt in audio, Mamaearth in clean beauty, Lenskart in eyewear and Sugar Cosmetics in makeup. The model is growing because it gives the brand full control of the customer relationship, the data, the pricing and the brand experience, which are the biggest weaknesses of selling only on marketplaces. The brand can also save the marketplace commission, which is typically 15 to 30 percent. The challenge is that the brand must do its own marketing, logistics and customer service, which requires investment. Most successful D2C brands use marketplaces for discovery and then bring the customer to their own site for repeat purchases.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    ecomSecurity,
    legalFramework,
    buildingWebsite,
    strategyLogistics,
    emergingTrends,
];


