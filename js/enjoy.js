$(document).ready(function(){

	var ship_t;
	var xcb_roll=0;    //大于0是表示向页面向上，小于0表示页面向下，等于0表示没动
	var xcb_lock=1;    //页面锁止 ，1表示未锁，0反之
	var pos=0;         //页数
	var scrollFunc = function(e) {       //滚轮监听事件
    e = e || window.event;
    if (e.wheelDelta) {
        xcb_roll = e.wheelDelta;
		xcb_begin_roll();
		xcb_lock=0;
    } else if (e.detail) {
        xcb_roll = e.detail;
        alert(xcb_roll);
    }
};
$('.xcb_mask').css({animationPlayState:'paused'});   //默认暂停夜晚到来效果
	$('.xcb_qianshui').css({left:"-100%"});          //默认鲸鱼位置
	$('.xcb_next').hide();$('.xcb_font_1').css({color:'rgba(0,0,0,1)'});
				$('.xcb_font_1_box').css({color:'rgba(0,0,0,1)'});
window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome 
	
	function xcb_begin_roll(){                      //页面滚动事件
		
		
	
		if(xcb_lock==1){
			xcb_lock=0;
				
			if(xcb_roll<0){
			
				
			   xc_time_flag=0;
				pos++;
				if(pos<0){
				pos=0;
			}
			if(pos>3){                                               //第三页时的效果
				$('.xcb_mask').css({animationPlayState:'running'});
				setTimeout(function(){
					$('.xcb_mask').css({animationPlayState:'paused'});
				},500);
				pos=3;
			}
				else{
					
				}
				

				
				xc_count=pos;                                      
			var c=pos*-100+"vh";
			
			$('.xcb_box_big').css({top:c});
	
			setTimeout(xcb_stop,2000);
			
		}
			if(xcb_roll>0){
				xc_time_flag=0;
				pos--;
				if(pos<0){
				pos=0;
			}
			if(pos>3){
				pos=3;
			}

				xc_count=pos;
				var c=pos*-100+"vh";
					
			$('.xcb_box_big').css({top:c});
	
			setTimeout(xcb_stop,2000);
			}
			if(pos==1){            //页面第二页时的判定
			xc_night_1=0;      //表示夜晚开放
			shuibo_flag=0;
					time_night=setInterval(function(){
		if(xc_night_1==0){                              //判定晚上的开始和结束
			if(xc_night==1){
			$('.xc_people').fadeOut(1000);
		$('.czh_huodui').fadeIn(1000);
		$('.xcb_zhezhao').css({opacity:'1'});
				$('.xcb_font_1').css({color:'rgba(255,255,255,1)'});
				$('.xcb_font_1_box').css({color:'rgba(255,255,255,1)'});
		}
		else{
			$('.xc_people').fadeIn(1000);
		$('.czh_huodui').fadeOut(1000);
		$('.xcb_zhezhao').css({opacity:'0'});
								$('.xcb_font_1').css({color:'rgba(0,0,0,1)'});
				$('.xcb_font_1_box').css({color:'rgba(0,0,0,1)'});
		}
		}
		
		xc_night=xc_night*-1;
	},8000)
		   

		}
		else{                  //防止在其他页面出现夜晚
			xc_night_1=1;
			setTimeout(xc_f1,2000);
			
			$('.xc_people').fadeIn(1000);
		$('.czh_huodui').fadeOut(1000);
		$('.xcb_zhezhao').css({opacity:'0'});
			$('.xcb_font_1').css({color:'rgba(0,0,0,1)'});
				$('.xcb_font_1_box').css({color:'rgba(0,0,0,1)'});
			 clearInterval(time_night);
		
		}
			if(pos==0){
				ship_flag=1;
				ship_t=setInterval(function(){
				
				},5000);
			}
			else{
				ship_flag=0;
			}
		function xc_f1(){
			  
				shuibo_flag=1;
	
			
		}
		if(pos==3){
			$('.xcb_qianshui').css({left:"0px",opacity:"1"});
			
			$('.qianshuiyuan').css({left:"40%",opacity:"1"});
			setTimeout(function(){
				$('.xcb_qianshui').css({animationPlayState:"running"})
				$('.qianshuiyuan').addClass("qianshuiyuan-a");
				$('.xcb_qianshui').addClass("xcb_qianshui-a");
			},2500)
			setTimeout(function(){
						$('.xcb_next').css({opacity:"1"}).show();
			},1500)
	        var xc_c;
			var xc_d;
				$(document).mousemove(function(e){
				 
					xc_c=(e.pageY/40-10);
					xc_d=(e.pageX/80);
				
					});
			setInterval(function(){
					if(xc_d>15){
						xc_d=15;
					}
					if(xc_c>20){
						xc_c=10;
					}
					if(xc_c<-10){
						xc_c=-10;
					}
				$('.qianshui_tou').css({left:xc_d+"px"});	
				  $('.xcb_big_shou').css({transform:"rotate("+xc_c+"deg)"});
			},500);
					 
					
				
			
		}
			else{
				$('.xcb_next').css({opacity:"0"}).hide();
				$('.xcb_qianshui').css({animationPlayState:"paused",left:'-100%'});
				setTimeout(function(){
					$('.qianshuiyuan').removeClass("qianshuiyuan-a");
				
				$('.xcb_qianshui').removeClass("xcb_qianshui-a");
				},2000);
				
				$('.xcb_qianshui').css({left:'-100%'});
				$('.qianshuiyuan').css({left:'100%'});
			}
		if(pos==2){
			hailang_flag=1;
			$('.xcb_food').css({animationPlayState:"running"});
			$('.cloud').css({animationPlayState:"running"})
		}
			else{
				setTimeout(function(){
					$('.xcb_food').css({animationPlayState:"paused"});
					hailang_flag=0;
					$('.cloud').css({animationPlayState:"paused"});
				},2000)
			}
		}
	}
	
	function xcb_stop(){                   //锁止函数
		xcb_roll=0;
		xcb_lock=1;
	}
	    var xc_time_flag=0; //判定页面对应的文字
		var xc_count=0;    //对应文字的数组
	var xcb_str_0="  在码头，我们能够第一时间买到最新鲜的海鲜，能够吹到最纯正的海风，还能体会到大海的广阔QAQ" ;
	var xcb_str_1="  在沙滩，我们能可以在金黄色的沙滩上来体验日光浴，还可以吹着海风体验冲浪";
	var xcb_str_2="  体验石浦的民俗，大家能够体验到*********************************"
	var xcb_str_3="  在海岛******************************************************"
	var xc_font_count=0;
	function xcb_font_1(g){                                                  
		$('.xcb_font_2').append("<div class='xcb_font_1_box'>"+g[xc_font_count]+"</div>");  //添加文字
		
	
	}
       
	var xc_font_count=0;
	   function xc_circle(g){

	setTimeout(function(){
		
		
			  
			   if(xc_time_flag==1){
				if(xc_font_count<g.length)
				   {  
					 	xcb_font_1(g);      //防止越界
			   xc_font_count++;
					
				   }
				   xc_circle(g);
			   }
			   else{                            //文字添加
				   $('.xcb_font_2').html("");
				   xc_font_count=0;
				  
				   if(xc_count==0)
					  {
						 xc_circle(xcb_str_0);  
					  }
			      if(xc_count==1)
					  {
						 xc_circle(xcb_str_1);  
					  }
				   else if(xc_count==2)
					   {
						    xc_circle(xcb_str_2); 
					   }
				   else if(xc_count==3){
					   xc_circle(xcb_str_3); 
				   }
				  
				   xc_time_flag=1;
				 
			   }
			
		
			
		},100);
		 
	   } 

	xc_circle(xcb_str_0);//文字初始值
	
	
	
	
	
    var canvas,ctx;                                 //canvas画图
	var vertexes = [];
	var diffPt = [];var autoDiff = 1000;
	var verNum = 250;
	var canvasW = window.innerWidth;
	var xcb_shadow=0;
	var addListener = function( e, str, func ) {            //监听函数
		if( e.addEventListener ) {
			e.addEventListener( str, func, false );
		}else if( e.attachEvent ) {
			e.attachEvent( "on" + str, func );
		}else {
			
		}
	};
	
	addListener( window, "load", init );
	
	function resize(){                     //重构canvas的大小
		    if(shuibo_flag==0)
				{
					canvasW = document.getElementsByClassName('container').item(0).offsetWidth + 40;
				}
		else{
			canvasW = document.getElementsByClassName('container_1').item(0).offsetWidth + 40;
		}
			
		    
			initCanvas(canvasW,window.innerHeight);
			var cW = canvas.width;
			var cH = canvas.height;
			for(var i = 0;i < verNum;i++)
				vertexes[i] = new Vertex(cW / (verNum -1) * i , cH / 2,cH/2);
			initDiffPt();
		var win_3 = window.innerWidth/3;

	}
	function init(){                          //canvas初始值
		resize();
		var FPS =30;
		var interval = 1000 / FPS >> 0;
		var timer = setInterval( update, interval );
		addListener(window,"resize",resize);
		
	
	}
	

	
	function initDiffPt(){
		for(var i=0;i<verNum;i++)
		   diffPt[i]= 0;
	}
	var xx = 250;
	var dd = 15;
	
	function update(){                                     //更新曲线

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
	var color1="#fff";
	var color2 = "#367aec";
	var xc_pause=0;
	var shuibo_flag=0;
	function draw(){                            //开始绘图
      if(shuibo_flag==0){
		  //判定是否绘图
			ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color1;
		ctx.lineTo(vertexes[0].x,vertexes[0].y);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x,vertexes[i].y-300+xcb_shadow);
		}
		ctx.lineTo(Canvas.width,9000);
		ctx.lineTo(0,9000);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color2;
		ctx.lineTo(vertexes[0].x+15,vertexes[0].y+5);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x+15,vertexes[i].y-290+xcb_shadow);
		}
		ctx.lineTo(Canvas.width,window.innerHeight);
		ctx.lineTo(0,window.innerHeight);
		ctx.fill();
		}
		else{
			
			/*
			 ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color1;
		ctx.lineTo(vertexes[0].x,vertexes[0].y);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x,vertexes[i].y-300);
		}
		ctx.lineTo(Canvas.width,9000);
		ctx.lineTo(0,9000);
		ctx.fill();

		ctx.beginPath();
		ctx.moveTo(0,window.innerHeight);
		ctx.fillStyle=color2;
		ctx.lineTo(vertexes[0].x+15,vertexes[0].y+5);
		for(var i = 1;i < vertexes.length;i++){
			ctx.lineTo(vertexes[i].x+15,vertexes[i].y-250);
		}
		ctx.lineTo(Canvas.width,window.innerHeight);
		ctx.lineTo(0,window.innerHeight);
		ctx.fill();
			*/
			
			
			
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
		this.vy = 0.2;
		this.targetY = 0.2;
		this.friction = 0.05;
		this.deceleration = 0.99;
	}
		
	Vertex.prototype.updateY = function(diffVal){
		this.targetY = diffVal + this.baseY;
		this.vy += this.targetY - this.y
		this.y += this.vy * this.friction;
		this.vy *= this.deceleration;
	}
	var blue = function(){
		color1 = "#6ca0f6";
		color2 = "#fff";
	}

	var flow=function(x){                //水波爆炸效果
			autoDiff = 500;
					if(x<canvas.width-2){
						xx = 1 + Math.floor((verNum - 2) * x / canvas.width);
						
						diffPt[xx] = autoDiff;
	}
	
	};
	setInterval(function(){                //海浪拍打海岸的效果
		var c=300;
		flow(c);
         
		
		
	},8000);
   var vertexes_save_x=[];
	var vertexes_save_y=[];

	var xcb_shadow_flag=1;
	
	setInterval(function(){
		if(xcb_shadow==120){
			xcb_shadow_flag=-1;
		
				
			
		}
		if(xcb_shadow==0){ 
			xcb_shadow_flag=1;
		}
	   
		xcb_shadow=xcb_shadow+xcb_shadow_flag;
	    
	},40)

	var k=-1;
	var h=-1;
	var c=0;
	var i=0;
	var t=0;
	var t1,t2,t3;
	var xcb_pause=1;
	var fish_x;
	var fish_y;

	
		
	h=h*-1;	
	var fish_flag=0;   //表示是否进行文字展示
	var fish_flag_2=0;//判定是否进行鼠标移动，0表示否
      var xc_class_1;
		  var xc_class;
	var xc_t=0;
   $('.xcb_box_right').hide();    //页面初始值
   $('.xcb_box_top_2').hide();
	
	
	$('.xcb_food').mousedown(function(){        //按下food时
	  $(document).mousemove(function(e){        //在文档内鼠标开始移动
		  if(fish_flag_2==1){
			    fish_x=e.pageX;                 //food移动效果
		  fish_y=e.pageY;
		 $('.'+xc_class_1).css({left:fish_x-40+"px",top:fish_y-40+"px"});
			  
		  }
		   });
	          $('.xcb_font_big_2').css({opacity:"0"});
		   fish_flag_2=1;                    //按下时开始移动
		   $('.xcb_box_right').show(500);    //右侧盒子展示
		$('.xcb_big_title').text("请放入篮内进行检测");//文字展示
		$('.xcb_small_title').text("QAQ");
		   $('.xcb_box_top_2').show(500);
	  xcb_pause=0;               
	  clearInterval(t2);                              //
	 clearInterval(t1);                               //
	  clearTimeout(t3);                               //
		    xc_class_1='food'+($(this).index()+1);    //表示当前class
		 xc_class='food'+($(this).index()+1)+"-a";   //表示动画class
	$(this).siblings().css({opacity:"0"}).hide(500);//隐藏其他food
		    $(this).removeClass(xc_class);          //移除动画
		  xc_tt=$(this).index();                    //表示当前food的索引，后面判定会用到

	

       
		});
	var xcb_fish_flag_3=0;
	$('.xcb_box_top_2').mouseup(function(){        //表示在捕获时的事件
		    xcb_fish_flag=0;
			fish_flag_2=0;
				  fish_flag=1;
			xcb_pause=1;
		 $('.food_top').css({animationPlayState:'running',opacity:"1",top:'120%',left: '10%'}).show();  //所有food回到初始值状态
		   $('.'+xc_class_1).addClass(xc_class);   //把之前的去掉的class添加回去
			if(fish_flag==1){                                         
		if(xc_tt==0){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("鲈鱼");
		$('.xcb_small_title').text("出没地：石浦渔港");
	}
	  if(xc_tt==1){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("豆腐鱼");
		$('.xcb_small_title').text("出没地：石浦渔港");
	}
	  if(xc_tt==2){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("鳓鱼");
		$('.xcb_small_title').text("出没地：石浦渔港，可制成鱼干等");                  //文字展示
	}
	  if(xc_tt==3){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("橡皮鱼");
		$('.xcb_small_title').text("出没地：石浦渔港，可制成鱼肝油");
	}
	  if(xc_tt==4){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("玉鳎鱼");
		$('.xcb_small_title').text("出没地：石浦渔港，适合清蒸");
	}
	  if(xc_tt==5){
		$('.xcb_box_right').show(500);
		$('.xcb_big_title').text("鳓鱼");
		$('.xcb_small_title').text("出没地：石浦渔港,可制作成马鲛鱼氽丸汤");
	}
	}
	
		});

	$('.xcb_food').mouseup(function(){         //表示在food上鼠标放开的效果
		 
			fish_flag_2=0;
				  fish_flag=1;
			xcb_pause=1;
		$('.xcb_box_right').hide(500);
		$('.xcb_box_top_2').hide(500);
		 $('.food_top').css({animationPlayState:'running',opacity:"1",top:'120%',
	left: '10%'}).show();
		   $('.'+xc_class_1).addClass(xc_class);
		$('.xcb_font_big_2').css({opacity:"1"});
	});
	
	$('.xcb_zhezhao').css({opacity:'0'});               //隐藏夜晚
