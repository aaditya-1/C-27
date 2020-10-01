class Ball{
    constructor(x,y){
        var opt={
            isStatic:false,
            'restitution':1,
            // 'mass':1.2,
            'friction':1.0,
            'density':1.3
        }
        // var r = this.r
        this.body = Bodies.circle(x,y,50/2,opt);
        // this.r = r;

        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(0,0,50,50);
        pop();
    }
}