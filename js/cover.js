function cover(){
    can3 = document.getElementById("canvas3");    //上層
	can3.width=window.innerWidth;
	can3.height=window.innerHeight;
    ctx3 = can3.getContext("2d");
    
    
    ctx3.save();
    ctx3.globalAlpha = 0.7;
    ctx3.shadowBlur = 15;
    ctx3.shadowColor = "white";
	
    //console.log(playIcon.height);
    ctx3.restore();
    
    can1 = document.getElementById("canvas1");    //上層
    ctx1 = can1.getContext("2d"); 


   
}

$('.xcb_loop').hide();
$('.game1_play').hide();
$('.game1_pause').click(function(){
	cc.removeEventListener('click', momAttcak, false);
	if(data.gameOver){
		
	}
	else{
		
		pause=true;
	$('.game1_pause').hide();
	$('.game1_play').show();
	}
	
});
$('.game1_play').click(function(){
	
	gameplay();
   
	
});
function gameplay(){
	 setTimeout(function(){
		cc.addEventListener('click', momAttcak, false);
	},100);
	
	if(data.gameOver){

	}
	else{
	pause=false;
	$('.game1_pause').show();
	$('.game1_play').hide();
	}
}
$('.xcb_loop').click(function(){

	game_loop();	
});
function game_loop(){
	deadtime=deadtime_f;
	clearTimeout(timer);
	    changetime();
		$('.xcb_loop').hide(100);
		zd_num=-1;
	$('.xcb_zidan').children().css({background:"rgba(255,255,255,0.5)"});
    $('.game1_pause').show();
	$('.game1_play').hide();
	
	data.gameOver=false;
	data.score=0;
		score=0;
	pause=false;

	  luren_point_x=0;
	luren_point_y=0;
	init();
  beat=true;
	setTimeout(function(){
		beat=false;
	},2000);
}
$('.game_back').click(function(){
	cc.removeEventListener('click', momAttcak, false);
	if(data.gameOver){
		$('.all_bg').css({zIndex:0});
		 $('.panels').css({opacity:'1'});
		$('.all_bg').css({zIndex:0});
		$('.all_bg').css({filter: 'blur(10px)'});
		$('.xcb_game_1_bottom').css({left:'-100%'});
		 $('.panels').css({opacity:'1'});
		pause=true;
	$('.game1_pause').hide();
	$('.game1_play').show();
	}
	else{
		$('.all_bg').css({zIndex:0});
		$('.all_bg').css({filter: 'blur(10px)'});
		$('.xcb_game_1_bottom').css({left:'-100%'});
		 $('.panels').css({opacity:'1'});
		pause=true;
	$('.game1_pause').hide();
	$('.game1_play').show();
	}
	
});
setInterval(function(){
	if(play){
		if(data.gameOver){
		
		jinchen=0;
			$('.game1_pause').hide();
	$('.game1_play').hide();
		$('.xcb_loop').show();
	}
	}
},100);

