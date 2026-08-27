/* =========================================================
   BCA � SEM 2 � Environment Studies
   UNIT 1 � Ecosystems, Biodiversity and Natural Resources
========================================================= */

import {
  createTopic,
  heading,
  list,
  code,
  table,
  note,
  definition,
  keyPoints,
  mcq,
  qa,
} from "../../../../helpers";

/* =========================================================
   TOPIC 1 � Introduction to Environment
========================================================= */

const introductionToEnvironment = createTopic(
    "introduction-to-environment",
    "Introduction to Environment",

    [
        definition(
            "Environment",
            "The sum total of all surrounding conditions � physical, chemical, biological � that influence the life and development of an organism or a group of organisms."
        ),

        heading("Scope of Environment Studies"),

        list([
            "Natural sciences: ecology, biology, geology, atmospheric science.",
            "Social sciences: economics, ethics, politics, law.",
            "Built environment: cities, industries, transport, energy systems.",
            "Human impact and sustainable development.",
        ]),

        heading("Components of Environment"),

    table(
        ["Component", "Description", "Examples"],
        [
            ["Abiotic", "Non living", "Air, water, soil, sunlight, temperature"],
            ["Biotic", "Living", "Plants, animals, microorganisms, humans"],
        ]
    ),


list([
    "Understand how natural systems work.",
    "Identify human activities that harm the environment.",
    "Design solutions to environmental problems.",
    "Promote sustainable use of natural resources.",
    "Comply with environmental laws and regulations.",
    "Build a healthy and safe future for all.",
]),


list([
    "Climate change and global warming.",
    "Air and water pollution.",
    "Deforestation and loss of biodiversity.",
    "Plastic and electronic waste.",
    "Depletion of natural resources.",
    "Urbanisation and pressure on land.",
]),

    note(
        "Earth is the only known planet that supports life. The combination of liquid water, an oxygen rich atmosphere, a stable temperature range and the presence of biodiversity makes it a unique home for millions of species, including humans.",
        "tip",
        "Our Planet"
    ),


list([
    "Switch off lights and electronics when not in use.",
    "Use public transport, walk or cycle when possible.",
    "Carry a cloth bag; avoid single use plastic.",
    "Save water: fix leaks, turn off taps.",
    "Plant trees and protect green spaces.",
    "Spread awareness among family and friends.",
]),

    keyPoints([
        "Environment is everything that surrounds an organism.",
        "It has abiotic and biotic components.",
        "Main issues today: climate change, pollution, loss of biodiversity.",
        "Every individual action counts.",
        "Sustainability means meeting today's needs without harming tomorrow.",
        ]),
    ],

    {
        summary:
    "Understand the meaning, scope, components and importance of environment studies and the major issues today.",
        minutes: 9,
            tags: ["environment", "sustainability", "important"],

                mcqs: [
                    mcq(
                        "Which is an abiotic component?",
                        ["Plants", "Animals", "Soil", "Bacteria"],
                        2,
                        "Soil is non living and abiotic."
                    ),
                    mcq(
                        "Which gas is most responsible for global warming?",
                        ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                        2,
                        "Carbon dioxide is the main greenhouse gas."
                    ),
                    mcq(
                        "The ozone layer protects us from:",
                        ["Carbon dioxide", "UV rays", "Smoke", "Noise"],
                        1,
                        "Ozone absorbs harmful ultraviolet radiation."
                    ),
                    mcq(
                        "Which is a sustainable practice?",
                        ["Using plastic bags", "Deforestation", "Using public transport", "Burning waste"],
                        2,
                        "Public transport reduces pollution and fuel use."
                    ),
                    mcq(
                        "Biodiversity refers to:",
                        ["Variety of life", "Number of buildings", "Amount of rainfall", "Number of rivers"],
                        0,
                        "Biodiversity is the variety of all living organisms."
                    ),
                    mcq(
                        "Which is a renewable resource?",
                        ["Coal", "Petroleum", "Solar energy", "Natural gas"],
                        2,
                        "Solar energy is renewable; fossil fuels are not."
                    ),
                ],

                    questions: [
                        qa(
                            "Define environment and list its components.",
                            "Environment is the sum total of all surrounding conditions that influence the life and development of an organism. It has two main components. Abiotic components are the non living parts such as air, water, soil, sunlight, temperature and minerals. Biotic components are the living parts, which include plants, animals, microorganisms and humans. The environment also includes the built environment made by humans, such as cities, industries, roads and dams.",
                            4
                        ),
                        qa(
                            "Why is the study of environment important?",
                            "The study of environment is important because human activities are placing unprecedented pressure on natural systems, leading to climate change, pollution, loss of biodiversity and depletion of resources. Understanding the environment helps us to identify the causes of these problems, design effective solutions, comply with laws, and move towards sustainable development that meets the needs of the present without compromising the ability of future generations to meet theirs. It also empowers individuals to make responsible choices in daily life.",
                            4
                        ),
                        qa(
                            "What are the major environmental issues today?",
                            "The major issues today are climate change caused by greenhouse gases, air pollution from vehicles and industries, water pollution from sewage and chemicals, deforestation driven by agriculture and urbanisation, the loss of biodiversity, the build up of plastic and electronic waste, and the depletion of natural resources such as fossil fuels, fresh water and minerals. Each of these issues is interconnected, and addressing them requires cooperation between governments, industry and individuals.",
                            4
                        ),
                        qa(
                            "List the role of an individual in protecting the environment.",
                            "An individual can play a powerful role by adopting simple habits: switching off lights and electronics when not in use, using public transport or bicycles, carrying a cloth bag and avoiding single use plastic, saving water by fixing leaks, planting trees, segregating waste, and spreading awareness among family, friends and community. Small actions by millions of people add up to a huge positive impact and encourage businesses and governments to take bigger steps.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 2 � Natural Resources
========================================================= */

const naturalResources = createTopic(
    "natural-resources",
    "Natural Resources",

    [
        definition(
            "Natural Resource",
            "Any material or component of the natural environment that humans use for their needs, such as water, air, soil, minerals, forests, wildlife and sunlight."
        ),


    table(
        ["Basis", "Type", "Examples"],
        [
            ["Origin", "Abiotic", "Air, water, soil, minerals, sunlight"],
            ["Origin", "Biotic", "Forests, wildlife, fish, microbes"],
            ["Renewability", "Renewable", "Solar, wind, hydro, biomass"],
            ["Renewability", "Non renewable", "Coal, petroleum, natural gas, minerals"],
            ["Availability", "Inexhaustible", "Solar, tidal, wind energy"],
            ["Availability", "Exhaustible", "Fossil fuels, minerals"],
        ]
    ),


list([
    "Forests cover about 31 percent of the world's land area.",
    "They provide timber, fuel, fodder, medicine, rubber and many other products.",
    "They regulate climate, store carbon, prevent soil erosion and support biodiversity.",
    "Deforestation leads to loss of habitat, climate change and desertification.",
    "Sustainable forestry includes reforestation, afforestation and selective logging.",
]),


list([
    "Only about 3 percent of the world's water is fresh, and most of it is frozen in ice caps.",
    "Agriculture uses about 70 percent of the world's fresh water.",
    "Water scarcity affects more than 2 billion people globally.",
    "Conservation: rainwater harvesting, watershed management, drip irrigation.",
    "Pollution of rivers and lakes is a major concern in many countries.",
]),


list([
    "Minerals are extracted from the earth's crust by mining.",
    "Metallic minerals: iron, copper, aluminium, gold, silver.",
    "Non metallic: limestone, gypsum, mica, salt.",
    "Minerals are non renewable; they take millions of years to form.",
    "Recycling of metals such as aluminium, copper and steel is essential.",
]),


list([
    "Food comes from plants and animals.",
    "Major crops: rice, wheat, maize, pulses, oilseeds.",
    "Issues: monoculture, soil degradation, water logging, pesticide use.",
    "Sustainable agriculture: crop rotation, organic farming, integrated pest management.",
    "Food security means access to safe and nutritious food for all.",
]),


list([
    "Renewable: solar, wind, hydro, tidal, geothermal, biomass.",
    "Non renewable: coal, petroleum, natural gas, nuclear.",
    "Fossil fuels cause most of the carbon emissions driving climate change.",
    "Energy conservation: efficient appliances, LED lighting, insulation.",
    "India has set a target of 500 GW of renewable energy by 2030.",
]),

    note(
        "Equitable use of resources means the rich should not consume more than their fair share while the poor suffer. The concept of sustainable development reminds us that we hold the earth in trust for future generations.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Land is a finite resource, fixed in total area.",
    "Uses: agriculture, forestry, settlement, industry, recreation.",
    "Problems: soil erosion, desertification, salinisation, urban sprawl.",
    "Conservation: afforestation, terracing, contour farming, land use planning.",
]),

    keyPoints([
        "Resources can be renewable, non renewable, biotic and abiotic.",
        "Forests, water, soil, minerals and energy are vital resources.",
        "Sustainable use ensures availability for the future.",
        "Conservation practices include rainwater harvesting, recycling and renewable energy.",
        "Equitable use is essential for justice and peace.",
        ]),
    ],

    {
        summary:
    "Master the types and uses of natural resources: forest, water, mineral, food, energy and land.",
        minutes: 11,
            tags: ["resources", "forest", "water", "energy", "important"],

                mcqs: [
                    mcq(
                        "Which is a non renewable resource?",
                        ["Solar energy", "Wind energy", "Coal", "Biomass"],
                        2,
                        "Coal takes millions of years to form, so it is non renewable."
                    ),
                    mcq(
                        "Which is a renewable resource?",
                        ["Petroleum", "Coal", "Wind energy", "Natural gas"],
                        2,
                        "Wind energy is renewable because wind is not depleted by use."
                    ),
                    mcq(
                        "Afforestation means:",
                        ["Cutting trees", "Planting trees", "Burning forests", "Clearing land"],
                        1,
                        "Afforestation is the planting of trees in a new area."
                    ),
                    mcq(
                        "Soil erosion is best prevented by:",
                        ["Burning", "Ploughing up and down", "Terracing and cover crops", "Deforestation"],
                        2,
                        "Terracing and cover crops hold the soil in place."
                    ),
                    mcq(
                        "Geothermal energy comes from:",
                        ["Sun", "Wind", "Heat inside the earth", "Moving water"],
                        2,
                        "Geothermal energy is the heat stored inside the earth."
                    ),
                    mcq(
                        "Which is a fossil fuel?",
                        ["Solar", "Wind", "Petroleum", "Hydro"],
                        2,
                        "Petroleum is a fossil fuel formed from ancient organisms."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between renewable and non renewable resources.",
                            "Renewable resources are those that are replenished naturally over short periods of time and are not depleted by use, such as solar energy, wind energy, hydropower, biomass and fresh water. Non renewable resources are those that exist in fixed amounts and take millions of years to form, such as coal, petroleum, natural gas and minerals. Renewable resources are sustainable if used wisely, while non renewable resources must be conserved because they will eventually run out. Both categories need careful management to support future generations.",
                            4
                        ),
                        qa(
                            "Explain the importance of forest resources.",
                            "Forests are vital natural resources that provide a wide range of products and services. They yield timber, fuel, fodder, medicine, rubber, gum and many other products. Ecologically, they regulate climate, store carbon, prevent soil erosion, sustain watersheds and support biodiversity. Forests also provide livelihood to millions of people, especially tribal communities. Deforestation leads to climate change, loss of habitat and desertification. Hence, sustainable forestry through reforestation, afforestation, agroforestry and controlled logging is essential for the future of the planet.",
                            4
                        ),
                        qa(
                            "What are the main problems of water resources?",
                            "The main problems are scarcity, unequal distribution, wastage and pollution. Only about 3 percent of the world's water is fresh and much of it is locked in ice, so the available fresh water is very limited. Population growth, urbanisation and agriculture have increased the demand beyond what nature can renew. Industrial effluents, sewage, agricultural chemicals and plastic waste pollute rivers, lakes and groundwater, making water unsafe to drink. Conservation measures include rainwater harvesting, watershed management, drip irrigation, recycling of waste water and strict pollution control.",
                            4
                        ),
                        qa(
                            "Explain the concept of sustainable development.",
                            "Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs. The term was popularised by the Brundtland Report of 1987. It has three pillars: economic growth, social inclusion and environmental protection. Sustainable development calls for using natural resources at a rate that allows them to regenerate, switching to renewable energy, reducing waste, protecting biodiversity and ensuring that the benefits of growth reach everyone, especially the poor. It is the guiding principle behind the United Nations Sustainable Development Goals.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 3 � Ecosystems
========================================================= */

const ecosystems = createTopic(
    "ecosystems",
    "Ecosystems",

    [
        definition(
            "Ecosystem",
            "A community of living organisms in conjunction with the non living components of their environment, interacting as a functional unit."
        ),


    list([
        "Abiotic factors: sunlight, temperature, water, soil, air, minerals.",
        "Biotic factors: producers, consumers and decomposers.",
        "Producers: green plants that make food by photosynthesis (autotrophs).",
        "Consumers: animals that eat plants or other animals (heterotrophs).",
        "Decomposers: bacteria and fungi that break down dead matter (saprotrophs).",
    ]),


table(
    ["Type", "Food", "Example"],
    [
        ["Primary", "Plants (herbivores)", "Cow, deer, rabbit"],
        ["Secondary", "Herbivores (carnivores)", "Frog, snake, cat"],
        ["Tertiary", "Other carnivores", "Eagle, lion, tiger"],
        ["Omnivores", "Plants and animals", "Human, bear, crow"],
        ["Scavengers", "Dead animals", "Vulture, hyena"],
    ]
),


definition(
    "Food Chain",
    "A linear sequence of organisms through which nutrients and energy pass as one organism eats another."
),

    code(
        `Grass  ?  Grasshopper  ?  Frog  ?  Snake  ?  Eagle
(Producer) (Primary)    (Secondary) (Tertiary) (Top)
`,
        "text",
        "Example food chain"
    ),

    definition(
        "Food Web",
        "A network of interconnected food chains showing the complex feeding relationships in an ecosystem."
    ),


list([
    "Trophic level 1 � producers (green plants).",
    "Trophic level 2 � primary consumers (herbivores).",
    "Trophic level 3 � secondary consumers (carnivores).",
    "Trophic level 4 � tertiary consumers (top carnivores).",
    "Energy decreases at each higher level, by about 10 percent.",
]),


table(
    ["Pyramid", "Shape", "What It Shows"],
    [
        ["Pyramid of numbers", "Count of organisms at each level", "Usually upright, sometimes inverted (tree ecosystem)"],
        ["Pyramid of biomass", "Total mass of organisms at each level", "Upright in most ecosystems"],
        ["Pyramid of energy", "Amount of energy at each level", "Always upright"],
    ]
),

    note(
        "Only about 10 percent of the energy at one trophic level is passed to the next, as shown by the 10 percent law. The rest is lost as heat, used in movement or remains in undigested matter. This is why food chains rarely have more than 4 or 5 levels.",
        "exam",
        "Frequently Asked"
    ),


definition(
    "Ecological Succession",
    "The gradual and predictable change in species composition of an ecosystem over time."
),

    list([
        "Primary succession � starts on bare rock or in a new water body, very slow.",
        "Secondary succession � starts on a disturbed area where soil is intact, faster.",
        "Pioneer species � first to colonise, such as lichen and moss.",
        "Climax community � stable, mature community at the end of succession.",
    ]),


list([
    "Water cycle � evaporation, condensation, precipitation, runoff.",
    "Carbon cycle � photosynthesis, respiration, decomposition, fossil fuel burning.",
    "Nitrogen cycle � fixation, nitrification, assimilation, denitrification.",
    "Oxygen cycle � photosynthesis releases oxygen; respiration uses it.",
    "Phosphorus cycle � movement of phosphorus through rocks, water and living things.",
]),

    keyPoints([
        "Ecosystem = biotic + abiotic components interacting.",
        "Producers, consumers and decomposers are the three groups.",
        "Food web is more realistic than a single food chain.",
        "10 percent of energy is passed to the next trophic level.",
        "Succession leads to a climax community.",
        ]),
    ],

    {
        summary:
    "Understand ecosystem components, food chains, trophic levels, ecological pyramids, succession and biogeochemical cycles.",
        minutes: 12,
            tags: ["ecosystem", "food-chain", "succession", "important"],

                mcqs: [
                    mcq(
                        "Green plants are:",
                        ["Consumers", "Producers", "Decomposers", "Parasites"],
                        1,
                        "Green plants make their own food by photosynthesis."
                    ),
                    mcq(
                        "Fungi are:",
                        ["Producers", "Decomposers", "Primary consumers", "Top carnivores"],
                        1,
                        "Fungi break down dead matter, so they are decomposers."
                    ),
                    mcq(
                        "10 percent law relates to:",
                        ["Food chain", "Energy transfer", "Biomass", "Number pyramid"],
                        1,
                        "10 percent of energy passes from one trophic level to the next."
                    ),
                    mcq(
                        "Lichens are:",
                        ["Climax species", "Pioneer species", "Top predators", "Decomposers"],
                        1,
                        "Lichens are pioneer species on bare rock."
                    ),
                    mcq(
                        "Which gas is released by photosynthesis?",
                        ["Carbon dioxide", "Oxygen", "Nitrogen", "Methane"],
                        1,
                        "Photosynthesis releases oxygen into the atmosphere."
                    ),
                    mcq(
                        "Climax community is:",
                        ["First stage", "Unstable", "Stable and mature", "Always a forest"],
                        2,
                        "Climax community is the stable, mature end of succession."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between food chain and food web.",
                            "A food chain is a single linear pathway showing how energy and nutrients pass from one organism to another, such as grass to grasshopper to frog to snake. A food web is a network of many food chains in the same ecosystem, showing the complex feeding relationships among organisms. A food web is more realistic because most animals eat more than one type of food and are eaten by more than one predator. Removing one species from a food chain can collapse it, while a food web is more stable because of the many alternative paths.",
                            4
                        ),
                        qa(
                            "Explain the 10 percent law of energy flow.",
                            "The 10 percent law, given by Raymond Lindeman, states that only about 10 percent of the energy at one trophic level is passed on to the next higher level. The rest is lost as heat through respiration, used by the organisms for movement and life processes, or remains in undigested waste. Because so much energy is lost at each step, food chains rarely have more than four or five trophic levels. This is also why there are far fewer top predators than herbivores in any ecosystem.",
                            4
                        ),
                        qa(
                            "Differentiate between primary and secondary succession.",
                            "Primary succession begins on a bare area where no soil exists, such as newly exposed rock after a lava flow or a freshly formed sand dune. It starts with pioneer species like lichens and mosses that slowly break down the rock and create soil. It is very slow and may take centuries. Secondary succession begins on an area where soil and some organisms already exist but the original community has been removed by a disturbance such as fire, flood or farming. It is much faster because the soil and seed bank are already there.",
                            4
                        ),
                        qa(
                            "Briefly describe the water cycle.",
                            "The water cycle, or hydrological cycle, is the continuous movement of water on, above and below the surface of the earth. Water evaporates from oceans, rivers and lakes due to heat from the sun, rises as water vapour, cools and condenses to form clouds, and falls back as rain or snow. Some of the water flows over the land as runoff into rivers and back to the sea, some infiltrates into the ground to recharge groundwater, and some is used by plants and animals. The cycle is powered by solar energy and gravity.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 4 � Biodiversity
========================================================= */

const biodiversity = createTopic(
    "biodiversity",
    "Biodiversity",

    [
        definition(
            "Biodiversity",
            "The variety of all living organisms on earth, including the diversity of species, genes and ecosystems."
        ),


    table(
        ["Level", "Description", "Example"],
        [
            ["Genetic", "Variation within a species", "Different varieties of rice in India"],
            ["Species", "Variety of species in a region", "Number of birds in a forest"],
            ["Ecosystem", "Variety of ecosystems", "Forest, desert, wetland, coral reef"],
        ]
    ),


definition(
    "Biodiversity Hotspot",
    "A biogeographic region with significant levels of biodiversity that is under threat from human habitation."
),

    list([
        "A region must have at least 1,500 endemic plant species to qualify.",
        "It must have lost at least 70 percent of its original habitat.",
        "There are 36 hotspots in the world today.",
        "India has four hotspots: the Himalayas, the Western Ghats, the Indo Burma region and Sundaland.",
    ]),


list([
    "Provides food, medicine, timber, fibre and fuel.",
    "Supports ecosystem services like pollination, purification of water and air, and climate regulation.",
    "Genetic diversity is the raw material for breeding new crop varieties.",
    "Cultural and aesthetic value to communities.",
    "Stability and resilience: diverse ecosystems recover better from disturbances.",
]),


table(
    ["Threat", "Description"],
    [
        ["Habitat loss", "Deforestation, urbanisation, agriculture reduce natural areas"],
        ["Climate change", "Alters temperature and rainfall, pushing species out of their range"],
        ["Pollution", "Pesticides, plastics, oil spills poison wildlife"],
        ["Overexploitation", "Overfishing, hunting, illegal wildlife trade"],
        ["Invasive species", "Non native species outcompete local ones"],
        ["Disease", "Wildlife diseases can wipe out populations"],
    ],
),

    note(
        "The IUCN Red List classifies species into categories such as Least Concern, Near Threatened, Vulnerable, Endangered, Critically Endangered, Extinct in the Wild and Extinct. The IUCN Red List is the most widely used reference for the conservation status of species.",
        "exam",
        "Frequently Asked"
    ),


list([
    "In situ conservation: protecting species in their natural habitat.",
    "Ex situ conservation: protecting species outside their habitat, in zoos and gene banks.",
    "National parks, wildlife sanctuaries and biosphere reserves.",
    "Project Tiger, Project Elephant in India.",
    "International agreements: CBD, CITES, Ramsar Convention.",
]),


list([
    "Royal Bengal Tiger � found in Sundarbans, Ranthambore, Jim Corbett.",
    "Asiatic Lion � only in Gir Forest, Gujarat.",
    "Indian Elephant � in forests of south, north east and central India.",
    "Indian Rhinoceros � Kaziranga and Manas in Assam.",
    "Snow Leopard � Himalayas.",
]),


list([
    "Nilgiri Tahr � Western Ghats.",
    "Lion-tailed Macaque � Western Ghats.",
    "Sangai Deer � Manipur.",
    "Purple Frog � Western Ghats.",
    "Andaman Wood Pigeon � Andaman Islands.",
]),

    keyPoints([
        "Biodiversity is the variety of life at three levels: genetic, species and ecosystem.",
        "Hotspots have many endemic species and high threat.",
        "Main threats: habitat loss, climate change, pollution, overexploitation, invasive species.",
        "Conservation: in situ (parks) and ex situ (zoos, gene banks).",
        "IUCN Red List is the standard for conservation status.",
        ]),
    ],

    {
        summary:
    "Master the levels, hotspots, threats and conservation of biodiversity, with focus on India.",
        minutes: 11,
            tags: ["biodiversity", "conservation", "hotspot", "important"],

                mcqs: [
                    mcq(
                        "How many biodiversity hotspots are in India?",
                        ["2", "3", "4", "5"],
                        2,
                        "India has 4 hotspots: Himalayas, Western Ghats, Indo Burma, Sundaland."
                    ),
                    mcq(
                        "Asiatic Lion is found in:",
                        ["Jim Corbett", "Gir Forest", "Kaziranga", "Ranthambore"],
                        1,
                        "Asiatic Lion is found only in Gir Forest, Gujarat."
                    ),
                    mcq(
                        "IUCN stands for:",
                        ["International Union for Conservation of Nature", "Indian Union of Conservation Network", "International Union of Climate", "Internal Use of Chemical Numbers"],
                        0,
                        "IUCN is the International Union for Conservation of Nature."
                    ),
                    mcq(
                        "CITES deals with:",
                        ["Climate", "Trade in endangered species", "Wetlands", "Migratory birds"],
                        1,
                        "CITES regulates international trade in endangered species."
                    ),
                    mcq(
                        "Ramsar Convention is about:",
                        ["Forests", "Wetlands", "Deserts", "Mountains"],
                        1,
                        "Ramsar Convention protects wetlands of international importance."
                    ),
                    mcq(
                        "Kaziranga is famous for:",
                        ["Tiger", "Lion", "Rhinoceros", "Elephant"],
                        2,
                        "Kaziranga is famous for the Indian one horned rhinoceros."
                    ),
                ],

                    questions: [
                        qa(
                            "Define biodiversity and list its levels.",
                            "Biodiversity, or biological diversity, is the variety of all living organisms on earth, including the differences within and between species and the ecosystems they live in. It has three levels. Genetic diversity is the variation of genes within a single species, such as the many varieties of rice or mango. Species diversity is the variety of species within a region, such as the number of bird species in a forest. Ecosystem diversity is the variety of ecosystems, such as forests, deserts, wetlands, coral reefs and grasslands, each with its own unique community of organisms.",
                            4
                        ),
                        qa(
                            "Explain the concept of a biodiversity hotspot.",
                            "A biodiversity hotspot is a biogeographic region that has a very high level of biodiversity and is under severe threat from human activity. To qualify as a hotspot, a region must have at least 1,500 species of endemic vascular plants, meaning plants that are found nowhere else, and it must have lost at least 70 percent of its original natural habitat. There are 36 hotspots in the world today, covering only 2.5 percent of the earth's land surface but supporting more than half of all endemic plant species and 43 percent of all endemic vertebrate species.",
                            4
                        ),
                        qa(
                            "Differentiate between in situ and ex situ conservation.",
                            "In situ conservation means protecting species in their natural habitat by setting up national parks, wildlife sanctuaries, biosphere reserves and protected forests. The species continue to live and evolve in the wild. Ex situ conservation means protecting species outside their natural habitat, by keeping them in zoos, botanical gardens, seed banks, gene banks and captive breeding programmes. In situ is generally preferred because it preserves the natural ecosystem, but ex situ is important for critically endangered species and for restoring populations through reintroduction.",
                            4
                        ),
                        qa(
                            "List the major threats to biodiversity.",
                            "The major threats are habitat loss caused by deforestation, urbanisation and agriculture; climate change which alters temperature and rainfall; pollution of air, water and soil; overexploitation through overfishing, hunting and illegal wildlife trade; invasive species that outcompete native species; and the spread of wildlife diseases. All these threats are caused mainly by human activity, and they often work together to push species towards extinction. Conservation requires addressing all of them at once through protected areas, laws, awareness and sustainable practices.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   TOPIC 5 � Environmental Pollution
========================================================= */

const pollution = createTopic(
    "environmental-pollution",
    "Environmental Pollution",

    [
        definition(
            "Pollution",
            "Any undesirable change in the physical, chemical or biological characteristics of air, water or soil that harmfully affects living organisms."
        ),


    list([
        "Air pollution",
        "Water pollution",
        "Soil pollution",
        "Noise pollution",
        "Thermal pollution",
        "Nuclear or radioactive pollution",
    ]),


list([
    "Caused by vehicle emissions, industries, burning of fossil fuels, crop burning.",
    "Major pollutants: PM2.5, PM10, SO2, NO2, CO, ozone, lead.",
    "Effects: respiratory diseases, heart disease, cancer, acid rain, smog.",
    "Control: cleaner fuels, catalytic converters, electrostatic precipitators, CNG.",
]),

    note(
        "PM2.5 refers to particulate matter smaller than 2.5 micrometres. Because they are so small, they enter deep into the lungs and even the bloodstream, making them the most dangerous air pollutant.",
        "exam",
        "Frequently Asked"
    ),


list([
    "Sources: domestic sewage, industrial effluents, agricultural runoff, oil spills, plastic.",
    "Effects: loss of aquatic life, spread of waterborne diseases, eutrophication.",
    "Biological Oxygen Demand (BOD) measures the amount of oxygen needed by microbes to break down organic matter; high BOD means heavy pollution.",
    "Control: sewage treatment, industrial water treatment, rainwater harvesting, banning single use plastic.",
]),


list([
    "Caused by pesticides, herbicides, industrial waste, plastic, e-waste.",
    "Effects: reduced soil fertility, contamination of food, loss of soil organisms.",
    "Control: organic farming, crop rotation, biofertilisers, vermicompost, proper disposal of e-waste.",
]),


list([
    "Caused by traffic, industries, loudspeakers, construction, firecrackers.",
    "Effects: hearing loss, stress, sleep disturbance, high blood pressure.",
    "Control: silent zones near hospitals and schools, noise barriers, ear plugs, limiting firecrackers.",
    "Permissible limit in India: 75 dB in industrial areas, 55 dB in residential areas, 40 dB in silence zones.",
]),


list([
    "Caused by release of hot water from power plants and industries into rivers.",
    "Effects: reduction of dissolved oxygen, death of fish, growth of algae.",
    "Control: cooling towers, cooling ponds, holding the water in reservoirs before release.",
]),


list([
    "Caused by accidents at nuclear plants, improper disposal of radioactive waste.",
    "Effects: cancer, genetic damage, birth defects, long term contamination.",
    "Control: safe reactor design, secure storage, monitoring, international cooperation.",
    "Chernobyl (1986) and Fukushima (2011) are the worst nuclear accidents.",
]),


list([
    "Water (Prevention and Control of Pollution) Act, 1974.",
    "Air (Prevention and Control of Pollution) Act, 1981.",
    "Environment Protection Act, 1986.",
    "Wildlife Protection Act, 1972.",
    "Forest Conservation Act, 1980.",
]),


list([
    "Use public transport, walk or cycle.",
    "Segregate waste at home into wet, dry and hazardous.",
    "Avoid single use plastic, carry a cloth bag and a bottle.",
    "Save electricity and water.",
    "Plant trees and protect green cover.",
    "Report pollution incidents to the local authorities.",
]),

    keyPoints([
        "Pollution is any undesirable change in the environment.",
        "Air, water, soil, noise, thermal and nuclear are the main types.",
        "BOD measures water pollution; PM2.5 is the most harmful air pollutant.",
        "India has several acts for pollution control, the main being the Environment Protection Act 1986.",
        "Individual actions add up to a big impact.",
        ]),
    ],

    {
        summary:
    "Master the types, causes, effects and control of pollution, with reference to Indian laws.",
        minutes: 11,
            tags: ["pollution", "air", "water", "noise", "important"],

                mcqs: [
                    mcq(
                        "PM2.5 refers to particles smaller than:",
                        ["2.5 mm", "2.5 cm", "2.5 micrometres", "2.5 nm"],
                        2,
                        "PM2.5 are particles smaller than 2.5 micrometres in diameter."
                    ),
                    mcq(
                        "BOD measures:",
                        ["Air pollution", "Water pollution", "Soil pollution", "Noise pollution"],
                        1,
                        "BOD measures organic pollution in water."
                    ),
                    mcq(
                        "Environment Protection Act was passed in:",
                        ["1972", "1974", "1981", "1986"],
                        3,
                        "The Environment Protection Act was passed in 1986."
                    ),
                    mcq(
                        "Which is the most harmful air pollutant?",
                        ["CO2", "PM2.5", "N2", "O2"],
                        1,
                        "PM2.5 reaches the deepest parts of the lungs."
                    ),
                    mcq(
                        "Chernobyl accident was in:",
                        ["Japan", "USA", "USSR", "India"],
                        2,
                        "The Chernobyl accident happened in 1986 in the USSR (now Ukraine)."
                    ),
                    mcq(
                        "Noise level in silence zone in India is:",
                        ["30 dB", "40 dB", "55 dB", "75 dB"],
                        1,
                        "The limit in silence zones such as near hospitals is 40 dB."
                    ),
                ],

                    questions: [
                        qa(
                            "Differentiate between air and water pollution.",
                            "Air pollution is the contamination of the atmosphere by gases, particulates and biological molecules that harm human health and the environment. The main sources are vehicle emissions, industrial smoke and burning of fossil fuels; the main effects are respiratory and heart diseases, smog and acid rain. Water pollution is the contamination of water bodies such as rivers, lakes and oceans by sewage, industrial effluents, agricultural chemicals and plastic. The main effects are loss of aquatic life, spread of waterborne diseases and eutrophication. Both are caused mainly by human activity and can be controlled by cleaner technology, treatment of waste and strict laws.",
                            4
                        ),
                        qa(
                            "What is BOD? Why is it important?",
                            "BOD, or Biochemical Oxygen Demand, is the amount of dissolved oxygen needed by aerobic microorganisms to break down the organic matter present in a water sample over a fixed period, usually five days at 20 degrees Celsius. A higher BOD means that more oxygen is being consumed by microbes, which means the water contains a lot of biodegradable waste and has less oxygen for fish and other aquatic life. BOD is therefore a key indicator of organic pollution in water. Clean river water has a BOD of less than 1 mg per litre, while raw sewage can have a BOD of several hundred.",
                            4
                        ),
                        qa(
                            "Explain the major sources and effects of noise pollution.",
                            "Major sources of noise pollution are road traffic, aircraft, railway engines, industries, construction work, loudspeakers, firecrackers and household appliances. Prolonged exposure to noise above 80 dB can cause permanent hearing loss, while even moderate noise can cause stress, sleep disturbance, high blood pressure, anxiety and reduced productivity. Children studying near noisy areas perform worse in school. The control measures include enforcing noise limits in different zones, planting trees that absorb sound, using ear plugs, designing silent zones near hospitals and schools, and limiting the use of firecrackers.",
                            4
                        ),
                        qa(
                            "List the major environmental laws in India.",
                            "The major laws are the Wildlife Protection Act 1972, which protects wild animals and birds; the Water (Prevention and Control of Pollution) Act 1974, which sets up the Central Pollution Control Board; the Forest Conservation Act 1980, which restricts the use of forest land for non forest purposes; the Air (Prevention and Control of Pollution) Act 1981; and the Environment Protection Act 1986, the umbrella law that empowers the central government to coordinate environmental protection and to prescribe standards for emissions and effluents. Together these laws form the backbone of environmental governance in India.",
                            4
                        ),
                    ],
  }
);

/* =========================================================
   EXPORT
========================================================= */

export const unit1Topics = [
    introductionToEnvironment,
    naturalResources,
    ecosystems,
    biodiversity,
    pollution,
];

