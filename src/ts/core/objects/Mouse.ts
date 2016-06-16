import {IRectangleObject, IArea, ICanvas} from '../contracts'

interface IMousePosition {
    x: number;
    y: number;
}

interface IMouseEvent {
    key: string,
    callback(): void,
    rectangleObject: IRectangleObject
}

class Mouse {
    private area: IArea;
    private canvasInfo: ICanvas;
    private events: IMouseEvent[];

    constructor(area: IArea, canvasInfo: ICanvas) {
        this.area = area;
        this.canvasInfo = canvasInfo;
        this.events = [];

        this.canvasInfo.canvas.addEventListener('click', (ev: MouseEvent) => {
            const mousePos = this.getMousePos(ev);
            console.log(this.canvasInfo.canvas.id, mousePos.x, mousePos.y, ev);
            const e = this.events.filter((event: any): boolean => {
                return event.key === ev.type;
            });

            if (!!e && e.length > 0) {
                if (e[0].rectangleObject.x <= mousePos.x && e[0].rectangleObject.x + e[0].rectangleObject.width >= mousePos.x &&
                    e[0].rectangleObject.y <= mousePos.y && e[0].rectangleObject.y + e[0].rectangleObject.height >= mousePos.y) {
                        e[0].callback();
                    }
            }
        });
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
        this.events.push({
            key: "click",
            callback: callback,
            rectangleObject: rectangleObject
        });
    }
}

export default Mouse;