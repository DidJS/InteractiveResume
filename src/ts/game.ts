import * as area from './core/objects/area'
import {IArea, IRenderer} from './core/contracts'
import * as renderer from './core/renderer'

interface IScene {
    render(): void
}

const scenes:IScene[] = [];

const addAndReturnArea = (name: string): IArea => {
    const areaObject = area.createArea(name);

    scenes.push({
        render: () => {
            const rendererObject = renderer.createRenderer(name);
            rendererObject.render(areaObject);
        }
    });

    return areaObject;
};

const play = (): void => {
    const length = scenes.length;
    for (var i = 0; i < length; i++) {
        scenes[i].render();
    }
};

export {
    addAndReturnArea as registerArea,
    play as play
}