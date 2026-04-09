const buildRecommendations = [
    {
        budget: "budget",
        use: "gaming",
        title: "Budget Gaming Build",
        cpu: "AMD Ryzen 5 5500",
        gpu: "Radeon RX 7600 8GB",
        motherboard: "MSI Pro B550M-VC WIFI",
        ram: "16GB DDR4-3200",
        storage: "Crucial P3 1TB NVMe",
        psu: "Corsair CX650",
        case: "Montech AIR 100 ARGB",
        cooler: "Use stock cooler to save money",
        notes: "Prices are subject to change due to the fluctuating time period we are in. This budget build would take you through the very basics of gaming without much for upgradeability as it runs off the previous generation of parts due to pricings right now."
    },
    {
        budget: "midrange",
        use: "gaming",
        title: "Midrange Gaming Build",
        cpu: "AMD Ryzen 7 7800X3D",
        gpu: "NVIDIA GeForce RTX 5070",
        motherboard: "Gigabyte B650 Eagle AX",
        ram: "G.SKILL Flare X5 32GB (2x16GB) DDR5-6000",
        storage: "Samsung 990 EVO Plus 2TB NVMe SSD",
        psu: "Corsair RM750e 750W Gold",
        case: "Montech AIR 903 MAX",
        cooler: "Thermalright Phantom Spirit 120 SE",
        notes: "Prices are subject to change due to the fluctuating time we are in. The generic branding on RAM, Storage, GPU, etc would be due to too many options and too much fluctuation in price to be totally accurate.  This midtier build will take you through most games even at 1440p and allow for great performance."
    },
    {
        budget: "highend",
        use: "gaming",
        title: "Highend Gaming Build",
        cpu: "AMD Ryzen 9 9950X3D",
        gpu: "RTX 5080 Founders Edition 16GB GDDR7",
        motherboard: "MSI MPG B850 Edge TI WIFI",
        ram: "G.SKILL Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000 CL30",
        storage: "Samsung 990 Pro 4TB NVMe SSD",
        psu: "Corsair RM1000x Fully Modular Gold",
        case: "Lian Li LANCOOL 216 RGB",
        cooler: "Corsair iCUE LINK TITAN 360 RX LCD",
        notes: "Prices are subject to change, and feel free to look into other options and brands that are not listed here, there are plenty of amazing brands and aesthetics. This highend build will take you through every game at amazing graphics, you will experience clean gameplay here and you do have room to look for other parts as wanted."
    },
    {
        budget: "budget",
        use: "school",
        title: "Budget School Build",
        cpu: "AMD Ryzen 5 5600G",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "MSI Pro B550M-VC WIFI",
        ram: "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200",
        storage: "Crucial P3 1TB NVMe",
        psu: "Corsair CX550",
        case: "Montech AIR 100 LITE",
        cooler: "Use stock cooler to save money",
        notes: "Prices are subject to change. This build is mainly for schoolwork, web browsing, video watching, and etc."
    },
    {
        budget: "midrange",
        use: "school",
        title: "Midrange School Build",
        cpu: "AMD Ryzen 5 7600",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "Gigabyte B650 Eagle AX",
        ram: "G.SKILL Flare X5 32GB (2x16GB) DDR5-6000",
        storage: "WD_BLACK SN770 1TB NVMe SSD",
        psu: "Corsair RM650e 650W Gold",
        case: "Montech AIR 903 MAX",
        cooler: "Thermalright Assassin X 120 Refined SE",
        notes: "Prices are subject to change. This build is great for school, research, lots of browser tabs, etc."
    },
    {
        budget: "highend",
        use: "school",
        title: "Highend School Build",
        cpu: "AMD Ryzen 7 7700",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "MSI MAG B650 Tomahawk WIFI",
        ram: "G.Skill Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000",
        storage: "Samsung 990 Pro 2TB NVMe SSD",
        psu: "Corsair RM750x Fully Modular Gold",
        case: "Lian Li Lancool 216 RGB",
        cooler: "Noctua NH-U12A",
        notes: "Prices are subject to change. This is more than what most students would need, but this would allow for excellent power in multitasking, programming, etc."
    },
    {
        budget: "budget",
        use: "office",
        title: "Budget Office Build",
        cpu: "AMD Ryzen 5 5600G",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "MSI PRO B550M-VC WIFI",
        ram: "Corsair Vengeance LPX 16GB (2x8GB) DDR4-3200",
        storage: "Crucial P3 500GB NVMe SSD",
        psu: "Corsair CX550",
        case: "Thermaltake Versa H18",
        cooler: "Use stock cooler to save money",
        notes: "Prices are subject to change. This build is great for basic office use"
    },
    {
        budget: "midrange",
        use: "office",
        title: "Midrange Office Build",
        cpu: "AMD Ryzen 5 7600",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "Gigabyte B650 Eagle AX",
        ram: "Corsair Vengeance 32GB (2x16GB) DDR5-6000",
        storage: "WD_BLACK SN770 1TB NVMe SSD",
        psu: "Corsair RM650e 650W Gold",
        case: "Montech AIR 100 ARGB",
        cooler: "Thermalright Assassin Spirit 120 EVO",
        notes: "Prices subject to change. This build offers stronger multitasking and quicker response times, allowing for faster work."
    },
    {
        budget: "highend",
        use: "office",
        title: "High-End Office Build",
        cpu: "AMD Ryzen 7 9700X",
        gpu: "Integrated Radeon Graphics (CPU Graphics)",
        motherboard: "MSI MAG B650 Tomahawk WIFI",
        ram: "G.SKILL Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000",
        storage: "Samsung 990 PRO 2TB NVMe SSD",
        psu: "Corsair RM750x Fully Modular Gold",
        case: "Fractal Design North",
        cooler: "Noctua NH-D15",
        notes: "Prices are subject to change. This build offers heavy multitasking capabilities, large spreadsheets, professional workloads, etc."
    },
    {
        budget: "budget",
        use: "editing",
        title: "Budget Editing Build",
        cpu: "AMD Ryzen 7 5700X",
        gpu: "NVIDIA GeForce RTX 4060 8GB",
        motherboard: "MSI PRO B550M-VC WIFI",
        ram: "Corsair Vengeance LPX 32GB (2x16GB) DDR4-3200",
        storage: "Crucial P3 Plus 1TB NVMe SSD",
        psu: "Corsair CX650",
        case: "Montech AIR 100 ARGB",
        cooler: "Thermalright Peerless Assassin 120 SE",
        notes: "Prices are subject to change. This basic editing build is meant for beginner editing, rendering, while still allowing for affordability."
    },
    {
        budget: "midrange",
        use: "editing",
        title: "Midrange Editing Build",
        cpu: "AMD Ryzen 7 7700X",
        gpu: "NVIDIA GeForce RTX 4070 SUPER 12GB",
        motherboard: "Gigabyte B650 Eagle AX",
        ram: "G.SKILL Flare X5 32GB (2x16GB) DDR5-6000",
        storage: "Samsung 990 EVO Plus 2TB NVMe SSD",
        psu: "Corsair RM750e 750W Gold",
        case: "Montech AIR 903 MAX",
        cooler: "Thermalright Phantom Spirit 120 SE",
        notes: "Prices are subject to change. This editing build offers stronger editing, rendering, and multitasking capabilities."
    },
    {
        budget: "highend",
        use: "editing",
        title: "High-End Editing Build",
        cpu: "AMD Ryzen 9 9900X",
        gpu: "NVIDIA GeForce RTX 5080 Founders Edition 16GB GDDR7",
        motherboard: "MSI MPG B850 Edge TI WIFI",
        ram: "G.SKILL Trident Z5 Neo RGB 64GB (2x32GB) DDR5-6000 CL30",
        storage: "Samsung 990 PRO 4TB NVMe SSD",
        psu: "Corsair RM1000x Fully Modular Gold",
        case: "Lian Li LANCOOL 216 RGB",
        cooler: "Corsair iCUE LINK TITAN 360 RX LCD",
        notes: "Prices are subject to change. This build allows for extreme editing capabilities while still allowing for strong adjusting in components if you feel you need more storage or etc."
    }
];

