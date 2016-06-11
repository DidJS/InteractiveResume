import { ITextOption } from './ITextOption';

interface IRenderer {
    renderText(text: string, options?: ITextOption): void,
    setBackgroundColor(color: string): void
}

export { IRenderer }