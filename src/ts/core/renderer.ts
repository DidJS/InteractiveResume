import * as canvas from './canvasInitializer';
import { ICanvas, IRenderer, ITextOption, ITextObject } from './contracts';

const createRenderer = (canvasName: string): IRenderer => {
    const canvasInfo = canvas.initCanvas(canvasName);
    const textObjects: ITextObject[] = [];

    const renderText = (text: string, options: ITextOption): void => {
        textObjects.push({
            text: text,
            options: options
        });

        canvasInfo.context.font = options.font;
        canvasInfo.context.fillStyle = options.style;
        canvasInfo.context.fillText(text, options.x, options.y);
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
