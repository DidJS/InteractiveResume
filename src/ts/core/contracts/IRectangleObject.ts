import {ISize, ICoordinate, IIdentityObject} from '../contracts'

interface IRectangleObject extends IIdentityObject, ISize, ICoordinate {
}

export { IRectangleObject }