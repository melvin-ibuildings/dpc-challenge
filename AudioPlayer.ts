export class AudioPlayer {
    private audio: HTMLAudioElement;

    constructor(file: string) {
        this.audio = new Audio(file);
    }

    play() {
        this.audio.play();
    }
}