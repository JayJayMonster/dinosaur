import { EndScreen } from "./endscreen.js"
import { Gameobject } from "./gameobject.js"
import { Gamescreen } from "./gamescreen.js"
import { StartScreen } from "./startscreen.js"
import { ControlScreen } from "./controlscreen.js"

export class Game {
    
    public showControlScreen() {
        this.screen = new ControlScreen(this)
    }

    private screen : Gameobject

    constructor(){
        this.showStartScreen()
    }
    
    public showStartScreen(){
        this.screen = new StartScreen(this)
        this.gameLoop()
    }

    public showGameScreen(){
        this.screen = new Gamescreen(this)
    }

    public showEndScreen(){
        this.screen = new EndScreen(this)
    }


    private gameLoop(){
        this.screen.update()
        requestAnimationFrame(()=>this.gameLoop())
    }
}

new Game()