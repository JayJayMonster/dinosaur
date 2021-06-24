export class Gameobject {
    constructor(name) {
        const gameElement = document.querySelector('background');
        this.element = document.createElement(name);
        gameElement.appendChild(this.element);
    }
    getRect() {
        return this.element.getBoundingClientRect();
    }
    update() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    remove() {
        this.element.remove();
    }
}
//# sourceMappingURL=gameobject.js.map