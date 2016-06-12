import * as area from './core/objects/area'
import {IArea} from './core/contracts'

const areas: IArea[] = [];

const addAndReturnArea = (name: string): IArea => {
    const areaObject = area.createArea(name);
    areas.push(areaObject);

    return areaObject;
};

const play = (): void => {
    for (var i = 0; i < areas.length; i++) {
        areas[i].render();
    }
};

export {
    addAndReturnArea as registerArea,
    play as play
}