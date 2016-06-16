import * as areaCreator from './core/areaCreator';

const areaPlayground = areaCreator.create('playground_canvas');
const areaActions = areaCreator.create('actions_canvas');
const areaPortrait = areaCreator.create('portrait_canvas')

areaPortrait.setBackgroundColor("blue");
areaActions.setBackgroundColor("black");

areaActions.addText('look','Regarder', {x: 20, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
areaActions.addText('use', 'Utiliser', {x: 120, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
areaActions.addText('open', 'Ouvrir', {x: 200, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});

areaPlayground.addText('toto', "TTTTOOOOOTTTTOOO", {x: 50, y: 50}, {width: 100, height: 100}, {font: "30px serif", style: "red"});

areaPlayground.play();
areaActions.play();
areaPortrait.play();