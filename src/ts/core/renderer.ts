import * as canvas from './canvasInitializer';
import { ICanvas, IRenderer } from './contracts';

const createRenderer = (canvasName: string): IRenderer => {
    console.log('creating renderer for', canvasName);
    const canvasInfo = canvas.initCanvas(canvasName);
    console.log(canvasInfo);

    const renderText = (text: string, x: number, y: number): void => {
        canvasInfo.context.fillText(text, x, y);
    };

    return {
        renderText: renderText
    };
};

export { createRenderer }
