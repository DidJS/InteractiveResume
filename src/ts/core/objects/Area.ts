import {ISceneRenderer, IScene, ICoordinate, ISize, IStyle, IArea} from '../contracts/contracts'
import Scene from './Scene'
import SceneRenderer from './SceneRenderer'
import Rectangle from './rectangle'

class Area implements IArea {
    scene: IScene;
    renderer: ISceneRenderer;

    constructor(name: string) {
        this.scene = new Scene(name);
        this.renderer = new SceneRenderer(name);
    }

    display(): void {
        this.renderer.render(this.scene);
    };

    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle) {
        this.scene.addText(key, text, coordinates, size, style);
    };

    setBackgroundColor(color: string) {
        this.scene.setBackgroundColor(color);
    };

    addRectangle(key: string, coordinates: ICoordinate, size: ISize): Rectangle {
        const rect = new Rectangle();
        rect.key = key;
        rect.x = coordinates.x;
        rect.y = coordinates.y;
        rect.width = size.width;
        rect.height = size.height;

        this.scene.addDisplayObject(rect);

        return rect;
    }
}

export default Area;