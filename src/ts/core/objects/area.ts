import * as renderer from '../renderer'
import { ITextObject, ISize, ICoordinate, IStyle, IArea, IDisplayObject } from '../contracts'
import * as textObject from './textObject'

const createArea = (name: string): IArea => {
    const textObjects: ITextObject[] = [];
    const areaRenderer = renderer.createRenderer(name);

    const registerAndRenderText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void => {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);
        textObjects.push(obj);
    };

    const render = (): void => {
        for (let i = 0; i < textObjects.length; i++) {
            areaRenderer.renderText(textObjects[i]);
        }
    };

    return {
        addText: registerAndRenderText,
        setBackgroundColor: areaRenderer.setBackgroundColor,
        render: render
    }
};

export {createArea as createArea}