const troubleshootingSteps = [
    {
        issue: "frozen",
        title: "Frozen PC",
        steps: [
            "Wait a moment and stop clicking repeatedly",
            "Try opening Task Manager with Ctrl + Shift + Esc.",
            "Close any program that is not responding",
            "If nothing changes, restart the computer.",
            "After restarting, check if too many programs were open at once."
        ]
    },
    {
        issue: "nodisplay",
        title: "No Display",
        steps: [
            "Make sure the monitor is powered on.",
            "Check that the display cable is connected fully.",
            "Make sure the monitor is on the correct input.",
            "If you have a graphics card, plug the monitor into the GPU and not the motherboard.",
            "Reseat the RAM or test another cable if the problem continues."
        ]
    },
    {
        issue: "nopower",
        title: "PC Will Not Turn On",
        steps: [
            "Make sure the power cable is connected securely.",
            "Test the wall outlet with another device.",
            "Check that the power supply switch is set to on.",
            "Make sure the front panel power button connections are still correct.",
            "If there are still no signs of power, recheck internal power connections carefully."
        ]
    },
    {
        issue: "overheating",
        title: "Overheating",
        steps: [
            "Check that all fans are spinning.",
            "Make sure vents and airflow paths are not blocked.",
            "Clean out heavy dust buildup.",
            "Check that the cooler is mounted correctly.",
            "Monitor temperatures if the system keeps getting too hot."
        ]
    },
    {
        issue: "slow",
        title: "Slow Performance",
        steps: [
            "Restart the computer first.",
            "Check how much free storage space you have left.",
            "Close unnecessary background programs.",
            "Disable startup programs you do not need.",
            "Consider whether low RAM or older storage may be causing the slowdown."
        ]
    },
    {
        issue: "crashes",
        title: "Random Crashes",
        steps: [
            "Pay attention to when the crashes happen.",
            "Check for overheating or unusually loud fans.",
            "Update drivers if needed.",
            "See whether one specific program causes the problem.",
            "If crashes continue, test hardware and software one step at a time."
        ]
    }
];

function savePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key)
}

function displayRecommendation() {
    const budgetSelect = document.querySelector("#budget");
    const useSelect = document.querySelector("#use");
    const output = document.querySelector("#recommendation-output");

    if (!budgetSelect || !useSelect || !output) return;

    const selectedBudget = budgetSelect.value;
    const selectedUse = useSelect.value;

    if (selectedBudget === "" || selectedUse === "") {
        const emptyMessage = `<p>Please choose both a budget and a main use first.</p>`;
        output.innerHTML = emptyMessage;
        savePreference("savedRecommendationOutput", emptyMessage);
        return;
    }

    const match = buildRecommendations.find((build) => build.budget === selectedBudget && build.use === selectedUse);

    savePreference("savedBudget", selectedBudget);
    savePreference("savedUse", selectedUse);

    if (match) {
        const recommendationHtml = `
            <h3>${match.title}</h3>
            <p><strong>CPU:</strong> ${match.cpu}</p>
            <p><strong>GPU:</strong> ${match.gpu}</p>
            <p><strong>Motherboard:</strong> ${match.motherboard}</p>
            <p><strong>RAM:</strong> ${match.ram}</p>
            <p><strong>Storage:</strong> ${match.storage}</p>
            <p><strong>PSU:</strong> ${match.psu}</p>
            <p><strong>Case:</strong> ${match.case}</p>
            <p><strong>Cooler:</strong> ${match.cooler}</p>
            <p><strong>Notes:</strong> ${match.notes}</p>
        `;

        output.innerHTML = recommendationHtml;
        savePreference("savedRecommendationOutput", recommendationHtml);
    } 
    else {
        const noMatchHtml = `<p>No recommendation was found for that combination.</p>`;
        output.innerHTML = noMatchHtml;
        savePreference("savedRecommendationOutput", noMatchHtml);
    }
}

function displayTroubleshootingSteps() {
    const issueSelect = document.querySelector("#issue");
    const output = document.querySelector("#trouble-output");

    if (!issueSelect || !output) return;

    const selectedIssue = issueSelect.value;

    if (selectedIssue === "") {
        const emptyMessage = `<p>Please select a problem first.</p>`;
        output.innerHTML = emptyMessage;
        savePreference("savedTroubleOutput", emptyMessage);
        return;
    }

    const match = troubleshootingSteps.find((problem) => problem.issue === selectedIssue);

    savePreference("savedIssue", selectedIssue);

    if (match) {
        const stepsHtml = match.steps.map((step) => `<li>${step}</li>`).join("");
        const troubleshootingHtml = `
            <h3>${match.title}</h3>
            <ol>${stepsHtml}</ol>
        `;

        output.innerHTML = troubleshootingHtml;
        savePreference("savedTroubleOutput", troubleshootingHtml);
    } 
    else {
        const noTroubleHtml = `<p>No troubleshooting steps were found for that issue.</p>`;
        output.innerHTML = noTroubleHtml;
        savePreference("savedTroubleOutput", noTroubleHtml);
    }
}

function loadSavedPartsSelections() {
    const budgetSelect = document.querySelector("#budget");
    const useSelect = document.querySelector("#use")

    if (!budgetSelect || !useSelect) return;

    const savedBudget = getPreference("savedBudget");
    const savedUse = getPreference("savedUse");

    if (savedBudget) {
        budgetSelect.value = savedBudget;
    }

    if (savedUse) {
        useSelect.value = savedUse;
    }
}

function loadSavedIssueSelection() {
    const issueSelect = document.querySelector("#issue");

    if (!issueSelect) return;

    const savedIssue = getPreference("savedIssue");

    if (savedIssue) {
        issueSelect.value = savedIssue;
    }
}

function setupProjectTools() {
    const recommendButton = document.querySelector("#recommend-btn");
    const troubleButton = document.querySelector("#trouble-btn");

    if (recommendButton) {
        recommendButton.addEventListener("click", displayRecommendation);
        loadSavedPartsSelections();
        loadSavedRecommendationOutput();
    }

    if (troubleButton) {
        troubleButton.addEventListener("click", displayTroubleshootingSteps);
        loadSavedIssueSelection();
        loadSavedTroubleOutput();
    }
}

function loadSavedRecommendationOutput() {
    const output = document.querySelector("#recommendation-output");
    const savedOutput = getPreference("savedRecommendationOutput");

    if (output && savedOutput) {
        output.innerHTML = savedOutput;
    }
}

function loadSavedTroubleOutput() {
    const output = document.querySelector("#trouble-output");
    const savedOutput = getPreference("savedTroubleOutput");

    if (output && savedOutput) {
        output.innerHTML = savedOutput;
    }
}

document.addEventListener("DOMContentLoaded", setupProjectTools);