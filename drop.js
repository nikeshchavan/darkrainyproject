class Drop{
    constructor(x,y){
        var option={
            friction:0.001,
            restitution:0.1
        }

        this.body=Bodies.circle(x,y,5,option);
        this.r=5;
        World.add(world,this.body);
        
    }
    update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        fill("blue");
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r);
    }
}