import * as game from './game';

const playgroundArea = game.registerArea('playground_canvas');
const actionsArea = game.registerArea('actions_canvas');
const portraitArea = game.registerArea('portrait_canvas');

actionsArea.setBackgroundColor("black");
actionsArea.addText('look','Regarder',
    {x: 20,
    y: 30},
    {width: 60,
    height: 30},
    {font: "20px serif",
    style: "blue"
});

actionsArea.addText('use', 'Utiliser',
    {x: 120,
    y: 30},
    {width: 60,
    height: 30},
    {font: "20px serif",
    style: "blue"
});

actionsArea.addText('open', 'Ouvrir',
    {x: 200,
    y: 30},
    {width: 60,
    height: 30},
    {font: "20px serif",
    style: "blue"
});

game.play();