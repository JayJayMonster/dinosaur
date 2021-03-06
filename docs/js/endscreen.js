import { Gameobject } from "./gameobject.js";
export class EndScreen extends Gameobject {
    constructor(game) {
        super("endscreen");
        this.game = game;
        this.addGameoverScreen();
    }
    addGameoverScreen() {
        const menu = document.createElement("menu");
        const text = document.createElement("menutitle");
        const btn = document.createElement("menubutton");
        this.element.appendChild(menu);
        menu.appendChild(text);
        menu.appendChild(btn);
        text.innerText = "GAME OVER!";
        btn.innerText = "START AGAIN";
        btn.classList.add("menubutton");
        btn.addEventListener("click", () => this.newGamescreen());
    }
    newGamescreen() {
        this.remove();
        this.game.showGameScreen();
    }
}
//# sourceMappingURL=endscreen.js.map