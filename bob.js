class Bob   {
    constructor(x, y)   {
        var options = {
            'isStatic':false,
            'restitution':1,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.radius = 25;
        this.debug = true;

        World.add(world, this.body);    
    }
    display()   {
        push();
        fill("Magenta");
        circle(this.body.position.x, this.body.position.y, 50);
        pop();
    }
}