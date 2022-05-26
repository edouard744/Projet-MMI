import {Shape} from "./Shape";

export class Column extends Shape {
    private readonly position: number
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;
    private column: Column[];

    constructor(position: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement,column: Column[]) {
        super(ctx, canvas, position);
        this.ctx = ctx;
        this.position = position;
        this.canvas = canvas;
        this.column= column
        this.draw();
        this.animate();
    }

    draw() {
        this.ctx.fillStyle = '#ccccff';
        this.ctx.fillRect(this.position, 0, 200, this.columnSize);
    }

    animate() {
        window.requestAnimationFrame(() => {
            this.animate();
        })
        this.draw()
    }
}