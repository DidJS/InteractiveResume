import * as renderer from './core/renderer'
import { ITextObject, ISize, ICoordinate, IStyle } from './core/contracts'
import * as textObject from './core/objects/textObject'

interface IArea {
    addText(key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void,
    setBackgroundColor(color: string): void
}

const areas = {};

const addAndReturnArea = (name: string): IArea => {
    const areaRenderer = renderer.createRenderer(name);
    Object.defineProperty(areas, name, areaRenderer);

    const registerAndRenderText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void => {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);

        areaRenderer.renderText(obj);
    };

    return {
        addText: registerAndRenderText,
        setBackgroundColor: areaRenderer.setBackgroundColor
    }
};

export { addAndReturnArea as createArea }