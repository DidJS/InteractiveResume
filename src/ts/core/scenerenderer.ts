import * as canvas from './canvasInitializer';
import { ICanvas, ISceneRenderer, ITextObject, IScene } from './contracts';

const createRenderer = (canvasName: string): ISceneRenderer => {
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

    const render = (scene: IScene): void => {
        const textObjects = scene.getTextObjects();
        const length = textObjects.length;

        setBackgroundColor(scene.getBackgroundColor());

        for (let i = 0; i < length; i++) {
            renderText(textObjects[i]);
        }
    };

    return {
        render: render
    };
};

export { createRenderer }
