import { EndScreen } from "./endscreen.js";
import { Gamescreen } from "./gamescreen.js";
import { StartScreen } from "./startscreen.js";
import { ControlScreen } from "./controlscreen.js";
export class Game {
    constructor() {
        this.showStartScreen();
    }
    showControlScreen() {
        this.screen = new ControlScreen(this);
    }
    showStartScreen() {
        this.screen = new StartScreen(this);
        this.gameLoop();
    }
    showGameScreen() {
        this.screen = new Gamescreen(this);
    }
    showEndScreen() {
        this.screen = new EndScreen(this);
    }
    gameLoop() {
        this.screen.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map