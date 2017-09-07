var lurenObj = function(){
    this.x=0;
    this.y=0;
    this.angle;
    this.lurenEye = new Image();
    this.lurenBody = new Image();
    this.lurenTail = new Image();
    
    this.lurenTailTimer = 0;
    this.lurenTailCount = 0;
    
    this.lurenEyeTimer = 0;
    this.lurenEyeCount = 0;
    this.lurenEyeInterval = 1000;
    
    this.lurenBodyTimer = 0;
    this.lurenBodyCount = 0;
    this.speed=0.96;
}

lurenObj.prototype.init = function(){
    this.x = -50;
    this.y = 0;
    this.angle = 0;
}

lurenObj.prototype.draw = function(){

    if(!pause){
		 lurenmove();
	eatluren();
	if(beat)
		{
		 this.x=0;
			this.y=0;
		}
	else{
		this.x = lerpDistance(luren_point_x, this.x, this.speed);    
    this.y = lerpDistance(luren_point_y, this.y, this.speed);
	}
	  
    
    //delta angle Math.atan2(y,x)
    var deltaY = luren_point_y - (this.y);
    var deltaX = luren_point_x - (this.x);
    var beta = Math.atan2(deltaY, deltaX) + Math.PI;
 
    //lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.8);
		
	}
    //lerp x, y angle                                                       
    
    
    this.lurenTailTimer += deltaTime;
    if(this.lurenTailTimer > 50){
        this.lurenTailCount = (this.lurenTailCount + 1) % 8;
        this.lurenTailTimer %= 50;
    }
    
    this.lurenEyeTimer += deltaTime;
    if(this.lurenEyeTimer > this.lurenEyeInterval){
        this.lurenEyeCount = (this.lurenEyeCount + 1) % 2;
        this.lurenEyeTimer %= this.lurenEyeInterval;
        if(this.lurenEyeCount == 0){
            this.lurenEyeInterval = Math.random()*1500 + 2000;
            //console.log(this.lurenEyeInterval);
        }else{
            this.lurenEyeInterval = 200;
        }
    }
    

    
    ctx1.save();
    ctx1.translate(this.x,this.y);
   ctx1.rotate(this.angle);
   
    
    var lurenTailCount = this.lurenTailCount;
    var lurenEyeCount = this.lurenEyeCount;
    var lurenBodyCount = this.lurenBodyCount;
    

   
       ctx1.drawImage(babyTail[lurenTailCount], 9.5, -15,51,51);
    ctx1.drawImage(babyBody[lurenBodyCount],-20.5, -16,51,51);
    ctx1.drawImage(babyEye[lurenEyeCount], -babyEye[lurenEyeCount].width*0.5+5, -babyEye[lurenEyeCount].height*0.5+10,10,10);
    ctx1.restore();
};