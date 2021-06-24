export class Dino {
    constructor() {
        this.horizontalSpeed = 0;
        console.log("Rex was created!");
        window.addEventListener("keyup", (e) => this.onKeyUpHandler(e));
        window.addEventListener("keydown", (e) => this.onKeyDownHandler(e));
        this.create();
    }
    create() {
        this.div = document.createElement("dino");
        document.body.appendChild(this.div);
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.y = 540;
        this.health = 100;
    }
    update() {
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDownHandler(e) {
        switch (e.key) {
            case "ArrowLeft":
                this.horizontalSpeed = -5;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 5;
                break;
            case "a":
                this.horizontalSpeed = -5;
                break;
            case "d":
                this.horizontalSpeed = 5;
                break;
            case " ":
                this.y = 500;
                break;
            default:
                break;
        }
    }
    onKeyUpHandler(e) {
        if (e.key == "ArrowLeft" || e.key == "ArrowRight" || e.key == "a" || e.key == "d") {
            this.horizontalSpeed = 0;
        }
        if (e.key == " ") {
            this.y = 550;
        }
    }
    getRect() {
        return this.div.getBoundingClientRect();
    }
    hit() {
        this.health--;
    }
}
//# sourceMappingURL=dino.js.map