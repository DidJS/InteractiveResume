import {IRectangleObject, ICoordinate, ISize} from '../contracts'

class Rectangle implements IRectangleObject {
    key: string;
    x: number;
    y: number;
    width: number;
    height: number;

    constructor(key: string, coordinates: ICoordinate, size: ISize) {
        this.key = key;
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.width = size.width;
        this.height = size.height;
    }
}

export default Rectangle;