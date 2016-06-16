import { ICanvas } from './contracts/contracts';

const initCanvas = (name: string): ICanvas => {
    var canvas = <HTMLCanvasElement>document.getElementById(name);
    var context = canvas.getContext("2d");

    return {
        canvas: canvas,
        context: context
    };
};

export { initCanvas }