var dataObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.alpha = 0;
}

dataObj.prototype.reset = function(){
    this.double = 1;
    this.fruitNum = 0;
}

dataObj.prototype.draw = function(){
    var w = canWidth;
    var h = canHeight;
    
    //ctx1.save();
    ctx1.shadowBlur = 10; 
    ctx1.shadowColor = "white";
    ctx1.textAlign = "center";
    //ctx1.fillText("num " + this.fruitNum, w*0.5, h-50);
    //ctx1.fillText("double " + this.double,  w*0.5, h-80);

    
    if(this.gameOver){
        ctx1.save();
        this.alpha += deltaTime * 0.0004;
        if(this.alpha > 0.5){
            this.alpha = 0.5;
        }
        ctx1.font = "40px 微软雅黑";
        ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
		if(last_said==1){
		ctx1.fillText("恭喜过关QvQ", w * 0.5, h * 0.5);	
		}
		else{
			 ctx1.fillText("游戏结束QvQ", w * 0.5, h * 0.5);
		}
       
        ctx1.restore();
    }
	if(pause){
		
        this.alpha += deltaTime * 0.0004;
        if(this.alpha > 1){
            this.alpha = 1;
        }
        ctx1.font = "40px 微软雅黑";
        ctx1.fillStyle = "rgba(255, 255, 255," + this.alpha + ")";
        ctx1.fillText("游戏暂停QvQ", w * 0.5, h * 0.5);
     
	}
}
window.score=0;

dataObj.prototype.addScore = function(){ 
    this.score += this.fruitNum *100* this.double;
    this.fruitNum = 0; 
    this.double = 1;
	score=this.score;
	$('.xcb_score').text("分数"+score);
    //console.log(this.double);
}
$('.xcb_score').text("分数:0");