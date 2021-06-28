import { Astroid } from "./astroid.js";
import { Player } from "./player.js";
import { Rock } from "./rock.js";
import { Gameobject } from "./gameobject.js";
import { Ui } from "./ui.js";
export class Gamescreen extends Gameobject {
    constructor(game) {
        super("gamescreen");
        this.rock = [];
        this.astroid = [];
        this.bgPosition = 0;
        this.spawner = 0;
        this._gameOver = false;
        this.game = game;
        console.log("Game was created!");
        this.reset();
    }
    get gameOver() {
        return this._gameOver;
    }
    set gameOver(value) {
        this._gameOver = value;
    }
    reset() {
        this.player = new Player(this);
        this.ui = new Ui;
        for (let i = 0; i < (Math.random() * 5); i++) {
            this.astroid.push(new Astroid(this));
        }
        this.player.reset();
        this.ui.score = 0;
        this.gameOver = false;
        this.spawner = 0;
    }
    cleanScreen() {
        for (let a of this.astroid) {
            a.remove();
        }
        for (let r of this.rock) {
            r.remove();
        }
        this.astroid = [];
        this.rock = [];
        this.player.remove();
        this.remove();
        this.ui.music.pause();
    }
    update() {
        if (!this.ui.pause && !this.gameOver) {
            this.updateScreen();
        }
        if (this.gameOver) {
            this.cleanScreen();
            this.game.showEndScreen();
        }
    }
    updateScreen() {
        this.spawner++;
        if (this.spawner > 240) {
            this.spawner = 0;
            this.ui.update();
            this.rock.push(new Rock());
        }
        this.player.update();
        for (const astroid of this.astroid) {
            astroid.update();
            let dinoRect = this.player.getRect();
            let astroidRect = astroid.getRect();
            let hit = this.checkCollision(dinoRect, astroidRect);
            if (hit) {
                this.player.hit();
                astroid.remove();
            }
        }
        for (const rock of this.rock) {
            rock.update();
            let dinoRect = this.player.getRect();
            let rockRect = rock.getRect();
            let hit = this.checkCollision(dinoRect, rockRect);
            if (hit) {
                this.player.hit();
                rock.remove();
            }
        }
        this.scrollingBackground();
    }
    scrollingBackground() {
        this.bgPosition -= 2;
        const bg = document.querySelector('background');
        bg.style.backgroundPosition = `${this.bgPosition}px 0px`;
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=gamescreen.js.map