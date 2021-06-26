import { Gameobject } from "./gameobject.js";
import { Gamescreen } from "./gamescreen.js";

export class Player extends Gameobject {

    private horizontalSpeed: number = 0
    private health: number
    private jumping : boolean = false
    private falling: boolean = false
    private gamescreen : Gamescreen

    constructor(gamescreen: Gamescreen) {
        super("player");
        this.gamescreen = gamescreen
        // Add the event listeners to the window for the keyboard events
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUpHandler(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDownHandler(e))
    
        // generate x and y values
        this.x = Math.floor(Math.random() * (window.innerWidth - this.element.clientWidth))
        this.y = 550
        
        this.health = 5    
    }
    
    update() {
        // Add the vertical speed to the y-value
        this.x += this.horizontalSpeed
        if (this.jumping){
            if(this.y > 450){
                this.y -= 4
                if(this.element.classList.contains("left")){
                    this.element.classList.add("jumpingLeft")
                    this.element.classList.remove("left", "right", "jumpingRight")
                } else if(this.element.classList.contains("right")){
                    this.element.classList.add("jumpingRight")
                    this.element.classList.remove("right", "left", "jumpingLeft")
                }
            }else{
                this.falling = true
                this.jumping = false
            }
        }
        if(this.falling){
            if(this.y < 550){
                this.y += 2
            }else{
                this.falling = false
                this.jumping = false
            }
        }

        if(this.x + this.element.clientWidth < 0 || this.x + this.element.clientWidth > 1600) {
            this.gamescreen.gameOver = true
        }

        super.update();
    }

    onKeyDownHandler(e: KeyboardEvent): any {
        switch (e.key) {
            case "a":
            case "ArrowLeft" :
            if(!this.jumping){
                this.horizontalSpeed = -5
                this.element.classList.add("left")
                this.element.classList.remove("right", "jumpingRight", "JumpingLeft")
            
            }    
                break
            case "d":
            case "ArrowRight":
            if (!this.jumping) {
                this.horizontalSpeed = 5
                this.element.classList.add("right")
                this.element.classList.remove("left", "jumpingLeft", "jumpingRight")
            }
                break
            case " ":
                if(this.y == 550){
                    this.jumping = true;
                }
        }
    }
    onKeyUpHandler(e: KeyboardEvent): any {
        switch (e.key) {
            case "a":
            case "d":
            case "ArrowLeft" :
            case "ArrowRight":
                this.horizontalSpeed = 0
                break
        }
    }

    hit(){
        this.health --
        this.element.style.filter = "grayscale(100%)"

        if(this.health <= 0){
            this.gamescreen.gameOver = true
            }
        
        setTimeout(()=> {this.element.style.filter = "grayscale(0%)"},500) 
    }

    public reset(){
        this.health = 5
    }
}