import { Gameobject } from "./gameobject.js";
export class StartScreen extends Gameobject {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const menu = document.createElement("menu");
        const text = document.createElement("menutitle");
        const btn = document.createElement("menubutton");
        this.element.appendChild(menu);
        menu.appendChild(text);
        menu.appendChild(btn);
        text.innerText = "Dino Dash";
        btn.innerText = "START GAME";
        btn.addEventListener("click", () => this.gotoGameScreen());
    }
    gotoGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map