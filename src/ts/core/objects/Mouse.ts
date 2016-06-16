import {IRectangleObject, IArea, ICanvas} from '../contracts'

interface IMousePosition {
    x: number;
    y: number;
}

class Mouse {
    private area: IArea;
    private canvasInfo: ICanvas

    constructor(area: IArea, canvasInfo: ICanvas) {
        this.area = area;
        this.canvasInfo = canvasInfo;
    }

    private isColliding(rectangleObject: IRectangleObject): boolean {
        return false;
    }

    private getMousePos(evt: MouseEvent): IMousePosition {
        var rect = this.canvasInfo.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    click(rectangleObject: IRectangleObject, callback: any) {
        this.canvasInfo.canvas.addEventListener('click', (ev: MouseEvent) => {
            const mousePos = this.getMousePos(ev);
            console.log(this.canvasInfo.canvas.id, mousePos.x, mousePos.y);
            if (rectangleObject.x <= mousePos.x && rectangleObject.x + rectangleObject.width >= mousePos.x &&
                rectangleObject.y <= mousePos.y && rectangleObject.y + rectangleObject.height >= mousePos.y) {
                    callback();
                }
        });


    }
}

export default Mouse;