import {ITextObject, ISize, ICoordinate, IStyle, IScene} from '../contracts/contracts'
import * as textObject from './textObject'

class Scene implements IScene {
    private name: string;
    private textObjects: ITextObject[];
    private areaColor = 'white';

    constructor(name: string) {
        this.name = name;
        this.textObjects = [];
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

    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);
        this.textObjects.push(obj);
    };

    setBackgroundColor(color: string): void {
        this.areaColor = color;
    };
}


export default Scene

