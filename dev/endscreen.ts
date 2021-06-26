import { Gameobject } from "./gameobject.js"
import { Game } from "./game.js"

export class EndScreen extends Gameobject {

    private game : Game

        constructor(game: Game) {
            super("endscreen")
            this.game = game

            this.addGameoverScreen()
        }

        private addGameoverScreen(){
            const menu = document.createElement("menu")
            const text = document.createElement("menutitle")
            const btn = document.createElement("menubutton")
            
            this.element.appendChild(menu)
            menu.appendChild(text)
            menu.appendChild(btn)
            
            text.innerText = "GAME OVER!"
            btn.innerText = "START AGAIN"
            btn.classList.add("menubutton")
            btn.addEventListener("click", ()=>this.newGamescreen())
        }

        private newGamescreen(){
            this.remove()
            this.game.showGameScreen()
        }
}