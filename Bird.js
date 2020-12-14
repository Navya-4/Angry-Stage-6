class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage ("sprites/smoke.png")
    this.path = [];
  }

  display() {
   var pos = this.body.position;

   super.display();
if (this.body.position.x > 220 && this.body.velocity.x > 9){
  
  var position = [pos.x,pos.y];
  this.path.push(position)

}
              //     0        1      2
   // this.path = [[x1,y1],[x2,y2],[x3,y3]]
for (var i = 0;i < this.path.length ; i++){
   image(this.smokeImage,this.path[i][0], this.path[i][1])
}
  }
}
