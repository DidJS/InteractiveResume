import { ITextObject, ISize, ICoordinate, IStyle } from '../contracts'

interface IScene {
    getName(): string,
    getBackgroundColor(): string,
    getTextObjects(): ITextObject[],
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

export {IScene}