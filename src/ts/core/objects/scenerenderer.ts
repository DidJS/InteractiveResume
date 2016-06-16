import * as canvas from '../canvasInitializer';
import { ICanvas, ISceneRenderer, ITextObject, IScene, IRectangleObject } from '../contracts';

class SceneRenderer implements ISceneRenderer {
    private canvasInfo: ICanvas;

    constructor(canvasName: string) {
        this.canvasInfo = canvas.initCanvas(canvasName);
    }

    private renderText(textObject: ITextObject): void {
        this.canvasInfo.context.font = textObject.font;
        this.canvasInfo.context.fillStyle = textObject.style;
        this.canvasInfo.context.fillText(textObject.text, textObject.x, textObject.y);
    };

    private renderDisplayObject(displayObject: IRectangleObject): void {
        this.canvasInfo.context.rect(displayObject.x, displayObject.y, displayObject.width, displayObject.height);
        this.canvasInfo.context.stroke();
    }

    private setBackgroundColor(color: string): void {
        this.canvasInfo.context.fillStyle = color;
        this.canvasInfo.context.fillRect(0, 0, this.canvasInfo.canvas.width, this.canvasInfo.canvas.height);
    };

    render(scene: IScene): void {
        const textObjects = scene.getTextObjects();
        const displayObjects = scene.getDisplayObjects();
        const lengthTextObjects = textObjects.length;
        const lengthDisplayObjects = displayObjects.length;

        this.setBackgroundColor(scene.getBackgroundColor());

        for (let i = 0; i < lengthTextObjects; i++) {
            this.renderText(textObjects[i]);
        }

        for (let i = 0; i < lengthDisplayObjects; i++) {
            this.renderDisplayObject(displayObjects[i]);
        }
    };
}

export default SceneRenderer
