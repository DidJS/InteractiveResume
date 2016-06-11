import * as renderer from './core/renderer'

interface IArea {
    displayText(text: string, x: number, y: number): void
}

const areas = {};

const addAndReturnArea = (name: string): IArea => {
    const areaRenderer = renderer.createRenderer(name);
    Object.defineProperty(areas, name, areaRenderer);

    return {
        displayText: areaRenderer.renderText
    }
}


export { addAndReturnArea as createArea }