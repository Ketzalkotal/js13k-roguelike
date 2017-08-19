var Ga = require('./ga')
var Plugins = require('./ga-plugins')

var g = ga(512, 512, setup, []);

var dungeon, player, treasure, enemies, chimes, exit,
    healthBar, message, gameScene, gameOverScene;

g.start();

function setup(){
	g.canvas.style.border = "1px blue dashed";
	g.backgroundColor = "white";

	g.state = play;
}

function play(){
}

function end() {
  gameScene.visible = false;
  gameOverScene.visible = true;
}
