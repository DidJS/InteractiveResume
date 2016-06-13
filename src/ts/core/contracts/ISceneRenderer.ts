import { IScene } from './IScene';

interface ISceneRenderer {
    render(scene: IScene): void
}

export { ISceneRenderer }