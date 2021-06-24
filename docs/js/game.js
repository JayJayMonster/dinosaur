import { EndScreen } from "./endscreen.js";
import { Gamescreen } from "./gamescreen.js";
import { StartScreen } from "./startscreen.js";
export class Game {
    constructor() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new Gamescreen(this);
    }
    showEndScreen() {
        this.screen = new EndScreen(this);
    }
    deleteEndScreen() {
        this.screen.remove();
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map