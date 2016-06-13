import {ISize, ICoordinate, IStyle} from './core/contracts'

interface IWorld {
    play(): void,
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

export {IWorld}