import { Gameobject } from "./gameobject.js";
export class Rock extends Gameobject {
    constructor(screen) {
        super("rock");
        this.screen = screen;
        this.x = Math.floor(Math.random() * window.innerWidth) + window.innerWidth;
        this.y = 550;
    }
    update() {
        this.x -= 3;
        super.update();
        if (this.x < -this.element.clientWidth) {
            this.x = window.innerWidth;
        }
    }
}
//# sourceMappingURL=rock.js.map