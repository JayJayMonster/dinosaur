import { Astroid } from "./astroid.js"
import { Player } from "./player.js"
import { Rock } from "./rock.js"
import { Gameobject } from "./gameobject.js"
import { Game } from "./game.js"
import { Ui } from "./ui.js"

export class Gamescreen extends Gameobject {

    private player: Player
    private rock: Rock[] = []
    private astroid: Astroid[] = []
    private ui: Ui
    private bgPosition: number = 0
    private spawner: number = 0
    private _gameOver: boolean = false
    private game: Game

    constructor(game: Game) {
        super("gamescreen")
        this.game = game
        console.log("Game was created!")
        this.reset();
    }

    public get gameOver(): boolean {
        return this._gameOver
    }
    
    public set gameOver(value: boolean) {
        this._gameOver = value
    }

    private reset() {
        this.player = new Player(this)
        this.ui = new Ui
        for (let i = 0; i < (Math.random() * 5); i++) {
            this.astroid.push(new Astroid(this))
        }
        this.player.reset()
        this.ui.score = 0
        this.gameOver = false
        this.spawner = 0
    }
    
    private cleanScreen() {
        for (let a of this.astroid) {
            a.remove()
        }
        
        for (let r of this.rock) {
            r.remove()
        }
        
        this.astroid = []
        this.rock = []
        this.player.remove()
        this.remove()
        this.ui.music.pause()
    }
    
    public update() {
        
        if (!this.ui.pause && !this.gameOver) {
            this.updateScreen()
        }
        
        if (this.gameOver) {
            this.cleanScreen()
            this.game.showEndScreen()
        }
    }
    
    private updateScreen() {
        this.spawner++
        if (this.spawner > 120) {
            this.spawner = 0
            this.ui.update()
            this.rock.push(new Rock())
        }
        
        this.player.update()
        for (const astroid of this.astroid) {
            astroid.update()
            let dinoRect = this.player.getRect()
            let astroidRect = astroid.getRect()
            let hit = this.checkCollision(dinoRect, astroidRect)
            if (hit) {
                this.player.hit()
                astroid.remove()
            }
        }
        
        for (const rock of this.rock) {
            rock.update()
            let dinoRect = this.player.getRect()
            let rockRect = rock.getRect()
            
            let hit = this.checkCollision(dinoRect, rockRect)
            
            if (hit) {
                this.player.hit()
                rock.remove()
            }
        }
        this.scrollingBackground()
    }
    
    private scrollingBackground() {
        this.bgPosition -= 2
        const bg = document.querySelector('background')! as HTMLElement
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }

}

