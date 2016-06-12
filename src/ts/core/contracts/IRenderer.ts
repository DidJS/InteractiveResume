import { ITextObject } from './ITextObject';

interface IRenderer {
    renderText(textObject: ITextObject): void,
    setBackgroundColor(color: string): void
}

export { IRenderer }