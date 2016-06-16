import {ISize, ICoordinate, IStyle} from './contracts'
import Rectangle from '../objects/Rectangle'

interface IArea {
    display(): void,
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void,
    addRectangle(key: string, coordinates: ICoordinate, size: ISize): Rectangle
}

export {IArea}