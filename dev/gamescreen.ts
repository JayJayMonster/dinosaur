import { Astroid } from "./astroid.js"
import { Player } from "./player.js"
import { Rock } from "./rock.js"
import { Gameobject } from "./gameobject.js"
import { Game } from "./game.js"

export class Gamescreen extends Gameobject{

    private score: number = 0
    private scoreElement: HTMLElement
    private pauseElement: HTMLElement
    private titleElement: HTMLElement
    private player: Player
    private rock: Rock[] = []
    private astroid: Astroid[] = []
    private pause: boolean = false
    private bgPosition: number = 0
    private spawner: number = 0
    public gameOver: boolean = false
    private game : Game
    
    constructor(game: Game) {
        super("gamescreen")
        this.game = game   
        console.log("Game was created!")
        this.reset();    
    }
     
    public reset(){
        this.player = new Player(this)
        for(let i = 0; i < (Math.random() * 5); i++){
            this.astroid.push(new Astroid(this))
        }
        this.player.reset()
        
        this.score = 0
        this.gameOver = false
        this.spawner = 0

        const pause = document.getElementById("pause")! as HTMLElement
        this.pauseElement = pause
        this.pauseElement.classList.add("pause")
        this.pauseElement.innerHTML = "Pause"
        this.pauseElement.addEventListener("click", ()=>this.pauseClicked())
        
        const title = document.querySelector("gametitle")! as HTMLElement
        this.titleElement = title
        this.titleElement.innerHTML = "Dino dash"

        const score = document.querySelector("score")! as HTMLElement
        this.scoreElement = score
        this.scoreElement.innerText=`Score: ${this.score}`
        this.gameLoop()
    }

    public cleanScreen(){
        for(let a of this.astroid){
            a.remove()
        }

        for(let r of this.rock){
            r.remove()
        }

        this.astroid = []
        this.rock = []

    const backgroundTag = document.querySelector("background")! as HTMLElement
    backgroundTag.innerHTML = ""
}
       
    private gameLoop() {

        this.spawner++
        if(this.spawner > 120) {
            this.spawner = 0
            this.updateScore()
            this.rock.push(new Rock(this))
        }

        // update the dino
        this.player.update()
        for(const astroid of this.astroid){
            astroid.update()
            let dinoRect = this.player.getRect()
            let astroidRect = astroid.getRect()
            let hit = this.checkCollision(dinoRect, astroidRect)
            if (hit){
                this.player.hit()
                astroid.remove()
            }
        }

        for (const rock of this.rock) {
            rock.update()
            let dinoRect = this.player.getRect()
            let rockRect = rock.getRect()

            let hit = this.checkCollision(dinoRect, rockRect)

            if (hit){
                this.player.hit()
                rock.remove()
            }
        }
        
        if(!this.pause && !this.gameOver) {
            requestAnimationFrame(()=>this.gameLoop())
        } 

        if(this.gameOver){
            this.cleanScreen()
            this.game.showEndScreen()
        }
        
        this.scrollingBackground()
    }

    private updateScore(){
        this.score++
        this.scoreElement.innerText=`Score: ${this.score}`;
    }
    
    private scrollingBackground() {
        this.bgPosition -= 2
        const bg = document.querySelector('background')! as HTMLElement
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`
    }
       
    private pauseClicked() {
        const pauseButton = document.getElementById("pause")! as HTMLElement
        this.pause = !this.pause
        if(this.pause){
            pauseButton.innerText = "Keep going"
        } else {
            pauseButton.innerText = "Pause"    
            this.gameLoop()
        }
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

} 

