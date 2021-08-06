class Stone{
    constructor(x,y){
     var options = {
         restitution: 0.8,
         friction:0.9,
         density:1

     }

    this.body = Bodies.rectangle(x,y,80,70,options);
    World.add(world,this.body);
    this.width = 80;
    this.height = 70;

    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("darkblue");
        rect(0,0,this.width,this.height);
        pop()
    }
}