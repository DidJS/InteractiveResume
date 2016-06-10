interface ICanvas {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
}

interface IResumeCanvasInfo {
    playground: ICanvas
    actions: ICanvas
    portrait: ICanvas
}

export { ICanvas, IResumeCanvasInfo }