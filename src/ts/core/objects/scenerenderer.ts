import * as canvas from '../canvasInitializer';
import { ICanvas, ISceneRenderer, ITextObject, IScene } from '../contracts/contracts';

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

    private setBackgroundColor(color: string): void {
        this.canvasInfo.context.fillStyle = color;
        this.canvasInfo.context.fillRect(0, 0, this.canvasInfo.canvas.width, this.canvasInfo.canvas.height);
    };

    render(scene: IScene): void {
        const textObjects = scene.getTextObjects();
        const length = textObjects.length;

        this.setBackgroundColor(scene.getBackgroundColor());

        for (let i = 0; i < length; i++) {
            this.renderText(textObjects[i]);
        }
    };
}

export default SceneRenderer
