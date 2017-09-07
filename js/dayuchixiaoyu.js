/*$(document).ready(function(){
var score=0;
var mycanvas=document.getElementById('canvas_1');
var ctx=mycanvas.getContext('2d');
	
	
var bgready=false;                      //背景图片
var bground=new Image();
	bground.onload = function(){
		bgready=true;
	}
	bground.src="image/background.jpg";
var fishready=false;                    //创建小鱼
var fishImage = new Image();
	fishImage.load = function(){
		fishready=true;
	}
fishImage.src="image/2.png"
var bigfishready=false;                    //创建大鱼
var bigfishImage = new Image();
	fishImage.load = function(){
		bigfishready=true;
	}
bigfishImage.src="image/fish_body.png"
var fish={
	speed:128 
};
	var bigfish={
		
	};
function draw_shanhu(){
	
}	

var keysDown ={};                       //键盘监听事件
	addEventListener("keydown",function(e){
		keysDown[e.keyCode] = true;
	},false);
	
    addEventListener("keyup",function(e){
		delete keysDown[e.keyCode];
	},false);
var rest=function(){                    //重启游戏后小鱼的位置
	fish.x=mycanvas.width/2;
	fish.y=mycanvas.height/2;
	bigfish.x=Math.random()*mycanvas.width/2;
	bigfish.y=Math.random()*mycanvas.height/2;
	
}
var up=function(modifier)              //更新小鱼的位置
{
	if(38 in keysDown){
		fish.y -= fish.speed*modifier;
	}
	if(40 in keysDown){
		fish.y += fish.speed*modifier;
	}
	if(37 in keysDown){
		fish.x -= fish.speed*modifier;
	}
	if(39 in keysDown){
		fish.x += fish.speed*modifier;
	}
	if (
		fish.x <= (bigfish.x + 32)       //碰撞事件
		&& bigfish.x <= (fish.x + 32)
		&& fish.y <= (bigfish.y + 32)
		&& bigfish.y <= (fish.y + 32)
	) {
		
		rest();
		score++;
	}
	
	
	
}
                                     


	
var render = function(){
	
	if(bgready){
		ctx.drawImage(bground,0,0);
	}
	
		
		ctx.drawImage(bigfishImage,bigfish.x,bigfish.y,10,5);
	ctx.drawImage(fishImage,fish.x,fish.y);
	
}
var main=function(){
	var now=Date.now();
	
	var delta=now-then;

	up(delta/1000);
	render();
	then = now;
	requestAnimationFrame(main);
}



var then = Date.now();
rest();
main();
	
	
});*/