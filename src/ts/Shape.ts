export class Shape {
    protected ctx: CanvasRenderingContext2D
    protected canvas: HTMLCanvasElement;
    protected circleSize: number;
    protected circleSpeed: number;
    protected readonly columnPosition: number;
    protected circlePosition: number;
    protected circleHeight: number;
    protected columnSize: number;
    protected circleReset: number;
    protected ballNumber: any[];
    protected radius: number;
    protected startposition: number;
    protected verticalGap: { min: number; max: number };

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, position: number) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.circleSize = 30;
        this.circleSpeed = 15;
        this.radius= 100;
        this.columnSize = this.canvas.height;
        this.columnPosition = position;
        this.circleHeight = this.canvas.height / 8;
        this.circlePosition = this.columnPosition;
        this.verticalGap= {min:this.canvas.height/8 -1000 ,max: this.canvas.height/8-100}


    }


}