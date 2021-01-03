class Ground{
  constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.image = loadImage("1234.jpg");
      World.add(world,this.body);
  }
  display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(111,111,111)
      rect(pos.x,pos.y,this.width,this.height);
  }
}