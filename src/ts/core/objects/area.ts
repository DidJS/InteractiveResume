import * as renderer from '../renderer'
import { ITextObject, ISize, ICoordinate, IStyle, IArea } from '../contracts'
import * as textObject from './textObject'

const createArea = (name: string): IArea => {
    const areaRenderer = renderer.createRenderer(name);

    const registerAndRenderText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void => {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);

        areaRenderer.renderText(obj);
    };

    return {
        addText: registerAndRenderText,
        setBackgroundColor: areaRenderer.setBackgroundColor
    }
};

export {createArea as createArea}