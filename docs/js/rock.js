import { Gameobject } from "./gameobject.js";
export class Rock extends Gameobject {
    constructor() {
        super("rock");
        this.x = Math.floor(Math.random() * window.innerWidth / 2) + window.innerWidth;
        this.y = 550;
    }
    update() {
        this.x -= 3;
        super.update();
    }
}
//# sourceMappingURL=rock.js.map