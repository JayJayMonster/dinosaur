import { Gameobject } from "./gameobject.js"
import { Game } from "./game.js"

export class ControlScreen extends Gameobject {

    private game: Game

    constructor(game: Game) {
        super("controlscreen")
        this.game = game

        const menu = document.createElement("menu")
        const title = document.createElement("menutitle")
        const text = document.createElement("div")
        const backButton = document.createElement("backButton")

        this.element.appendChild(menu)
        menu.appendChild(title)
        menu.appendChild(text)
        menu.appendChild(backButton)

        title.innerText = "Controls"
        text.innerText = "Use 'a' and 'd' or the arrow keys to move and use space to jump"
        backButton.innerText = "Back to main menu"

        backButton.classList.add("menubutton")

        backButton.addEventListener("click", () => this.goToMainMenu())

    }
    private goToMainMenu() {
        this.remove()
        this.game.showStartScreen()
    }

}