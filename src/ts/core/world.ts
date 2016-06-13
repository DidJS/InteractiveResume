import {ISceneRenderer, IWorld} from './contracts'
import * as worldscene from './scene'
import * as scenerenderer from './scenerenderer'

const create = (name: string): IWorld => {
    const scene = worldscene.createScene(name);
    const renderer = scenerenderer.createRenderer(name);

    const play = (): void => {
        renderer.render(scene);
    };

    return {
        addText: scene.addText,
        setBackgroundColor: scene.setBackgroundColor,
        play: play
    };
};

export { create }