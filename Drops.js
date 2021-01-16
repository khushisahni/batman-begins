class Drops{
    constructor(x,y){
        var options = {
            restitution: 0.4,
            friction: 0.001
        }
        this.radius = 5;
        this.rain = Bodies.circle(x,y,5,options);
      //  this.color = color(random(0,255),random(0,255),random(0,255));
        World.add (world,this.rain);
    }
    /*display(){  
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        noStroke();
        fill(blue);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }*/

    updateY(){
        if(this.rain.position.y > height){
            Matter.Body.setPosition(this.rain,{x: random(0,400),y: random(0,400)});
        }
    }

    showDrop(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}