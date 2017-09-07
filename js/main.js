var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;

var canWidth;
var canHeight;
var luren_point_x=-50;
var luren_point_y=-50;



var bgready=false;                      //背景图片
var bg_image = new Image();
	bg_image.onload = function(){
		bgready=true;
		console.log(bg_image.src);
	}
	bg_image.src = "./src/background.jpg";




var pause_image = new Image();
pause_image.src = "src/pause.png";

var cover_image = new Image();
cover_image.src = "src/cover.png";

var playIcon = new Image();
playIcon.src = "src/play.png";

var orange = new Image();
var blue = new Image();
var green = new Image();
var red = new Image();
var purple = new Image();
var pink = new Image();
orange.src = 'src/fruit.png';
blue.src = 'src/blue.png';
green.src = 'src/green.png';
red.src= 'src/red.png';
purple.src = 'src/purple.png';
pink.src = 'src/pink.png';
var ane;
var fruit;
var mom;
var baby;
var mx=0;
var my=0;

var babyTail = [];
var babyEye = [];
var babyBody = [];
var bigTail = [];
var bigEye = [];
var bigBodyOra = [];
var bigBodyBlue = [];




var bigEat = [];
var bigEatBlue = [];

var dustPic = [];

var data;
var wave;
var halo;

var dust;
var luren;

var play = false;
var pause = false;
window.onresize = function(){
 canvas_1.width=window.innerWidth+200;
	 canvas_1.height=window.innerHeight*1.5;
		can3.width=window.innerWidth;
	can3.height=window.innerHeight;
		can1.width=window.innerWidth;
	can1.height=window.innerHeight;
	    can2.width=window.innerWidth;
	can2.height=window.innerHeight;
	  canWidth = can1.width;
    canHeight = can1.height;
	ane.init();  
}
function game() {
    var intId = setInterval(function(){
        if(play){
            window.clearInterval(intId);
            init();
            lastTime = Date.now();
            deltaTime = 0; 
            can1.removeEventListener('click', startPlay, false);
           
            if(pause){
           
            }else{
                gameloop();
            }
            
        }else{
          
            cover();
        }
    }, 100);    
    console.log("game");
}


function init() {
    console.log("1");
    //獲取畫布
       can1 = document.getElementById("canvas1");    //layer1, fish, halo, wave, dust
	can1.width=window.innerWidth;
	can1.height=window.innerHeight;
    ctx1 = can1.getContext("2d");            //can1.context();
    can2 = document.getElementById("canvas2");    
    ctx2 = can2.getContext("2d");    
    can2.width=window.innerWidth;
	can2.height=window.innerHeight;
    can1.addEventListener('mousemove', onMouseMove, false);   
    
  
    //can2.addEventListener('mousemove', onMouseMove, false);
    
    ctx1.fillStyle = "white";
    ctx1.font = "30px Verdana";
    
    //bg_image.src = "src/background.jpg";
    canWidth = can1.width;
    canHeight = can1.height;
    //drawBackground();
    
    ane = new aneObj();    
    ane.init();    
    
    fruit = new fruitObj();
    fruit.init();
    //fruit.draw();
    
    mom = new momObj();
    mom.init();
    
    baby = new babyObj();
    baby.init();
    luren = new lurenObj;
	luren.init();

    mx = canWidth*0.5;
    my = canHeight*0.5;
    
    data = new dataObj();
    
    for(var i=0; i<8; i++){
        //console.log("src/babyTail" + i + ".png");
        babyTail[i] = new Image();        
        babyTail[i].src = "src/babyTail" + i + ".png";
        bigTail[i] = new Image();        
        bigTail[i].src = "src/bigTail" + i + ".png";
        bigBodyOra[i] = new Image();
        bigBodyOra[i].src = "src/bigSwim" + i + ".png";
        bigBodyBlue[i] = new Image();
        bigBodyBlue[i].src = "src/bigSwimBlue" + i + ".png";
        bigEat[i] = new Image();
        bigEat[i].src = "src/bigEat" + i + ".png";
        bigEatBlue[i] = new Image();
        bigEatBlue[i].src = "src/bigEatBlue" + i + ".png";
        
    }
    
    for(i=0; i<2; i++){
        babyEye[i] = new Image();
        babyEye[i].src = "src/babyEye" + i + ".png";
        bigEye[i] = new Image();
        bigEye[i].src = "src/bigEye" + i + ".png";
        
    }/**/
    
    for(var i=0; i<20; i++){
        babyBody[i] = new Image();
        babyBody[i].src = "src/babyFade" + i + ".png";
    }
    //console.log(babyBody[19].src);
    
    wave = new waveObj();
    wave.init();
    
    halo = new halo();
    halo.init();
    
    for(var i=0; i<7; i++){
        dustPic[i] = new Image();
        dustPic[i].src = "src/dust" + i + ".png";
    } 
    
    
    dust = new dustObj();
    dust.init();
	 console.log("2");
   
}

function gameloop() {
    window.requestAnimFrame(gameloop);
    //console.log("looplooploop");
    var now = Date.now();
	
    deltaTime = now - lastTime;
	
    if(deltaTime>40) deltaTime = 40;
    lastTime = now;
    //console.log(deltaTime);
    drawBackground();
    ane.draw();
    
    fruitMonitor();
    fruit.draw();
    
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    luren.draw();

    momFruitsCollision();
    momBabyCollision();
    //console.log(fruit.alive);
    
    data.draw();
    wave.draw();
    halo.draw();
    dust.draw();
}


//document.onload = game;    游戏加载
$(document).ready(function(){
	game();
});
//var  menu=document.getElementsByClassName("xcb_game_bottom").item(0);
//var menu_1=document.getElementsByClassName("munu").item(0);

//menu.addEventListener("click",gamePause,false);
$('.menu').click(function(){
	
		pause=false;
	
	
});
function gamePause(e){
  
       if(!data.gameOver){
		     pause = true;
	   }
      
	  
}

function onMouseMove(e){
    if(!data.gameOver){
		if(!pause){
			 if(e.offSetX || e.layerX){
            mx = e.offSetX == undefined ? e.layerX : e.offSetX;
            my = e.offSetY == undefined ? e.layerY : e.offSetY;
           
        }   
		}
        
    }
}

