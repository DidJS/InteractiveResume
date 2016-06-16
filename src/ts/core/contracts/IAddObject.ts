import {ICoordinate, ISize, IStyle, ITextObject} from '../contracts'
import Rectangle from '../objects/Rectangle'

interface IAddObject {
    text(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject,
    rectangle(key: string, coordinates: ICoordinate, size: ISize): Rectangle
}

export default IAddObject;