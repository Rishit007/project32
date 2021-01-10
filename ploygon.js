class Ploygon{
    constructor(x, y) {
     /*   var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }*/
        this.body = Bodies.circle(x, y, 30); 
        this.image = loadImage("ploygon.png");
        World.add(world, this.body);
      }
      display(){
       // translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 30, 30);
      }
}