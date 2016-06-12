import {IDisplayObject} from '../contracts'

class DisplayObject implements IDisplayObject {
    key: string;
    x: number;
    y: number;
    width: number;
    height: number;
}

export {DisplayObject}