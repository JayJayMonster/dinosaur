import { Gameobject } from "./gameobject.js";
export class StartScreen extends Gameobject {
    constructor(game) {
        super("startscreen");
        this.game = game;
        const menu = document.createElement("menu");
        const text = document.createElement("menutitle");
        const btn = document.createElement("menubutton");
        const controls = document.createElement("controlsbutton");
        this.element.appendChild(menu);
        menu.appendChild(text);
        menu.appendChild(btn);
        menu.appendChild(controls);
        text.innerText = "Dino Dash";
        btn.innerText = "START GAME";
        controls.innerText = "CONTROLS";
        btn.classList.add("menubutton");
        controls.classList.add("menubutton");
        btn.addEventListener("click", () => this.gotoGameScreen());
        controls.addEventListener("click", () => this.gotoControlScreen());
    }
    gotoControlScreen() {
        this.remove();
        this.game.showControlScreen();
    }
    gotoGameScreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=startscreen.js.map