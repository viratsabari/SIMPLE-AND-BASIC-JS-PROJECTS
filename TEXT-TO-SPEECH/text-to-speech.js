let speech = new SpeechSynthesisUtterance();
let button = document.querySelector('button');
let voiceSelect = document.querySelector('select');
let voices = [];

function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    const defaultVoice = voices.find(voice => voice.lang.startsWith('en')) || voices[0];
    speech.voice = defaultVoice;
    voiceSelect.innerHTML = '';

    voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.name;
        option.textContent = `${voice.name} (${voice.lang})`;
        if (voice === defaultVoice) option.selected = true;
        voiceSelect.appendChild(option);
    });
}

window.speechSynthesis.onvoiceschanged = populateVoices;

voiceSelect.addEventListener('change', () => {
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.value);
    speech.voice = selectedVoice;
});

button.addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
    setTimeout(()=>{
    document.querySelector('textarea').value=""
    },5000);
});

