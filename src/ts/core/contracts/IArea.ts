import IAddObject from './IAddObject'
import ICollider from './ICollider'
import ICanvas from './ICanvas'
import Mouse from '../objects/Mouse'

interface IArea {
    display(): void,
    setBackgroundColor(color: string): void,
    add: IAddObject,
    collider: ICollider,
    mouse: Mouse
}

export default IArea;