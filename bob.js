class Bob
{
    constructor(x,y,radius,options)
    {
          var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
      
        this.radius=radius
        this.body=  Matter.Bodies.circle(x,y,radius,options)
        World.add(world,Matter.Bodies.circle);
    }
    display()
    {
        var roc=this.body.position;
     
      
        ellipseMode(CENTER);
        fill("purple");
        ellipse(roc.x,roc.y,this.radius);
        
    }

}