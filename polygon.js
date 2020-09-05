class Polygon {
  constructor(x, y, width) {
    var options = {
        'restitution':0.8,
        'density':2.0,
    }
    this.body = Bodies.circle(x, y, width, options);
    this.width = width;
    this.image=loadImage("stone.png");
    
    World.add(world, this.body);
  }
    display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0, this.width+60, this.width+60);
    pop();
  }
};