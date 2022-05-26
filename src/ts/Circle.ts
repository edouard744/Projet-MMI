import {Shape} from "./Shape";
import {Settings} from "./Settings";
/*import {Column} from "./Column";*/

export class Circle extends Shape {
    private readonly position: number;
    private circle: Circle[];
    private startPositionCircle: number;

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, position: number, circle: Circle[]) {
        super(ctx, canvas, position);
        this.position = position;
        this.draw();
        this.animate();
        this.addEventListener();
        this.circle = circle;
        this.startPositionCircle=  this.verticalGap.min + Math.random() * (this.verticalGap.max - this.verticalGap.min);
        this.startposition= this.startPositionCircle;
        this.circleReset= this.startPositionCircle

    }

    draw() {
        /*super.draw();*/
        this.ctx.beginPath();
        this.ctx.fillStyle = "blue";
        this.ctx.arc(this.position, this.startposition, 75, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.closePath();
    }

    update() {
        this.startposition += this.circleSpeed;
        if (this.startposition > this.columnSize) {
            this.startposition = this.circleReset;
        }
        this.draw();
    }

    animate() {
        window.requestAnimationFrame(() => {
            this.animate();
        })
        this.update()
        this.ctx.clearRect(0,this.columnSize,this.canvas.width,this.canvas.height)
    }

    addEventListener() {
        window.addEventListener("keydown", (key: KeyboardEvent) => {
            if (this.startposition >= this.columnSize - this.radius && key.code === 'KeyW') {
                console.log('+300 points')
            } else if (this.startposition >= this.columnSize - this.radius * 2 && key.code === 'KeyW') {
                console.log('+100 points')
            } else if(this.startposition <= this.columnSize && key.code === 'KeyW') {
                console.log(' raté !')
            }

            /*this.startPositionCirlce += min + Math.random() * (max - min);*/
        })
    }
}
