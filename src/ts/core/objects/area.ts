import { ITextObject, ISize, ICoordinate, IStyle, IArea, IDisplayObject } from '../contracts'
import * as textObject from './textObject'

const createArea = (name: string): IArea => {
    const textObjects: ITextObject[] = [];
    let areaColor = "white";

    const registerText = (key: string, text: string, coordinates: ICoordinate, size: ISize, style: IStyle): void => {
        const obj: ITextObject = textObject.create(key, text, coordinates, size, style);
        textObjects.push(obj);
    };

    const getTextObjects = (): ITextObject[] => {
        return textObjects;
    };

    const setBackgroundColor = (color: string): void => {
        areaColor = color;
    };

    const getColor = (): string => {
        return areaColor;
    };

    return {
        getColor: getColor,
        addText: registerText,
        setBackgroundColor: setBackgroundColor,
        getTextObjects: getTextObjects
    }
};

export {createArea as createArea}