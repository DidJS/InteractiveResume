import { IRectangleObject, IStyle } from '../contracts'

interface ITextObject extends IRectangleObject, IStyle {
    text: string
}

export default ITextObject;