$('.czh_huodui').fadeOut();                             //隐藏篝火
	
	var xc_night=1;                                    
	var xc_night_1=1;
	var time_night;


function huodui(){                                    //篝火转动效果
	for(var i = 0;i<11;i++){
		$('.czh_zhuan').eq(0).after("<div class='czh_zhuan'> <img src='image/zhuan.png' > </div>");
	}
	for(var q = 0;q<12;q++){ 
		$('.czh_zhuan').eq(q).css("transform","rotate("+q*30+"deg)");
	}
	for(var i = 0;i<24;i++){
		$('.czh_muchai').eq(0).after(" <div class='czh_muchai'> </div>");
	}
	for(var i = 0;i<24;i++){
		$('.czh_muchai').eq(i).css("transform","rotate("+i*15+"deg)");
	}
	for(var i = 0;i<9;i++){
		$('.czh_huodui_pp').eq(0).after("<div class='czh_huodui_pp'><div class='czh_pp'></div></div>");
	}
	for(var i = 0;i<9;i++){
		$('.czh_huodui_pp').eq(i).css("transform","rotate("+i*40+"deg)");
	}
	
}
	huodui();	
	
	
	
	var i=0;
	var j=0;
	var t=0;
    window.ship_flag=1;
	
	window.xc_time_flag=1;
	var k=1;
	var q=0;
	var time=60;
	
	set1();
	function set1(){                       //小船水波纹效果         
		setTimeout(function(){
			shuibowen('.xiaochuan_2',0,10);
			set1();
			  
		},time)
		
		
		
	}
	set2();
	function set2(){                       //小船水波纹效果         
		setTimeout(function(){
			shuibowen('.xcb_xiaochuan',15,10);
			set2();
			  
		},time+40)
		
		
		
	}
     set3();
	function set3(){                       //小船水波纹效果         
		setTimeout(function(){
			shuibowen('.xcb_xiaochuan_3',0,10);
			set3();
			  
		},time+40)
		
		
		
	}
	function shuibowen(g,a,b){
	   
		if(ship_flag==1)
			{    
				
				  var x=$(g).css('left');       //获取小船属性值
		var y=$(g).css('top');
				setTimeout(kill_circle,2000);
				function kill_circle(){
					for(var k=0;k<(i-36);k++)
					{
					
					   //如果opacity==0.1的话直接移除

				$('.'+k).remove();
						
	 
					}
				}
			
				
		$('.xcb_box_0').append("<li class='"+i+" xcb_shuibowen'></li>");//添加波纹div
				
		$('.'+i).css({position:'absolute',left:parseInt(x)+a,top:parseInt(y)+b});//设置波纹位置
		
	 
		i++;
             
				
			}
		
	
	
	};
	var xcb_change=1;
	$('.xcb_next').click(function(){
		xcb_change=xcb_change*-1;
		if(xcb_change==-1){
			$('.xcb_body_big_x').css({left:'0px'});
		$('.xcb_mask').fadeOut("1000");
		$('.xcb_next').css({transform:'rotate(90deg)',marginLeft:'-48%'});
			xcb_lock=0;
			setTimeout(function(){
				$('.xcb_box_big').css({display:'none'});
			},2000)
			
		}
		else{
			xcb_lock=1;
			$('.xcb_body_big_x').css({left:'100%'});
		$('.xcb_mask').fadeIn("1000");
		$('.xcb_next').css({transform:'rotate(-90deg)',marginLeft:'150px'});
			$('.xcb_box_big').css({display:'block'});
		}
		
	});
	
});