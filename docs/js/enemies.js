export class Enemies {
    constructor(tagName) {
        this.spawn(tagName);
        console.log("Enemies are created");
    }
    getRect() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    spawn(tagName) {
        this.div = document.createElement(tagName);
        document.body.appendChild(this.div);
    }
}
//# sourceMappingURL=enemies.js.map