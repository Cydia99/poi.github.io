 $(function () {
 	window.deadtime_f;
 	play = true;
 	var Panels = (function () {
 		var panelLeft_button = document.getElementsByClassName("arrow--left").item(0);
 		var panelRight_button = document.getElementsByClassName("arrow--right").item(0);
 		var panelLeft = document.querySelector('.panels__side--left');
 		var panelRight = document.querySelector('.panels__side--right');
 		var search_flag = 0;
 		var openLeft = function () {

 			panelLeft.classList.toggle('panels__side--left-active');
 			panelRight.classList.toggle('panels__side--right-hidden');
 			/* $('.game_1_play').css({top:'30%'}); 
				 $('.game_1_neirong').css({left:'-200%'});
				 $('.panels__headline').css({top:'45%'});
				 $('.xcb_game_next').css({top:'75%'});
			
		      search_flag=0;*/
 			if (search_flag == 1) {



 				$('.panels_left').css({
 					top: "50%",
 					fontSize: "60px",
 					left: "0%",
 					height: '12%'
 				});
 				$('.xcb_game_1_2').css({
 					bottom: '-100px'
 				});
 				$('.game_1_content').css({
 					width: '100%'
 				});
 				search_flag = 0;
 				$('.xcb_game_next').css({
 					top: '84%',
 					left: '40%'
 				});



 			} else {
 				$('.xcb_game_next').css({
 					top: '14%',
 					left: '30%'
 				});
 				$('.panels_left').css({
 					top: "7%",
 					width: "100%",
 					height: "12%",
 					position: "absolute",
 					left: "-50%",
 					fontSize: "60px",
 				});
 				$('.game_1_content').css({
 					width: '200%'
 				});
 				$('.xcb_game_1_2').css({
 					bottom: '20px'
 				});
 				search_flag = 1;
 				$('.game_1_neirong').css({
 					left: '-200%'
 				});
 			}

 		};

 		var openRight = function () {
 			panelRight.classList.toggle('panels__side--right-active');
 			panelLeft.classList.toggle('panels__side--left-hidden');
 		};

 		var bindActions = function () {
 			panelLeft_button.addEventListener('click', openLeft, false);
 			panelRight_button.addEventListener('click', openRight, false);
 		};
 		$('.game_1_play').click(function () {

 			$('.panels').css({
 				opacity: '0'
 			});
 			$('.xcb_game_1_bottom').css({
 				left: '0px'
 			});
 			$('.all_bg').css({
 				filter: 'blur(0px)'
 			});
 			$('.xcb_guanqia').text("关卡1-" + guanqia);

 			setTimeout(function () {
 				game1Click();
 			}, 1000);
 			setTimeout(function () {
 				gameplay();
 			}, 200);
 			if (guanqia == 1) {
 				deadtime_f = 20;

 				game_loop();


 			}
 			if (guanqia == 2) {
 				deadtime_f = 40;

 				game_loop();

 				alert();

 			}
 			if (guanqia == 3) {
 				deadtime_f = 60;
 				game_loop();

 			}
 			if (guanqia == 4) {
 				deadtime_f = 120;
 				game_loop();

 			}




 		});

 		function game1Click() {
 			$('.all_bg').css({
 				zIndex: '1001'
 			});


 		}
 		var init = function () {
 			bindActions();
 		};

 		/* $('.game_1_search').click(function(){
 			 if(search_flag==0)
 				 {
 					$('.game_1_play').css({top:'70%'}); 
 					$('.game_1_neirong').css({left:'0px'});
 					 search_flag=1;
 					 $('.panels__headline').css({top:'10%'});
 					 $('.xcb_game_next').css({top:'85%'});
 					 
 				 }
 			 else if(search_flag==1){
 				 $('.game_1_play').css({top:'30%'}); 
 				 $('.game_1_neirong').css({left:'-200%'});
 				 $('.panels__headline').css({top:'45%'});
 				 $('.xcb_game_next').css({top:'75%'});
 				 search_flag=0;}
 		  
 		 });*/

 		return {
 			init: init
 		};

 	}());

 	Panels.init();
 	$('.lunbo_1').click(function () {
 		var k = $(this).index();

 		$(this).css({
 			left: "0px",
 			zIndex: 10
 		}).siblings().css({
 			left: "-=" + 20 + "px",
 			zIndex: "+=" + 1
 		});
 	});
 	var game_loop_flag = 0;
 	var guanqia = 1;
 	var currentguanqia = 1;
 	$('.jiantouL').click(function () {
 		game_loop_flag = 1;
 		guanqia--;
 		if (guanqia < 1) {
 			guanqia = 1;
 		}
 		$('.xcb_game_1_2_text_1').text("1-" + guanqia);


 	});
 	$('.jiantouR').click(function () {
 		game_loop_flag = 1;
 		guanqia++;
 		if (guanqia > 4) {
 			guanqia = 4;
 		}
 		$('.xcb_game_1_2_text_1').text("1-" + guanqia);

 	});
	var x1=0;
	var x2=30;
	var pi=Math.PI;
	var time=5;
    var canvas_1=document.getElementsByClassName("canvas_next").item(0);
	 canvas_1.width=window.innerWidth+200;
	 canvas_1.height=window.innerHeight*1.5;
	 var ctx4=canvas_1.getContext("2d");
	 function draw(){
		 if(click_game2==1){
			 ctx4.beginPath();
	ctx4.fillStyle="#1f1f1f";
		ctx4.moveTo(0,100);
		
		for(var i=0;i<2000;i+=0.5)
			{
				ctx4.lineTo(i,200-Math.cos(i*(pi/200)-time-pi/2+500)*(x2+(1000-(i))/10));
			}
		ctx4.lineTo(canvas_1.width,canvas_1.height);
		ctx4.lineTo(0,canvas_1.height);
		ctx4.fill();
		time=time+0.1;
		
		x1-=0.5;
		x2-=1;
		if(x2<0)
			{
				x1=0;
				x2=0;
			}
		
		 }
		 else{
			
		 }
		 setTimeout(x_clear,30);
		
	}
	draw();
	function x_clear(){
		ctx4.clearRect(0,0,canvas_1.width,canvas_1.height);
		draw();
	}
	 var click_game2=0;
	$('.game2_play').click(function(){
		 canvas_1.width=window.innerWidth+200;
	 canvas_1.height=window.innerHeight*1.5;
		click_game2=1;
		$(".canvas_next").css({top:'0%'});
		setTimeout(function(){
			$('.wrapper').css({zIndex:"3000",opacity:"1"});
		},3000)
	})

 });