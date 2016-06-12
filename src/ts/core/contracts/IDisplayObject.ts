import {ISize} from './ISize'
import {ICoordinate} from './ICoordinate'

interface IDisplayObject extends ISize, ICoordinate {
    key: string
}

export { IDisplayObject }