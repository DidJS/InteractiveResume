import { ITextObject, ISize, ICoordinate, IStyle } from '../contracts'

const createText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): ITextObject => {
    return {key: key, text: text, x: coordinates.x, y: coordinates.y, width: size.width, height: size.height, font: style.font, style: style.style};
}

export {createText as create}