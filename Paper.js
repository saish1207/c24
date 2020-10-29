class Paper{
    constructor(x,y,radius){
        var potion = {
            isStatic:false,
            'restitution':0.5,
          'friction':1,
          'density':1.9
        }
        this.body = Bodies.circle(x,y,radius,potion);
        World.add(world,this.body);


    }
    display(){
        var pos = this.body.position
        fill("purple");
        ellipse(pos.x, pos.y, 55, 55);
    }
}