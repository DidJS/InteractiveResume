import {ISize, ICoordinate, IStyle, IAddObject} from '../contracts'

interface IArea {
    display(): void,
    setBackgroundColor(color: string): void,
    add: IAddObject
}

export {IArea}