import {ITextObject, ISize, ICoordinate, IStyle, IScene, IRectangleObject} from '../contracts'
import Text from './Text'
import Rectangle from './Rectangle'

class Scene implements IScene {
    private name: string;
    private textObjects: ITextObject[];
    private displayObjects: IRectangleObject[];
    private areaColor = 'white';

    constructor(name: string) {
        this.name = name;
        this.textObjects = [];
        this.displayObjects = [];
    }

    getName(): string {
        return name;
    };

    getBackgroundColor(): string {
        return this.areaColor;
    };

    getTextObjects(): ITextObject[] {
        return this.textObjects;
    };

    getDisplayObjects(): IRectangleObject[] {
        return this.displayObjects;
    };

    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject {
        const textObject: ITextObject = new Text(key, text, coordinates, size, style);
        this.textObjects.push(textObject);

        return textObject;
    };

    addRectangle(key: string, coordinates: ICoordinate, size: ISize): IRectangleObject {
        const rect = new Rectangle(key, coordinates, size);
        this.displayObjects.push(rect);

        return rect;
    };

    setBackgroundColor(color: string): void {
        this.areaColor = color;
    };
}


export default Scene

