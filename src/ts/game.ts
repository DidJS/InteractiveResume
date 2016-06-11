import * as renderer from './core/renderer'
import { ITextOption } from './core/contracts'

interface IArea {
    displayText(text: string, options?: ITextOption): void,
    setBackgroundColor(color: string): void
}

const areas = {};

const addAndReturnArea = (name: string): IArea => {
    const areaRenderer = renderer.createRenderer(name);
    Object.defineProperty(areas, name, areaRenderer);

    return {
        displayText: areaRenderer.renderText,
        setBackgroundColor: areaRenderer.setBackgroundColor
    }
}


export { addAndReturnArea as createArea }