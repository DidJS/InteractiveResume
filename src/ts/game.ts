import * as area from './core/objects/area'
import {IArea} from './core/contracts'

const areas: IArea[] = [];

const addAndReturnArea = (name: string): IArea => {
    const areaObject = area.createArea(name);
    areas.push(areaObject);

    return areaObject;
};

const play = (): void => {

};

export {
    addAndReturnArea as createArea,
    play as play
}