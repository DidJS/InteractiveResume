import { ITextObject, ISize, ICoordinate, IStyle } from '../contracts'

class Text implements ITextObject {
    key: string;
    text: string;
    x: number;
    y: number;
    height: number;
    width: number;
    font: string;
    style: string;

    constructor(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle) {
        this.key = key;
        this.text = text;
        this.x = coordinates.x;
        this.y = coordinates.y;
        this.width = size.width;
        this.height = size.height;
        this.font = style.font;
        this.style = style.style;
    }
}

const createText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject => {
    return {key: key, text: text, x: coordinates.x, y: coordinates.y, width: size.width, height: size.height, font: style.font, style: style.style};
}

export default Text;