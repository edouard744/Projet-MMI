import {Circle} from "./Circle";
import {Column} from "./Column";
import {Settings} from "./Settings";
export class Canvas {
    public circle: Circle[];
    private readonly ctx: CanvasRenderingContext2D;
    private readonly canvas: HTMLCanvasElement;
    private column: Column[];
    private startPositionCirlce: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.circle = [];
        this.column = []
        this.canvas
        this.draw();
        this.addEventListeners();
        this.update();
        this.resizeCanvas();
        this.startPositionCirlce= 150;
    }
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

    }
    addEventListeners() {
        window.addEventListener('resize', () => {
            this.resizeCanvas()
        })
    }

    draw() {
        this.canvas.width = window.innerWidth / 1.2;
        this.canvas.height = window.innerHeight / 1.2;
        this.circle.forEach((circle: Circle) => {
            circle.draw();
        })
        this.column.forEach((column: Column) => {
            column.draw();
        })

    }
    reset() {
        this.circle = [];
        for (let i = 1; i < 2; i++) {
            this.circle.push(new Circle(this.ctx,this.canvas,150*i,this.circle));
        }
    }

    update() {
        for (let i = 1 ;i< 5; i++) {
            this.column.push(new Column(i*300,this.ctx, this.canvas,this.column))
            console.log(this.column)
        }
        for (let i = 1 ;i< Settings.circle.maxCount; i++) {

            this.circle.push(new Circle(this.ctx, this.canvas,i*300 +100,this.circle))
            console.log(this.circle)

        }
    }
}
