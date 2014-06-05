function Vec2(x, y, z) {

  this.x = x || 0;
  this.y = y || 0;

};

Vec2.prototype.addVec = function(vec) {

  this.x += vec.x || 0;
  this.y += vec.y || 0;

};

Vec2.prototype.addScalar = function(scalar) {

  this.x += scalar;
  this.y += scalar;

};

Vec2.prototype.subVec = function(vec) {

  this.x -= vec.x || 0;
  this.y -= vec.y || 0;

};

Vec2.prototype.subScalar = function(scalar) {

  this.x -= scalar;
  this.y -= scalar;

};

Vec2.prototype.multVec = function(vec) {

  this.x *= vec.x;
  this.y *= vec.y;

};

Vec2.prototype.multScalar = function(scalar) {

  this.x *= scalar;
  this.y *= scalar;

};

Vec2.prototype.divVec = function(vec) {

  if (vec.x === 0 || vec.y === 0) 
    return;
  
  this.x /= vec.x;
  this.y /= vec.y;

};

Vec2.prototype.divScalar = function(scalar) {

  if (scalar === 0)
    return;

  this.x /= scalar;
  this.y /= scalar;

};

Vec2.prototype.mag = (function() {

  return this.magnitude = Math.sqrt(this.x * this.x + this.y * this.y);

})();

Vec2.prototype.normalize = function() {

  // this.x = this.x / (this.magnitude || (this.magnitude = this.mag()));
  if (mag !== 0) {
    this.x = this.x / this.magnitude; 
    this.y = this.y / this.magnitude;
  }

};







function Mover(location, velocity, acceleration) {
  
  this.location     = location || new Vec2();
  this.velocity     = velocity || new Vec2();
  this.acceleration = acceleration || new Vec2();

};

Mover.prototype.applyForce = function(vec) {

  this.acceleration.addVec(vec);

};

Mover.prototype.update = function() {
  
  this.velocity.addVec(this.acceleration);
  this.location.addVec(this.velocity);

};