import {ISize, ICoordinate, IStyle} from './contracts'

interface IArea {
    play(): void,
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

export {IArea}