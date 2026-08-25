/* =========================================================
   BCA � SEM 2 � Environment Studies
   UNIT 2 � Social Issues, Sustainability and Human Responsibility
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
   TOPIC 1 � Social Issues and the Environment
========================================================= */

const socialIssues = createTopic(
    "social-issues-and-environment",
    "Social Issues and the Environment",

    [
        definition(
            "Environmental Justice",
            "The fair treatment and meaningful involvement of all people, regardless of race, colour, national origin or income, with respect to environmental laws, regulations and policies."
        ),

        heading("Population and Environment"),

    list([
        "World population crossed 8 billion in 2022.",
        "India is the most populous country, with over 1.4 billion people.",
        "Population growth increases demand for food, water, energy and land.",
        "It also increases waste, pollution and pressure on ecosystems.",
        "Sustainable development balances population with resources.",
    ]),


list([
    "More than half of the world's population now lives in cities.",
    "Urbanisation leads to growth of slums, traffic, pollution and pressure on services.",
    "Smart cities use technology to improve quality of life and reduce environmental impact.",
    "Green buildings, public transport and urban green spaces are key.",
]),


list([
    "Heat waves cause dehydration, heat stroke and deaths.",
    "Air pollution worsens asthma, bronchitis and heart disease.",
    "Floods and storms displace millions and spread disease.",
    "Vector borne diseases like dengue and malaria spread to new areas as the climate warms.",
    "Vulnerable groups: children, elderly, pregnant women, the poor.",
]),


table(
    ["Type", "Examples", "Treatment"],
    [
        ["Municipal solid waste", "Kitchen, paper, plastic", "Segregation, composting, landfill, incineration"],
        ["Hazardous waste", "Chemicals, batteries, e-waste", "Special treatment, secure landfill"],
        ["Biomedical waste", "Needles, syringes, body fluids", "Autoclave, incineration"],
        ["E-waste", "Mobile phones, computers, TVs", "Refurbish, recycle, formal collection"],
        ["Plastic waste", "Bags, bottles, packaging", "Reduce, reuse, ban single use plastic"],
    ]
),


list([
    "Refuse � say no to what you do not need.",
    "Reduce � use less.",
    "Reuse � use again instead of throwing away.",
    "Repurpose � give a new use to an old item.",
    "Recycle � process waste into new raw material.",
]),

    note(
        "India generates about 62 million tonnes of municipal solid waste every year, of which only about 75 percent is collected and even less is treated. The Swachh Bharat Mission aims to make India clean by encouraging segregation at source and proper disposal.",
        "tip",
        "5 R's"
    ),


list([
    "Natural disasters: floods, earthquakes, cyclones, landslides, droughts.",
    "Man made disasters: industrial accidents, fires, oil spills, nuclear accidents.",
    "Phases: prevention, preparedness, response, recovery, mitigation.",
    "National Disaster Management Authority (NDMA) is the apex body in India.",
    "Local community preparedness is the key to saving lives.",
]),

    keyPoints([
        "Population and urbanisation pressure on the environment is growing.",
        "Climate change affects health, especially of the vulnerable.",
        "Waste must be managed through the 5 R's.",
        "Disasters need prevention, preparedness and response.",
        "NDMA leads disaster management in India.",
        ]),
    ],

    {
        summary:
    "Understand social issues at the intersection of environment, health, waste and disaster management.",
        minutes: 10,
            tags: ["social", "waste", "disaster", "important"],

                mcqs: [
                    mcq(
                        "World population crossed 8 billion in:",
                        ["2000", "2010", "2022", "2025"],
                        2,
                        "World population crossed 8 billion in November 2022."
                    ),
                    mcq(
                        "The 5 R's of waste management start with:",
                        ["Recycle", "Refuse", "Reduce", "Reuse"],
                        1,
                        "The first R is Refuse, then Reduce, Reuse, Repurpose, Recycle."
                    ),
                    mcq(
                        "NDMA stands for:",
                        ["National Disaster Management Authority", "National Development Management Agency", "New Delhi Municipal Authority", "National Data Management Authority"],
                        0,
                        "NDMA is the National Disaster Management Authority."
                    ),
                    mcq(
                        "Swachh Bharat Mission focuses on:",
                        ["Digital India", "Clean India", "Make in India", "Skill India"],
                        1,
                        "Swachh Bharat Mission, or Clean India Mission, was launched in 2014."
                    ),
                    mcq(
                        "E-waste is:",
                        ["Kitchen waste", "Electronic waste", "Medical waste", "Agricultural waste"],
                        1,
                        "E-waste is electronic waste such as old phones and computers."
                    ),
                    mcq(
                        "Heat waves are caused by:",
                        ["Rain", "Snow", "Extreme heat", "Cyclone"],
                        2,
                        "Heat waves are prolonged periods of excessive heat."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the 5 R's of waste management.",
                            "The 5 R's of waste management, in order of priority, are Refuse, Reduce, Reuse, Repurpose and Recycle. Refuse means saying no to items that you do not really need, such as free samples or single use plastic. Reduce means using less in the first place, such as printing less or buying products with less packaging. Reuse means using an item again for the same or a different purpose, such as reusing glass jars. Repurpose means giving a new use to an old item, such as turning a tin into a pen stand. Recycle means processing waste into new raw material, which is the last option because it still uses energy.",
                            4
                        ),
                        qa(
                            "What are the effects of urbanisation on the environment?",
                            "Urbanisation puts enormous pressure on the environment. The concentration of people in cities increases the demand for housing, water, energy and food. It leads to deforestation, loss of agricultural land, air and water pollution from traffic and industry, generation of large amounts of solid waste, urban heat island effect, and growth of slums. At the same time, dense cities can be more sustainable if planned well, with public transport, green buildings, parks, rainwater harvesting and waste segregation. The challenge is to plan urban growth so that it is inclusive, resilient and environmentally friendly.",
                            4
                        ),
                        qa(
                            "Differentiate between natural and man made disasters.",
                            "Natural disasters are caused by natural processes and include floods, earthquakes, cyclones, landslides, droughts, tsunamis and volcanic eruptions. They cannot be prevented but their impact can be reduced through preparedness and early warning. Man made disasters are caused by human activity, such as industrial accidents, chemical leaks, oil spills, fires, nuclear accidents, building collapses and stampedes. They can be prevented through proper design, regulation and training. Both types need a well rehearsed disaster management plan covering prevention, preparedness, response and recovery.",
                            4
                        ),
                        qa(
                            "Explain the phases of disaster management.",
                            "Disaster management has four phases. Prevention means taking steps to reduce the likelihood of a disaster, such as enforcing building codes, planting mangroves to prevent floods, or banning construction in landslide prone areas. Preparedness includes early warning systems, evacuation plans, training, drills and stock of relief material. Response is the action taken during and immediately after the disaster, such as search and rescue, medical care, shelter and food. Recovery is the long term process of restoring normal life, rebuilding infrastructure and helping people to rebuild their livelihoods. A good plan covers all four phases.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Climate Change and Global Warming
========================================================= */

const climateChange = createTopic(
    "climate-change-and-global-warming",
    "Climate Change and Global Warming",

    [
        definition(
            "Climate Change",
            "A long term shift in the statistical distribution of weather patterns over decades to millions of years, often used today to refer to the rapid warming caused by human activity since the industrial revolution."
        ),

        definition(
            "Global Warming",
            "The gradual increase in the average temperature of the earth's atmosphere due to the greenhouse effect caused by increased levels of greenhouse gases."
        ),


    list([
        "Sun's energy reaches the earth as visible light.",
        "Earth absorbs the energy and re emits it as infrared radiation (heat).",
        "Greenhouse gases in the atmosphere trap some of this heat.",
        "This keeps the earth warm enough to support life.",
        "Without greenhouse effect, earth's average temperature would be about minus 18 degrees Celsius.",
    ]),


table(
    ["Gas", "Source", "GWP"],
    [
        ["Carbon dioxide (CO2)", "Burning of fossil fuels, deforestation", "1"],
        ["Methane (CH4)", "Livestock, rice paddies, landfills", "28"],
        ["Nitrous oxide (N2O)", "Fertilisers, burning of biomass", "265"],
        ["Hydrofluorocarbons (HFCs)", "Refrigerants, air conditioners", "Thousands"],
        ["Ozone (O3)", "Photochemical reactions", "�"],
    ]
),

    note(
        "GWP, or Global Warming Potential, compares the warming effect of a gas to that of the same amount of carbon dioxide over a fixed time. Methane has a GWP of 28, meaning 1 kg of methane warms the planet 28 times more than 1 kg of CO2.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Burning of coal, oil and natural gas for energy and transport.",
    "Deforestation, especially in tropical forests, reducing the earth's carbon sink.",
    "Agriculture, especially rice paddies and livestock, releasing methane.",
    "Industrial processes releasing fluorinated gases.",
    "Waste in landfills releasing methane.",
]),


list([
    "Rising global temperatures, heat waves, melting of glaciers and polar ice.",
    "Rise in sea level due to melting ice and expansion of sea water.",
    "More frequent and severe floods, droughts, cyclones and forest fires.",
    "Changes in rainfall pattern, affecting agriculture and water supply.",
    "Loss of biodiversity as species struggle to adapt.",
    "Threats to human health, food security and economic stability.",
]),


list([
    "UNFCCC � United Nations Framework Convention on Climate Change (1992).",
    "Kyoto Protocol (1997) � binding emission reduction targets for developed countries.",
    "Paris Agreement (2015) � every country sets its own targets (NDCs) and reports progress.",
    "COP meetings held every year to review progress.",
    "IPCC � Intergovernmental Panel on Climate Change, the scientific body that publishes assessment reports.",
]),


list([
    "India is among the most vulnerable countries to climate change.",
    "Targets: 500 GW of renewable energy by 2030, net zero by 2070.",
    "National Action Plan on Climate Change has 8 missions including solar, energy efficiency and afforestation.",
    "ISA, the International Solar Alliance, was launched by India in 2015.",
    "Green India Mission, FAME scheme for electric vehicles.",
]),


list([
    "Save electricity: switch off, use LED, use natural light.",
    "Choose walking, cycling or public transport.",
    "Eat less meat, more local and seasonal food.",
    "Reduce, reuse, recycle waste.",
    "Plant trees and protect green spaces.",
    "Choose energy efficient appliances.",
]),

    keyPoints([
        "Climate change is the long term change in weather patterns.",
        "Global warming is caused by greenhouse gases trapping heat.",
        "CO2 is the main gas; methane has a higher warming potential.",
        "Effects: sea level rise, extreme weather, biodiversity loss.",
        "Paris Agreement is the key international response.",
        ]),
    ],

    {
        summary:
    "Master the greenhouse effect, causes and effects of climate change, and the international and Indian responses.",
        minutes: 10,
            tags: ["climate", "greenhouse", "global-warming", "important"],

                mcqs: [
                    mcq(
                        "The main greenhouse gas is:",
                        ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                        2,
                        "Carbon dioxide is the most abundant greenhouse gas."
                    ),
                    mcq(
                        "Methane has a GWP of:",
                        ["1", "21", "28", "100"],
                        2,
                        "Methane is 28 times more potent than CO2 over 100 years."
                    ),
                    mcq(
                        "Paris Agreement was signed in:",
                        ["1992", "1997", "2015", "2022"],
                        2,
                        "The Paris Agreement was signed in 2015."
                    ),
                    mcq(
                        "ISA was launched by India in:",
                        ["2010", "2013", "2015", "2018"],
                        2,
                        "The International Solar Alliance was launched in 2015."
                    ),
                    mcq(
                        "IPCC stands for:",
                        ["International Panel on Climate Change", "Intergovernmental Panel on Climate Change", "Indian Panel on Climate Control", "Inter Plan on Climate Change"],
                        1,
                        "IPCC is the Intergovernmental Panel on Climate Change."
                    ),
                    mcq(
                        "Net zero target for India is by:",
                        ["2030", "2040", "2050", "2070"],
                        3,
                        "India has announced a net zero target for 2070."
                    ),
                ],

    questions: [
        qa(
            "Explain the greenhouse effect.",
            "The greenhouse effect is the natural process by which greenhouse gases in the atmosphere trap some of the heat radiated by the earth's surface, keeping the planet warm enough to support life. Sunlight passes through the atmosphere and warms the earth's surface. The warm surface re emits the energy as infrared radiation, which is absorbed by greenhouse gases such as carbon dioxide, methane, nitrous oxide and water vapour. These gases re radiate the heat in all directions, including back to the earth, raising the average temperature. Without the greenhouse effect, the earth would be about 33 degrees Celsius colder and life as we know it would not exist.",
            4
        ),
        qa(
            "Differentiate between weather and climate.",
            "Weather is the short term state of the atmosphere at a particular place and time, including temperature, humidity, wind, cloud and rain. It changes from hour to hour and day to day. Climate, on the other hand, is the average weather pattern of a place over a long period, usually 30 years or more. It includes the typical ranges of temperature and rainfall and the seasonal variations. Weather can change dramatically in minutes; climate changes only over decades. The climate of Surat is hot and humid in summer, mild in winter, with monsoon rain from June to September.",
            4
        ),
        qa(
            "Explain the main effects of climate change.",
            "Climate change is already affecting every continent. Global temperatures have risen about 1.1 degrees Celsius since the pre industrial era, causing heat waves, droughts and forest fires. Glaciers and polar ice are melting, raising sea levels and threatening low lying coastal areas and island nations. Rainfall patterns are changing, causing floods in some places and severe drought in others. Extreme weather such as cyclones, hurricanes and typhoons is becoming more frequent and intense. Many species are unable to adapt quickly enough and are moving towards the poles or going extinct. Human health, food security, water supply and economic stability are all under threat.",
            4
        ),
        qa(
            "List the key international agreements on climate change.",
            "The key international agreements are the United Nations Framework Convention on Climate Change, or UNFCCC, signed in 1992 at the Rio Earth Summit, which set the overall framework; the Kyoto Protocol of 1997, which set binding emission reduction targets for developed countries; and the Paris Agreement of 2015, in which every country submitted its own Nationally Determined Contribution and agreed to limit global warming to well below 2 degrees, preferably 1.5 degrees, above pre industrial levels. The annual Conference of the Parties, or COP, reviews progress under these agreements, and the IPCC provides the scientific assessment.",
            4
        ),
    ],
  }
);

/* =========================================================
   TOPIC 3 � Sustainable Development and Green Practices
========================================================= */

const sustainableDevelopment = createTopic(
    "sustainable-development-and-green-practices",
    "Sustainable Development and Green Practices",

    [
        definition(
            "Sustainable Development",
            "Development that meets the needs of the present without compromising the ability of future generations to meet their own needs. Definition by the Brundtland Commission, 1987."
        ),


    list([
        "Economic � growth that is inclusive and sustainable.",
        "Social � equity, health, education, gender equality.",
        "Environmental � protection of natural systems and resources.",
    ]),

        heading("UN Sustainable Development Goals (SDGs)"),

text(
    "The 17 SDGs were adopted by the United Nations in 2015 as part of the 2030 Agenda. They cover poverty, health, education, climate, oceans, land and partnerships."
),

    list([
        "SDG 1 � No Poverty.",
        "SDG 2 � Zero Hunger.",
        "SDG 3 � Good Health and Well being.",
        "SDG 4 � Quality Education.",
        "SDG 5 � Gender Equality.",
        "SDG 6 � Clean Water and Sanitation.",
        "SDG 7 � Affordable and Clean Energy.",
        "SDG 13 � Climate Action.",
        "SDG 14 � Life Below Water.",
        "SDG 15 � Life on Land.",
        "SDG 17 � Partnerships for the Goals.",
    ]),


list([
    "Uses materials and design that reduce energy and water use.",
    "Includes proper insulation, natural lighting, rainwater harvesting.",
    "Solar panels, grey water recycling, green roof.",
    "Certification: LEED (Leadership in Energy and Environmental Design), GRIHA in India.",
]),


table(
    ["Source", "Application", "Advantage"],
    [
        ["Solar", "PV panels, solar water heaters, solar farms", "Abundant, free, low maintenance"],
        ["Wind", "Wind turbines on land and offshore", "Clean, no fuel cost"],
        ["Hydro", "Dams and small hydro plants", "Reliable, also stores water"],
        ["Biomass", "Crop residue, biogas, municipal waste", "Uses waste, can replace coal"],
        ["Geothermal", "Hot rocks underground", "24x7, very small land use"],
        ["Tidal", "Rise and fall of tides", "Predictable, large coastal potential"],
    ]
),


list([
    "Organic farming � no chemical pesticides or fertilisers.",
    "Crop rotation and mixed cropping to maintain soil fertility.",
    "Agroforestry � combining trees with crops and livestock.",
    "Zero Budget Natural Farming, popularised in Andhra Pradesh.",
    "Precision farming using sensors, drones and data.",
]),


definition(
    "Circular Economy",
    "An economic model in which resources are kept in use for as long as possible, the maximum value is extracted while in use, and products are recovered and regenerated at the end of their life."
),

    list([
        "Reduces waste to a minimum.",
        "Reuses, refurbishes and recycles products.",
        "Replaces the old take make dispose model.",
        "Examples: shared mobility, refurbished electronics, recycled packaging.",
    ]),


list([
    "Compact cities with mixed land use to reduce travel.",
    "Public transport, cycle paths, pedestrian zones.",
    "Green buildings and energy efficient infrastructure.",
    "Urban green spaces, parks, lakes and trees.",
    "Smart grids, smart meters, renewable energy.",
]),

    keyPoints([
        "Sustainable development balances economy, society and environment.",
        "17 SDGs set the global agenda until 2030.",
        "Renewable energy is the key to a low carbon future.",
        "Organic farming and agroforestry protect soil and biodiversity.",
        "Circular economy reduces waste and reuses resources.",
        ]),
    ],

    {
        summary:
    "Master sustainable development, the SDGs, green building, renewable energy and circular economy.",
        minutes: 10,
            tags: ["sustainability", "sdg", "renewable", "important"],

                mcqs: [
                    mcq(
                        "How many SDGs are there?",
                        ["10", "15", "17", "20"],
                        2,
                        "There are 17 Sustainable Development Goals."
                    ),
                    mcq(
                        "SDG 13 is about:",
                        ["Poverty", "Climate Action", "Education", "Health"],
                        1,
                        "SDG 13 is Climate Action."
                    ),
                    mcq(
                        "LEED is a certification for:",
                        ["Hospitals", "Green buildings", "Schools", "Roads"],
                        1,
                        "LEED is the green building rating system."
                    ),
                    mcq(
                        "Which is NOT renewable?",
                        ["Solar", "Wind", "Coal", "Hydro"],
                        2,
                        "Coal is a non renewable fossil fuel."
                    ),
                    mcq(
                        "SDG 7 is about:",
                        ["Gender equality", "Affordable and clean energy", "Industry", "Climate"],
                        1,
                        "SDG 7 is Affordable and Clean Energy."
                    ),
                    mcq(
                        "Brundtland Commission gave the definition of:",
                        ["Biodiversity", "Sustainable development", "Climate change", "Pollution"],
                        1,
                        "The Brundtland Commission defined sustainable development in 1987."
                    ),
                ],

                    questions: [
                        qa(
                            "Define sustainable development and explain its three pillars.",
                            "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. It has three interconnected pillars. The economic pillar means growth that is inclusive, productive and provides decent work. The social pillar focuses on equity, health, education, gender equality and the well being of all people. The environmental pillar means protecting natural systems, reducing pollution, conserving biodiversity and using resources within their regenerative capacity. The three pillars must be balanced, because economic growth at the cost of the environment or of the poor is not sustainable in the long run.",
                            4
                        ),
                        qa(
                            "Explain the UN Sustainable Development Goals.",
                            "The 17 Sustainable Development Goals, or SDGs, were adopted by the United Nations in 2015 as part of the 2030 Agenda for Sustainable Development. They are a universal call to action to end poverty, protect the planet and ensure that all people enjoy peace and prosperity by 2030. The goals cover poverty, hunger, health, education, gender equality, water, energy, work, industry, inequality, cities, consumption, climate, oceans, land, peace and partnerships. Each goal has specific targets and indicators. The SDGs apply to all countries, and progress is reviewed annually by the UN High Level Political Forum.",
                            4
                        ),
                        qa(
                            "What is a green building? List its key features.",
                            "A green building is designed, constructed and operated in a way that reduces its impact on the environment and the health of its occupants. Its key features are energy efficiency through good insulation, LED lighting and efficient appliances; water conservation through rainwater harvesting, low flow fixtures and grey water recycling; use of sustainable or recycled building materials; proper ventilation and natural daylight; renewable energy such as solar panels; and green spaces such as a green roof or vertical garden. Certification systems such as LEED and the Indian GRIHA rate the greenness of a building.",
                            4
                        ),
                        qa(
                            "Differentiate between linear and circular economy.",
                            "In a linear economy, raw materials are taken, made into products, used and thrown away as waste, in a take make dispose model. This is unsustainable because it depletes resources and creates huge amounts of waste. In a circular economy, products are designed to last longer, to be easily repaired, refurbished and recycled, and waste from one process becomes the raw material of another. The goal is to keep resources in use for as long as possible and to minimise waste. Examples of circular practices are shared mobility, refurbished electronics, biodegradable packaging and recycling of metals and plastics.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Human Population and Environment
========================================================= */

const humanPopulation = createTopic(
    "human-population-and-environment",
    "Human Population and Environment",

    [
        definition(
            "Demography",
            "The scientific study of human populations, especially their size, distribution, growth, density and vital statistics."
        ),


    list([
        "1 billion in 1804, 2 billion in 1927, 8 billion in 2022.",
        "Population growth is exponential because more people means more parents.",
        "Doubling time has fallen from about 120 years to about 50 years in the last century.",
        "Growth is fastest in the least developed countries.",
    ]),


list([
    "Crude Birth Rate (CBR) = births per 1000 people per year.",
    "Crude Death Rate (CDR) = deaths per 1000 people per year.",
    "Natural Growth Rate = CBR minus CDR.",
    "Total Fertility Rate (TFR) = average number of children per woman.",
    "Infant Mortality Rate (IMR) = deaths of infants per 1000 live births.",
    "Life Expectancy = average years a newborn is expected to live.",
]),


definition(
    "Population Pyramid",
    "A graphical illustration that shows the distribution of various age groups in a population, typically in the form of a pyramid when the population is growing."
),

    list([
        "Expansive pyramid � wide base, narrow top; high growth, common in developing countries.",
        "Constrictive pyramid � narrow base, wider middle; slow growth, common in developed countries.",
        "Stationary pyramid � even width across; zero growth.",
    ]),


list([
    "Thomas Malthus, 1798, said population grows geometrically (1, 2, 4, 8 ...) while food grows arithmetically (1, 2, 3, 4 ...).",
    "Hence, population will eventually outstrip food supply.",
    "Critics say technology has raised food production faster than predicted.",
    "Neo Malthusians believe the theory still applies in some regions.",
]),


list([
    "Stage 1 � high birth rate, high death rate, low growth.",
    "Stage 2 � high birth rate, falling death rate, rapid growth.",
    "Stage 3 � falling birth rate, low death rate, slowing growth.",
    "Stage 4 � low birth rate, low death rate, stable population.",
]),


list([
    "Family planning helps couples decide the number and spacing of children.",
    "Methods: natural, barrier, hormonal, IUD, sterilisation.",
    "India's National Family Planning Programme started in 1952, the first in the developing world.",
    "Reproductive health includes safe pregnancy, childbirth and access to contraception.",
    "Empowerment of women and education are the strongest drivers of lower fertility.",
]),


list([
    "Air pollution causes respiratory and heart diseases.",
    "Water pollution spreads cholera, typhoid and hepatitis.",
    "Vector borne diseases: malaria, dengue, chikungunya.",
    "Climate change expands the range of many diseases.",
    "Access to clean water, sanitation and primary health care are basic rights.",
]),

    keyPoints([
        "World population has grown from 1 billion to 8 billion in 220 years.",
        "Birth rate minus death rate gives the natural growth rate.",
        "Malthus predicted population would outstrip food.",
        "Demographic transition has four stages.",
        "Empowering women and education reduce fertility.",
        ]),
    ],

    {
        summary:
    "Master demography, population growth, pyramids, Malthus, demographic transition and family planning.",
        minutes: 10,
            tags: ["population", "demography", "Malthus", "important"],

                mcqs: [
                    mcq(
                        "World population crossed 8 billion in:",
                        ["2011", "2015", "2022", "2025"],
                        2,
                        "World population reached 8 billion in November 2022."
                    ),
                    mcq(
                        "Malthus was from:",
                        ["India", "England", "Germany", "France"],
                        1,
                        "Thomas Malthus was an English economist, 1766 to 1834."
                    ),
                    mcq(
                        "Stage 2 of demographic transition has:",
                        ["Low birth, low death", "High birth, low death", "High birth, high death", "Low birth, high death"],
                        1,
                        "Stage 2 has high birth rate and falling death rate, so rapid growth."
                    ),
                    mcq(
                        "TFR stands for:",
                        ["Total Fertility Rate", "Total Family Rate", "Total Female Rate", "Time for Reproduction"],
                        0,
                        "TFR is the Total Fertility Rate, average children per woman."
                    ),
                    mcq(
                        "India's family planning programme started in:",
                        ["1947", "1952", "1961", "1971"],
                        1,
                        "India launched the first national family planning programme in 1952."
                    ),
                    mcq(
                        "CBR stands for:",
                        ["Crude Birth Rate", "Common Birth Rate", "Child Birth Rate", "Current Birth Ratio"],
                        0,
                        "CBR is births per 1000 population per year."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the Malthusian theory of population.",
                            "Thomas Malthus, in his Essay on the Principle of Population (1798), argued that population grows geometrically (1, 2, 4, 8 ...) while food supply grows only arithmetically (1, 2, 3, 4 ...). Therefore, population will eventually outstrip food supply, leading to famine, disease and war, which he called positive checks. Preventive checks include late marriage and moral restraint. Critics say that technology, especially the Green Revolution, has raised food production far faster than Malthus predicted. However, in many parts of the world today, especially in regions affected by climate change, neo Malthusian concerns are still very real.",
                            4
                        ),
                        qa(
                            "Explain the demographic transition model.",
                            "The demographic transition model describes the change in birth and death rates as a country develops. In Stage 1, both birth and death rates are high, so population is low and stable. In Stage 2, death rates fall due to better health care and food, while birth rates stay high, so population grows rapidly. In Stage 3, birth rates start to fall as people become more educated and women join the workforce, and the death rate remains low, so growth slows. In Stage 4, both birth and death rates are low and the population is stable. Some countries are entering Stage 5, where the death rate may rise and the population may decline.",
                            4
                        ),
                        qa(
                            "What is a population pyramid? Describe its three types.",
                            "A population pyramid is a bar chart that shows the distribution of various age groups in a population, with males on the left and females on the right. The shape of the pyramid reveals the growth pattern. An expansive pyramid has a wide base of children and a narrow top, showing high birth and death rates and rapid growth, common in developing countries. A constrictive pyramid has a narrow base, wider middle and a tapering top, showing low birth rates, an ageing population and slow or negative growth, common in developed countries. A stationary pyramid is rectangular, with roughly equal numbers in each age group, showing stable population.",
                            4
                        ),
                        qa(
                            "Explain the role of family planning in sustainable development.",
                            "Family planning helps couples decide the number and spacing of their children, which improves the health of the mother and the child, reduces maternal and infant mortality, and allows families to invest more in each child's education and well being. At the national level, family planning slows population growth, which eases pressure on natural resources, public services and the environment. India launched the world's first national family planning programme in 1952. The most powerful ways to reduce fertility are the education and empowerment of women, access to contraception, and social and economic development. Family planning is therefore central to sustainable development.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Environmental Laws, Movements and the Way Forward
========================================================= */

const movements = createTopic(
    "environmental-laws-movements-and-way-forward",
    "Environmental Laws, Movements and the Way Forward",

    [
        definition(
            "Environmental Movement",
            "A social or political movement aimed at protecting the natural environment from destruction or pollution, and at promoting sustainable use of resources."
        ),


    list([
        "Bishnoi Movement � led by Amrita Devi in 1730, sacrificed her life to save Khejri trees in Rajasthan.",
        "Chipko Movement � 1970s, villagers in Uttarakhand hugged trees to prevent felling.",
        "Appiko Movement � 1983, in Karnataka, similar to Chipko, to save Western Ghats forests.",
        "Silent Valley Movement � 1978 to 1984, Kerala, saved the Silent Valley tropical evergreen forest.",
        "Narmada Bachao Andolan � against the Sardar Sarovar Dam, led by Medha Patkar.",
        "Save Western Ghats Movement � to protect the ecology of the Western Ghats.",
    ]),

        note(
            "The Chipko Movement of 1973 in Chamoli district, Uttarakhand, started when villagers, led by Gaura Devi, hugged trees to prevent them from being cut by contractors. The phrase 'Ecology is permanent economy' was coined by Sunderlal Bahuguna, a leader of the movement. The success of Chipko inspired similar movements in other parts of India and the world.",
            "exam",
            "Frequently Asked"
        ),


table(
    ["Year", "Agreement", "Focus"],
    [
        ["1972", "Stockholm Conference", "First UN conference on human environment"],
        ["1987", "Montreal Protocol", "Protect the ozone layer by phasing out CFCs"],
        ["1989", "Basel Convention", "Control transboundary movement of hazardous waste"],
        ["1992", "Rio Earth Summit (UNCED)", "Sustainable development, Agenda 21, CBD, UNFCCC"],
        ["1997", "Kyoto Protocol", "Binding emission cuts for developed countries"],
        ["2010", "Nagoya Protocol", "Access and benefit sharing of genetic resources"],
        ["2015", "Paris Agreement", "Limit global warming to well below 2 degrees"],
    ]
),


list([
    "Wildlife Protection Act, 1972.",
    "Water (Prevention and Control of Pollution) Act, 1974.",
    "Forest Conservation Act, 1980.",
    "Air (Prevention and Control of Pollution) Act, 1981.",
    "Environment Protection Act, 1986 � umbrella law.",
    "Biological Diversity Act, 2002.",
    "National Green Tribunal Act, 2010.",
]),


list([
    "Article 48A � Directive Principle: state shall protect and improve the environment.",
    "Article 51A(g) � Fundamental Duty: every citizen shall protect wildlife, have compassion for living creatures, protect natural resources.",
    "Article 21 � Right to Life includes the right to a clean environment.",
    "Supreme Court has interpreted environmental protection as part of the right to life.",
]),


list([
    "Satellite monitoring of forests, glaciers and pollution.",
    "GIS and remote sensing for land use planning.",
    "Sensors and IoT for air and water quality monitoring.",
    "AI and big data for climate modelling.",
    "Renewable energy technologies such as solar and wind.",
]),


list([
    "Environmental education creates awareness and skills.",
    "It must be integrated into the school and college curriculum.",
    "Activities: field trips, nature clubs, project work, eco clubs.",
    "NSS, NCC and NGOs can lead community projects.",
    "Goal: to develop environmentally responsible citizens.",
]),


list([
    "Shift to renewable energy and energy efficiency.",
    "Sustainable agriculture and food systems.",
    "Protect and restore forests, wetlands and oceans.",
    "Circular economy and zero waste.",
    "Empowerment of women and education for all.",
    "Stronger international cooperation and climate finance.",
    "Every citizen as a responsible steward of the earth.",
]),

    keyPoints([
        "India has a long tradition of environmental movements, from Bishnoi to Chipko.",
        "Stockholm, Rio, Kyoto and Paris are key international milestones.",
        "Articles 48A, 51A(g) and 21 of the Constitution protect the environment.",
        "Technology and education are powerful tools for sustainability.",
        "The way forward is renewable energy, sustainable agriculture and circular economy.",
        ]),
    ],

    {
        summary:
    "Master environmental movements, international agreements, Indian laws, constitutional provisions and the way forward.",
        minutes: 10,
            tags: ["movement", "law", "Chipko", "constitution", "important"],

                mcqs: [
                    mcq(
                        "Chipko Movement was in:",
                        ["Rajasthan", "Karnataka", "Uttarakhand", "Kerala"],
                        2,
                        "Chipko Movement started in Chamoli, Uttarakhand, in 1973."
                    ),
                    mcq(
                        "Article 51A(g) is a:",
                        ["Fundamental Right", "Directive Principle", "Fundamental Duty", "Legal provision"],
                        2,
                        "Article 51A(g) is a Fundamental Duty to protect the environment."
                    ),
                    mcq(
                        "Montreal Protocol is about:",
                        ["Climate", "Ozone layer", "Wetlands", "Biodiversity"],
                        1,
                        "Montreal Protocol protects the ozone layer."
                    ),
                    mcq(
                        "Bishnoi Movement was in:",
                        ["1730", "1800", "1857", "1947"],
                        0,
                        "The Bishnoi Movement started in 1730 in Rajasthan."
                    ),
                    mcq(
                        "Paris Agreement is for:",
                        ["Trade", "Climate", "Wildlife", "Forests"],
                        1,
                        "Paris Agreement aims to limit global warming."
                    ),
                    mcq(
                        "NGT is:",
                        ["National Green Tribunal", "National Geographic Trust", "Natural Gas Terminal", "Narmada Group of Towns"],
                        0,
                        "NGT is the National Green Tribunal for environmental cases."
                    ),
                ],

                    questions: [
                        qa(
                            "Explain the Chipko Movement and its significance.",
                            "The Chipko Movement began in 1973 in the Chamoli district of Uttarakhand when villagers, led by Gaura Devi, hugged trees to prevent them from being cut down by outside contractors. The movement spread to other parts of the Himalayas under the leadership of Sunderlal Bahuguna, who coined the phrase 'Ecology is permanent economy'. The movement succeeded in getting a ban on tree felling in the Himalayan forests for 15 years. Its significance is that it showed that ordinary villagers, especially women, can stand up to commercial logging and win. It inspired the Appiko Movement in Karnataka and influenced forest policy in India and the world.",
                            4
                        ),
                        qa(
                            "Describe the major international agreements on environment.",
                            "The major international agreements include the Stockholm Conference of 1972, the first UN conference on the human environment; the Montreal Protocol of 1987, which phased out CFCs to protect the ozone layer; the Basel Convention of 1989, which controls the movement of hazardous waste; the Rio Earth Summit of 1992, which produced Agenda 21, the CBD and the UNFCCC; the Kyoto Protocol of 1997, the first binding agreement to cut emissions; and the Paris Agreement of 2015, in which every country set its own targets to keep global warming well below 2 degrees Celsius. These agreements form the global framework for environmental protection.",
                            4
                        ),
                        qa(
                            "Explain the constitutional provisions for environment in India.",
                            "The Indian Constitution has several provisions for environmental protection. Article 48A, a Directive Principle, directs the state to protect and improve the environment and to safeguard the forests and wildlife of the country. Article 51A(g), a Fundamental Duty, requires every citizen to protect the natural environment, including forests, lakes, rivers and wildlife, to have compassion for living creatures and to develop scientific temper. The Supreme Court has interpreted Article 21, the Right to Life, to include the right to a clean and healthy environment, making environmental protection a fundamental right of every Indian citizen.",
                            4
                        ),
                        qa(
                            "Suggest a way forward for a sustainable future.",
                            "A sustainable future requires action at all levels. Globally, countries must deliver on the Paris Agreement and support climate finance for developing nations. Nationally, India must rapidly expand renewable energy, restore degraded land, protect forests and wetlands, shift to sustainable agriculture, and enforce its environmental laws strictly. At the community and individual level, people must adopt the 5 R's of waste, save water and energy, choose public transport, eat local and seasonal food, and support green businesses. Education and technology must empower every citizen to be a responsible steward of the planet, leaving a healthy earth for the generations to come.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit2Topics = [
    socialIssues,
    climateChange,
    sustainableDevelopment,
    humanPopulation,
    movements,
];


