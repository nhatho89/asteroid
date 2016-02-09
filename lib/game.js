var Asteroid = require('./asteroid');

var Game = Asteroid.Game = function(xDim, yDim, numAsteroids) {
  this.xDim = xDim;
  this.yDim = yDim;
  var ast = this.addAsteroids;
  for (var i=0; i < ast.length; i++){
    ast[i].draw();
  }
};

Game.prototype.addAsteroids = function(numAsteroids) {
  this.asteroids = [];
  for (var i = 0; i < numAsteroids; i++) {
    this.asteroids.push(new Asteroid());
  }
  return this.asteroids;
};

Game.prototype.start = function(canvas) {
  var ctx = canvas.getContext("2d");
};
