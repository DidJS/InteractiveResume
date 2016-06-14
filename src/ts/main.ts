import World from './core/World';

const worldPlayground = new World('playground_canvas');
const worldActions = new World('actions_canvas');
const worldPortrait = new World('portrait_canvas')

worldPortrait.setBackgroundColor("blue");
worldActions.setBackgroundColor("black");

worldActions.addText('look','Regarder', {x: 20, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
worldActions.addText('use', 'Utiliser', {x: 120, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
worldActions.addText('open', 'Ouvrir', {x: 200, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});

worldPlayground.addText('toto', "TTTTOOOOOTTTTOOO", {x: 50, y: 50}, {width: 100, height: 100}, {font: "30px serif", style: "red"});

worldPlayground.play();
worldActions.play();
worldPortrait.play();