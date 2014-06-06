var nature = require('./nature');

var m1 = new nature.Mover(),
    m2 = new nature.Mover();

var wind = new nature.Vec2(1,0);

m1.applyForce(wind);
m2.applyForce(wind);

console.log(wind);
console.log(m1);
console.log(m2);