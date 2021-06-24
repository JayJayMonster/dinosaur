import { Gameobject } from "./gameobject.js"
import { Game } from "./game.js"
import { Gamescreen } from "./gamescreen.js"

export class EndScreen extends Gameobject {

    protected game : Game
    protected gamescreen : Gamescreen

        constructor(game: Game) {
            super("endscreen")
            this.game = game

            this.addGameoverScreen()
        }

        private addGameoverScreen(){
            // this.gameOverElement = document.createElement("gameOverScreen")
            // this.gameOverElement.innerHTML = "GAME OVER!"
            // const backgroundTag = document.querySelector("background")! as HTMLElement
            // backgroundTag.appendChild(this.gameOverElement);  

            // this.resetButton = document.createElement("resetButton")
            // this.resetButton.innerHTML = "Start again"
            // backgroundTag.appendChild(this.resetButton)
            const menu = document.createElement("menu")
            const text = document.createElement("menutitle")
            const btn = document.createElement("menubutton")
            
            this.element.appendChild(menu)
            menu.appendChild(text)
            menu.appendChild(btn)
            
            text.innerText = "GAME OVER!"
            btn.innerText = "START AGAIN"
            btn.addEventListener("click", ()=>this.newGamescreen())
        }

        private newGamescreen(){
            this.element.innerHTML = ""
            this.game.deleteEndScreen()
            this.game.showGameScreen()
        }
}