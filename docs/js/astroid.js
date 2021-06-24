import { Gameobject } from "./gameobject.js";
export class Astroid extends Gameobject {
    constructor(screen) {
        super("astroid");
        this.screen = screen;
        this.x = Math.random() * window.innerWidth;
        this.y = 270 - Math.random() * 30;
        this.xSpeed = 2;
        this.ySpeed = 2;
    }
    update() {
        this.y += this.ySpeed;
        this.x -= this.xSpeed;
        if (this.y + this.element.clientHeight > 600) {
            this.y = -70;
            this.x = 300 + Math.floor(Math.random() * (window.innerWidth - this.element.clientWidth));
        }
        super.update();
    }
}
//# sourceMappingURL=astroid.js.map