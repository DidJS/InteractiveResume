import {ISceneRenderer, IScene, ICoordinate, ISize, IStyle, IArea} from '../contracts/contracts'
import Scene from './scene'
import SceneRenderer from './scenerenderer'

class Area implements IArea {
    scene: IScene;
    renderer: ISceneRenderer;

    constructor(name: string) {
        this.scene = new Scene(name);
        this.renderer = new SceneRenderer(name);
    }

    display(): void {
        this.renderer.render(this.scene);
    }

    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle) {
        this.scene.addText(key, text, coordinates, size, style);
    }

    setBackgroundColor(color: string) {
        this.scene.setBackgroundColor(color);
    }
}

export default Area;