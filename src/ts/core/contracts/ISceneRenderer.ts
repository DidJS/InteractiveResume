import IScene from './IScene'
import ICanvas from './ICanvas'

interface ISceneRenderer {
    render(scene: IScene): void,
    getCanvasInfo(): ICanvas
}

export default ISceneRenderer;