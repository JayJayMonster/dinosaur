import { EndScreen } from "./endscreen.js"
import { Gameobject } from "./gameobject.js"
import { Gamescreen } from "./gamescreen.js"
import { StartScreen } from "./startscreen.js"

export class Game {

    private screen : Gameobject

    constructor(){
        this.screen = new StartScreen(this)
        this.gameLoop()
    }

    public showGameScreen(){
        this.screen = new Gamescreen(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }

    public deleteEndScreen(){
        this.screen.remove()
    }

    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()