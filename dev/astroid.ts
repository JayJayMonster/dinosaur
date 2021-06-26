import { Gameobject } from "./gameobject.js";
import { Gamescreen } from "./gamescreen.js";

export class Astroid extends Gameobject {
    
    private xSpeed: number
    private ySpeed: number
    public gamescreen : Gamescreen
    
    constructor(gamescreen : Gamescreen) {
        super("astroid");
        this.gamescreen = gamescreen
              this.x = Math.random()*window.innerWidth;
              this.y = 270-Math.random()*30;
              this.xSpeed = 2;
              this.ySpeed = 2;
    }

    public update() {
        this.y += this.ySpeed;
        this.x -= this.xSpeed;
        
        if(this.y + this.element.clientHeight > 600) {
            // Place the astroid on the right side outside the gamescreen
            this.y = -70;
            // Generate a random x-value
            this.x = 300 + Math.floor(Math.random() * (window.innerWidth - this.element.clientWidth))
        }
        super.update();
    }
}