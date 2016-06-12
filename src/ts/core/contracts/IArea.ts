import { ITextObject, ISize, ICoordinate, IStyle } from '../contracts'

interface IArea {
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

export {IArea}