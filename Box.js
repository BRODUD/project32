class Block{
  constructor(x, y) {
      var options = {
          'restitution':0.4,
          'friction':0,
          'density':0.004
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      
     /* var pos = this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            fill("orange");
            stroke("blue");
            rect(0,0, this.width, this.height);
            pop();*/
     if(this.body.speed < 7){
        var pos = this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("red");
            stroke("blue");
            rect(0,0, this.width, this.height);
            pop();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visibility = this.Visibility - 5;
       tint(255,this.Visibility);
         pop();
       }
    
    }
score(){
  if (this.Visibility < 0 && this.Visibility > -105){
    score ++;
  }
}
  }
