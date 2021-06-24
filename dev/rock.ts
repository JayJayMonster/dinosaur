import { Gameobject } from "./gameobject.js";
import { Gamescreen } from "./gamescreen.js";

export class Rock extends Gameobject {

    protected screen : Gamescreen
    
    constructor(screen : Gamescreen) { 
        super("rock");
        this.screen = screen
        this.x = Math.floor(Math.random() * window.innerWidth) + window.innerWidth;
        this.y = 550;
    }

    public update(){
        this.x -= 3;
        super.update();

        if(this.x < -this.element.clientWidth){
            this.x = window.innerWidth;
        }
    }
}