import { ICanvas, IResumeCanvasInfo } from './contracts/canvas';


var initCanvases = (): IResumeCanvasInfo => {
    var canvasPlayground = <HTMLCanvasElement>document.getElementById("playground_canvas");
    var canvasActions = <HTMLCanvasElement>document.getElementById("actions_canvas");
    var canvasPortrait = <HTMLCanvasElement>document.getElementById("portrait_canvas");

    var playgroundContext = canvasPlayground.getContext("2d");
    var canvasContext = canvasActions.getContext("2d");
    var portraitContext = canvasPortrait.getContext("2d");

    var playground: ICanvas = {
        canvas: canvasPlayground,
        context: playgroundContext
    };

    var actions: ICanvas = {
        canvas: canvasActions,
        context: canvasContext
    };

    var portrait: ICanvas = {
        canvas: canvasPortrait,
        context: portraitContext
    };

    return {
        playground,
        actions,
        portrait
    };
};



export { initCanvases }