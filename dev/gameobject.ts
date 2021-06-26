export class Gameobject {

   protected x : number
   protected y : number
   protected element : HTMLElement

   constructor(name:string){
    const gameElement = document.querySelector('background') as HTMLElement
    this.element = document.createElement(name)
    gameElement.appendChild(this.element)
}

    public getRect(){
        return this.element.getBoundingClientRect();
    }

    public update(){
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    public remove(){
        this.element.remove();
    }
}