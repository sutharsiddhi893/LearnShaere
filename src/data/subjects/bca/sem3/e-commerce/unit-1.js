/* =========================================================
   BCA � SEM 3 � E-Commerce
   UNIT 1 � Introduction to E-Commerce and Business Models
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
   TOPIC 1 � Introduction to E-Commerce
========================================================= */

const introductionToEcommerce = createTopic(
    "introduction-to-e-commerce",
    "Introduction to E-Commerce",

    [
        definition(
            "E-Commerce",
            "The buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet."
        ),

        text(
            "E-commerce, or electronic commerce, has transformed the way businesses operate and consumers shop. From a small bookstore in 1995 to trillion dollar platforms like Amazon, Alibaba and Flipkart, e-commerce has become a defining force of the modern economy."
        ),

        heading("History of E-Commerce"),

        list([
            "1970s � Electronic Data Interchange (EDI) for B2B transactions.",
            "1990s � World Wide Web made e-commerce possible for the masses.",
            "1994 � Netscape Navigator browser launched, popularised the web.",
            "1995 � Amazon and eBay founded.",
            "2004 � Web 2.0 and social media added new channels.",
            "2007 � iPhone ushered in the mobile commerce era.",
            "2010s � Cloud, AI and mobile-first design transformed the experience.",
        ]),

        heading("Why E-Commerce is Important"),

    list([
        "Reaches a global customer base 24x7.",
        "Lower operating costs than physical stores.",
        "Personalised recommendations and targeted marketing.",
        "Easy comparison shopping and customer reviews.",
        "Faster supply chains and just in time inventory.",
        "New business models like dropshipping and subscription boxes.",
    ]),


list([
    "For customers: convenience, choice, lower prices, home delivery.",
    "For businesses: global reach, lower costs, richer customer data, easier scaling.",
    "For society: job creation, financial inclusion, support for small sellers.",
]),


list([
    "Cannot touch or try the product before buying.",
    "Risk of fraud and data theft.",
    "Delivery delays, returns and customer service issues.",
    "Heavy dependence on internet and digital literacy.",
    "Increased packaging waste and carbon footprint of delivery.",
    "Predatory pricing and monopolisation by big platforms.",
]),

    note(
        "The first online transaction is often credited to a Stanford student in 1971 or 1972, who used ARPANET to arrange the sale of a small amount of marijuana to his classmates. The first secure retail transaction over the Web is generally dated to 1994, when NetMarket processed the sale of a Sting CD.",
        "exam",
        "Frequently Asked"
    ),


table(
    ["Basis", "Traditional", "E-Commerce"],
    [
        ["Location", "Physical store", "Online website or app"],
        ["Hours", "Fixed", "24 x 7"],
        ["Reach", "Local", "Global"],
        ["Cost", "Higher (rent, staff)", "Lower"],
        ["Speed", "Immediate", "Delivery time needed"],
        ["Personal touch", "Yes, in person", "Limited, via chat"],
        ["Returns", "Easy", "Often difficult"],
        ["Data", "Limited", "Rich, can be analysed"],
    ]
),

    keyPoints([
        "E-commerce is buying and selling over the internet.",
        "Amazon was founded in 1995 and became the first giant.",
        "Advantages include 24x7 reach, lower cost, and global customers.",
        "Disadvantages include fraud, delivery delays and no physical inspection.",
        "M-commerce is the fastest growing segment today.",
        ]),
    ],

    {
        summary:
    "Understand the meaning, history, importance, advantages and disadvantages of e-commerce compared to traditional commerce.",
        minutes: 10,
            tags: ["ecommerce", "introduction", "important"],

                mcqs: [
                    mcq(
                        "E-commerce means:",
                        ["Buying in a shop", "Buying and selling online", "Selling only to businesses", "Trading stocks"],
                        1,
                        "E-commerce is the buying and selling of goods and services over the internet."
                    ),
                    mcq(
                        "Amazon was founded in:",
                        ["1990", "1994", "1995", "1998"],
                        2,
                        "Amazon was founded in 1995 by Jeff Bezos."
                    ),
                    mcq(
                        "Which is an advantage of e-commerce?",
                        ["Limited hours", "Higher rent", "Global reach", "Only local"],
                        2,
                        "E-commerce can reach a global customer base 24x7."
                    ),
                    mcq(
                        "Which is a disadvantage of e-commerce?",
                        ["Personal touch", "Cannot touch product before buying", "Lower price", "More variety"],
                        1,
                        "Customers cannot physically inspect the product before purchase."
                    ),
                    mcq(
                        "The first web browser popularised was:",
                        ["Mosaic", "Netscape", "Internet Explorer", "Chrome"],
                        1,
                        "Netscape Navigator in 1994 popularised the World Wide Web."
                    ),
                    mcq(
                        "M-commerce means:",
                        ["Mail commerce", "Mobile commerce", "Money commerce", "Market commerce"],
                        1,
                        "M-commerce is e-commerce done on a mobile device."
                    ),
                ],

                    questions: [
                        qa(
                            "Define e-commerce and give two examples.",
                            "E-commerce, short for electronic commerce, is the buying and selling of goods and services, or the transmission of funds and data, over an electronic network, primarily the internet. It also includes related activities such as online marketing, online customer service and supply chain management. Two well known examples are Amazon, the world's largest online retailer, and Flipkart, a leading Indian e-commerce marketplace. Both allow customers to browse, order and pay for products from a website or mobile app and have them delivered to their home.",
                            4
                        ),
                        qa(
                            "Differentiate between e-commerce and traditional commerce.",
                            "Traditional commerce is conducted in a physical store with face to face interaction between buyer and seller, fixed business hours and a limited geographical reach. The shop has higher costs of rent, staff and inventory. E-commerce is conducted over the internet, so the store is a website or app that is open 24x7 and can be reached by anyone in the world. The costs are lower, choice is wider and prices are often lower because of lower overheads. The trade offs are that the customer cannot touch the product, must wait for delivery, and faces the risk of fraud or data theft. Both models will continue to coexist for the foreseeable future.",
                            4
                        ),
                        qa(
                            "Briefly trace the history of e-commerce.",
                            "The roots of e-commerce go back to the 1970s, when companies used Electronic Data Interchange, or EDI, to send purchase orders and invoices over private networks. The breakthrough came with the World Wide Web in the early 1990s. In 1994, Netscape Navigator popularised the web, and the first secure online retail transaction was processed. Amazon and eBay were founded in 1995, marking the start of the modern e-commerce era. The launch of Web 2.0 around 2004 added user generated content and social media. The iPhone in 2007 ushered in mobile commerce. The 2010s saw cloud computing, AI and one day delivery transform the experience, and today e-commerce is a multi trillion dollar global industry.",
                            4
                        ),
                        qa(
                            "List the advantages and disadvantages of e-commerce.",
                            "E-commerce has many advantages. Customers enjoy 24x7 shopping from home, wider choice, easy price comparison, access to reviews and home delivery. Businesses benefit from global reach, lower operating costs, richer customer data, easier scaling and new business models like dropshipping. Society gains jobs, financial inclusion and support for small sellers. The disadvantages include the inability to touch or try the product, the risk of fraud and data theft, delivery delays and return hassles, dependence on internet and digital literacy, increased packaging waste, and concerns about monopolisation by a few giant platforms. The industry is addressing these issues through better logistics, secure payment systems and stronger regulation.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � E-Commerce Business Models
========================================================= */

const businessModels = createTopic(
    "ecommerce-business-models",
    "E-Commerce Business Models",

    [
        definition(
            "E-Commerce Business Model",
            "The strategy a business uses to create, deliver and capture value in the online environment, including who its customers are, what it sells, how it makes money and what differentiates it from competitors."
        ),


    table(
        ["Model", "Full Form", "Example"],
        [
            ["B2C", "Business to Consumer", "Amazon selling to a shopper"],
            ["B2B", "Business to Business", "Alibaba connecting wholesalers"],
            ["C2C", "Consumer to Consumer", "eBay, OLX"],
            ["C2B", "Consumer to Business", "Freelancer, influencer marketing"],
            ["B2G", "Business to Government", "Tender portals like GeM"],
            ["G2C", "Government to Citizen", "Income tax e-filing, passport"],
            ["B2E", "Business to Employee", "Internal HR portal"],
            ["D2C", "Direct to Consumer", "Brand selling through its own site"],
        ]
    ),

        note(
            "B2C is the most familiar model, but B2B is much larger in total value because businesses buy in bulk. In India, the government e-marketplace (GeM) is a major B2G portal that allows small sellers to sell to government departments online.",
            "exam",
            "Frequently Asked"
        ),


list([
    "Single brand store (D2C) � owned and operated by the brand itself, e.g. apple.com, nike.com.",
    "Online marketplace � third party platform that hosts many sellers, e.g. Amazon, Flipkart, eBay.",
    "Aggregator � collects services from many providers and offers them under one brand, e.g. Ola, Uber, Zomato.",
    "Wholesale or B2B portal � sells in bulk to retailers, e.g. IndiaMart, TradeIndia.",
    "Subscription box � recurring delivery of curated products, e.g. Birchbox, HelloFresh.",
    "Dropshipping � seller does not hold inventory, ships directly from supplier to customer.",
]),


table(
    ["Model", "How It Makes Money", "Example"],
    [
        ["Sales", "Margin on each product sold", "Amazon, Flipkart"],
        ["Commission", "Percentage of each transaction", "Airbnb, Uber"],
        ["Subscription", "Monthly or yearly fee", "Netflix, Amazon Prime"],
        ["Advertising", "Charges for sponsored listings and ads", "Google, Facebook"],
        ["Freemium", "Free basic, paid premium", "Spotify, LinkedIn"],
        ["Lead generation", "Charges for qualified leads", "JustDial, Practo"],
        ["Transaction fee", "Small charge on every transaction", "PayPal, Razorpay"],
        ["Listing fee", "Fee to list a product or property", "OLX, MagicBricks"],
    ]
),


list([
    "Desktop e-commerce � traditional websites accessed from a computer.",
    "Mobile commerce (M-commerce) � buying and selling through a mobile app or mobile website.",
    "Social commerce � buying and selling through social media platforms such as Instagram, Facebook, WhatsApp.",
    "Voice commerce � buying through smart speakers and voice assistants like Alexa.",
    "Live commerce � live streaming with real time buying, popular in China and growing in India.",
    "Marketplace model � a platform that connects many buyers and sellers.",
]),


text(
    "Online marketplaces like Amazon and Flipkart earn from several streams: commission on each sale, fees for fulfilment by their warehouses, advertising for promoted listings, subscription from sellers for premium tools, and Prime or loyalty memberships from buyers."
),


list([
    "GMV � Gross Merchandise Value, total value of goods sold.",
    "AOV � Average Order Value.",
    "CAC � Customer Acquisition Cost.",
    "LTV � Lifetime Value of a customer.",
    "Conversion rate � percentage of visitors who buy.",
    "Cart abandonment rate � percentage of carts not converted to orders.",
    "Return rate � percentage of orders returned.",
]),

    keyPoints([
        "B2C, B2B, C2C, C2B are the main models based on parties.",
        "Marketplace, D2C, aggregator and subscription are common seller models.",
        "Revenue comes from sales, commission, ads, subscription and freemium.",
        "M-commerce and social commerce are the fastest growing segments.",
        "GMV, AOV, CAC and LTV are the key metrics.",
        ]),
    ],

    {
        summary:
    "Master the classification of e-commerce business models by parties, seller, revenue and technology, along with key metrics.",
        minutes: 12,
            tags: ["ecommerce", "model", "b2c", "marketplace", "important"],

                mcqs: [
                    mcq(
                        "B2B stands for:",
                        ["Back to Business", "Business to Business", "Brand to Brand", "Buyer to Bank"],
                        1,
                        "B2B is Business to Business."
                    ),
                    mcq(
                        "Amazon is an example of:",
                        ["B2B", "B2C", "C2C", "G2C"],
                        1,
                        "Amazon primarily sells to consumers, so it is B2C."
                    ),
                    mcq(
                        "GeM portal is for:",
                        ["B2C", "B2B", "B2G", "C2C"],
                        2,
                        "Government e-Marketplace allows sellers to sell to the government, so it is B2G."
                    ),
                    mcq(
                        "GMV stands for:",
                        ["Gross Merchandise Value", "General Market Value", "Government Money Value", "Good Market Value"],
                        0,
                        "GMV is the total value of goods sold through the platform."
                    ),
                    mcq(
                        "Freemium model means:",
                        ["Totally free", "Free basic, paid premium", "Only paid", "Only subscription"],
                        1,
                        "Freemium offers a free basic version and a paid premium version."
                    ),
                    mcq(
                        "Which is social commerce?",
                        ["amazon.com", "Instagram shopping", "apple.com", "geM.gov.in"],
                        1,
                        "Instagram shopping is a form of social commerce."
                    ),
                ],

                    questions: [
                        qa(
                            "Classify the major e-commerce business models.",
                            "E-commerce models can be classified in four ways. By the parties involved: B2C, such as Amazon selling to a customer; B2B, such as Alibaba connecting businesses; C2C, such as eBay for individuals; C2B, such as freelancers selling services; and B2G, such as GeM portal for government purchases. By the type of seller: D2C brand stores, online marketplaces, aggregators, B2B portals, subscription boxes and dropshipping. By the revenue model: product sales, commission, subscription, advertising, freemium, lead generation and listing fees. By the technology: desktop, mobile, social, voice, live and marketplace. A real company usually combines several of these into its strategy.",
                            4
                        ),
                        qa(
                            "Differentiate between B2C and B2B e-commerce.",
                            "B2C, or Business to Consumer, is the model where a business sells directly to the end customer, such as Amazon, Flipkart or Nykaa. Orders are usually small in value but very high in number, the marketing is aimed at emotions and impulse, and the experience is short. B2B, or Business to Business, is the model where one business sells to another, such as Alibaba, IndiaMART or SAP Ariba. Orders are large, recurring, often governed by contracts, the sales cycle is long, and the decision is taken by a team. In total value, B2B is much larger than B2C worldwide, even though B2C gets more media attention.",
                            4
                        ),
                        qa(
                            "Explain the revenue model of an online marketplace.",
                            "An online marketplace such as Amazon or Flipkart earns from several streams. The biggest is commission, a percentage of the value of each transaction made on the platform, paid by the third party seller. In addition, the marketplace charges a fee for using its warehouses and delivery service, called Fulfilment by Amazon or Flipkart. Sellers can pay to have their products appear higher in search results, which is the advertising stream. Sellers also pay a subscription for advanced seller tools and analytics. Finally, the marketplace sells its own membership programme, such as Amazon Prime or Flipkart Plus, which gives buyers faster delivery and other benefits, generating recurring revenue. The combination of streams allows the marketplace to operate with very thin margins and still be profitable.",
                            4
                        ),
                        qa(
                            "List the key metrics of an e-commerce business.",
                            "The most important metrics are GMV, AOV, CAC, LTV, conversion rate, cart abandonment rate and return rate. GMV, or Gross Merchandise Value, is the total rupee value of goods sold through the platform, including returns and cancellations, and is a measure of size. AOV, or Average Order Value, is the average value of each order, calculated as total revenue divided by number of orders. CAC, or Customer Acquisition Cost, is the cost of marketing and sales required to acquire one new paying customer. LTV, or Lifetime Value, is the total revenue a customer will generate over their lifetime with the business. Conversion rate is the percentage of visitors who complete a purchase. Cart abandonment rate is the percentage of customers who add items to the cart but do not complete the purchase. Return rate is the percentage of orders that are returned by the customer. A healthy business has a high LTV to CAC ratio, a low return rate and a low cart abandonment rate.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � E-Commerce Infrastructure
========================================================= */

const infrastructure = createTopic(
    "ecommerce-infrastructure",
    "E-Commerce Infrastructure",

    [
        definition(
            "E-Commerce Infrastructure",
            "The set of hardware, software, networks and services that together enable an online business to operate, scale and stay secure."
        ),


    list([
        "Web servers that host the website and respond to user requests.",
        "Application servers that run the business logic.",
        "Database servers that store product, customer and order data.",
        "Load balancers that distribute traffic across many servers.",
        "CDN � Content Delivery Network, caches content near the user for speed.",
        "Firewalls, IDS and IPS for security.",
        "Backup and disaster recovery infrastructure.",
    ]),


list([
    "Operating system: Linux is the most common in production.",
    "Web server: Nginx or Apache.",
    "Programming language: JavaScript (Node.js), Python, Java, PHP, Ruby, Go, C#.",
    "Framework: Express, Django, Spring, Laravel, Rails.",
    "Database: MySQL, PostgreSQL, MongoDB, Redis for caching.",
    "Frontend: React, Angular, Vue, Svelte, Next.js.",
    "Search: Elasticsearch, Solr, Algolia.",
    "Message queue: RabbitMQ, Kafka, Redis Streams.",
]),

    note(
        "Most modern e-commerce sites are built using the LAMP, MEAN or MERN stack. LAMP stands for Linux, Apache, MySQL and PHP. MEAN is MongoDB, Express, Angular and Node.js. MERN is the same but with React instead of Angular.",
        "tip",
        "Stacks"
    ),


list([
    "IaaS gives virtual machines, storage and networks on demand.",
    "PaaS gives a platform to deploy code without managing servers.",
    "SaaS gives ready to use software like email, CRM, analytics.",
    "Serverless lets code run in response to events, paying only for execution time.",
    "Auto scaling adjusts capacity based on traffic, ideal for sale events like Diwali.",
]),


list([
    "Payment gateway: encrypts and routes payment data from the website to the bank.",
    "Payment processor: handles the actual transfer of funds between banks.",
    "Acquiring bank: the merchant's bank that receives the funds.",
    "Issuing bank: the customer's bank that authorises the transaction.",
    "Examples: Razorpay, PayU, Stripe, PayPal, CCAvenue.",
    "UPI, debit cards, credit cards, net banking, wallets and BNPL are popular methods in India.",
]),


list([
    "Warehousing: large fulfilment centres near major cities.",
    "Inventory management: tracking stock in real time.",
    "Order fulfilment: pick, pack and ship within promised time.",
    "Last mile delivery: from local hub to customer's door.",
    "Returns and reverse logistics: receiving, inspecting and refunding.",
    "Partners: India Post, Delhivery, BlueDart, DHL, FedEx, Amazon Logistics.",
]),


list([
    "SSL or TLS certificate for HTTPS and encryption in transit.",
    "WAF � Web Application Firewall, blocks common attacks like SQL injection.",
    "DDoS protection services like Cloudflare or AWS Shield.",
    "PCI DSS compliance for handling card data.",
    "Tokenisation: store a random token instead of the real card number.",
    "Regular security audits and penetration testing.",
]),


list([
    "Google Analytics for traffic and behaviour.",
    "Mixpanel or Amplitude for product analytics.",
    "Customer Data Platform (CDP) for a 360 degree view of the customer.",
    "Email and SMS service providers: SendGrid, Mailgun, Twilio.",
    "Marketing automation, A/B testing and personalisation engines.",
]),

    keyPoints([
        "Infrastructure includes servers, network, software, security and cloud.",
        "LAMP, MEAN and MERN are common stacks.",
        "Payment gateway, processor and bank complete the flow.",
        "Logistics covers warehouse to last mile delivery.",
        "Security needs SSL, WAF, DDoS protection and PCI compliance.",
        ]),
    ],

    {
        summary:
    "Master the hardware, software, cloud, payment, logistics, security and analytics infrastructure of an e-commerce platform.",
        minutes: 11,
            tags: ["infrastructure", "cloud", "payment", "logistics", "important"],

                mcqs: [
                    mcq(
                        "LAMP stands for:",
                        ["Linux Apache MySQL PHP", "Linux Apache Mongo Python", "Local Apache MySQL PHP", "Linux API Mongo PHP"],
                        0,
                        "LAMP is Linux, Apache, MySQL, PHP."
                    ),
                    mcq(
                        "A CDN is used for:",
                        ["Database", "Caching content near user", "Sending email", "Encryption"],
                        1,
                        "A CDN delivers content from a location close to the user for speed."
                    ),
                    mcq(
                        "Which is a payment gateway?",
                        ["MySQL", "Razorpay", "Nginx", "MongoDB"],
                        1,
                        "Razorpay is a popular payment gateway in India."
                    ),
                    mcq(
                        "PCI DSS is a standard for:",
                        ["Payment card data", "Web design", "SEO", "Email"],
                        0,
                        "PCI DSS is the Payment Card Industry Data Security Standard."
                    ),
                    mcq(
                        "Which service provides DDoS protection?",
                        ["MySQL", "Cloudflare", "Express", "React"],
                        1,
                        "Cloudflare provides DDoS protection and CDN."
                    ),
                    mcq(
                        "Last mile delivery means:",
                        ["Long haul transport", "From local hub to customer", "Import from abroad", "Air shipping"],
                        1,
                        "Last mile is the final leg from the local hub to the customer's door."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the components of e-commerce infrastructure.",
                            "E-commerce infrastructure is the set of hardware, software, networks and services that together allow an online business to operate, scale and stay secure. It has six main components. Hardware and network: web servers, application servers, database servers, load balancers, CDNs, firewalls and backup. Software: the operating system, web server, programming language, framework, database, frontend and search engine. Cloud: IaaS for raw compute, PaaS for managed platforms, SaaS for ready to use software, and serverless for event driven code. Payments: gateway, processor, acquiring and issuing banks. Logistics: warehousing, inventory, fulfilment, last mile delivery and returns. Security: SSL or TLS, WAF, DDoS protection, PCI DSS and tokenisation. A well designed infrastructure handles traffic spikes, recovers from failure and protects customer data.",
                            4
                        ),
                        qa(
                            "Differentiate between a payment gateway and a payment processor.",
                            "A payment gateway is the front end of the payment process. It is the technology on the merchant website that collects the customer's card or UPI details, encrypts them and securely routes the request to the payment processor. Examples in India are Razorpay, PayU and CCAvenue. A payment processor is the back end system that takes the encrypted payment data, communicates with the issuing bank, checks the customer's balance, approves or declines the transaction, and transfers the funds to the acquiring bank. Examples are Visa, Mastercard and RuPay. The two are complementary: the gateway handles the user experience and security, while the processor handles the banking and the actual transfer of funds.",
                            4
                        ),
                        qa(
                            "What is the role of cloud computing in e-commerce?",
                            "Cloud computing is the backbone of most modern e-commerce businesses. Instead of buying and maintaining their own servers, they rent compute, storage and networking from providers such as Amazon Web Services, Microsoft Azure or Google Cloud. This allows them to scale up instantly during a sale event like Diwali, scale back down when traffic falls, and only pay for what they use. PaaS offerings like Heroku and AWS Beanstalk let developers deploy code without managing servers. Serverless computing runs code only when triggered by an event, such as a new order, and bills per millisecond. Cloud also offers managed databases, CDNs, AI services and security tools, all on demand, which makes e-commerce both faster to build and cheaper to run.",
                            4
                        ),
                        qa(
                            "Explain the importance of security infrastructure in e-commerce.",
                            "Security is critical for e-commerce because customers share sensitive data such as card numbers, addresses and personal information, and any breach leads to loss of trust, legal liability and fines. The first line is SSL or TLS, which encrypts the data in transit between the browser and the server. The second line is a Web Application Firewall, or WAF, that blocks common attacks such as SQL injection, cross site scripting and bad bots. The third line is DDoS protection services such as Cloudflare that absorb floods of traffic meant to take the site offline. PCI DSS is the standard for handling card data, requiring tokenisation, encryption and regular audits. Beyond this, secure coding, multi factor authentication for staff, regular security audits and a tested incident response plan are essential.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � E-Commerce Payment Systems
========================================================= */

const paymentSystems = createTopic(
    "ecommerce-payment-systems",
    "E-Commerce Payment Systems",

    [
        definition(
            "Payment System",
            "A set of instruments, procedures and institutions that enable the transfer of money from a buyer to a seller, in the online context through digital channels."
        ),

        heading("Cash on Delivery (COD)"),

    list([
        "Customer pays in cash at the time of delivery.",
        "Most popular in India for first time and high value orders.",
        "Disadvantage: high return rate, slow cash flow, logistics cost.",
    ]),


list([
    "Credit card: customer pays later, billed monthly.",
    "Debit card: customer pays immediately from bank account.",
    "Processed through Visa, Mastercard or RuPay networks.",
    "Requires PCI DSS compliance by the merchant.",
    "3D Secure adds an extra OTP step for safety.",
]),

    heading("UPI (Unified Payments Interface)"),

list([
    "Real time payment system developed by NPCI in India.",
    "Allows instant transfer between any two bank accounts using a virtual address like name@bank.",
    "Free for individuals, very low cost for merchants.",
    "Driven by apps such as Google Pay, PhonePe, Paytm and BHIM.",
    "UPI has become the most popular online payment method in India.",
]),

    note(
        "UPI processed over 12 billion transactions in a single month in 2023, more than any other digital payment system in the world. It is built on the IMPS backbone and is available 24x7, including on bank holidays.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Customer logs into their bank account to authorise payment.",
    "Still common for high value B2B and government payments.",
    "Slower than UPI but more familiar to older customers.",
]),


list([
    "Prepaid digital wallets that store money for online payments.",
    "Examples: Paytm, Mobikwik, Amazon Pay Balance, JioMoney.",
    "Convenient for small, frequent purchases and for users without cards.",
]),


list([
    "Customer buys now and pays in 3 to 24 instalments, often interest free.",
    "Examples: Simpl, LazyPay, ZestMoney, Amazon Pay Later.",
    "Very popular among young customers for fashion and electronics.",
]),


list([
    "Decentralised digital currencies like Bitcoin, Ethereum, USDT.",
    "Very volatile, not widely accepted in mainstream e-commerce.",
    "Some niche stores and international sellers accept crypto.",
    "Regulatory framework still evolving in India.",
]),


list([
    "Customer adds items to cart and proceeds to checkout.",
    "Customer chooses a payment method and enters details.",
    "The website encrypts the details and sends them to the payment gateway.",
    "The gateway forwards the request to the payment processor.",
    "The processor contacts the issuing bank for authorisation.",
    "On approval, the funds are reserved and the customer is informed.",
    "The transaction is settled, usually within 1 to 3 working days.",
]),


list([
    "Encryption: SSL or TLS protects data in transit.",
    "Tokenisation: card number is replaced with a random token.",
    "3D Secure: extra layer of OTP based authentication.",
    "Fraud detection: AI models flag suspicious transactions.",
    "PCI DSS: standard for any merchant that stores or processes cards.",
]),

    keyPoints([
        "COD is still popular in India but expensive for the seller.",
        "UPI is the most popular online payment method in India.",
        "Cards and net banking are common for higher value orders.",
        "BNPL is growing fast among young customers.",
        "PCI DSS is the standard for handling card data securely.",
        ]),
    ],

    {
        summary:
    "Master the major online payment methods in India, the flow of a transaction and the security standards.",
        minutes: 11,
            tags: ["payment", "upi", "card", "cod", "important"],

                mcqs: [
                    mcq(
                        "UPI was developed by:",
                        ["RBI", "SEBI", "NPCI", "Ministry of Finance"],
                        2,
                        "UPI was developed by the National Payments Corporation of India."
                    ),
                    mcq(
                        "BNPL stands for:",
                        ["Bank Net Pay Later", "Buy Now Pay Later", "Best Net Pay List", "Big Number Pay List"],
                        1,
                        "BNPL allows customers to pay in instalments after purchase."
                    ),
                    mcq(
                        "Which is a wallet?",
                        ["Razorpay", "Paytm", "Visa", "Stripe"],
                        1,
                        "Paytm is a popular digital wallet in India."
                    ),
                    mcq(
                        "PCI DSS is for:",
                        ["Card data security", "Web design", "SEO", "Email"],
                        0,
                        "PCI DSS is the standard for securing payment card data."
                    ),
                    mcq(
                        "3D Secure adds:",
                        ["Encryption", "OTP based authentication", "Tokenisation", "Compression"],
                        1,
                        "3D Secure adds an extra layer of OTP based authentication."
                    ),
                    mcq(
                        "Which is most popular online payment in India?",
                        ["Card", "UPI", "Net banking", "Wallet"],
                        1,
                        "UPI processes more than 10 billion transactions a month and is the leader."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the flow of an online card payment.",
                            "When the customer chooses to pay by card, the website collects the card details through a secure form. The data is encrypted by the payment gateway and sent over a secure channel to the payment processor. The processor contacts the issuing bank, the customer's bank, to check the card, the available balance and any fraud rules. The issuing bank either approves or declines the transaction, and the response is sent back through the processor to the gateway and then to the website. On approval, the customer sees a success page and receives an order confirmation by email and SMS. The actual transfer of money from the issuing bank to the acquiring bank, the merchant's bank, happens at the end of the day, a process called settlement, which usually takes 1 to 3 working days.",
                            4
                        ),
                        qa(
                            "What is UPI and why has it become so popular?",
                            "UPI, the Unified Payments Interface, is a real time payment system developed by the National Payments Corporation of India in 2016. It allows instant transfer of money between any two bank accounts through a mobile app, using a virtual address such as amit@okhdfcbank. The customer does not need to enter card numbers or net banking passwords; a UPI PIN and a click are enough. UPI is free for individuals and very cheap for merchants, which has driven adoption. It is also interoperable, so any UPI app works with any bank. UPI has become the most popular online payment method in India, with billions of transactions every month, and has inspired similar systems in other countries.",
                            4
                        ),
                        qa(
                            "Differentiate between COD, prepaid and BNPL.",
                            "In Cash on Delivery, or COD, the customer pays in cash when the order is delivered, so there is no online payment and the seller bears the risk of returns and fake orders. In prepaid, the customer pays online before the order is shipped, which improves cash flow and reduces returns, but requires trust in the website. In Buy Now Pay Later, or BNPL, the customer pays a fraction now and the rest in 3 to 24 instalments, often interest free, with the BNPL provider paying the merchant in full up front. BNPL has become popular for fashion and electronics among young customers, but regulators have raised concerns about over indebtedness. The best mix for a seller is to encourage prepaid by offering small discounts, while still giving COD as an option for first time buyers.",
                            4
                        ),
                        qa(
                            "Explain the security measures used in online payments.",
                            "Online payment security relies on several layers. Encryption using SSL or TLS protects the data while it travels between the browser and the server, so even if it is intercepted it cannot be read. Tokenisation replaces the real card number with a random token, so the merchant never stores the actual card data. 3D Secure, also known as Verified by Visa or Mastercard SecureCode, adds an extra step where the customer enters an OTP sent to their phone. AI based fraud detection models flag suspicious transactions based on amount, location, device and behaviour. The Payment Card Industry Data Security Standard, or PCI DSS, is a set of rules that any merchant handling card data must follow, covering encryption, access control, monitoring and regular audits. Together these measures protect the customer and the merchant.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � E-Commerce Marketing and Customer Retention
========================================================= */

const marketingRetention = createTopic(
    "ecommerce-marketing-and-retention",
    "E-Commerce Marketing and Customer Retention",

    [
        definition(
            "Digital Marketing",
            "The promotion of products and services through digital channels such as search engines, social media, email, mobile apps and websites to reach and engage customers."
        ),

        heading("Search Engine Optimisation (SEO)"),

    list([
        "Improving the website to rank higher in organic search results.",
        "On page: title, description, headings, content, image alt text.",
        "Off page: backlinks from other reputable sites.",
        "Technical: site speed, mobile friendliness, structured data.",
        "Tools: Google Search Console, Ahrefs, SEMrush.",
    ]),

        heading("Search Engine Marketing (SEM)"),

list([
    "Paid ads on search engines such as Google Ads.",
    "Bid on keywords, pay per click.",
    "Top of page, above organic results.",
    "Highly measurable: impressions, clicks, conversions, cost.",
]),


list([
    "Build a presence on Facebook, Instagram, YouTube, Twitter, LinkedIn.",
    "Share content, run contests, partner with influencers.",
    "Use paid ads targeted by age, location, interest, behaviour.",
    "Track engagement, reach, leads and sales.",
]),


list([
    "Welcome email when a customer signs up.",
    "Abandoned cart reminder with a small discount.",
    "Order confirmation, shipping and delivery updates.",
    "Post purchase review request after 7 days.",
    "Personalised recommendations based on past purchases.",
    "Festival and seasonal campaigns.",
]),


list([
    "Blog posts, videos, infographics and guides.",
    "Builds trust, improves SEO and educates the customer.",
    "Examples: a fashion site posts style guides; a tech site posts how to videos.",
]),


list([
    "Partner with social media influencers to promote products.",
    "Can be very effective in fashion, beauty, food and travel.",
    "Choose influencers whose audience matches your target.",
    "Disclose paid partnerships to maintain trust.",
]),


definition(
    "Customer Retention",
    "The set of strategies used to keep existing customers coming back, because repeat customers are cheaper to retain and more profitable than new ones."
),


list([
    "Loyalty programs: points, tiers, exclusive perks.",
    "Personalised recommendations: 'You may also like'.",
    "Excellent customer service: chat, phone, email, social media.",
    "Easy returns and refunds, no questions asked.",
    "Subscription and auto reorder for consumables.",
    "Re engagement emails and win back offers for inactive customers.",
]),


list([
    "Impression � number of times an ad is shown.",
    "Click � number of clicks on the ad.",
    "CTR � click through rate, clicks divided by impressions.",
    "Add to cart � number of items added.",
    "Checkout � number of customers who start checkout.",
    "Purchase � number of completed orders.",
    "Conversion rate � purchases divided by visitors.",
]),

    heading("Customer Lifetime Value (CLV)"),

list([
    "Average order value � purchase frequency � customer lifespan.",
    "A high CLV is the most important indicator of a healthy business.",
    "A common rule is that CLV should be at least 3 times the CAC.",
    "Retention and loyalty programs are the biggest drivers of CLV.",
]),

    keyPoints([
        "SEO and SEM drive new traffic.",
        "Email and SMS are the highest ROI channels.",
        "Customer retention is cheaper than acquisition.",
        "Loyalty programs, personalisation and great service are key.",
        "CLV should be 3 times or more than CAC.",
        ]),
    ],

    {
        summary:
    "Master the digital marketing channels and customer retention strategies that drive e-commerce growth.",
        minutes: 10,
            tags: ["marketing", "retention", "seo", "email", "important"],

                mcqs: [
                    mcq(
                        "SEO stands for:",
                        ["Search Engine Option", "Search Engine Optimisation", "Social Engine Online", "System Enhanced Output"],
                        1,
                        "SEO is optimising the site for higher organic search ranking."
                    ),
                    mcq(
                        "CTR stands for:",
                        ["Customer Touch Rate", "Click Through Rate", "Conversion To Return", "Channel Traffic Ratio"],
                        1,
                        "CTR is the percentage of impressions that result in clicks."
                    ),
                    mcq(
                        "Which email has the highest open rate?",
                        ["Newsletter", "Abandoned cart", "Order confirmation", "Promo blast"],
                        1,
                        "Abandoned cart emails have the highest open rate, often 40% or more."
                    ),
                    mcq(
                        "CLV should be at least how many times CAC?",
                        ["1", "2", "3", "10"],
                        2,
                        "A common rule is CLV at least 3 times CAC."
                    ),
                    mcq(
                        "Which is a paid digital marketing channel?",
                        ["SEO", "Google Ads", "Email signatures", "Reviews"],
                        1,
                        "Google Ads is a paid search engine marketing channel."
                    ),
                    mcq(
                        "Loyalty programs are used for:",
                        ["Acquisition", "Retention", "Shipping", "Returns"],
                        1,
                        "Loyalty programs are a retention strategy."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the role of SEO in e-commerce marketing.",
                            "Search Engine Optimisation, or SEO, is the practice of improving a website so that it ranks higher in the unpaid, or organic, results of search engines like Google. It is the most cost effective source of traffic in the long run, because once a page ranks well, it brings in visitors for months or years without paying for each click. SEO for e-commerce focuses on product and category pages, which are the pages that match what shoppers are looking for. It includes on page factors like titles, descriptions, headings and content; off page factors like backlinks from other reputable sites; and technical factors like site speed, mobile friendliness and structured data. The biggest challenge is competition, because every seller wants to be on page one.",
                            4
                        ),
                        qa(
                            "Differentiate between customer acquisition and customer retention.",
                            "Customer acquisition is the set of activities to attract and convert a new customer, through SEO, ads, social media, content and influencer marketing. The cost is called CAC, or Customer Acquisition Cost. Customer retention is the set of activities to keep existing customers coming back, through loyalty programs, personalisation, excellent service, easy returns and re engagement emails. The value of a customer over time is called CLV, or Customer Lifetime Value. Retention is cheaper than acquisition and more profitable, because a repeat customer does not need to be convinced again and often buys more. The golden rule is that CLV should be at least three times CAC for a healthy business.",
                            4
                        ),
                        qa(
                            "Why is email marketing so important in e-commerce?",
                            "Email is the highest ROI channel in digital marketing, returning on average 36 rupees for every rupee spent. It is owned by the business, not rented from a platform, so the list is a long term asset. In e-commerce, email is used at every stage of the customer journey. A welcome email introduces the brand when a customer signs up. An abandoned cart email reminds a customer to complete a purchase, often with a small discount, and has an open rate of 40 percent or more. Order confirmation, shipping and delivery updates build trust. A post purchase review request after 7 days helps the next customer. Personalised recommendations based on past purchases increase the average order value. Festival and seasonal campaigns bring back lapsed customers. The key is to send the right email at the right time, with a clear call to action.",
                            4
                        ),
                        qa(
                            "Explain the customer funnel and its key metrics.",
                            "The customer funnel describes the journey from the first time a person sees an ad to becoming a paying, repeat customer. The top of the funnel is awareness, measured by impressions and reach. The next is interest, measured by clicks and click through rate, or CTR. Then comes consideration, when the visitor browses products, adds items to the cart, and starts checkout, measured by add to cart and checkout start rate. Then purchase, when the order is placed, measured by conversion rate, the percentage of visitors who buy. The final layer is retention, when the customer comes back, measured by repeat purchase rate, customer lifetime value and churn. At each step, the number of people drops, and the business must work to reduce the drop off, because every percentage point of conversion can add up to crores in revenue.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToEcommerce,
    businessModels,
    infrastructure,
    paymentSystems,
    marketingRetention,
];


