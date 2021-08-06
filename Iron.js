class Iron{
    constructor(x,y){
     var options = {
         restitution: 0.8,
         friction:3,
         density:30

     }

    this.body = Bodies.rectangle(x,y,100,20,options);
    World.add(world,this.body);
    this.width = 80;
    this.height = 40;

    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("grey");
        rect(0,0,this.width,this.height);
        pop()
    }
}