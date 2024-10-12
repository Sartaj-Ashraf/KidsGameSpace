
class SpeechUtils {
    constructor() {
        this.synthesis = window.speechSynthesis;
    }
    speak(name) {
        const utterance = new SpeechSynthesisUtterance(name);
        utterance.lang = 'en-UK';
        this.synthesis.speak(utterance);
    }
}

export default new SpeechUtils(); 
