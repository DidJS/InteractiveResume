import {ISceneRenderer, IScene, ICoordinate, ISize, IStyle, IArea} from '../contracts/contracts'
import * as worldscene from './scene'
import * as scenerenderer from './scenerenderer'

class Area implements IArea {
    scene: IScene;
    renderer: ISceneRenderer;

    constructor(name: string) {
        this.scene = worldscene.createScene(name);
        this.renderer = scenerenderer.createRenderer(name);
    }

    play(): void {
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