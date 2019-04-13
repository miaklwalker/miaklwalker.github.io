class Collectible {
    position:Vector;
    velocity:Vector;
    effect:string;
    height:number;
    constructor(){
        this.position = new Vector();
        this.velocity = new Vector(0,3);
        this.effect   = "";
        this.height   = 0
}
show(brick:Brick){
    this.position.x =brick.position.x+(brick.position.x-brick.width/4);
    this.position.y =brick.position.y
    ctx.fillRect(this.position.x,this.position.y,brick.width/4,brick.height*.75); 
}
fall(paddle:Paddle){
    this.position.add(this.velocity);
    if(this.position.x>paddle.position.x && this.position.x<paddle.position.x+paddle.width){
        if(this.position.y +this.height >= paddle.position.y ){
            //get power;
        }
    }
}
}