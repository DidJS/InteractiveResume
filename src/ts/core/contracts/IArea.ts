import { ITextObject, ISize, ICoordinate, IStyle, ICanvas } from '../contracts'

interface IArea {
    getColor(): string,
    getTextObjects(): ITextObject[],
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

export {IArea}