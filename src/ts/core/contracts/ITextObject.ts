import { IDisplayObject } from './IDisplayObject';
import { IStyle } from './IStyle';

interface ITextObject extends IDisplayObject, IStyle {
    text: string
}

export { ITextObject }