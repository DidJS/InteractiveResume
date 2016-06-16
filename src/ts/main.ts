import * as areaCreator from './core/areaCreator';
import Rectangle from './core/objects/Rectangle';

const areaPlayground = areaCreator.create('playground_canvas');
const areaActions = areaCreator.create('actions_canvas');
const areaPortrait = areaCreator.create('portrait_canvas')

areaPortrait.setBackgroundColor("blue");
areaActions.setBackgroundColor("black");

areaActions.add.text('look','Regarder', {x: 20, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
areaActions.add.text('use', 'Utiliser', {x: 120, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});
areaActions.add.text('open', 'Ouvrir', {x: 200, y: 30}, {width: 60, height: 30}, {font: "20px serif", style: "blue"});

var rectangle1 = areaPlayground.add.rectangle('rectangle1', {x: 20, y: 30}, {width: 60, height: 30});

areaPlayground.display();
areaActions.display();
areaPortrait.display();