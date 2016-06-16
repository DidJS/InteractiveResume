import IAddObject from './IAddObject'

interface IArea {
    display(): void,
    setBackgroundColor(color: string): void,
    add: IAddObject
}

export default IArea;