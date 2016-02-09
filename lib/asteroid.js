var MovingObject = require('./movingObject');

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
