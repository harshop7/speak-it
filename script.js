const speakButton = document.getElementById("speak-btn");
const inputText = document.getElementById("text-input");

function speakText() {
    const text = inputText.value.trim();
    if (text === "") {
        alert("Please type something in the text box first!");
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    const girlVoice = voices.find(voice => voice.name.toLowerCase().includes("female") && voice.lang.toLowerCase().includes("en"));

    if (girlVoice) {
        utterance.voice = girlVoice;
    } else {
        const defaultFemaleVoice = voices.find(voice => voice.name.toLowerCase().includes("female"));
        if (defaultFemaleVoice) {
            utterance.voice = defaultFemaleVoice;
        }
    }

    utterance.pitch = 1.5;
    utterance.rate = 0.8;

    window.speechSynthesis.speak(utterance);
}

window.speechSynthesis.onvoiceschanged = function() {
    window.speechSynthesis.getVoices();
};

speakButton.addEventListener("click", speakText);
