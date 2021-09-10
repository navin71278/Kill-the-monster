class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.01,
      length: 250,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
    
  fly(){
    this.rope.bodyA=null;
  }

  launch(){
    this.rope.bodyA=bodyA;
  }


  display() {
   
  }
}
