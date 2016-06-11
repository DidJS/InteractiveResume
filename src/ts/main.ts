import * as game from './game';

const playgroundArea = game.createArea('playground_canvas');
const actionsArea = game.createArea('actions_canvas');
const portraitArea = game.createArea('portrait_canvas');


actionsArea.setBackgroundColor("black");
actionsArea.displayText('Regarder', {
    x: 20,
    y: 30,
    width: 60,
    height: 30,
    font: "20px serif",
    style: "blue"
});

actionsArea.displayText('Utiliser', {
    x: 120,
    y: 30,
    width: 60,
    height: 30,
    font: "20px serif",
    style: "blue"
});

actionsArea.displayText('Ouvrir', {
    x: 200,
    y: 30,
    width: 60,
    height: 30,
    font: "20px serif",
    style: "blue"
});