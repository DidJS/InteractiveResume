import {ISceneRenderer, IScene, ICoordinate, ISize, IStyle, IArea, ITextObject, IAddObject, ICollider} from '../contracts'
import Scene from './Scene'
import SceneRenderer from './SceneRenderer'
import Rectangle from './Rectangle'
import Mouse from './Mouse'

class Area implements IArea {
    private scene: IScene;
    private renderer: ISceneRenderer;

    add: IAddObject;
    collider: ICollider;

    mouse: Mouse;

    private createSceneObjects(name: string) {
        this.scene = new Scene(name);
        this.renderer = new SceneRenderer(name);
    }

    private createAddObject(): IAddObject {
        return {
            text: (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject => {
                return this.scene.addText(key, text, coordinates, size, style);
            },
            rectangle: (key: string, coordinates: ICoordinate, size: ISize): Rectangle => {
                return this.scene.addRectangle(key, coordinates, size);
            }
        };
    }

    constructor(name: string) {
        this.createSceneObjects(name);
        this.add = this.createAddObject();
        this.mouse = new Mouse(this, this.renderer.getCanvasInfo());
    }

    display(): void {
        this.renderer.render(this.scene);
    };

    setBackgroundColor(color: string) {
        this.scene.setBackgroundColor(color);
    };
}

export default Area;