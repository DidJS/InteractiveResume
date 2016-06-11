import * as game from './game';

const playgroundArea = game.createArea('playground_canvas');
const actionsArea = game.createArea('actions_canvas');
const portraitArea = game.createArea('portrait_canvas');

actionsArea.displayText('Regarder', 10, 10);