class Dustbin {
  constructor(x, y, width, height) {
    var options = {
        isStatic:true
    }
    this.leftRec = Bodies.rectangle(x-width/2, y-width/2, height,  width, options);
    this.rightRec = Bodies.rectangle(x+width/2, y-width/2, height, width, options);
    this.bottomRec = Bodies.rectangle(x, y, width, height, options);
    this.width = 150;
    this.height = 200;
    
    World.add(world, this.leftRec);
    World.add(world, this.rightRec);
    World.add(world, this.bottomRec);

    this.image = loadImage("images/dustbin.png");
  }
  display(){
    

    push();
    
    imageMode(CENTER);
       fill("green");
    //rect(this.leftRec.position.x,this.leftRec.position.y , this.height, this.width);
    imageMode(CENTER);
       fill("green");
    //rect(this.rightRec.position.x,this.rightRec.position.y ,this.height, this.width);
    imageMode(CENTER);
       fill("green");
    image(this.image,1230,this.leftRec.position.y, this.width, this.height);
    pop();
  }
};
