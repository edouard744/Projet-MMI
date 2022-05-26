import {Column} from "./Column";
import {Canvas} from './Canvas';
import {Circle} from "./Circle";
import {Controller} from "./Controller";

class Main {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    private canvas: Canvas;
    private column: Column;
    /*private circle: Circle;*/
    private controller: Controller;
    private maxColumns: number;

    constructor() {
        this.canvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
        this.ctx = this.canvasElement.getContext('2d');
        this.canvas = new Canvas(this.ctx, this.canvasElement);
       /* this.column = new Column(50, this.ctx, this.canvasElement);*/
        /*this.circle = new Circle(this.ctx, this.canvasElement, 150);*/
        /*this.controller = new Controller(this.ctx, this.canvasElement, 150);*/
    }

    /* animate(){
         if (4 < this.maxColumns) {
             this.bubbles.push(new Bubble(this.canvas.canvas, this.ctx, this.mousePosition));
         } else if (this.bubbles.length > this.maxBubble) {
             this.bubbles = this.bubbles.slice(0, this.maxBubble);
         }
     }*/
}

new Main;