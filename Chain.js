class Chain{
    constructor(body1, body2){
        var options={
            bodyA: body1,
            bodyB: body2, 
            length: 10, 
            stiffness: 0.04, 
        }
        this.chain = Constraint.create(options); 
        World.add(world, this.chain); 
    }
    display(){
        var pointOne = this.chain.bodyA.position;
        var pointTwo = this.chain.bodyB.position;
        strokeWeight(3); 
        line(pointOne.x, pointOne.y, pointTwo.x, pointTwo.y); 
    }
}