export class Ui {
    constructor() {
        this._score = 0;
        this._pause = false;
        const pause = document.getElementById("pause");
        this.pauseElement = pause;
        this.pauseElement.classList.add("pause");
        this.pauseElement.innerHTML = "Pause";
        this.pauseElement.addEventListener("click", () => this.pauseClicked());
        const title = document.querySelector("gametitle");
        this.titleElement = title;
        this.titleElement.innerHTML = "Dino dash";
        const score = document.querySelector("score");
        this.scoreElement = score;
        this.scoreElement.innerText = `Score: ${this.score}`;
        this.music = new Audio('./sounds/menu.wav');
        this.music.play();
        this.music.loop = true;
    }
    update() {
        this.score++;
        this.scoreElement.innerText = `Score: ${this.score}`;
    }
    pauseClicked() {
        const pauseButton = document.getElementById("pause");
        this.pause = !this.pause;
        if (this.pause) {
            pauseButton.innerText = "Keep going";
            this.music.pause();
        }
        else {
            pauseButton.innerText = "Pause";
            this.music.play();
        }
    }
    get score() {
        return this._score;
    }
    set score(value) {
        this._score = value;
    }
    get pause() {
        return this._pause;
    }
    set pause(value) {
        this._pause = value;
    }
    get music() {
        return this._music;
    }
    set music(value) {
        this._music = value;
    }
}
//# sourceMappingURL=ui.js.map