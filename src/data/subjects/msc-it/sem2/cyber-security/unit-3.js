/* =========================================================
   MSc-IT • SEM 2 • Cyber Security
   UNIT 3 — Cryptography
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
   TOPIC 1 — Introduction to Cryptography
========================================================= */

const introductionToCryptography = createTopic(
    "introduction-to-cryptography",
    "Introduction to Cryptography",

    [
        definition(
            "Cryptography",
            "Cryptography is the science of protecting information by converting readable data into an unreadable form so that only authorised parties can read or verify it."
        ),

        text(
            "Cryptography is one of the foundations of cyber security. It protects online banking, passwords, digital signatures, secure messaging, e-commerce, Wi-Fi security, VPNs and HTTPS websites. Without cryptography, sensitive data sent over the internet could be easily read or modified by attackers."
        ),

        heading("Basic Cryptographic Terms"),

        table(
            ["Term", "Meaning", "Example"],
            [
                ["Plaintext", "Original readable message", "Hello"],
                ["Ciphertext", "Encrypted unreadable message", "Khoor in Caesar cipher"],
                ["Encryption", "Process of converting plaintext to ciphertext", "Locking data"],
                ["Decryption", "Process of converting ciphertext back to plaintext", "Unlocking data"],
                ["Key", "Secret value used in encryption/decryption", "AES key or RSA key"],
                ["Cipher", "Algorithm used for encryption/decryption", "AES, RSA, Caesar cipher"],
            ]
        ),

        heading("Goals of Cryptography"),

        table(
            ["Goal", "Meaning", "Cryptographic Method"],
            [
                ["Confidentiality", "Only authorised users can read data", "Encryption"],
                ["Integrity", "Data should not be changed unnoticed", "Hashing, MAC, digital signature"],
                ["Authentication", "Verify identity of sender or system", "Certificates, digital signatures"],
                ["Non-repudiation", "Sender cannot deny sending/signing data", "Digital signatures"],
                ["Access control support", "Only authorised parties can use protected data", "Keys and permissions"],
            ]
        ),

        heading("Cryptography in Daily Life"),

        list([
            "HTTPS protects communication with websites.",
            "ATM and banking systems protect financial transactions.",
            "Messaging apps use encryption to protect chats.",
            "Password systems use hashing to avoid storing plaintext passwords.",
            "Digital signatures verify documents and software updates.",
            "Wi-Fi encryption protects wireless communication.",
            "VPNs encrypt network traffic over untrusted networks.",
        ]),

        heading("Classical Cryptography"),

        text(
            "Classical cryptography used simple substitution or transposition methods. These are useful for understanding basic concepts but are not secure against modern attacks."
        ),

        definition(
            "Caesar Cipher",
            "Caesar cipher is a simple substitution cipher where each letter is shifted by a fixed number of positions in the alphabet."
        ),

        code(
            `Example: Caesar Cipher with shift = 3

Plaintext:   ATTACK
Ciphertext:  DWWDFN

A → D
T → W
C → F
K → N`,
            "text",
            "Caesar cipher example"
        ),

        heading("Substitution vs Transposition"),

        table(
            ["Technique", "Meaning", "Example"],
            [
                ["Substitution", "Replaces characters with other characters", "A becomes D"],
                ["Transposition", "Rearranges position/order of characters", "HELLO becomes OLLEH"],
            ]
        ),

        heading("Modern Cryptography"),

        text(
            "Modern cryptography uses mathematical algorithms and keys. Security depends on strong algorithms, sufficient key length, proper implementation and secure key management. Modern cryptography includes symmetric encryption, asymmetric encryption, hashing, message authentication codes and digital signatures."
        ),

        heading("Cryptanalysis"),

        definition(
            "Cryptanalysis",
            "Cryptanalysis is the study of breaking or analysing cryptographic systems to recover plaintext, keys or weaknesses without authorised access."
        ),

        table(
            ["Attack Type", "Meaning"],
            [
                ["Brute-force attack", "Trying all possible keys"],
                ["Known-plaintext attack", "Attacker knows some plaintext and ciphertext pairs"],
                ["Ciphertext-only attack", "Attacker has only encrypted messages"],
                ["Chosen-plaintext attack", "Attacker can choose plaintexts and observe ciphertexts"],
            ]
        ),

        note(
            "Do not create your own encryption algorithm for real security. Use standard, publicly reviewed algorithms such as AES, RSA, ECC and SHA-256 through trusted libraries.",
            "warning",
            "Important"
        ),

        keyPoints([
            "Cryptography protects information using encryption, hashing and signatures.",
            "Plaintext is readable data; ciphertext is encrypted unreadable data.",
            "Main goals are confidentiality, integrity, authentication and non-repudiation.",
            "Classical ciphers like Caesar cipher are educational but not secure today.",
            "Modern cryptography depends on algorithms, keys and secure key management.",
            "Cryptanalysis studies weaknesses in cryptographic systems.",
        ]),
    ],

    {
        summary:
            "Understand cryptography basics, plaintext/ciphertext, encryption/decryption, goals of cryptography, Caesar cipher and cryptanalysis.",
        minutes: 13,
        tags: ["cyber-security", "cryptography", "encryption", "caesar-cipher", "important"],

        mcqs: [
            mcq(
                "Cryptography is mainly used to:",
                ["Protect information", "Damage hardware", "Delete all data", "Increase screen brightness"],
                0,
                "Cryptography protects data using mathematical techniques such as encryption, hashing and signatures."
            ),
            mcq(
                "Plaintext means:",
                ["Original readable message", "Encrypted message", "Secret key only", "Hash value only"],
                0,
                "Plaintext is the original readable form of data."
            ),
            mcq(
                "Ciphertext means:",
                ["Encrypted unreadable message", "Original message", "Public website", "Database table"],
                0,
                "Ciphertext is the encrypted output produced from plaintext."
            ),
            mcq(
                "Confidentiality is mainly provided by:",
                ["Encryption", "Deleting logs", "Open sharing", "Weak passwords"],
                0,
                "Encryption keeps data secret from unauthorised parties."
            ),
            mcq(
                "Caesar cipher is an example of:",
                ["Substitution cipher", "Hash function", "Digital certificate", "Firewall"],
                0,
                "Caesar cipher substitutes each letter with another shifted letter."
            ),
            mcq(
                "Cryptanalysis means:",
                ["Study of breaking or analysing cryptographic systems", "Only creating websites", "Only installing antivirus", "Only formatting drives"],
                0,
                "Cryptanalysis studies methods to break or find weaknesses in cryptographic systems."
            ),
        ],

        questions: [
            qa(
                "Define cryptography and explain its importance in cyber security.",
                "Cryptography is the science of protecting information by converting readable data into an unreadable or verifiable form using algorithms and keys. It is important in cyber security because it protects data from unauthorised reading, modification and impersonation. Cryptography provides confidentiality through encryption, integrity through hashing or message authentication, authentication through certificates and signatures, and non-repudiation through digital signatures. It is used in HTTPS, online banking, secure messaging, password storage, VPNs, Wi-Fi security and digital documents. Without cryptography, sensitive information transmitted over networks could be intercepted or changed easily.",
                5
            ),
            qa(
                "Explain plaintext, ciphertext, encryption, decryption, key and cipher.",
                "Plaintext is the original readable message or data. Ciphertext is the unreadable encrypted form of plaintext. Encryption is the process of converting plaintext into ciphertext so unauthorised users cannot understand it. Decryption is the reverse process of converting ciphertext back into plaintext. A key is a secret or private value used by the encryption and decryption process. A cipher is the algorithm that performs encryption and decryption, such as AES, RSA or Caesar cipher. Security depends not only on the cipher but also on key strength and secure key management.",
                5
            ),
            qa(
                "Explain the main goals of cryptography.",
                "The main goals of cryptography are confidentiality, integrity, authentication and non-repudiation. Confidentiality ensures that only authorised users can read information; it is achieved using encryption. Integrity ensures that data has not been modified without detection; it is achieved using hashes, MACs or digital signatures. Authentication verifies the identity of a user, system or sender; it can use certificates and digital signatures. Non-repudiation ensures that a sender cannot later deny sending or signing a message; it is provided by digital signatures. Together, these goals protect digital communication and transactions.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Symmetric and Asymmetric Encryption
========================================================= */

const symmetricAndAsymmetricEncryption = createTopic(
    "symmetric-and-asymmetric-encryption",
    "Symmetric and Asymmetric Encryption",

    [
        heading("Symmetric Encryption"),

        definition(
            "Symmetric Encryption",
            "Symmetric encryption is a cryptographic method where the same secret key is used for both encryption and decryption."
        ),

        text(
            "Symmetric encryption is fast and suitable for encrypting large amounts of data. However, the main challenge is secure key sharing: both sender and receiver must have the same secret key without exposing it to attackers."
        ),

        heading("Symmetric Encryption Process"),

        steps([
            "Sender and receiver share a secret key securely.",
            "Sender encrypts plaintext using the secret key.",
            "Ciphertext is sent over the network.",
            "Receiver decrypts ciphertext using the same secret key.",
            "Original plaintext is recovered.",
        ]),

        heading("Examples of Symmetric Algorithms"),

        table(
            ["Algorithm", "Description", "Current Use"],
            [
                ["DES", "Older block cipher with 56-bit key", "Not secure today"],
                ["3DES", "Applies DES multiple times", "Legacy; being phased out"],
                ["AES", "Advanced Encryption Standard", "Modern recommended symmetric encryption"],
                ["ChaCha20", "Fast stream cipher", "Used in modern secure protocols"],
            ]
        ),

        heading("AES"),

        definition(
            "AES",
            "AES, or Advanced Encryption Standard, is a widely used symmetric block cipher that supports key sizes of 128, 192 and 256 bits."
        ),

        table(
            ["AES Key Size", "Security Level"],
            [
                ["AES-128", "Strong for most uses"],
                ["AES-192", "Stronger"],
                ["AES-256", "Very strong; common for high-security needs"],
            ]
        ),

        heading("Asymmetric Encryption"),

        definition(
            "Asymmetric Encryption",
            "Asymmetric encryption is a cryptographic method that uses a pair of keys: a public key for encryption or verification and a private key for decryption or signing."
        ),

        text(
            "The public key can be shared with everyone, but the private key must be kept secret. Asymmetric encryption solves the key distribution problem but is slower than symmetric encryption."
        ),

        heading("Public Key and Private Key"),

        table(
            ["Key", "Who Has It?", "Use"],
            [
                ["Public Key", "Shared openly", "Encrypt data for owner; verify signatures"],
                ["Private Key", "Kept secret by owner", "Decrypt data; create digital signatures"],
            ]
        ),

        heading("Asymmetric Encryption Process"),

        steps([
            "Receiver generates a public/private key pair.",
            "Receiver shares public key with sender.",
            "Sender encrypts message using receiver's public key.",
            "Ciphertext is sent to receiver.",
            "Receiver decrypts it using their private key.",
        ]),

        heading("Examples of Asymmetric Algorithms"),

        table(
            ["Algorithm", "Use"],
            [
                ["RSA", "Encryption, key exchange and digital signatures"],
                ["ECC", "Efficient public-key cryptography using elliptic curves"],
                ["Diffie-Hellman", "Secure key exchange"],
                ["DSA / ECDSA", "Digital signatures"],
            ]
        ),

        heading("Symmetric vs Asymmetric Encryption"),

        table(
            ["Aspect", "Symmetric Encryption", "Asymmetric Encryption"],
            [
                ["Keys used", "One shared secret key", "Public/private key pair"],
                ["Speed", "Fast", "Slower"],
                ["Best for", "Large data encryption", "Key exchange, signatures, small data"],
                ["Key distribution", "Difficult", "Easier"],
                ["Example", "AES", "RSA, ECC"],
                ["Main risk", "Shared key exposure", "Private key compromise"],
            ]
        ),

        heading("Hybrid Encryption"),

        definition(
            "Hybrid Encryption",
            "Hybrid encryption combines asymmetric encryption for secure key exchange and symmetric encryption for fast bulk data encryption."
        ),

        text(
            "Most real systems use hybrid encryption. For example, HTTPS uses public-key cryptography to securely agree on session keys, then uses fast symmetric encryption to protect actual communication."
        ),

        note(
            "Asymmetric encryption is not a replacement for symmetric encryption. They are commonly used together: asymmetric for key exchange/authentication and symmetric for encrypting large data efficiently.",
            "tip",
            "Practical Use"
        ),

        keyPoints([
            "Symmetric encryption uses the same key for encryption and decryption.",
            "AES is a modern symmetric encryption standard.",
            "Asymmetric encryption uses public and private keys.",
            "Public keys can be shared; private keys must be protected.",
            "Asymmetric encryption is slower but solves key distribution problems.",
            "Hybrid encryption combines the strengths of both methods.",
        ]),
    ],

    {
        summary:
            "Learn symmetric encryption, AES, asymmetric encryption, public/private keys, RSA/ECC and hybrid encryption.",
        minutes: 14,
        tags: ["cyber-security", "cryptography", "symmetric-encryption", "asymmetric-encryption", "aes", "rsa"],

        mcqs: [
            mcq(
                "Symmetric encryption uses:",
                ["Same key for encryption and decryption", "No key", "Only public key", "Only hash value"],
                0,
                "Symmetric encryption uses one shared secret key."
            ),
            mcq(
                "AES stands for:",
                ["Advanced Encryption Standard", "Automatic Error System", "Applied Email Security", "Advanced Encoding Service"],
                0,
                "AES means Advanced Encryption Standard."
            ),
            mcq(
                "DES is considered:",
                ["Not secure for modern use", "The strongest modern encryption", "A hashing algorithm", "A digital certificate"],
                0,
                "DES has a small 56-bit key and is not secure today."
            ),
            mcq(
                "Asymmetric encryption uses:",
                ["Public/private key pair", "Only one shared key", "No key", "Only password length"],
                0,
                "Asymmetric encryption uses mathematically related public and private keys."
            ),
            mcq(
                "A private key should be:",
                ["Kept secret", "Shared publicly", "Posted online", "Stored in plaintext everywhere"],
                0,
                "Private keys must be protected carefully."
            ),
            mcq(
                "Hybrid encryption uses:",
                ["Asymmetric encryption for key exchange and symmetric encryption for data", "Only Caesar cipher", "Only hashing", "No encryption"],
                0,
                "Hybrid systems combine public-key cryptography with fast symmetric encryption."
            ),
        ],

        questions: [
            qa(
                "Explain symmetric encryption with examples, advantages and limitations.",
                "Symmetric encryption uses the same secret key for both encryption and decryption. The sender encrypts plaintext using the shared key, and the receiver decrypts the ciphertext using the same key. Examples include AES, DES, 3DES and ChaCha20. AES is the modern recommended standard and supports 128, 192 and 256-bit keys. The main advantage of symmetric encryption is speed, making it suitable for large files, databases and network traffic. The limitation is key distribution: both parties must securely share the secret key. If the key is stolen, confidentiality is lost.",
                5
            ),
            qa(
                "Explain asymmetric encryption and the role of public and private keys.",
                "Asymmetric encryption uses a pair of mathematically related keys: a public key and a private key. The public key can be shared openly, while the private key must remain secret. If someone wants to send a confidential message to a user, they encrypt it with the user's public key. Only the matching private key can decrypt it. Public keys can also verify digital signatures, while private keys create signatures. Examples include RSA and ECC. Asymmetric encryption solves the key distribution problem but is slower than symmetric encryption, so it is often used for key exchange and authentication.",
                5
            ),
            qa(
                "Differentiate between symmetric and asymmetric encryption.",
                "Symmetric encryption uses one shared secret key for both encryption and decryption. It is fast and suitable for encrypting large amounts of data, but securely sharing the key is difficult. AES is a common symmetric algorithm. Asymmetric encryption uses a public/private key pair. The public key can be shared and the private key is kept secret. It is useful for secure key exchange, authentication and digital signatures, but it is slower than symmetric encryption. RSA and ECC are common asymmetric algorithms. Real-world systems often use hybrid encryption, combining asymmetric key exchange with symmetric data encryption.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Hashing, Digital Signatures and Certificates
========================================================= */

const hashingDigitalSignaturesAndCertificates = createTopic(
    "hashing-digital-signatures-and-certificates",
    "Hashing, Digital Signatures and Certificates",

    [
        heading("Hashing"),

        definition(
            "Hash Function",
            "A hash function is a one-way mathematical function that converts input data of any size into a fixed-size output called a hash value or message digest."
        ),

        text(
            "Hashing is not encryption because it cannot be reversed to recover original data. Hashing is used to verify integrity, store passwords securely with salt, detect file changes and create digital signatures."
        ),

        heading("Properties of Cryptographic Hash Functions"),

        table(
            ["Property", "Meaning"],
            [
                ["Deterministic", "Same input always produces same hash"],
                ["Fixed length", "Output length is fixed regardless of input size"],
                ["One-way", "Original input cannot be practically recovered from hash"],
                ["Avalanche effect", "Small input change causes large hash change"],
                ["Collision resistance", "Hard to find two inputs with same hash"],
                ["Fast computation", "Hash can be computed efficiently"],
            ]
        ),

        heading("Examples of Hash Algorithms"),

        table(
            ["Algorithm", "Status / Use"],
            [
                ["MD5", "Broken; not suitable for security"],
                ["SHA-1", "Weak; avoid for security"],
                ["SHA-256", "Secure and widely used"],
                ["SHA-3", "Modern secure hash standard"],
                ["bcrypt / scrypt / Argon2", "Password hashing algorithms"],
            ]
        ),

        heading("Hashing Example in Python"),

        code(
            `import hashlib

message = "Hello Cyber Security"

hash_value = hashlib.sha256(message.encode()).hexdigest()

print(hash_value)`,
            "python",
            "SHA-256 hashing"
        ),

        heading("Hashing vs Encryption"),

        table(
            ["Aspect", "Hashing", "Encryption"],
            [
                ["Reversible?", "No", "Yes, with key"],
                ["Purpose", "Integrity verification, password storage", "Confidentiality"],
                ["Output", "Fixed-size digest", "Ciphertext"],
                ["Key required?", "Usually no for basic hash", "Yes"],
                ["Example", "SHA-256", "AES, RSA"],
            ]
        ),

        heading("Password Hashing and Salt"),

        definition(
            "Salt",
            "A salt is a unique random value added to a password before hashing to prevent identical passwords from producing identical hashes and to defeat precomputed rainbow tables."
        ),

        note(
            "Passwords should not be stored using plain SHA-256 alone. Use password hashing algorithms such as bcrypt, scrypt or Argon2 with salt and suitable cost settings.",
            "warning",
            "Password Security"
        ),

        heading("Digital Signature"),

        definition(
            "Digital Signature",
            "A digital signature is a cryptographic mechanism that verifies the authenticity, integrity and non-repudiation of a digital message or document."
        ),

        heading("Digital Signature Process"),

        steps([
            "Sender creates a hash of the message.",
            "Sender encrypts/signs the hash using their private key.",
            "Message and digital signature are sent to receiver.",
            "Receiver decrypts/verifies the signature using sender's public key.",
            "Receiver computes hash of received message.",
            "If both hashes match, integrity and authenticity are verified.",
        ]),

        table(
            ["Digital Signature Provides", "Explanation"],
            [
                ["Authentication", "Confirms who signed the message"],
                ["Integrity", "Detects if message was changed"],
                ["Non-repudiation", "Signer cannot easily deny signing"],
            ]
        ),

        heading("Digital Certificate"),

        definition(
            "Digital Certificate",
            "A digital certificate is an electronic document issued by a trusted Certificate Authority that binds a public key to an identity such as a person, organisation or website."
        ),

        table(
            ["Certificate Field", "Meaning"],
            [
                ["Subject", "Owner of certificate"],
                ["Public key", "Public key belonging to subject"],
                ["Issuer", "Certificate Authority that issued it"],
                ["Validity period", "Start and expiry dates"],
                ["Serial number", "Unique certificate identifier"],
                ["Signature", "CA's digital signature over certificate data"],
            ]
        ),

        heading("Digital Signature vs Digital Certificate"),

        table(
            ["Aspect", "Digital Signature", "Digital Certificate"],
            [
                ["Purpose", "Proves message/document authenticity and integrity", "Binds public key to identity"],
                ["Created by", "Signer using private key", "Certificate Authority"],
                ["Used for", "Signed documents, software, emails", "HTTPS websites, identity verification"],
                ["Verifies", "Message not changed and signer identity", "Public key belongs to claimed entity"],
            ]
        ),

        keyPoints([
            "Hashing is one-way and produces a fixed-size digest.",
            "SHA-256 is secure; MD5 and SHA-1 are not recommended.",
            "Hashing verifies integrity but does not provide confidentiality.",
            "Passwords need salted slow hashing such as bcrypt or Argon2.",
            "Digital signatures provide authentication, integrity and non-repudiation.",
            "Digital certificates bind public keys to identities through a trusted CA.",
        ]),
    ],

    {
        summary:
            "Learn hashing, hash properties, SHA, password salting, digital signatures and digital certificates.",
        minutes: 14,
        tags: ["cyber-security", "hashing", "sha256", "digital-signature", "certificate"],

        mcqs: [
            mcq(
                "A cryptographic hash function produces:",
                ["Fixed-size digest", "Always original plaintext", "Only public key", "Only random images"],
                0,
                "Hash functions convert data into a fixed-size message digest."
            ),
            mcq(
                "Hashing is:",
                ["One-way", "Always reversible", "Same as decryption", "Only for images"],
                0,
                "Cryptographic hashing is designed to be one-way."
            ),
            mcq(
                "Which hash algorithm is considered broken?",
                ["MD5", "SHA-256", "SHA-3", "Argon2"],
                0,
                "MD5 is broken and should not be used for security."
            ),
            mcq(
                "A salt is used in password hashing to:",
                ["Make identical passwords produce different hashes", "Decrypt passwords", "Reduce security", "Remove passwords"],
                0,
                "A unique salt prevents identical password hashes and rainbow-table attacks."
            ),
            mcq(
                "A digital signature is created using:",
                ["Sender's private key", "Receiver's password", "Only plaintext", "Antivirus database"],
                0,
                "The signer signs using their private key."
            ),
            mcq(
                "A digital certificate binds:",
                ["Public key to an identity", "Keyboard to mouse", "Virus to file", "Password to plaintext"],
                0,
                "Certificates bind public keys to identities through a trusted CA."
            ),
        ],

        questions: [
            qa(
                "What is hashing? Explain its properties and uses.",
                "Hashing is a one-way mathematical process that converts input data of any size into a fixed-size hash value or message digest. A cryptographic hash function is deterministic, meaning the same input always gives the same output. It is one-way, collision-resistant, fast to compute and has the avalanche effect, where a small change in input creates a very different hash. Hashing is used for integrity checking, file verification, password storage with salt, digital signatures and detecting tampering. Hashing is not encryption because the original data cannot be recovered from the hash.",
                5
            ),
            qa(
                "Differentiate between hashing and encryption.",
                "Hashing and encryption serve different purposes. Hashing is one-way and converts data into a fixed-size digest. It is used mainly for integrity verification and password storage. It cannot be reversed to get the original data. Encryption is reversible with the correct key and converts plaintext into ciphertext to provide confidentiality. Encrypted data can be decrypted back to plaintext using the key. Hashing usually does not require a key, while encryption requires one or more keys. Examples of hashing algorithms include SHA-256 and SHA-3, while encryption algorithms include AES and RSA.",
                5
            ),
            qa(
                "Explain digital signature and digital certificate.",
                "A digital signature is a cryptographic method used to prove the authenticity and integrity of a message or document. The sender creates a hash of the message and signs it using their private key. The receiver verifies the signature using the sender's public key and compares hashes. If they match, the message has not been changed and the signer is authenticated. A digital certificate is an electronic document issued by a trusted Certificate Authority. It binds a public key to an identity such as a website or organisation. Certificates help users trust public keys, especially in HTTPS.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Public Key Infrastructure and SSL/TLS
========================================================= */

const publicKeyInfrastructureAndSslTls = createTopic(
    "public-key-infrastructure-and-ssl-tls",
    "Public Key Infrastructure and SSL/TLS",

    [
        heading("Public Key Infrastructure"),

        definition(
            "Public Key Infrastructure",
            "Public Key Infrastructure, or PKI, is a system of people, policies, hardware, software and procedures used to create, manage, distribute, use, store and revoke digital certificates and public keys."
        ),

        text(
            "PKI solves an important trust problem: how do we know that a public key really belongs to a website, organisation or person? Certificate Authorities verify identities and issue digital certificates that bind identities to public keys."
        ),

        heading("Components of PKI"),

        table(
            ["Component", "Role"],
            [
                ["Certificate Authority (CA)", "Issues and signs digital certificates"],
                ["Registration Authority (RA)", "Verifies identity before certificate issuance"],
                ["Digital Certificate", "Binds public key to identity"],
                ["Certificate Repository", "Stores certificates and related information"],
                ["Certificate Revocation List (CRL)", "List of revoked certificates"],
                ["OCSP", "Online protocol to check certificate revocation status"],
                ["End Entity", "User, server or device using certificate"],
            ]
        ),

        heading("Certificate Authority"),

        definition(
            "Certificate Authority",
            "A Certificate Authority, or CA, is a trusted organisation that issues and digitally signs certificates after verifying identity."
        ),

        text(
            "Browsers and operating systems include trusted root CA certificates. When a website presents a certificate, the browser checks whether it chains back to a trusted root CA."
        ),

        heading("Certificate Chain"),

        table(
            ["Level", "Meaning"],
            [
                ["Root CA", "Highly trusted top-level certificate authority"],
                ["Intermediate CA", "CA certificate signed by root CA; issues end certificates"],
                ["End-entity certificate", "Certificate issued to website/server/user"],
            ]
        ),

        heading("SSL and TLS"),

        definition(
            "SSL",
            "SSL, or Secure Sockets Layer, is an older protocol for securing network communication. It is now obsolete and replaced by TLS."
        ),

        definition(
            "TLS",
            "TLS, or Transport Layer Security, is the modern protocol used to secure communication over networks by providing encryption, authentication and integrity."
        ),

        text(
            "People often say SSL certificate, but modern secure websites actually use TLS. HTTPS is HTTP running over TLS."
        ),

        heading("What HTTPS Provides"),

        table(
            ["Security Property", "How HTTPS/TLS Helps"],
            [
                ["Confidentiality", "Encrypts traffic so attackers cannot read it"],
                ["Integrity", "Detects tampering with data in transit"],
                ["Authentication", "Certificate verifies server identity"],
                ["Trust", "Browser checks certificate chain and validity"],
            ]
        ),

        heading("Simplified TLS Handshake"),

        steps([
            "Client connects to server and sends supported TLS versions/ciphers.",
            "Server sends its digital certificate and chosen parameters.",
            "Client verifies certificate validity, domain name and CA signature.",
            "Client and server securely agree on session keys.",
            "Further communication is encrypted using symmetric session keys.",
            "Integrity checks protect messages from tampering.",
        ]),

        heading("Certificate Validation Checks"),

        list([
            "Certificate is issued by a trusted CA.",
            "Certificate has not expired.",
            "Domain name matches the certificate subject/SAN.",
            "Certificate has not been revoked.",
            "Certificate chain is valid.",
            "Cryptographic algorithms and key sizes are secure.",
        ], true),

        heading("Common Certificate Problems"),

        table(
            ["Problem", "Meaning / Risk"],
            [
                ["Expired certificate", "Browser cannot trust certificate validity"],
                ["Self-signed certificate", "Not signed by trusted CA; may be unsafe for public sites"],
                ["Domain mismatch", "Certificate issued for another domain"],
                ["Revoked certificate", "Certificate should no longer be trusted"],
                ["Weak algorithm", "Old cryptography may be breakable"],
                ["Mixed content", "HTTPS page loads insecure HTTP resources"],
            ]
        ),

        heading("PKI Uses Beyond HTTPS"),

        list([
            "Secure email using S/MIME.",
            "Code signing for software authenticity.",
            "Digital document signing.",
            "VPN authentication.",
            "Device certificates in organisations.",
            "Smart cards and e-governance systems.",
        ]),

        note(
            "HTTPS does not mean the website is honest; it means communication with that domain is encrypted and the certificate matches. A phishing site can also use HTTPS. Always check the domain carefully.",
            "warning",
            "HTTPS Misconception"
        ),

        keyPoints([
            "PKI manages public keys and digital certificates.",
            "Certificate Authorities issue and sign certificates.",
            "Certificates bind public keys to verified identities.",
            "TLS is the modern protocol; SSL is obsolete.",
            "HTTPS uses TLS to provide confidentiality, integrity and server authentication.",
            "Browsers validate certificate chain, expiry, domain and revocation status.",
        ]),
    ],

    {
        summary:
            "Learn PKI, Certificate Authorities, certificate chains, SSL/TLS, HTTPS and certificate validation.",
        minutes: 13,
        tags: ["cyber-security", "pki", "ssl", "tls", "https", "certificate-authority"],

        mcqs: [
            mcq(
                "PKI stands for:",
                ["Public Key Infrastructure", "Private Kernel Interface", "Protected Key Internet", "Public Knowledge Index"],
                0,
                "PKI means Public Key Infrastructure."
            ),
            mcq(
                "A Certificate Authority is responsible for:",
                ["Issuing and signing digital certificates", "Cleaning keyboards", "Deleting all certificates", "Only creating passwords"],
                0,
                "A CA verifies identities and signs certificates."
            ),
            mcq(
                "TLS is used to:",
                ["Secure network communication", "Format hard disk only", "Increase monitor size", "Create spam"],
                0,
                "TLS provides encryption, integrity and authentication for network communication."
            ),
            mcq(
                "HTTPS means:",
                ["HTTP over TLS", "HTML over TCP only", "Hashing through password", "Hardware transfer protocol"],
                0,
                "HTTPS is HTTP secured using TLS."
            ),
            mcq(
                "A browser checks that a certificate:",
                ["Matches the domain and is issued by a trusted CA", "Has the shortest name", "Is written in HTML", "Contains no public key"],
                0,
                "Browsers validate certificate chain, domain, expiry and other properties."
            ),
            mcq(
                "SSL is:",
                ["Obsolete and replaced by TLS", "The newest recommended protocol", "A password manager", "A hashing algorithm"],
                0,
                "SSL is outdated; TLS is used today."
            ),
        ],

        questions: [
            qa(
                "What is PKI? Explain its main components.",
                "Public Key Infrastructure, or PKI, is a system used to manage public keys and digital certificates. It provides trust by binding public keys to verified identities. The main components include Certificate Authority, Registration Authority, digital certificates, certificate repositories, revocation mechanisms and end entities. A Certificate Authority issues and digitally signs certificates. A Registration Authority verifies identity before certificate issuance. A certificate contains the subject, public key, issuer, validity period and CA signature. Revocation is handled through CRL or OCSP. PKI is used in HTTPS, secure email, code signing, digital documents and VPN authentication.",
                5
            ),
            qa(
                "Explain SSL/TLS and HTTPS.",
                "SSL, or Secure Sockets Layer, was an older protocol for securing communication but is now obsolete. TLS, or Transport Layer Security, is the modern protocol that provides confidentiality, integrity and authentication over networks. HTTPS is HTTP running over TLS. When a browser connects to a secure website, the server presents a digital certificate. The browser verifies that the certificate is issued by a trusted CA, matches the domain, is not expired and has a valid chain. Then the client and server agree on session keys and use symmetric encryption for secure communication.",
                5
            ),
            qa(
                "What checks are performed during certificate validation?",
                "During certificate validation, the browser or client checks whether the certificate is issued by a trusted Certificate Authority and whether the certificate chain leads to a trusted root CA. It checks that the domain name matches the certificate subject or Subject Alternative Name. It verifies that the certificate is within its validity period and has not expired. It may check revocation status using CRL or OCSP. It also checks that the certificate signature is valid and that the cryptographic algorithms and key sizes are acceptable. If these checks fail, the browser displays a certificate warning.",
                5
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — Cryptographic Applications and Attacks
========================================================= */

const cryptographicApplicationsAndAttacks = createTopic(
    "cryptographic-applications-and-attacks",
    "Cryptographic Applications and Attacks",

    [
        heading("Applications of Cryptography"),

        text(
            "Cryptography is used in almost every secure digital system. It protects data at rest, data in transit, identity, software updates, payments and digital documents."
        ),

        table(
            ["Application", "Cryptographic Use"],
            [
                ["HTTPS websites", "TLS encryption and certificates"],
                ["Password storage", "Salted password hashing"],
                ["Digital payments", "Encryption, signatures and secure protocols"],
                ["Secure messaging", "End-to-end encryption"],
                ["VPN", "Encrypted tunnel for network traffic"],
                ["Disk encryption", "Protects stored data if device is lost"],
                ["Software updates", "Code signing verifies authenticity"],
                ["Blockchain", "Hashing and digital signatures"],
            ]
        ),

        heading("Data at Rest vs Data in Transit"),

        table(
            ["State", "Meaning", "Protection"],
            [
                ["Data at rest", "Stored data on disk/database/cloud", "Disk/database encryption, access control"],
                ["Data in transit", "Data moving over network", "TLS, VPN, secure protocols"],
                ["Data in use", "Data being processed in memory", "Access control, secure execution environments"],
            ]
        ),

        heading("End-to-End Encryption"),

        definition(
            "End-to-End Encryption",
            "End-to-end encryption means data is encrypted on the sender's device and decrypted only on the receiver's device, so intermediate servers cannot read the plaintext."
        ),

        text(
            "End-to-end encryption is commonly used in secure messaging applications. It protects privacy even if communication passes through service provider servers."
        ),

        heading("Key Management"),

        definition(
            "Key Management",
            "Key management is the process of generating, storing, distributing, rotating, backing up and destroying cryptographic keys securely."
        ),

        list([
            "Generate keys using secure random number generators.",
            "Store keys in secure locations such as HSMs or key vaults.",
            "Restrict key access using least privilege.",
            "Rotate keys periodically or after suspected compromise.",
            "Do not hardcode keys in source code.",
            "Backup important keys securely.",
            "Destroy old keys safely when no longer needed.",
        ], true),

        heading("Common Cryptographic Attacks"),

        table(
            ["Attack", "Meaning", "Defence"],
            [
                ["Brute-force attack", "Trying many keys/passwords", "Strong key length, rate limits"],
                ["Man-in-the-middle", "Intercepting communication", "TLS certificate validation"],
                ["Replay attack", "Reusing captured valid messages", "Nonces, timestamps, session tokens"],
                ["Downgrade attack", "Forcing weaker protocol/algorithm", "Disable old protocols/ciphers"],
                ["Birthday attack", "Exploits probability of hash collisions", "Use strong hash length"],
                ["Side-channel attack", "Uses timing/power/cache leaks", "Constant-time operations, secure hardware"],
            ]
        ),

        heading("Weak Cryptographic Practices"),

        list([
            "Using outdated algorithms such as MD5, SHA-1 or DES.",
            "Using short or predictable keys.",
            "Hardcoding secrets in source code.",
            "Reusing keys in unsafe ways.",
            "Ignoring certificate warnings.",
            "Using self-signed certificates for public services without trust setup.",
            "Storing passwords in plaintext or unsalted fast hashes.",
            "Implementing custom cryptography instead of trusted libraries.",
        ], true),

        heading("Random Numbers and Nonces"),

        definition(
            "Nonce",
            "A nonce is a number used once in a cryptographic operation to prevent replay and ensure uniqueness."
        ),

        definition(
            "Initialization Vector",
            "An Initialization Vector, or IV, is a value used with encryption modes to ensure that encrypting the same plaintext with the same key does not produce identical ciphertext."
        ),

        table(
            ["Value", "Purpose"],
            [
                ["Random key", "Secret value for encryption/signing"],
                ["Salt", "Unique value for password hashing"],
                ["Nonce", "Prevents replay; ensures uniqueness"],
                ["IV", "Adds uniqueness to encryption operations"],
            ]
        ),

        heading("Secure Cryptography Best Practices"),

        steps([
            "Use standard algorithms and trusted libraries.",
            "Use AES or ChaCha20 for symmetric encryption.",
            "Use RSA/ECC with recommended key sizes for public-key operations.",
            "Use SHA-256/SHA-3 for hashing where appropriate.",
            "Use bcrypt, scrypt or Argon2 for password hashing.",
            "Use TLS 1.2 or TLS 1.3 for network security.",
            "Protect private keys and rotate keys when needed.",
            "Never store secrets directly in source code.",
            "Disable obsolete protocols and weak cipher suites.",
        ]),

        note(
            "Cryptography usually fails because of weak implementation, poor key management, outdated algorithms or user mistakes — not because modern standard algorithms are easily broken.",
            "warning",
            "Practical Reality"
        ),

        keyPoints([
            "Cryptography protects HTTPS, passwords, payments, VPNs, disks and secure messaging.",
            "Data at rest and data in transit need different protection methods.",
            "End-to-end encryption prevents intermediate servers from reading plaintext.",
            "Key management is critical for cryptographic security.",
            "Common attacks include brute force, MITM, replay, downgrade and birthday attacks.",
            "Avoid outdated algorithms and custom cryptography.",
        ]),
    ],

    {
        summary:
            "Learn cryptographic applications, data protection states, end-to-end encryption, key management, attacks and best practices.",
        minutes: 13,
        tags: ["cyber-security", "cryptographic-attacks", "key-management", "e2ee", "best-practices"],

        mcqs: [
            mcq(
                "Data in transit is best protected using:",
                ["TLS/VPN secure protocols", "Plain HTTP", "Printed paper only", "No encryption"],
                0,
                "TLS and VPNs protect data moving over networks."
            ),
            mcq(
                "End-to-end encryption means:",
                ["Only sender and receiver can read plaintext", "Everyone on server can read messages", "No keys are used", "Only data is compressed"],
                0,
                "E2EE encrypts on sender device and decrypts only on receiver device."
            ),
            mcq(
                "Key management includes:",
                ["Generating, storing, rotating and destroying keys securely", "Only changing wallpaper", "Deleting all users", "Writing passwords on public sites"],
                0,
                "Key management covers the secure life cycle of cryptographic keys."
            ),
            mcq(
                "A replay attack involves:",
                ["Reusing captured valid messages", "Only increasing RAM", "Drawing network diagrams", "Deleting old emails"],
                0,
                "Replay attacks resend captured valid messages to trick systems."
            ),
            mcq(
                "A nonce is:",
                ["A value used once", "A permanent public password", "An antivirus", "A database only"],
                0,
                "Nonce means a number/value used once in a cryptographic context."
            ),
            mcq(
                "Which is a weak cryptographic practice?",
                ["Hardcoding keys in source code", "Using trusted libraries", "Using TLS 1.3", "Using strong random keys"],
                0,
                "Hardcoded keys may leak through source code repositories or builds."
            ),
        ],

        questions: [
            qa(
                "List important applications of cryptography.",
                "Cryptography is used in many areas of digital security. HTTPS uses TLS and certificates to protect website communication. Password systems use salted password hashing to avoid storing plaintext passwords. Digital payments use encryption and signatures to protect transactions. Secure messaging applications use end-to-end encryption. VPNs encrypt network traffic over untrusted networks. Disk encryption protects stored data if a laptop or phone is stolen. Code signing verifies that software updates are authentic and not modified. Blockchain systems use hashing and digital signatures for integrity and ownership verification.",
                5
            ),
            qa(
                "Explain key management and why it is important.",
                "Key management is the secure handling of cryptographic keys throughout their life cycle. It includes key generation, storage, distribution, rotation, backup, access control and destruction. It is important because even strong encryption becomes useless if keys are stolen, predictable or mishandled. Keys should be generated using secure random number generators and stored in secure systems such as key vaults or hardware security modules. Access should follow least privilege. Keys should not be hardcoded in source code. They should be rotated periodically or after suspected compromise and destroyed securely when no longer needed.",
                5
            ),
            qa(
                "Explain common cryptographic attacks and defences.",
                "Common cryptographic attacks include brute-force attacks, man-in-the-middle attacks, replay attacks, downgrade attacks, birthday attacks and side-channel attacks. Brute force tries many keys or passwords; it is defended by strong key lengths, strong passwords, MFA and rate limits. MITM attacks intercept communication; TLS certificate validation helps prevent them. Replay attacks reuse captured valid messages; nonces, timestamps and session tokens help stop them. Downgrade attacks force weaker protocols; disabling old protocols and cipher suites prevents them. Birthday attacks exploit hash collision probability; strong hash functions with sufficient output length reduce risk. Side-channel attacks use timing, power or cache information; constant-time operations and secure hardware help defend.",
                5
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit3Topics = [
    introductionToCryptography,
    symmetricAndAsymmetricEncryption,
    hashingDigitalSignaturesAndCertificates,
    publicKeyInfrastructureAndSslTls,
    cryptographicApplicationsAndAttacks,
];