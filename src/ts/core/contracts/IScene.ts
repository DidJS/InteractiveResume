import { ITextObject, ISize, ICoordinate, IStyle, IRectangleObject } from '../contracts'

interface IScene {
    getName(): string,
    getBackgroundColor(): string,
    getTextObjects(): ITextObject[],
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject,
    setBackgroundColor(color: string): void,
    getDisplayObjects(): IRectangleObject[],
    addRectangle(key: string, coordinates: ICoordinate, size: ISize): IRectangleObject
}

export {IScene}