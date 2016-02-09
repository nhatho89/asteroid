var Asteroid = require('./asteroid');
var MovingObject = require('./movingObject');
var Game = require('./game');
window.movingObject = new MovingObject({pos: [Math.floor(Math.random() * 500),
   Math.floor(Math.random() * 500)],
   vel: [5,5],
   radius: 10,
   color: "black"
 });

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
movingObject.draw(ctx); //chill no error bro


var game = new Game.addAsteroids(5);
// var Asteroid = require('./asteroid');
// window.asteroid = new Asteroid();
// window.hello = function() {
//   console.log("hello");
// };
// window.hello = function() {
//   console.log("hello");
// };
// console.log("hello world");


// require('./bullet');
//
//
// require('./gameView');
//
// require('./ship');
//
// require('./utils');
