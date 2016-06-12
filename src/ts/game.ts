import * as area from './core/objects/area'
import {IArea, IRenderer} from './core/contracts'
import * as renderer from './core/renderer'

interface IAreaInfo {
    area: IArea,
    renderer: IRenderer
}

const areaInfos:IAreaInfo[] = [];

const addAndReturnArea = (name: string): IArea => {
    const areaObject = area.createArea(name);
    const rendererObject = renderer.createRenderer(name);
    areaInfos.push({area: areaObject, renderer: rendererObject});

    return areaObject;
};

const play = (): void => {
    const length = areaInfos.length;
    for (var i = 0; i < length; i++) {
        areaInfos[i].renderer.render(areaInfos[i].area);
    }
};

export {
    addAndReturnArea as registerArea,
    play as play
}