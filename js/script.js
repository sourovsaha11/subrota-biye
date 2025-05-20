// ...existing code...

document.addEventListener("DOMContentLoaded", function () {
    const blessings = [
        "May your love grow stronger with each passing day (Subrota & Ritu).",
        "Wishing you a lifetime of happiness and endless love (Subrota & Ritu).",
        "May your journey together be filled with joy and laughter (Subrota & Ritu).",
        "May your marriage be blessed with harmony and understanding (Subrota & Ritu).",
        "Wishing you both a beautiful forever (Subrota & Ritu) !",
        "May your hearts always find their way back to each other (Subrota & Ritu).",
        "May your love story be as magical as a fairy tale (Subrota & Ritu).",
        "May your union be filled with adventure and bliss (Subrota & Ritu).",
        "Wishing you a partnership full of trust and respect (Subrota & Ritu).",
        "May your days together be as bright as your smiles (Subrota & Ritu)."
    ];

    const button = document.getElementById("funny-button");

    // Create a blessing display element if it doesn't exist
    let blessingBox = document.getElementById("blessing-box");
    if (!blessingBox) {
        blessingBox = document.createElement("div");
        blessingBox.id = "blessing-box";
        document.querySelector(".container").appendChild(blessingBox);
    }

    button.addEventListener("click", function () {
        const randomBlessing = blessings[Math.floor(Math.random() * blessings.length)];
        blessingBox.textContent = randomBlessing;
        blessingBox.classList.remove("show-blessing");
        // Trigger reflow for restart animation
        void blessingBox.offsetWidth;
        blessingBox.classList.add("show-blessing");
    });
});

// ...existing code...