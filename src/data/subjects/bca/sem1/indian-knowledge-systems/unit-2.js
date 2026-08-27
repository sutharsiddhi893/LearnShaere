/* =========================================================
   BCA • SEM 1 • Indian Knowledge Systems
   UNIT 2 — Indian Contributions: Mathematics, Astronomy, Science and Arts
========================================================= */

import {
  createTopic,
  heading,
  text,
  list,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 — Indian Mathematics: From Vedas to Modern Times
========================================================= */

const indianMathematics = createTopic(
    "indian-mathematics",
    "Indian Mathematics: From Vedas to Modern Times",

    [
        definition(
            "Indian Mathematics",
            "The mathematics developed in the Indian subcontinent from the Vedic period to the modern era, characterised by the use of zero, the decimal system and powerful methods of calculation."
        ),

        heading("Ancient Indian Mathematics"),

        text(
            "The Sulba Sutras, attached to the Vedas, contain the earliest known Indian geometry. They describe methods for constructing fire altars of precise shapes and contain the equivalent of the Pythagorean theorem long before Pythagoras."
        ),

        heading("Contributions of Aryabhata"),

        list([
            "Aryabhatiya, written in 499 CE, is one of the earliest Indian mathematical texts.",
            "Gave the value of pi as 3.1416, accurate to four decimal places.",
            "Stated that the Earth rotates on its axis and the apparent motion of the stars is due to this rotation.",
            "Gave the area of a triangle as half base times height.",
            "Gave a method for finding square roots and cube roots.",
        ]),

        heading("Contributions of Brahmagupta"),

        list([
            "Author of Brahmasphutasiddhanta, 628 CE.",
            "First to use zero as a number and to give rules for arithmetic with negative numbers.",
            "Gave the formula for the area of a cyclic quadrilateral.",
            "Gave rules for multiplication and division of positive and negative numbers.",
        ]),

        heading("Contributions of Bhaskara II"),

        list([
            "Author of Lilavati and Bijaganita, twelfth century CE.",
            "Conceived of the concept of calculus and differentials before Newton and Leibniz.",
            "Gave a method for solving Pell's equation.",
            "Stated that the Earth is round and is supported by nothing.",
            "Estimated the time taken by the Earth to orbit the Sun as 365.2588 days, very close to the modern value.",
        ]),

        heading("The Indian Number System"),

        table(
            ["Feature", "Description"],
            [
                ["Use of zero", "First zero as a number, represented by a dot or small circle."],
                ["Place value", "The position of a digit determines its value, multiplied by powers of ten."],
                ["Nine digits and zero", "The ten symbols 0 to 9 form the basis of all numbers."],
                ["Decimal system", "Every ten of a smaller unit makes one of the next larger."],
                ["Large numbers", "Names up to parardha (10^55) are given in Indian texts."],
            ]
        ),

        note(
            "The Indian decimal system and the use of zero were transmitted to the Arab world by scholars such as Al Khwarizmi, and from there to Europe through translations, where they became the basis of modern mathematics.",
            "exam",
            "Frequently Asked"
        ),

        heading("The Concept of Zero and Infinity"),

        list([
            "Zero was called shunya in Sanskrit, meaning void or empty.",
            "Mahavira in the ninth century gave rules for operating with zero.",
            "Bhaskara II wrote that the fraction k divided by zero is infinity, an early recognition of the concept.",
            "Indian mathematics accepted the infinite as a valid concept long before Europe.",
        ]),

        heading("Key Indian Mathematical Ideas"),

        table(
            ["Idea", "Description", "Indian Contributor"],
            [
                ["Pythagorean theorem", "Relation between the sides of a right triangle", "Baudhayana, Apastamba"],
                ["Value of pi", "Approximated to several decimal places", "Aryabhata, Madhava"],
                ["Trigonometric functions", "Sine (jya) and cosine tables", "Aryabhata, Brahmagupta"],
                ["Quadratic equations", "Solutions of equations of degree two", "Sridhara, Brahmagupta"],
                ["Chakravala method", "Iterative method for indeterminate equations", "Bhaskara II"],
                ["Infinite series", "Series for pi, sine and cosine", "Madhava of Sangamagrama"],
                ["Pascal's triangle", "Binomial coefficients", "Pingala, Meru Prastara"],
            ]
        ),

        keyPoints([
            "Indian mathematicians gave the world the decimal system and the concept of zero.",
            "Aryabhata gave the value of pi and described the rotation of the Earth.",
            "Brahmagupta introduced rules for arithmetic with negative numbers.",
            "Bhaskara II anticipated concepts of calculus.",
            "Indian mathematics was transmitted to the world through the Arab scholars.",
        ]),
    ],

    {
        summary:
            "Trace the development of mathematics in India from the Vedic period to Bhaskara II and the concept of zero.",
        minutes: 11,
        tags: ["mathematics", "zero", "aryabhata", "important"],

        mcqs: [
            mcq(
                "Aryabhata lived in which century?",
                ["3rd", "5th", "8th", "12th"],
                1,
                "Aryabhata wrote the Aryabhatiya in 499 CE."
            ),
            mcq(
                "Zero as a number was first used systematically by:",
                ["Aryabhata", "Brahmagupta", "Bhaskara II", "Madhava"],
                1,
                "Brahmagupta in 628 CE gave rules for arithmetic with zero."
            ),
            mcq(
                "The author of Lilavati is:",
                ["Aryabhata", "Brahmagupta", "Bhaskara II", "Sridhara"],
                2,
                "Bhaskara II wrote the famous Lilavati on arithmetic."
            ),
            mcq(
                "The Indian word for zero is:",
                ["Ananta", "Shunya", "Sankhya", "Sama"],
                1,
                "Shunya means void or empty and is the origin of our word zero."
            ),
            mcq(
                "Madhava of Sangamagrama is known for:",
                ["Surgery", "Infinite series", "Poetry", "Music"],
                1,
                "Madhava gave infinite series expansions for pi and trigonometric functions."
            ),
            mcq(
                "The Sulba Sutras deal with:",
                ["Astronomy", "Geometry of altars", "Grammar", "Music"],
                1,
                "The Sulba Sutras contain the geometry of Vedic fire altars."
            ),
        ],

        questions: [
            qa(
                "Explain the Indian contribution to the concept of zero and the decimal system.",
                "Indian mathematicians were the first to treat zero as a number in its own right rather than as a mere placeholder. Brahmagupta in 628 CE gave rules for addition, subtraction, multiplication and division involving zero, and even attempted to define division by zero. The Indian decimal system uses nine digits and zero and is based on place value, in which the position of a digit determines its value multiplied by powers of ten. This system was transmitted by Arab scholars to Europe and became the foundation of modern arithmetic.",
                5
            ),
            qa(
                "Describe the contributions of Aryabhata.",
                "Aryabhata, who wrote the Aryabhatiya in 499 CE, gave the value of pi as 3.1416, accurate to four decimal places. He stated that the Earth rotates on its axis and that the apparent motion of the stars is due to this rotation, a heliocentric idea far ahead of his time. He gave the correct formula for the area of a triangle and a method for finding square roots and cube roots. He also gave a table of sine values and the basic formulas of trigonometry.",
                4
            ),
            qa(
                "What were the contributions of Bhaskara II to mathematics?",
                "Bhaskara II, who wrote Lilavati and Bijaganita in the twelfth century, gave powerful methods for solving indeterminate equations using the chakravala algorithm. He anticipated concepts of calculus and differentials by treating infinitesimals, and he correctly stated that the Earth is round, is unsupported in space and is gravitationally attracted to other bodies. His estimate of the length of the sidereal year as 365.2588 days is very close to the modern value of 365.2564 days.",
                4
            ),
            qa(
                "How did Indian mathematics reach the world?",
                "Indian mathematics reached the world through trade and scholarly exchange. Scholars such as Al Khwarizmi of the ninth century learned the Indian decimal system in Baghdad and wrote treatises that were translated into Latin. The works of Brahmagupta were translated into Arabic and later into Latin as Algoritmi de numero Indorum. Indian numerals became known in Europe as Arabic numerals, although they are in fact Indian in origin. The Indian place value system and the concept of zero are now universal.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 2 — Indian Astronomy and Calendar
========================================================= */

const indianAstronomy = createTopic(
    "indian-astronomy-and-calendar",
    "Indian Astronomy and Calendar",

    [
        definition(
            "Jyotisha",
            "The Indian science of astronomy and time keeping, considered one of the Vedangas or limbs of the Vedas, dealing with the movement of celestial bodies and the calculation of time."
        ),

        heading("Major Indian Astronomers"),

        table(
            ["Astronomer", "Period", "Notable Work", "Contribution"],
            [
                ["Aryabhata", "5th century CE", "Aryabhatiya", "Rotation of the Earth, accurate value of pi."],
                ["Varahamihira", "6th century CE", "Pancha Siddhantika", "Compared five astronomical systems."],
                ["Brahmagupta", "7th century CE", "Khandakhadyaka", "Rules for planetary motion, eclipses."],
                ["Bhaskara I", "7th century CE", "Mahabhaskariya", "Trigonometric formulas."],
                ["Lalla", "8th century CE", "Sishyadhivriddhida", "Improved planetary tables."],
                ["Bhaskara II", "12th century CE", "Siddhanta Shiromani", "Treatise on astronomy and mathematics."],
            ]
        ),

        note(
            "Aryabhata's statement that the Earth rotates on its axis was revolutionary. He also explained that eclipses occur because of the shadow of the Earth or the Moon, not because of the demon Rahu swallowing the celestial body as was commonly believed.",
            "exam",
            "Frequently Asked"
        ),

        heading("The Concept of Time in Indian Tradition"),

        table(
            ["Unit", "Duration"],
            [
                ["Prana", "About four seconds, one breath."],
                ["Ghatika", "24 minutes, 60 pranas."],
                ["Muhurta", "48 minutes, two ghatikas."],
                ["Prahara", "3 hours, 3.75 muhurtas."],
                ["Ahoratra", "24 hours, a day and a night."],
                ["Paksha", "15 days, a lunar fortnight."],
                ["Masa", "One month, two pakshas."],
                ["Ritu", "Two months, a season."],
                ["Ayana", "Six months, half a year."],
                ["Samvatsara", "12 months, a year."],
                ["Yuga", "A long cosmic cycle."],
            ]
        ),

        heading("The Yuga System"),

        list([
            "Satya Yuga or Krita Yuga — 1,728,000 years, age of truth.",
            "Treta Yuga — 1,296,000 years.",
            "Dvapara Yuga — 864,000 years.",
            "Kali Yuga — 432,000 years.",
            "Together the four yugas form a Mahayuga of 4,320,000 years.",
            "A thousand Mahayugas form a Kalpa, a day of Brahma.",
        ]),

        heading("Solar and Lunar Calendars"),

        table(
            ["Calendar", "Based on"],
            [
                ["Vikram Samvat", "Solar calendar used in North India, 57 BCE as epoch."],
                ["Shaka Samvat", "Solar calendar used in South India, 78 CE as epoch."],
                ["Hijri Calendar", "Lunar calendar, 622 CE as epoch, used by Indian Muslims."],
                ["Saka Calendar", "National calendar of India, adopted in 1957, Chaitra as first month."],
            ]
        ),

        heading("Important Indian Astronomical Instruments"),

        list([
            "Gnomon (Shanku) — vertical stick to measure shadow and latitude.",
            "Clepsydra (Ghatika Yantra) — water clock to measure time.",
            "Armillary sphere (Gola Yantra) — model of celestial circles to study the sky.",
            "Astrolabe — instrument to measure the altitude of stars.",
            "Jantar Mantar — observatories built by Sawai Jai Singh II in Delhi, Jaipur, Ujjain, Varanasi and Mathura.",
        ]),

        heading("Jantar Mantar of Jaipur"),

        text(
            "Built between 1724 and 1737, the Jantar Mantar at Jaipur is a UNESCO World Heritage Site. It contains giant stone and masonry instruments such as the Samrat Yantra, the world's largest sundial, the Jai Prakash Yantra and the Ram Yantra, capable of measuring time, declination of stars and position of planets with remarkable accuracy."
        ),

        keyPoints([
            "Indian astronomy is called Jyotisha and is one of the six Vedangas.",
            "Aryabhata explained the rotation of the Earth and the cause of eclipses.",
            "The Yuga system describes long cosmic cycles.",
            "India uses several calendars including Vikram Samvat and Saka Samvat.",
            "Jantar Mantar at Jaipur is a World Heritage observatory built by Sawai Jai Singh II.",
        ]),
    ],

    {
        summary:
            "Trace the development of Indian astronomy, the concept of time, the yuga system and the famous observatories.",
        minutes: 10,
        tags: ["astronomy", "jyotisha", "calendar", "important"],

        mcqs: [
            mcq(
                "The Indian science of astronomy is called:",
                ["Ganita", "Jyotisha", "Vastu", "Krishi"],
                1,
                "Jyotisha is the Vedanga dealing with astronomy and time keeping."
            ),
            mcq(
                "Aryabhata explained that eclipses occur due to:",
                ["Rahu swallowing the sun", "Shadow of the Earth or Moon", "Clouds", "Planetary conjunctions"],
                1,
                "Aryabhata correctly identified shadows as the cause of eclipses."
            ),
            mcq(
                "One Mahayuga consists of how many years?",
                ["432,000", "864,000", "1,728,000", "4,320,000"],
                3,
                "A Mahayuga has 4,320,000 human years."
            ),
            mcq(
                "The Jantar Mantar of Jaipur was built by:",
                ["Akbar", "Sawai Jai Singh II", "Shah Jahan", "Tipu Sultan"],
                1,
                "The observatory was built by Sawai Jai Singh II in the 18th century."
            ),
            mcq(
                "The Saka Calendar is used as the national calendar since:",
                ["1947", "1950", "1957", "1962"],
                2,
                "The Saka Calendar was adopted as the national calendar in 1957."
            ),
            mcq(
                "The duration of one Kali Yuga is:",
                ["432,000 years", "864,000 years", "1,296,000 years", "1,728,000 years"],
                0,
                "Kali Yuga is the shortest of the four yugas, lasting 432,000 years."
            ),
        ],

        questions: [
            qa(
                "Explain the contributions of Aryabhata to astronomy.",
                "Aryabhata in his Aryabhatiya gave a remarkably accurate value of pi as 3.1416 and described the apparent motion of the stars as due to the rotation of the Earth on its axis. He explained solar and lunar eclipses as the shadows of the Moon and the Earth respectively, refuting the popular myth of the demon Rahu. He also calculated the length of the sidereal day and gave trigonometric tables for planetary positions, laying the foundation of Indian mathematical astronomy.",
                4
            ),
            qa(
                "What is the yuga system?",
                "The yuga system is the Indian cosmological framework that divides cosmic time into four ages. Krita or Satya Yuga of 1,728,000 years is the age of truth, Treta Yuga of 1,296,000 years is the age of virtue, Dvapara Yuga of 864,000 years is the age of declining righteousness, and Kali Yuga of 432,000 years is the age of discord. Together they form a Mahayuga of 4,320,000 years, and a thousand Mahayugas form a Kalpa, a day of the creator.",
                4
            ),
            qa(
                "Describe the Indian calendar system.",
                "India uses several calendars. The Vikram Samvat is a solar calendar of 57 BCE used widely in the north. The Saka Samvat of 78 CE is used in the south. The Indian national calendar, adopted in 1957, is a reformed Saka calendar in which Chaitra is the first month, Phalguna the last, and the year is reckoned from 78 CE. There is also a lunar calendar based on the phases of the Moon, used for fixing the dates of festivals and religious events.",
                4
            ),
            qa(
                "Write a short note on Jantar Mantar of Jaipur.",
                "Jantar Mantar at Jaipur is a magnificent open air observatory built by Maharaja Sawai Jai Singh II between 1724 and 1737. It contains 19 large stone instruments including the Samrat Yantra, the world's largest sundial, the Jai Prakash Yantra, the Ram Yantra and the Narivalaya Yantra. The instruments measure time, declination of stars, altitude of the sun and positions of planets with great accuracy. It is a UNESCO World Heritage Site and a popular centre for astronomical research and tourism.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 3 — Indian Contributions to Science and Technology
========================================================= */

const indianScienceTechnology = createTopic(
    "indian-contributions-to-science-and-technology",
    "Indian Contributions to Science and Technology",

    [
        text(
            "India has a long tradition of scientific enquiry in metallurgy, medicine, agriculture, engineering, water management and ship building. Many of these practices were documented in ancient texts and continue to inspire modern research."
        ),

        heading("Metallurgy and Materials"),

        list([
            "The Iron Pillar of Delhi, more than 1600 years old, has not rusted despite exposure to weather, due to its high phosphorus content and a protective passive layer.",
            "The Dancing Girl of Mohenjo Daro, about 4500 years old, is made of bronze by the lost wax casting method.",
            "Wootz steel of South India was exported worldwide and was used to make the famous Damascus swords.",
            "Ancient Indian gold and silver coins show high standards of minting and metal purity.",
        ]),

        heading("Agriculture and Food"),

        list([
            "Krishi Parashara and Vrikshayurveda describe soil, seasons, irrigation, manures and plant diseases.",
            "Multiple cropping, rotation and mixed farming were practised in ancient India.",
            "Traditional water harvesting systems such as the tank, the stepwell (vav), the khadin and the ahar pyne are still studied for sustainable agriculture.",
            "India is the original home of cotton, sugarcane, turmeric, black pepper, cardamom and many vegetables.",
        ]),

        heading("Medicine"),

        list([
            "Ayurveda, the science of life, with texts by Charaka and Sushruta.",
            "Sushruta described more than 300 surgical operations and 120 instruments, including plastic surgery.",
            "Smallpox inoculation was practised in India centuries before Jenner, and was known as variolation.",
            "Neem, turmeric, ashwagandha and tulsi are now studied worldwide for their medicinal properties.",
        ]),

        heading("Architecture and Engineering"),

        list([
            "Indus Valley cities show advanced town planning with grid streets, drainage and public baths.",
            "Stepwells, temples, mosques and forts show mastery of stone, mortar and structural engineering.",
            "Temple architecture developed distinct regional styles such as Nagara, Dravida and Vesara.",
            "The stupas of Sanchi and Amaravati are marvels of stone construction.",
        ]),

        heading("Water Management and Irrigation"),

        list([
            "The Grand Anicut on the Kaveri, built in the second century CE, is one of the oldest dams in the world still in use.",
            "Ingenious systems of canals, tanks and wells supported agriculture in dry regions.",
            "Traditional water harvesting structures such as the johad, the tanka and the khadin recharge groundwater.",
            "The Indus Valley civilisation had covered drains and soak pits for sanitation.",
        ]),

        heading("Ship Building and Navigation"),

        list([
            "India traded with Rome, South East Asia, China and Africa through sea routes for over two thousand years.",
            "Indian ship builders used teak wood, coir ropes and cotton sails to build large sea going vessels.",
            "The Lothal dockyard in Gujarat, about 4500 years old, is the earliest known tidal dock in the world.",
            "Indian navigators used the stars and the monsoon winds to cross the Arabian Sea and the Bay of Bengal.",
        ]),

        heading("Textiles"),

        list([
            "Indus Valley sites show cotton and silk fabrics of fine quality.",
            "India is the original home of muslin from Dhaka, chintz from Masulipatnam, patola from Patan and ikat from Odisha.",
            "The spinning wheel, called charkha, was used in India for centuries.",
            "Indigo, the source of the blue dye, was a major export from India to Europe for centuries.",
        ]),

        note(
            "The Lothal dockyard and the iron pillar of Delhi are silent witnesses to the technological maturity of ancient India, achieved without sacrificing sustainability or harmony with nature.",
            "tip",
            "Heritage"
        ),

        keyPoints([
            "Ancient India excelled in metallurgy, agriculture, medicine and engineering.",
            "The Iron Pillar of Delhi and the Dancing Girl of Mohenjo Daro show high metallurgical skill.",
            "Sushruta described plastic surgery and cataract surgery.",
            "Traditional water harvesting systems are being revived today.",
            "Indian textiles such as muslin, chintz and patola were world famous.",
        ]),
    ],

    {
        summary:
            "Survey Indian contributions to metallurgy, agriculture, medicine, architecture, water management and textiles.",
        minutes: 10,
        tags: ["science", "technology", "metallurgy", "important"],

        mcqs: [
            mcq(
                "The Iron Pillar of Delhi is known for:",
                ["Its height", "Resistance to rust", "Being made of steel", "Its inscriptions"],
                1,
                "The Iron Pillar has not rusted despite being more than 1600 years old."
            ),
            mcq(
                "The Dancing Girl of Mohenjo Daro is made of:",
                ["Iron", "Gold", "Bronze", "Silver"],
                2,
                "The Dancing Girl is a bronze figurine made by the lost wax process."
            ),
            mcq(
                "Wootz steel was exported from:",
                ["North India", "South India", "Central Asia", "China"],
                1,
                "Wootz steel came from the southern states, especially Tamil Nadu and Karnataka."
            ),
            mcq(
                "The Grand Anicut is built on which river?",
                ["Ganga", "Kaveri", "Krishna", "Godavari"],
                1,
                "The Grand Anicut is on the Kaveri in Tamil Nadu."
            ),
            mcq(
                "Lothal is famous for its:",
                ["Temple", "Dockyard", "Fort", "Stepwell"],
                1,
                "Lothal in Gujarat has the earliest known tidal dock in the world."
            ),
            mcq(
                "Charkha is the Indian name for:",
                ["Spinning wheel", "Potter's wheel", "Oil press", "Water wheel"],
                0,
                "The charkha is a hand driven spinning wheel."
            ),
        ],

        questions: [
            qa(
                "Describe the Indian contribution to metallurgy.",
                "Indian metallurgists produced iron, copper, bronze, brass, gold, silver, lead and zinc at a very early date. The Iron Pillar of Delhi, more than 1600 years old, has resisted rust because of the high phosphorus content of the iron and the formation of a passive protective layer. Wootz steel of South India was famed worldwide and was the source of Damascus swords. The Dancing Girl of Mohenjo Daro, about 4500 years old, was cast in bronze by the lost wax method. These achievements show a sophisticated understanding of metal working.",
                4
            ),
            qa(
                "Explain the Indian tradition of water management.",
                "Indian civilisation developed a wide range of water harvesting and irrigation systems suited to different regions. The Grand Anicut on the Kaveri, built in the second century CE, diverts water into large canals and is still in use. The Indus Valley cities of Mohenjo Daro and Harappa had covered drains, soak pits and bathing platforms. Traditional structures such as the tank, the johad, the khadin, the ahar pyne and the stepwell recharge groundwater and provide water for drinking and irrigation. These systems are sustainable, decentralised and ecologically sound.",
                4
            ),
            qa(
                "Write a short note on Indian contributions to medicine.",
                "India has a long tradition of medicine, of which Ayurveda is the most well known. The Charaka Samhita is the great treatise on internal medicine, while the Sushruta Samhita is the great treatise on surgery, describing more than 300 operations including rhinoplasty, cataract removal and treatment of fractures. Indian physicians used herbal, mineral and animal products and laid great stress on diet, lifestyle and prevention. The practice of variolation for smallpox was known in India centuries before Jenner's vaccination in the West.",
                4
            ),
            qa(
                "Mention the major Indian contributions to ship building and trade.",
                "India has been a maritime nation for thousands of years. The Lothal dockyard in Gujarat, about 4500 years old, is the earliest known tidal dock in the world. Indian ship builders used teak wood, coir ropes and cotton sails to build sturdy vessels that sailed the Arabian Sea and the Bay of Bengal. Indian merchants traded with Rome, South East Asia, China and Africa, exporting spices, textiles, gems and steel and importing gold, silver and horses. Navigation was done by observing the stars and the seasonal monsoon winds.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 4 — Indian Languages, Literature and Arts
========================================================= */

const indianLanguagesArts = createTopic(
    "indian-languages-literature-and-arts",
    "Indian Languages, Literature and Arts",

    [
        definition(
            "Linguistic Heritage of India",
            "The rich family of languages, scripts, literature and performing arts that have flourished on the Indian subcontinent for over three thousand years."
        ),

        heading("Language Families of India"),

        table(
            ["Family", "Branches", "Major Languages"],
            [
                ["Indo Aryan", "Northern and central India", "Hindi, Bengali, Marathi, Gujarati, Punjabi, Sanskrit"],
                ["Dravidian", "Southern India", "Tamil, Telugu, Kannada, Malayalam"],
                ["Tibeto Burman", "Northeast India", "Bodo, Meitei, Garo, Naga languages"],
                ["Austroasiatic", "Central and northeast India", "Khasi, Santhali, Mundari"],
                ["Sino Tibetan", "Eastern Himalayas", "Manipuri (Meitei), Lepcha"],
            ]
        ),

        heading("Scripts of India"),

        list([
            "Brahmi — the parent of most modern Indian scripts, used from 3rd century BCE.",
            "Devanagari — script of Sanskrit, Hindi, Marathi and Nepali.",
            "Bengali, Gujarati, Gurmukhi, Oriya — descend from Brahmi.",
            "Tamil, Telugu, Kannada, Malayalam — Dravidian scripts that also descend from Brahmi with differences.",
            "Arabic and Persian scripts were used for Urdu.",
        ]),

        heading("Sanskrit and Classical Languages"),

        text(
            "Sanskrit is called the mother of all Indian languages. The classical languages officially recognised by the Government of India are Tamil, Sanskrit, Kannada, Telugu, Malayalam and Odia."
        ),

        heading("Major Indian Literary Works"),

        table(
            ["Work", "Author", "Language"],
            [
                ["Ramayana", "Valmiki", "Sanskrit"],
                ["Mahabharata", "Vyasa", "Sanskrit"],
                ["Abhijnana Shakuntalam", "Kalidasa", "Sanskrit"],
                ["Gitanjali", "Rabindranath Tagore", "Bengali"],
                ["Kambaramayanam", "Kamban", "Tamil"],
                ["Kaviraj Margam", "Various", "Tamil Sangam literature"],
            ]
        ),

        heading("Performing Arts"),

        table(
            ["Art", "Description", "Region"],
            [
                ["Bharatanatyam", "Classical dance with fixed postures and gestures", "Tamil Nadu"],
                ["Kathak", "Story telling dance with spins and footwork", "North India"],
                ["Kathakali", "Dance drama with elaborate make up", "Kerala"],
                ["Odissi", "Dance with sculpturesque postures", "Odisha"],
                ["Manipuri", "Dance with soft and graceful movements", "Manipur"],
                ["Kuchipudi", "Dance drama combining dance and dialogue", "Andhra Pradesh"],
                ["Sattriya", "Dance form from Vaishnavite monasteries", "Assam"],
                ["Mohiniyattam", "Dance with swaying body movements", "Kerala"],
            ]
        ),

        note(
            "There are eight classical dances officially recognised by the Sangeet Natak Akademi: Bharatanatyam, Kathak, Kathakali, Odissi, Manipuri, Kuchipudi, Sattriya and Mohiniyattam.",
            "exam",
            "Frequently Asked"
        ),

        heading("Music Traditions"),

        table(
            ["System", "Features"],
            [
                ["Hindustani Music", "Northern style with emphasis on raga elaboration, gharanas and improvisation."],
                ["Carnatic Music", "Southern style with emphasis on kriti, varnam and devotional compositions."],
                ["Raga", "A melodic framework with specific ascending and descending notes."],
                ["Tala", "A rhythmic cycle measured in beats."],
                ["Instruments", "Veena, sitar, sarod, sarangi, tabla, mridangam, ghatam, flute."],
            ]
        ),

        heading("Visual Arts"),

        list([
            "Ajanta and Ellora caves — murals and sculptures from 2nd century BCE to 10th century CE.",
            "Khajuraho and Konark — stone temples with intricate carvings.",
            "Madhubani, Warli, Pattachitra, Tanjore and miniature paintings — distinct regional styles.",
            "Sculpture traditions of Mathura, Gandhara, Pallava, Chola and Hoysala.",
        ]),

        heading("Architecture"),

        table(
            ["Style", "Region", "Features"],
            [
                ["Nagara", "North India", "Curvilinear shikhara, beehive tower."],
                ["Dravida", "South India", "Pyramidal vimana, gopuram gateway."],
                ["Vesara", "Deccan", "Hybrid of Nagara and Dravida."],
                ["Indo Islamic", "Mughal and Sultanate", "Domes, arches, minarets, gardens."],
                ["Indo Saracenic", "British period", "Blend of Indian and European."],
            ]
        ),

        keyPoints([
            "India has four major language families: Indo Aryan, Dravidian, Tibeto Burman and Austroasiatic.",
            "Most Indian scripts descend from Brahmi.",
            "The eight classical dances include Bharatanatyam, Kathak and Odissi.",
            "Music is divided into the Hindustani and Carnatic systems.",
            "Indian visual arts include cave murals, temple sculpture and regional painting styles.",
        ]),
    ],

    {
        summary:
            "Survey the linguistic, literary, performing, musical and architectural heritage of India.",
        minutes: 11,
        tags: ["languages", "literature", "arts", "important"],

        mcqs: [
            mcq(
                "The parent of most modern Indian scripts is:",
                ["Devanagari", "Brahmi", "Tamil", "Persian"],
                1,
                "Brahmi is the ancestor of Devanagari and most other Indian scripts."
            ),
            mcq(
                "The author of the Ramayana in Sanskrit is:",
                ["Vyasa", "Valmiki", "Kalidasa", "Tulsidas"],
                1,
                "The Ramayana is attributed to the sage Valmiki."
            ),
            mcq(
                "Bharatanatyam originated in:",
                ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
                1,
                "Bharatanatyam is the classical dance of Tamil Nadu."
            ),
            mcq(
                "Kathakali is the classical dance of:",
                ["Tamil Nadu", "Manipur", "Kerala", "Odisha"],
                2,
                "Kathakali is famous for its elaborate make up and costumes in Kerala."
            ),
            mcq(
                "Carnatic music is associated with:",
                ["North India", "South India", "East India", "West India"],
                1,
                "Carnatic music is the classical music system of South India."
            ),
            mcq(
                "The temple style with a curvilinear shikhara is:",
                ["Dravida", "Nagara", "Vesara", "Indo Islamic"],
                1,
                "The Nagara style is characterised by the curvilinear shikhara."
            ),
        ],

        questions: [
            qa(
                "Describe the language families of India.",
                "India is a land of great linguistic diversity, with four major language families. The Indo Aryan family, spoken by about 78 percent of the population, includes Hindi, Bengali, Marathi, Gujarati, Punjabi and Sanskrit. The Dravidian family, spoken mainly in the south, includes Tamil, Telugu, Kannada and Malayalam. The Tibeto Burman family is spoken in the north east, and the Austroasiatic family includes languages such as Santali and Mundari. The Constitution of India recognises 22 scheduled languages.",
                4
            ),
            qa(
                "Explain the difference between Hindustani and Carnatic music.",
                "Hindustani music is the classical music system of North India. It places great emphasis on raga elaboration, slow development (alap), improvisations and emotional expression, and is organised into gharanas or schools. Carnatic music is the classical system of South India. It uses kritis, varnams and devotional compositions, and gives importance to composition, fixed structure and the concert format. Both systems use raga and tala but differ in style, repertoire and presentation.",
                4
            ),
            qa(
                "List the eight classical dances of India.",
                "The eight classical dances of India recognised by the Sangeet Natak Akademi are: Bharatanatyam from Tamil Nadu, Kathak from North India, Kathakali from Kerala, Odissi from Odisha, Manipuri from Manipur, Kuchipudi from Andhra Pradesh, Sattriya from Assam and Mohiniyattam from Kerala. Each dance has a distinct vocabulary of hand gestures, footwork, body postures and expressions, and is closely linked to a particular cultural and religious tradition.",
                4
            ),
            qa(
                "Compare Nagara and Dravida temple styles.",
                "The Nagara style of temple architecture is found in North India. It is characterised by a curvilinear shikhara that rises over the sanctum and a small assembly hall. The Dravida style is found in South India. It is characterised by a pyramidal vimana in distinct storeys and a tall gopuram or gateway tower at the entrance. The Vesara style of the Deccan is a hybrid of the two. All three styles use intricate carvings and sculptures of deities and stories from the Puranas.",
                4
            ),
        ],
    }
);

/* =========================================================
   TOPIC 5 — IKS for a Sustainable Future
========================================================= */

const iksForSustainableFuture = createTopic(
    "iks-for-a-sustainable-future",
    "IKS for a Sustainable Future",

    [
        text(
            "Indian Knowledge Systems offer valuable models for sustainable living, ethical governance and holistic well being. Several concepts from IKS are now being integrated with the United Nations Sustainable Development Goals."
        ),

        heading("Concept of Vasudhaiva Kutumbakam"),

        definition(
            "Vasudhaiva Kutumbakam",
            "A Sanskrit phrase from the Maha Upanishad meaning the world is one family, expressing the Indian ideal of universal brotherhood and global responsibility."
        ),

        note(
            "Vasudhaiva Kutumbakam was chosen as the theme of India's G20 presidency in 2023, reflecting the global relevance of IKS ideals.",
            "tip",
            "G20 Theme"
        ),

        heading("IKS and the Sustainable Development Goals"),

        table(
            ["SDG", "How IKS Contributes"],
            [
                ["SDG 1 No Poverty", "Concepts of dhana and dana, traditional social security through jajmani."],
                ["SDG 2 Zero Hunger", "Krishi and Vrikshayurveda, traditional grain banks and Anna Chhatras."],
                ["SDG 3 Good Health", "Ayurveda, Yoga, Naturopathy, traditional food habits."],
                ["SDG 4 Quality Education", "Gurukul system, holistic learning, Taittiriya Upanishad model of five sheaths of personality."],
                ["SDG 6 Clean Water", "Traditional water harvesting structures such as tanks, johads and stepwells."],
                ["SDG 7 Affordable Energy", "Traditional wisdom on energy conservation and use of solar and wind."],
                ["SDG 11 Sustainable Cities", "Vastu Shastra, traditional town planning, use of local materials."],
                ["SDG 12 Responsible Consumption", "Concept of aparigraha or non hoarding, mindful use of resources."],
                ["SDG 13 Climate Action", "Respect for nature in Indian thought, sacred groves, river protection."],
                ["SDG 16 Peace and Justice", "Concept of dharma, non violence, satyagraha."],
                ["SDG 17 Partnerships", "Vasudhaiva Kutumbakam, India's philosophy of global cooperation."],
            ]
        ),

        heading("Ethics from IKS"),

        list([
            "Satyam vada dharmam chara — Speak the truth, practise righteousness. (Taittiriya Upanishad)",
            "Ahimsa paramo dharmah — Non violence is the highest dharma.",
            "Paropakaraya punyaya papaya parapidanam — Helping others is merit, hurting others is sin.",
            "Aparigraha — Do not hoard, consume only what is needed.",
            "Sarve bhavantu sukhinah, sarve santu niramayah — May all be happy, may all be free from disease.",
        ]),

        heading("Lifestyle Lessons from IKS"),

        list([
            "Dinacharya — daily routine for health: wake early, exercise, eat at fixed times, sleep on time.",
            "Ritucharya — seasonal routine: adjust food, clothing and activity to the season.",
            "Sattvic diet — fresh, light, vegetarian food that promotes clarity of mind.",
            "Yoga and Pranayama — daily practice for body and mind.",
            "Meditation — even ten minutes a day reduces stress and improves focus.",
        ]),

        heading("Traditional Knowledge and Intellectual Property"),

        list([
            "Traditional Knowledge Digital Library (TKDL) documents Indian medicinal knowledge to prevent patents by foreign companies.",
            "Basmati rice, turmeric and neem have been subjects of patent disputes settled using TKDL.",
            "Geographical Indications such as Darjeeling Tea, Mysore Sandal Soap and Banarasi Saree protect Indian products.",
            "The Biological Diversity Act of 2002 regulates access to Indian biological resources and traditional knowledge.",
        ]),

        heading("IKS and Modern Research"),

        table(
            ["Field", "Indian Contribution Under Study"],
            [
                ["Medicine", "Turmeric (curcumin), Ashwagandha, Tulsi, Neem, Boswellia."],
                ["Agriculture", "Zero Budget Natural Farming, Vedic farming, integrated pest management."],
                ["Energy", "Solar architecture from ancient temples, biogas from gobar gas plants."],
                ["Environment", "Sacred groves, river rejuvenation, forest management by tribals."],
                ["Management", "Arthashastra principles for modern governance and leadership."],
            ]
        ),

        heading("Initiatives by the Government of India"),

        list([
            "IKS Division of the Ministry of Education, AICTE and UGC promote teaching of IKS.",
            "AYUSH Ministry supports research in Ayurveda, Yoga, Unani, Siddha and Homeopathy.",
            "BIRAC and other agencies fund research on traditional knowledge.",
            "National Mission on Cultural Mapping documents India's cultural heritage.",
            "International Day of Yoga is celebrated on 21 June in over 190 countries.",
        ]),

        keyPoints([
            "Vasudhaiva Kutumbakam expresses the global vision of IKS.",
            "IKS aligns with the UN Sustainable Development Goals in many areas.",
            "Traditional Knowledge Digital Library protects Indian knowledge from misappropriation.",
            "Daily and seasonal routines (Dinacharya and Ritucharya) promote sustainable health.",
            "IKS is being revived through research, education and government programmes.",
        ]),
    ],

    {
        summary:
            "Connect Indian Knowledge Systems with the Sustainable Development Goals, ethics, lifestyle, intellectual property and modern research.",
        minutes: 11,
        tags: ["sustainability", "sdg", "vasudhaiva", "important"],

        mcqs: [
            mcq(
                "Vasudhaiva Kutumbakam means:",
                ["Knowledge is power", "The world is one family", "Truth alone triumphs", "Non violence is strength"],
                1,
                "The phrase from the Maha Upanishad means the world is one family."
            ),
            mcq(
                "TKDL stands for:",
                ["Traditional Knowledge Digital Library", "Total Knowledge of Digital Library", "Technical Knowledge Development Lab", "Traditional Karnataka Digital Library"],
                0,
                "TKDL documents traditional Indian knowledge to prevent bio piracy."
            ),
            mcq(
                "Dinacharya refers to:",
                ["Seasonal routine", "Daily routine", "Yearly routine", "Weekly routine"],
                1,
                "Dinacharya is the daily routine prescribed by Ayurveda for good health."
            ),
            mcq(
                "International Day of Yoga is celebrated on:",
                ["1 May", "21 June", "15 August", "2 October"],
                1,
                "The day is celebrated on the summer solstice, 21 June."
            ),
            mcq(
                "Ahimsa paramo dharmah is from the:",
                ["Bhagavad Gita", "Mahabharata", "Baudhayana Dharmasutra", "Ramayana"],
                2,
                "The famous saying is from the Baudhayana Dharmasutra."
            ),
            mcq(
                "Which Indian product received a Geographical Indication tag?",
                ["Darjeeling Tea", "Cola", "iPhone", "Pizza"],
                0,
                "Darjeeling Tea was the first Indian product to receive a GI tag."
            ),
        ],

        questions: [
            qa(
                "Explain the concept of Vasudhaiva Kutumbakam and its relevance today.",
                "Vasudhaiva Kutumbakam, a phrase from the Maha Upanishad, means the world is one family. It expresses the Indian ideal that all human beings and all beings are connected and that the welfare of each is the responsibility of all. In today's world of climate change, pandemics and conflict, the idea offers a powerful ethical framework for global cooperation, peace and sustainable development. India chose this theme for its G20 presidency in 2023 to share the message with the world.",
                4
            ),
            qa(
                "How do Indian Knowledge Systems align with the UN Sustainable Development Goals?",
                "IKS aligns with the SDGs in many ways. SDG 3 on health is supported by Ayurveda and Yoga. SDG 2 on zero hunger is supported by traditional agriculture and grain banks. SDG 4 on education is supported by the gurukul system and the Taittiriya model of personality. SDG 6 on water is supported by traditional harvesting systems such as tanks and stepwells. SDG 13 on climate action is supported by the Indian respect for nature, sacred groves and river protection. SDG 17 on partnerships is supported by Vasudhaiva Kutumbakam itself.",
                5
            ),
            qa(
                "What is the Traditional Knowledge Digital Library? Why was it created?",
                "The Traditional Knowledge Digital Library is a database created by the Government of India, the Council of Scientific and Industrial Research and the Ministry of AYUSH. It documents traditional Indian knowledge in medicine, agriculture and other fields in a format understandable to patent examiners. It was created to prevent the misappropriation of Indian knowledge by foreign companies, such as the patents attempted on turmeric, neem and basmati rice. The TKDL has so far helped India successfully defend its traditional knowledge in international patent offices.",
                4
            ),
            qa(
                "Explain the concepts of Dinacharya and Ritucharya.",
                "Dinacharya is the daily routine prescribed by Ayurveda for healthy living. It includes waking before sunrise, evacuation, exercise, bathing, prayer, study, work, meals at fixed times and sleep at night. Ritucharya is the seasonal routine that recommends changes in food, clothing and activity according to the season, to keep the doshas in balance. Together these two practices promote physical health, mental peace and harmony with the environment, and they form the foundation of preventive health in IKS.",
                4
            ),
        ],
    }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    indianMathematics,
    indianAstronomy,
    indianScienceTechnology,
    indianLanguagesArts,
    iksForSustainableFuture,
];