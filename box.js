class Box{ 
    constructor(x,y) { 
        var options ={ restitution:0.4, friction:0.7} 
        this.body = Bodies.rectangle(x,y,30,50,options); 
        this.width= 30; 
        this.height = 50;
        this.visiblity=255; 
        World.add(world,this.body); 
    } 
    
    display() { 
        var pos = this.body.position; 
        var angle = this.body.angle;
        
        if(this.body.speed<3){
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("red");
            rectMode(CENTER);  
            rect(0,0,this.width,this.height);
            pop();
        } 
        else{
            World.remove(world,this.body);
            push();
            this.visiblity= this.visiblity-5;
            fill(255,0,0,this.visiblity);
            stroke(0,this.visiblity);
            rect(pos.x,pos.y,30,50);
            pop();
        }
    }

    score(){
        if(this.visiblity<0 && this.visiblity>-5.025){
            score++;
          }
    }

}