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
