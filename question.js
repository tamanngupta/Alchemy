// questions.js
const chemistryQuiz = [
    // --- TOPIC 1: PREPARATION OF CARBONYL COMPOUNDS ---
    {
        id: 1,
        title: "Topic 1: Alcohol Oxidation",
        reactantName: "1-propanol", // Primary alcohol
        reagent: "PCC (pyridinium chlorochromate) / Anhydrous",
        question: "You add PCC to a primary alcohol like 1-propanol under anhydrous conditions. What is the final product?",
        options: [
            "Propanal (Aldehyde)",
            "Propanoic acid (Carboxylic Acid)",
            "Propanone (Ketone)"
        ],
        correctAnswer: 0,
        successIntuition: "Spot on! PCC stops exactly at the aldehyde stage because of the anhydrous conditions. Since no water is present, the aldehyde hydrate (gem-diol) cannot form, saving it from being over-oxidized into an acid.",
        failIntuition: "Oof! Remember, PCC is special because it is anhydrous (no water). If you used aqueous Chromic Anhydride (CrO3), it would form a gem-diol and over-oxidize to Propanoic acid. But PCC stops at the aldehyde!"
    },
    {
        id: 2,
        title: "Topic 1: Alkyne Hydration",
        reactantName: "propyne", // Terminal alkyne
        reagent: "1% HgSO4 and dilute H2SO4",
        question: "You run an electrophilic hydration on propyne (a terminal alkyne). What type of carbonyl compound do you get?",
        options: [
            "An aldehyde (Propanal)",
            "A ketone (Propanone)",
            "A carboxylic acid"
        ],
        correctAnswer: 1,
        successIntuition: "Perfect! This follows Markovnikov addition of water to give an enol, which quickly tautomerizes to the stable keto form. Because the OH lands on the internal carbon (C2), you get a ketone. (Fun fact: Only acetylene gives an aldehyde here!)",
        failIntuition: "Incorrect! Remember your regiochemistry rules: This is a Markovnikov addition. The OH group goes to the more substituted internal carbon, which tautomerizes into a ketone. Only acetylene (ethyne) will yield an aldehyde using this reagent."
    },
    {
        id: 3,
        title: "Topic 1: Hydroboration vs Acid Hydration",
        reactantName: "propyne",
        reagent: "1. B2H6 / THF  ->  2. H2O2 / NaOH (Basic)",
        question: "You subject propyne to Hydroboration-Oxidation with a basic workup. What is your final product?",
        options: [
            "Propanone (Markovnikov Ketone)",
            "Propanal (Anti-Markovnikov Aldehyde)",
            "Propene (Alkene)"
        ],
        correctAnswer: 1,
        successIntuition: "Incredible job! Boron attacks the less hindered terminal carbon (Anti-Markovnikov). The alkaline H2O2 workup turns it into an enol, which tautomerizes into an aldehyde (Propanal). This is the perfect complementary reaction to acid hydration!",
        failIntuition: "Ah, check your notes! Acid hydration (HgSO4/H2SO4) gives the Markovnikov ketone. Hydroboration goes the opposite way—Anti-Markovnikov—putting the carbonyl on the terminal position to form an aldehyde. Also, watch the workup: a basic medium is mandatory to get the carbonyl; an acidic workup would leave you with an alkene!"
    },
    {
        id: 4,
        title: "Topic 1: Managing Grignard Reagents",
        reactantName: "acetyl chloride", // Acyl chloride
        reagent: "Grignard Reagent (CH3MgBr)",
        question: "You want to synthesize a ketone from an acyl chloride using a Grignard reagent. What is the critical condition required to stop at the ketone stage?",
        options: [
            "Use an excess supply of Grignard reagent",
            "Use a strictly limited (1 equivalent) supply of Grignard reagent",
            "Add water to the flask at the very beginning of the reaction"
        ],
        correctAnswer: 1,
        successIntuition: "Exactly! Grignard reagents are powerful, aggressive nucleophiles. You must use a strictly limited supply to stop at the ketone stage. If you have an excess, the Grignard will immediately launch a second attack on your newly formed ketone, converting it into a tertiary alcohol.",
        failIntuition: "Danger! Two issues here: First, if you add water early, you destroy your Grignard instantly (forming an alkane). Second, if you use excess Grignard, it will attack your newly formed product a second time, leaving you with a tertiary alcohol instead of a ketone!"
    },

    // --- TOPIC 2: PREPARATION OF ALDEHYDES ---
    {
        id: 5,
        title: "Topic 2: Rosenmund Reduction",
        reactantName: "benzoyl chloride", 
        reagent: "H2 / Pd supported over BaSO4",
        question: "Why do we intentionally 'poison' the Palladium catalyst with BaSO4 when reducing an acyl chloride?",
        options: [
            "To speed up the reaction rate",
            "To prevent the aldehyde from over-reducing into an alcohol",
            "To remove any water impurities"
        ],
        correctAnswer: 1,
        successIntuition: "Bingo! Pure Palladium is too active and would reduce your nice aldehyde straight down to a primary alcohol. BaSO4 acts as a tactical poison, reducing the catalyst's activity just enough to freeze the reaction right at the aldehyde stage.",
        failIntuition: "Not quite. Think about catalyst control: Pure Pd is incredibly strong. Without the BaSO4 'poison' to throttle its power, it would aggressively over-reduce your target aldehyde down to a boring primary alcohol."
    }
];