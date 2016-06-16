import IAddObject from './IAddObject'
import ICollider from './ICollider'

interface IArea {
    display(): void,
    setBackgroundColor(color: string): void,
    add: IAddObject,
    collider: ICollider
}

export default IArea;