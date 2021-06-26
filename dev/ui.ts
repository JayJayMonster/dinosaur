export class Ui {

    private scoreElement: HTMLElement
    private pauseElement: HTMLElement
    private titleElement: HTMLElement
    private _score: number = 0
    private _pause: boolean = false
    private _music: HTMLAudioElement
     
    constructor() {
        
        const pause = document.getElementById("pause")! as HTMLElement
        this.pauseElement = pause
        this.pauseElement.classList.add("pause")
        this.pauseElement.innerHTML = "Pause"
        this.pauseElement.addEventListener("click", () => this.pauseClicked())
        
        const title = document.querySelector("gametitle")! as HTMLElement
        this.titleElement = title
        this.titleElement.innerHTML = "Dino dash"
        
        const score = document.querySelector("score")! as HTMLElement
        this.scoreElement = score
        this.scoreElement.innerText = `Score: ${this.score}`
        
        this.music = new Audio('./sounds/menu.wav')
        
        this.music.play();
        this.music.loop = true;
    }
    
    public update() {
        this.score++
        this.scoreElement.innerText = `Score: ${this.score}`;
    }
    
    private pauseClicked() {
        const pauseButton = document.getElementById("pause")! as HTMLElement
        this.pause = !this.pause
        if (this.pause) {
            pauseButton.innerText = "Keep going"
            this.music.pause()
        } else {
            pauseButton.innerText = "Pause"
            this.music.play()
        }
    }
    
    public get score(): number {
        return this._score
    }
    public set score(value: number) {
        this._score = value
    }
    
    public get pause(): boolean {
        return this._pause
    }
    public set pause(value: boolean) {
        this._pause = value
    }
    
    public get music(): HTMLAudioElement {
        return this._music
    }
    public set music(value: HTMLAudioElement) {
        this._music = value
    }
}