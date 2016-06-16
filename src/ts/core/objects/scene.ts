import {ITextObject, ISize, ICoordinate, IStyle, IScene} from '../contracts/contracts'
import * as textObject from './textObject'

const createScene = (name: string): IScene => {
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

    const getBackgroundColor = (): string => {
        return areaColor;
    };

    const getName = (): string => {
        return name;
    };

    return {
        getName: getName,
        getBackgroundColor: getBackgroundColor,
        addText: registerText,
        setBackgroundColor: setBackgroundColor,
        getTextObjects: getTextObjects
    };
};

export {createScene as createScene}

