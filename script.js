const message = [
    "KAMU BERCANDA KAN?",
    "SERIUSSS???",
    "KAMU YAKIN TENTANG ITU?",
    "AKU AKAN SEDIH LOH...",
    "YAUDA DEH, AKU MENYURUH KAMU BERHENTI",
    "KALO KAMU BILANG TIDAK AKU BENERAN SEDIH...",
    "PLEASE PENCET IYA...",
    "AKU AKAN SANGAT SANGAT SEDIHH..."
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.getElementById('no-btn');
    const yesButton = document.getElementById('yes-btn');

    noButton.textContent = message[messageIndex];
    messageIndex = ( messageIndex +  1) % message.length;

    const currentsize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentsize * 1.5}px`;
    yesButton.style.padding = `${currentsize *0.8}px ${currentsize * 1.5}px`;

}

function handleYesClick() {
    window.location.href = "pageyes.html"
}