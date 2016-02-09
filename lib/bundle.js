/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(1);
	var MovingObject = __webpack_require__(2);
	var Game = __webpack_require__(3);
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


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var MovingObject = __webpack_require__(2);

	var Asteroid = function () {
	  var location = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500)];
	  // MovingObject.call(
	  //   {
	  //     pos: location,
	  //     vel: [5,5],
	  //     radius: 10,
	  //     color: "black"
	  //   }
	  // );
	var movingObject = new MovingObject(
	    {
	      pos: location,
	      vel: [5,5],
	      radius: 10,
	      color: "black"
	    }
	  );
	};

	module.exports = Asteroid;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var MovingObject = function(params) {
	  this.pos = params.pos;
	  this.vel = params.vel;
	  this.radius = params.radius;
	  this.color = params.color;
	};

	MovingObject.prototype.draw = function(ctx) {
	  // draw a circle using appropriate radius
	  ctx.fillStyle = this.color;
	  ctx.beginPath(); //starts the drawing
	  ctx.arc(
	    this.pos[0],
	    this.pos[1],
	    this.radius,
	    0,
	    2 * Math.PI, /*  change bacl */
	    false
	  );
	  ctx.fill();
	};

	MovingObject.prototype.move = function() {
	  this.pos[0] += this.vel[0];
	  this.pos[1] += this.vel[1];
	  return this.pos;
	};

	module.exports = MovingObject;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Asteroid = __webpack_require__(1);

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


/***/ }
/******/ ]);