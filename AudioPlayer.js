export class AudioPlayer {

    constructor(file) {
        this.audio = new Audio(file);
    }

    play() {
        this.audio.play();
    }
}