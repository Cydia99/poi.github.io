$(document).ready(function(){
	
		 var canvas,ctx;
	var vertexes = [];
	var diffPt = [];
	var autoDiff = 1000;
	var verNum = 250;
	var canvasW = window.innerWidth+40;
	var string_height=-400;
	var saber=0;
	var xc_shake=0;
	var mouseX,mouseY;
	var xc_x=0;
	var xc_y=0;
	var xc_move=0;
	var xc_save_x;
	var xc_save_y;
	var xc_flag_login=0;
	 var pause=0;
	var text="";
	var text_1="";
	var addListener = function( e, str, func ) {
		if( e.addEventListener ) {
			e.addEventListener( str, func, false );
		}else if( e.attachEvent ) {
			e.attachEvent( "on" + str, func );
		}
	};
	$('.fish').addClass('addTransition');
	$('.buhuo').addClass('addTransition');
	addListener( window, "load", init );
$('.czh_button_1_fudong').children().click(function(){
	 $('.xc_v').show(500);
		$(".xc_b").css("transform","translate(0px,0px)");
			$(".xc_b").css("opacity","1");
			$("h2").css("transform","translate(0px,0px)");
			$("h2 span").css("opacity","1");
			$("h2 span i").css("animation-play-state","paused");
		    $('i').hide();
		$('.check_point').remove();
		xc_flag=$(this).index()+1;
		$('.xcbo_login_body').css({top:"0px"});
		lock_t=0;
	saber=0;
xc_shake=0;
	 mouseX,mouseY;
	 xc_x=0;
	 xc_y=0;
	 xc_move=0;
	 xc_save_x=0;
	 xc_save_y=0;
	 xc_flag_login=0;
	  pause=0;
	$("#xcb_title_1").text('你好'+text);
			$("#xc_title").text('欢迎'+text_1);
	$('.fish').css({top:'100%'});
			$('.buhuo').css({top:'-100%'});
			
		setTimeout(function(){
		$('.czh_dahai_beijing_yingyin').css({top:'0px' });
		},2000)
	});
	function resize(){
		
		
		canvasW = document.getElementById('container').offsetWidth + 40;	initCanvas(canvasW,window.innerHeight);
			var cW = canvas.width;
			var cH = canvas.height;
			for(var i = 0;i < verNum;i++)
				vertexes[i] = new Vertex(cW / (verNum -1) * i , cH / 2,cH/2);
			initDiffPt();
		var win_3 = window.innerWidth/3;
	

	}
		document.getElementsByClassName('xcbo_login_body').item(0).onmousedown=function(e)
		{
			pause=0;
		
			document.getElementsByClassName('xcbo_login_body').item(0).onmousemove=function(e){
				if (e) {
					mouseX=e.pageX;
					mouseY=e.pageY;
				}else {
				mouseX = event.x + document.body.scrollLeft;
				mouseY = event.y + document.body.scrollTop;
				}
			};
			
				
				if(1>0)
					{
					autoDiff = 1000;
					if(mouseX<canvas.width-2){
						xx = 1 + Math.floor((verNum - 2) * mouseX / canvas.width);
						
						diffPt[xx] = autoDiff;
					}
					
					}
		}
	function init(){
		resize();
		var FPS =30;
		var interval = 1000 / FPS >> 0;
		var timer = setInterval( update, interval );
		addListener(window,"resize",resize);	
	}
	var flag_3=0;
	
		
	
	document.getElementsByClassName('xc_hook').item(0).onmousedown=function()
		{   pause=1;
		
            flag_3=1;		
  			xc_move=1;
	
			document.getElementsByClassName('body').item(0).onmousemove=function(e){
				
				if(e){
					
					xc_x=e.pageX;
			        xc_y=e.pageY;
				}
				else{
					mouseX = event.x + document.body.scrollLeft;
				mouseY = event.y + document.body.scrollTop;
				}
				
			};
		};
		   
				
			$('body').mouseup(function(){                
				if(flag_3==1)
					{   
						 if(pause==1){
							 
						xc_save_x=xc_x;
				xc_save_y=xc_y;
						xc_move=2; 
						 }
				
						
					}
				else{
					
				}
		
			
			
				$('.buhuo').mouseup(function(){
					if(pause==1){
						xc_save_x=xc_x;
				xc_save_y=xc_y;
						xc_move=4;
					flag_3=0;
						
					}
				
		
				
			})
				;});
		
	var wheelHandler = function( e ) {
			var s = ( e.detail ) ? -e.detail : e.wheelDelta;
			s > 0 ? ( dd > 15 ? dd-- :  dd=dd) : ( dd < 50 ? dd++ : dd=dd );
	};
	
	function initDiffPt(){
		for(var i=0;i<verNum;i++)
		   diffPt[i]= 0;
	}
	var xx = 150;
	var dd = 15;
	
	function update(){
	
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		autoDiff -= autoDiff*0.9;
		diffPt[xx] = autoDiff;
		
			for(var i=xx-1;i>0;i--)
				{
				    var d = xx-i;
					if(d > dd)d=dd;
					diffPt[i] -= (diffPt[i]-diffPt[i+1])*(1-0.01*d);
				}

			for(var i=xx+1;i<verNum;i++)
				{
				    var d = i-xx;
					if(d > dd)d=dd;
					diffPt[i] -= (diffPt[i]-diffPt[i-1])*(1-0.01*d);
				}
		for(var i = 0;i < vertexes.length;i++){
			vertexes[i].updateY(diffPt[i]);
		}

		draw();
		
	}
	var color1="#6ca0f6";
	var color2 = "#367aec";
	function draw(){
		
		ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color1;
		ctx.lineTo(vertexes[0].x,vertexes[0].y);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x,vertexes[i].y-300);
		}
		ctx.lineTo(canvas.width,9000);
		ctx.lineTo(0,9000);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color2;
		ctx.lineTo(vertexes[0].x+15,vertexes[0].y+5);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x+15,vertexes[i].y-290);
		}
		ctx.lineTo(canvas.width,window.innerHeight);
		ctx.lineTo(0,window.innerHeight);
		ctx.fill();
		  beijin();
		if(xc_flag==1){
			
			paopao();
			if(xc_flag_login==1){
				string();
				if(xc_move!=4)
					{
						$('.fish').css({top:window.innerHeight-500+'px'});
			$('.buhuo').css({top:window.innerHeight-380+'px'});
			if($('.fish').css("top")==window.innerHeight-500+'px')
				{
					$('.fish').css({left:"60%"});
					$('.buhuo').css({left:"61%"});
				}
					}
							
			}
			login_box(1);
			
		
			
		}
		if(xc_flag==2){
		paopao();
			if(xc_flag_login==1){
				string();
				if(xc_move!=4)
					{
						$('.fish').css({top:window.innerHeight-500+'px'});
			$('.buhuo').css({top:window.innerHeight-350+'px'});
			if($('.fish').css("top")==window.innerHeight-500+'px')
				{
					$('.fish').css({left:"60%"});
					$('.buhuo').css({left:"61%"});
				}
					}
							
			}
			
			login_box(2);
			
			
			
		}
		if(xc_flag==0){
			
		}
	
	  
	  
	}
		
	function initCanvas(width,height){
		canvas = document.getElementById("canvas");
		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext("2d");
		
	}
		
	function Vertex(x,y,baseY){
		this.baseY = baseY;
		this.x = x;
		this.y = y;
		this.vy = 0;
		this.targetY = 0;
		this.friction = 0.10;
		this.deceleration = 0.96;
	}
		
	Vertex.prototype.updateY = function(diffVal){
		this.targetY = diffVal + this.baseY;
		this.vy += this.targetY - this.y
		this.y += this.vy * this.friction;
		this.vy *= this.deceleration;
	}
	var blue = function(){
		color1 = "#6ca0f6";
		color2 = "#367aec";
	};
	var shake=function(){                  //随机判定晃动的幅度
    xc_shake=Math.random()*160-80;
	
	};
    shake();
	
	var hook=new Image();                  //创建鱼钩
	hook.src="image/hook.png";
	var piao=new Image();
	piao.src="image/piao.png";
	var string=function(e){                          //绳子动画
		if(string_height>window.innerHeight-150){     //如果绳子的高度大于window的高度
			string_height=window.innerHeight-150;
		}
				ctx.beginPath();
		ctx.lineCap = 'round';                        //绳子的样式
        ctx.moveTo((170),0);                       
		string_height+=10;                            //绳子的拉伸的速度
		if(saber===parseInt(xc_shake)){               //当绳子晃动动画到达最高点时重新触发随机函数               
			 shake();
		
			
		}
        if(saber>xc_shake)                            //判定绳子的幅度是否越界
			{
				saber--;
				
			}
		else{
			saber++;
			
		}
		
		if(xc_move==2){                                    //判定绳子的小落效果                                     
			/*if(xc_save_x<(window.innerWidth-170+saber))
				{
					xc_save_x+=5;
				}
			else{
				xc_save_x=(window.innerWidth-170+saber)
			}*/
			if(xc_save_y<(string_height-30))              //判定鼠标y坐标的保存的高度是否越界
				{
					
					pause=0;
					
					xc_save_y+=5;
				}
			else{
				xc_save_y=string_height-30;
			
				
				
			}
			if(xc_save_x==(saber)&&xc_save_y==string_height-30)   //判定鼠标x的宽度是否越界
				{
					xc_move=0;
					
				
				}
		}
		if(xc_move==0){                                           //emmmmmm
			xc_x=(170+saber);
		xc_y=string_height-30;
		}
		if(xc_move==2){                                           //点击后绳子的下滑动画
			ctx.quadraticCurveTo(160+saber,100,xc_save_x,xc_save_y);
			ctx.drawImage(hook,xc_save_x-30,xc_save_y-10,57.75,72);
			$(".xc_hook").css({left:xc_save_x-60,top:xc_save_y-20});
			//ctx.drawImage(piao,xc_save_x-5,xc_save_y-13,20,30);
			
		}
		else if(xc_move==4){                                       //验证成功的动画
			ctx.quadraticCurveTo(120,0,xc_save_x,xc_save_y+60);
			ctx.drawImage(hook,xc_save_x-30,xc_save_y+60,57.75,72);
			$(".xc_hook").css({left:xc_save_x-55,top:xc_save_y-20});
			$('.fish').removeClass('addTransition');
			$('.buhuo').removeClass('addTransition');
		$(".fish").css({left:xc_save_x-55,top:xc_save_y-20});
			$('.buhuo').css({left:xc_save_x-55+'px',top:xc_save_y+'20px'});
			xc_save_x-=15;
			xc_save_y-=15;
			$("#xcb_title_1").text('注册成功，'+text);
			$("#xc_title").text('登陆成功，'+text_1);
			if(parseInt($('.fish').css("top"))<0)
		 {
			$('.xcbo_login_body').css({top:"100%"});
			 lock_t=1;
			 $('.check_point').hide();
			 $('.xc_v').hide(500);
			 
		 }
			else{
				$('.xcbo_login_body').css({top:"0px"});
			 lock_t=0;
			 $('.check_point').show();
				
			}
		}
		else{                                                                //拖动动画
					ctx.quadraticCurveTo(160+saber,100,xc_x+32,xc_y-10);
			ctx.drawImage(hook,xc_x,xc_y-19,57.75,72);
			$(".xc_hook").css({left:xc_x-28,top:xc_y-20});
			
		}
		

		
		
		ctx.lineWidth = 2;        //绳子的宽度	
ctx.strokeStyle="#3f3f3f";        //绳子的样式
		ctx.stroke();
		
		 //$('.xc_hook').css({left:(window.innerWidth-260+saber),top:string_height-30});
   
	};
	 var xc_paopao=new Image();       //创建泡泡
	var xc_paopao2=new Image();
	 var xc_boom=new Image();         //创建泡泡爆炸
	var newpaopao=function(){         //更新泡泡
		paopao_y=window.innerHeight-100;
	 paopao_width=10+(5000/paopao_y);
	  paopao_height=paopao_width;
	  paopao_x=canvas.width/2;
	};
	   xc_boom.src="image/boom.png";      //爆炸地址
	   xc_paopao.src="image/paopao1.png";  //泡泡s地址
	xc_paopao2.src="image/paopao1.png";    //
	 var paopao_y=window.innerHeight-100;
	 var paopao_width=10;
	  var paopao_height=paopao_width;
	  var paopao_x=500;
	 
	
	  var paopao_boom=function(){          //创建泡泡爆炸效果
		 ctx.drawImage(xc_boom,paopao_x,paopao_y,paopao_width,paopao_width);
	
	}; 
   var paopao=function(){             //泡泡上浮效果
	 
	 paopao_width=10+(5000/paopao_y);    //让泡泡随高度的增加而变大 
	if(paopao_y<100){                    //当泡泡到达水面时
		paopao_boom();                    //泡泡爆炸
		paopao_y=window.innerHeight-100;  //重新设定泡泡的高度，其实没必要
		flow(paopao_x);                   //水面波浪效果
		newpaopao();                       //更新泡泡
		
	} 
	   else{
	  ctx.drawImage(xc_paopao,paopao_x,paopao_y,paopao_width,paopao_width);  //没有到达指定高度时的动画
		
	  paopao_y-=5;    //泡泡上浮时间
	   }
 
	 };

	
	var flow=function(x){                //水波爆炸效果
			autoDiff = 500;
					if(x<canvas.width-2){
						xx = 1 + Math.floor((verNum - 2) * x / canvas.width);
						
						diffPt[xx] = autoDiff;
	}
	
	};
	var bg=new Image();                   //新建背景
	 bg.src="image/czh_beach.png";
	var rock = new Image();               //新建岩石
	rock.src="image/rock.png";
		var rock2 = new Image();
	rock2.src="image/rock2.png";          //新建岩石2
		var fish=new Image();
	 fish.src="image/fish.png";          //新建大鱼
	var beijin=function(){

	
	};	
	var xc_check=0;
	var xc_user=0;
	var xc_password=0;
	var xc_password_1=0;
	var xc_e_mail=0;
	var check_box=0;
	var xc_password_3=0;
	var check=function(){
		
       var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		
		if(!reg.test($('.xc_input').eq(2).val()))
        {
        $('.xc_check').eq(2).show(500);
      xc_e_mail=0
        }
       else{
	  xc_e_mail=1;
	   $('.xc_check').eq(2).hide(500);
  }
		
		
		
	if($('.xc_input').eq(3).val()=="")
		{
		$('.xc_check').eq(3).show(500);
        xc_user=0;	
		}
		else{
	  xc_user=1;
	   $('.xc_check').eq(3).hide(500);
  }
		
		
		
		
		if($('.xc_input').eq(4).val()!=$('.xc_input').eq(5).val())
			{
				$('.xc_check').eq(5).show(500);
        xc_password_1=0;	
			}
		else{
	  xc_password_1=1;
	   $('.xc_check').eq(5).hide(500);
  }
		
		
		
		
		if($('.xc_input').eq(4).val().length<6||$('.xc_input').eq(4).val().length>20)
		{
			$('.xc_check').eq(4).show(500);
        xc_password=0;	
		}
		else{
	  		xc_password=1;
	   		$('.xc_check').eq(4).hide(500);
  		}
		
        if(xc_checked==1)
		{
			$('.xc_check').eq(6).hide(500);
  			check_box=1;
		
		}	
		else{
			check_box=0;
			$('.xc_check').eq(6).show(500);
		}
		
		
		
	};
	var xc_checked=0;
	var xc_checked_1=0
	$('#xcb_checkbox_4').click(function(){
        
		if($('#xcb_checkbox_4').css("background-color")=="rgba(255, 255, 255, 0.2)"){
		xc_checked=1;
					$('#xcb_checkbox_4').css({backgroundColor:"rgba(255,255,255,0.7)"});
		}
		else{
				xc_checked=0;
			$('#xcb_checkbox_4').css({backgroundColor:"rgba(255,255,255,0.2)"});
	
		}
		
	});
	
	$('#xcb_checkbox_3').click(function(){
        
		if($('#xcb_checkbox_3').css("background-color")=="rgba(255, 255, 255, 0.2)"){
		xc_checked_1=1;
					$('#xcb_checkbox_3').css({backgroundColor:"rgba(255,255,255,0.7)"});
		}
		else{
				xc_checked_1=0;
			$('#xcb_checkbox_3').css({backgroundColor:"rgba(255,255,255,0.2)"});
	
		}
		
	});
	
	var check_1=function(){
		if($('.xc_input').eq(0).val()=="")
		{
		$('.xc_check').eq(0).show(500);
        check_box=0;	
		}
		else{
	  xc_check=1;
	   $('.xc_check').eq(0).hide(500);
  }
		if($('.xc_input').eq(1).val()=="")
			{
			$('.xc_check').eq(1).show(500);	
				xc_password_3=0;
			}
		else{
			 xc_password_3=1;
	   $('.xc_check').eq(1).hide(500);
		}
		
	}
	$('i').hide();
	$('.xc_check').hide();
	$('.xc_input').eq(1).click(function(){                    //title
		text_1=$('.xc_input').eq(0).val();
		$("#xc_title").text('你好，'+text_1);
	});
	
	
		$(".sub_2").click(function(){
		
		text=$('.xc_input').eq(3).val();
		
			check();
			if(xc_user==1&&xc_password==1&&xc_password_1==1&&xc_e_mail==1&&check_box==1)
				{
				$(".xc_b").css("transform","translate(0px,260px)");
			$(".xc_b").css("opacity","0");
			$("h2").css("transform","translate(0px,-130px)");
			$("h2 span").css("opacity","1");
			$("h2 span i").css("animation-play-state","running");
		    $('i').show();
						$("#xcb_title_1").text('正在注册，'+text);
					$('.xc_v').append("<h2 class='check_point'>请把钩子钩到鱼上以便验证</h2>");
			xc_flag_login=1;	
					
				}
			
			//window.setTimeout(function(){ location.href="https://www.baidu.com/";}, 5000);
			
		
		});
		$(".sub_1").click(function(){
		text_1=$('.xc_input').eq(0).val();
			check_1();
			if(xc_check==1&&xc_password_3==1)
				{
				$(".xc_b").css("transform","translate(0px,260px)");
			$(".xc_b").css("opacity","0");
			$("h2").css("transform","translate(0px,-130px)");
			$("h2 span").css("opacity","1");
			$("h2 span i").css("animation-play-state","running");
		    $('i').show();
					$("#xc_title").text('你好，'+text_1);
					$('.xc_v').append("<h2 class='check_point'>请把钩子钩到鱼上以便验证</h2>");
			xc_flag_login=1;	
				
				}
			
			//window.setTimeout(function(){ location.href="https://www.baidu.com/";}, 5000);
			
		
		});
	
	var login_box=function(x){
		
		$('.xc_v').eq(x-1).css({top:"5%"}).siblings().css({top:"100%"});
		
	};
	var toumingdu=0.6;
	var huxideng=function(){
		$('.buhuo').css('opacity',toumingdu);
		if(toumingdu==0.6){
			toumingdu=0.9;
		}
		else{
			toumingdu=0.6
		}
	};
	setInterval(huxideng,2000)
	
});