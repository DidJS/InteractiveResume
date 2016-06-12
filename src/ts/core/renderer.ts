import * as canvas from './canvasInitializer';
import { ICanvas, IRenderer, ITextObject } from './contracts';

const createRenderer = (canvasName: string): IRenderer => {
    const canvasInfo = canvas.initCanvas(canvasName);
    const textObjects: ITextObject[] = [];

    const renderText = (textObject: ITextObject): void => {
        textObjects.push(Object.create(textObject));

        canvasInfo.context.font = textObject.font;
        canvasInfo.context.fillStyle = textObject.style;
        canvasInfo.context.fillText(textObject.text, textObject.x, textObject.y);
    };

    const setBackgroundColor = (color: string): void => {
        canvasInfo.context.fillStyle = color;
        canvasInfo.context.fillRect(0, 0, canvasInfo.canvas.width, canvasInfo.canvas.height);
    };

    return {
        renderText: renderText,
        setBackgroundColor: setBackgroundColor
    };
};

export { createRenderer }
