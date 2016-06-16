import {IDisplayObject} from '../contracts/contracts'

class Rectangle implements IDisplayObject {
    key: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

export default Rectangle;