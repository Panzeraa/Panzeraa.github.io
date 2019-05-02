class AnimMort {
  constructor(x, y, angle, v) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.exist = 0;
    this.v = v;
    
  }
  draw(ctx) {
    // console.log(this.x + " : " + this.y);
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = "darkred";
    ctx.fillRect(0,0,1,30);
    ctx.restore();
  }
  move() {
      this.x += this.v * Math.sin(this.angle);
      this.y -= this.v * Math.cos(this.angle);
      this.exist ++;
  }
}