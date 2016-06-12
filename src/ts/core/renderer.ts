import * as canvas from './canvasInitializer';
import { ICanvas, IRenderer, ITextObject, IArea } from './contracts';

const createRenderer = (canvasName: string): IRenderer => {
    const canvasInfo = canvas.initCanvas(canvasName);

    const renderText = (textObject: ITextObject): void => {
        canvasInfo.context.font = textObject.font;
        canvasInfo.context.fillStyle = textObject.style;
        canvasInfo.context.fillText(textObject.text, textObject.x, textObject.y);
    };

    const setBackgroundColor = (color: string): void => {
        canvasInfo.context.fillStyle = color;
        canvasInfo.context.fillRect(0, 0, canvasInfo.canvas.width, canvasInfo.canvas.height);
    };

    const render = (area: IArea): void => {
        const textObjects = area.getTextObjects();
        const length = textObjects.length;

        setBackgroundColor(area.getColor());

        for (let i = 0; i < length; i++) {
            renderText(textObjects[i]);
        }
    };

    return {
        render: render
    };
};

export { createRenderer }
