import {ITextObject, ISize, ICoordinate, IStyle, IScene, IDisplayObject} from '../contracts/contracts'
import * as textObject from './textObject'

class Scene implements IScene {
    private name: string;
    private textObjects: ITextObject[];
    private displayObjects: IDisplayObject[];
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

    getDisplayObjects(): IDisplayObject[] {
        return this.displayObjects;
    }

    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);
        this.textObjects.push(obj);
    };

    addDisplayObject(displayObject: IDisplayObject): void {
        this.displayObjects.push(displayObject);
    };

    setBackgroundColor(color: string): void {
        this.areaColor = color;
    };
}


export default Scene

