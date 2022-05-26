import {Shape} from "./Shape";
import {Circle} from "./Circle";
import {Canvas} from "./Canvas";
import {Column} from "./Column";
export class Controller extends Shape {
    private readonly position: number;


    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, position: number) {
        super(ctx, canvas, position);
        this.position = position;
        this.draw();
        this.animate()
        /*this.addEventListener();*/
    }

    draw() {
        /*super.draw();*/
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(29, 186, 215, 0.24)";
        this.ctx.arc(this.position, this.columnSize, this.radius, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();

    }

    animate() {
        window.requestAnimationFrame(() => {
            this.animate();
        })
        this.draw()
    }

    /*addEventListener() {
        window.addEventListener("keydown", (key: KeyboardEvent) => {
            if ( this.columnSize-this.radius && key.code === 'KeyW') {
                console.log('ça marche 1')

            }
        })
        window.addEventListener("keydown", (key: KeyboardEvent) => {
            if (this.circleHeight <= this.columnSize-this.radius && key.code === 'KeyE') {
                console.log('ça marche 2')
            }
        })
    }*/
}